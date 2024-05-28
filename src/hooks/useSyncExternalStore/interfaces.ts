type ChangeValueFunction = () => void;
type RestValueFunction = () => void;
type UseSyncExternalStoreParams<Snapshot> = {
	subscribe: (listener: Listener) => () => void;
	getSnapshot: () => Snapshot;
	getServerSnapshot?: () => Snapshot;
};

export type StoreValue = string;
export type Listener = () => void;

export type Store<Snapshot> = UseSyncExternalStoreParams<Snapshot> & {
	changeValue: ChangeValueFunction;
	resetValue: RestValueFunction;
};

export type UseFunctionsToMutateStoreValue = {
	changeValue: ChangeValueFunction;
	resetValue: RestValueFunction;
};
