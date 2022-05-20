import SinglePageNavbarLink from "./SinglePageNavbarLink";
import pdf from "../../Assets/Pdf/conveyor book and report.pdf"

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
