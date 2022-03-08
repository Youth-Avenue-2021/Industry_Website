import SinglePageLink from "./SinglePageLink";

const FooterLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center w-4/5 md:w-[20%]">
      <SinglePageLink name="ShreeBai Industries" linkTo="/" />
      <SinglePageLink name="Products Gallery" linkTo="/products" />
      <SinglePageLink name="Privacy Policy" linkTo="/" />
      <SinglePageLink name="Contact Us" linkTo="/contact" />
      <SinglePageLink name="Admin Login" linkTo="/admin" />
    </div>
  );
};

export default FooterLinks;
