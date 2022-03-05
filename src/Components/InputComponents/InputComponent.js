const InputComponent = ({ class_name, type, placeholder }) => {
  return <input className={class_name} type={type} placeholder={placeholder} required />;
};

export default InputComponent;
