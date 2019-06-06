import useInput from "../useInput";

const UseInput = () => {
  const maxLen = value => value.length <= 10;
  const name = useInput("", maxLen);
  return (
    <div className="App">
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default UseInput;
