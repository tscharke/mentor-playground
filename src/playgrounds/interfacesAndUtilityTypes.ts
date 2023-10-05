type Foo = "a" | "b";

// Possible with types only
type Bar = { [key in Foo]: any };

// In interfaces it can be any kind of string
interface Bar2 {
  [key: string]: any;
}

// *** Record ***
type PropResponseVerbose = {
  prop1: string;
  prop2: string;
  prop3: string;
};

const objVerbose: PropResponseVerbose = {
  prop1: "value",
  prop2: "value2",
  prop3: "value3"
  // prop4: "value4", // Error
};

// Only props with names 'prop1' | 'prop2' | 'prop3' allowed
// Same as `PropResponseVerbose` with the Generic RECORD
type PropResponse = Record<"prop1" | "prop2" | "prop3", string>;
const obj1: PropResponse = {
  prop1: "value",
  prop2: "value2",
  prop3: "value3"
  // prop4: "value4", // Error
};

// Any name for key is allowed
type PropResponse2 = Record<string, string>;
const obj: PropResponse2 = {
  prop1: "value",
  prop2: "value2",
  prop3: "value3"
  // prop3: true,  // Error: boolean ist not assignable to string
  // prop4: 4711,  // Error: number ist not assignable to string
};

type ProductID = string;
type AvailabilityTypes = "sold_out" | "in_stock" | "pre_order";
type Availability = {
  availability: AvailabilityTypes;
  amount: number;
};

const store: Record<ProductID, Availability> = {
  "0d3d8fhd": { availability: "in_stock", amount: 23 },
  "0ea43bed": { availability: "sold_out", amount: 0 },
  "6ea7fa3c": { availability: "sold_out", amount: 0 }
  // '6ea7fx31': { availability: 'foo', amount: 0 },
};
