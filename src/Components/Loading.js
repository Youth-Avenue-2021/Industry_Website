const Loading = ({ color }) => {
  return (
    <div className="lds-ellipsis">
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
      <div className={color}></div>
    </div>
  );
};

export default Loading;
