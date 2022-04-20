const ImagesBox = ({ image }) => {
  return (
    
    <div className="w-[20rem] h-[20rem] mx-8 my-4">
      <img src={image} className="object-cover object-center w-full h-full duration-300" alt="ShreeBai Industries" />
    </div>
  );
};

export default ImagesBox;
