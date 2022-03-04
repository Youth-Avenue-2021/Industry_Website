const Block = ({ title, logo, desc, color }) => {
  return (
    <div className="group z-50 flex flex-col duration-300 hover:scale-105 items-center justify-evenly w-3/4 my-4 md:my-auto md:w-1/6 p-4 mx-10 text-center min-h-[17rem] odd:bg-white bg-yellowColor shadow-lg md:block-boxShadow">
      <i className="duration-200 fa-solid group-hover:scale-150 fa-bolt-lightning"></i>
      <h2 className="text-2xl">{title}</h2>
      <span className={`w-1/4 h-1 group-hover:w-2/5 duration-300 bg-${color}`}></span>
      <p className="">{desc}</p>
    </div>
  );
};

export default Block;
