import { useState } from 'react';

/*
  The `defaultValue` is not shown, cause the property
  `value` was used.
*/
const Controlled = () => {
  // The `initialValue` acts as "defaultValue"😉
  const [value, setValue] = useState<string>('Max Mustermann');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    alert('Entered Value: ' + value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username (Controlled):</label>
      <input
        type="text"
        id="username"
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
      />
      <button>Submit</button>
    </form>
  );
};

export default Controlled;
