import SocialLink from "./SocialLink";

const FooterCompany = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 md:my-0">
      <h2 className="text-4xl text-center text-yellowColor">ShreeBai Industries</h2>
      <p className="text-white/70">Combine technology for better quality</p>
      <div className="flex flex-row items-center justify-center w-full mt-5">
        <SocialLink icon="facebook-f" />
        <SocialLink icon="instagram" />
        <SocialLink icon="whatsapp" />
      </div>
    </div>
  );
};

export default FooterCompany;
