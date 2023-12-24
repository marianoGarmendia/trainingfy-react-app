const InputEl = ({ defaultValue, className, id, type, onClickProp }) => {
  return (
    <input
      id={id}
      className={className}
      type={type}
      defaultValue={defaultValue}
      onClick={onClickProp}
      readOnly
    />
  );
};

export default InputEl;
