const FooterCompany = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 md:my-0">
      <h2 className="text-4xl text-center text-yellowColor">ShreeBai Industries</h2>
      <p className="text-white/70">Combine technology for better quality</p>
      <div className="flex flex-row items-center justify-center w-full mt-5">
        <a href="#" className="flex flex-row items-center justify-center w-12 h-12 mx-2 text-2xl duration-300 border-2 rounded-full text-white/80 hover:bg-yellowColor hover:text-black border-yellowColor">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" className="flex flex-row items-center justify-center w-12 h-12 mx-2 text-2xl duration-300 border-2 rounded-full text-white/80 hover:bg-yellowColor hover:text-black border-yellowColor">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="#" className="flex flex-row items-center justify-center w-12 h-12 mx-2 text-2xl duration-300 border-2 rounded-full text-white/80 hover:bg-yellowColor hover:text-black border-yellowColor">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default FooterCompany;
