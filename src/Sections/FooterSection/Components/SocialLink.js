const SocialLink = ({ icon }) => {
  return (
    <a href="https://www.facebook.com" className="flex hover:-translate-y-1 flex-row items-center justify-center w-12 h-12 mx-2 text-2xl duration-300 border-2 rounded-full text-white/80 hover:bg-yellowColor hover:text-black border-yellowColor">
      <i className={`fa-brands fa-${icon}`}></i>
    </a>
  );
};

export default SocialLink;
