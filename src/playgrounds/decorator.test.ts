// A class decorator is a plain function that receives the class constructor as its only argument.
// It is called once when the class is DEFINED (at module load time), not when an instance is created.
function MyClassDecorator(target: Function) {
	console.log(`MyClassDecorator called on: ${target.name}`);
}

// A property decorator is a function that receives two arguments:
// 1. `_value`: Always `undefined` by design in the new decorator model, because the field has no
//    value yet at class definition time – no instance exists yet.
// 2. `context`: Metadata about the decorated field (name, static, private, etc.)
//
// To access the actual field value, the decorator must return an initializer function.
// This initializer is called for each new instance at instantiation time (new TestClass()),
// receiving the field's initial value and returning the value that will be assigned to the field.
function MyPropertyDecorator<T>(_value: undefined, context: ClassFieldDecoratorContext<unknown, T>) {
	const propertyName = String(context.name);

	// This function is called when a new instance is created (new TestClass()).
	// `this` refers to the new instance.
	// `initialValue` is the value assigned to the field in the class body (e.g. 'foo').
	// The return value will be used as the actual field value on the instance.
	return function (this: { constructor: { name: string } }, initialValue: T): T {
		const className = context.static ? (this as unknown as Function).name : this.constructor.name;

		console.log(
			`MyPropertyDecorator called on: ${className} on property: ${propertyName} with property value: ${String(initialValue)}`,
		);

		return initialValue;
	};
}

// A method decorator is a function that receives two arguments:
// 1. `target`: The original method function itself.
// 2. `context`: Metadata about the decorated method (name, static, private, etc.)
//
// To intercept the method call, the decorator returns a new function that wraps the original.
// The returned function is called instead of the original method when invoked on an instance.
// `this` refers to the instance the method was called on.
function MyMethodDecorator<This, Args extends unknown[], Return>(
	target: (this: This, ...args: Args) => Return,
	context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>,
) {
	const methodName = String(context.name);

	// This wrapper function replaces the original method on the class.
	// It is called every time the method is invoked on an instance.
	// After the logging, the original method is called via target.call(this, ...args)
	// to preserve the original behavior.
	return function (this: This, ...args: Args): Return {
		const className = (this as { constructor: { name: string } }).constructor.name;

		console.log(`MyMethodDecorator called on: ${className} on method: ${methodName}`);

		// Call the original method and return its result unchanged.
		return target.call(this, ...args);
	};
}

describe('Decorators', () => {
	it('calls class decorator', () => {
		// The decorator runs immediately at class definition time (the @-line),
		// not when new TestClass() is called.
		@MyClassDecorator
		class TestClass {}

		// Creating an instance does NOT trigger the class decorator again.
		new TestClass();

		expect(spiedConsoleLog).toHaveBeenCalledTimes(1);
		expect(spiedConsoleLog).toHaveBeenCalledWith('MyClassDecorator called on: TestClass');
	});

	test('calls class property decorator', () => {
		// The decorator function (MyPropertyDecorator) itself is called at class definition time.
		// The returned initializer function is called at instantiation time (new TestClass()).
		class TestClass {
			@MyPropertyDecorator
			private myProperty1 = 'foo';

			readeProperty() {
				return this.myProperty1;
			}
		}

		// The initializer returned by MyPropertyDecorator runs here,
		// which triggers the console.log with the actual field value 'foo'.
		new TestClass();

		expect(spiedConsoleLog).toHaveBeenCalledTimes(1);
		expect(spiedConsoleLog).toHaveBeenCalledWith(
			'MyPropertyDecorator called on: TestClass on property: myProperty1 with property value: foo',
		);
	});

	test('calls class method decorator', () => {
		// The decorator function (MyMethodDecorator) is called at class definition time
		// and replaces readProperty with the returned wrapper function.
		class TestClass {
			private myProperty1 = 'foo';

			@MyMethodDecorator
			readProperty() {
				return this.myProperty1;
			}
		}

		const instance = new TestClass();

		// The wrapper function returned by MyMethodDecorator runs here,
		// which triggers the console.log before delegating to the original readProperty().
		const result = instance.readProperty();

		expect(result).toBe('foo');
		expect(spiedConsoleLog).toHaveBeenCalledTimes(1);
		expect(spiedConsoleLog).toHaveBeenCalledWith('MyMethodDecorator called on: TestClass on method: readProperty');
	});

	let spiedConsoleLog: jest.SpyInstance;

	beforeEach(() => {
		spiedConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
	});

	afterEach(() => {
		spiedConsoleLog.mockRestore();
	});
});
