const FooterCompanyDetails = () => {
  return (
    <div className="flex flex-col items-start justify-center w-4/5 md:w-1/5">
      <a href="https://goo.gl/maps/podBa2pVkvCztqqZ8" className="flex flex-row items-start justify-center my-3">
        <span className="mr-4">
          <i className="text-2xl text-yellowColor fa-solid fa-map-location"></i>
        </span>
        <p className="duration-200 text-white/80 hover:text-white">Atika Industrial Area, Street No. 3-A, Opp. Sorathiya Foundry, Rajkot-360 002. Gujarat (India)</p>
      </a>
      <a href="tel:+919824218665" className="flex flex-row items-start justify-center my-3">
        <span className="mr-4">
          <i className="text-2xl text-yellowColor fa-solid fa-phone"></i>
        </span>
        <p className="duration-200 text-white/80 hover:text-white">+91 9824218665</p>
      </a>
      <a href="mailto:info@shreebaiindustries.com" className="flex flex-row items-start justify-center my-3">
        <span className="mr-4">
          <i className="text-2xl text-yellowColor fa-regular fa-envelope-open"></i>
        </span>
        <p className="duration-200 text-white/80 hover:text-white">info@shreebaiindustries.com</p>
      </a>
    </div>
  );
};

export default FooterCompanyDetails;
