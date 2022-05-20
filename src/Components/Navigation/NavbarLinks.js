import SinglePageNavbarLink from "./SinglePageNavbarLink";

const NavbarLinks = () => {
  return (
    <>
      <SinglePageNavbarLink name="Home" linkTo="/" />
      <SinglePageNavbarLink name="Products Gallery" linkTo="/products" />
      <SinglePageNavbarLink name="Privacy Policy" linkTo="/public/Pdf/conveyor book and report.pdf" />
      <SinglePageNavbarLink name="Contact Us" linkTo="/contact" />
    </>
  );
};

export default NavbarLinks;
