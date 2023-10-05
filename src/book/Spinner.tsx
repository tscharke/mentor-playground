interface Properties {
  readonly message: string;
  readonly show: boolean;
}

export default ({ message, show }: Properties) => {
  return show ? <div>{message}</div> : null;
};
