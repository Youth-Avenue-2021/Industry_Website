import SinglePageLink from "./SinglePageLink";

const FooterLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center w-4/5 md:w-[20%]">
      <SinglePageLink name="Privacy Policy" linkTo="/" />
      <SinglePageLink name="Contact Us" linkTo="/" />
      <SinglePageLink name="Products Gallery" linkTo="/" />
      <SinglePageLink name="About Company" linkTo="/" />
    </div>
  );
};

export default FooterLinks;
