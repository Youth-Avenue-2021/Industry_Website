import SinglePageNavbarLink from "./SinglePageNavbarLink";

const NavbarLinks = () => {
    return (
        <>
            <SinglePageNavbarLink name="Home" linkTo="/" />
            <SinglePageNavbarLink name="Products Gallery" linkTo="/products" />
            <SinglePageNavbarLink name="Privacy Policy" linkTo="conveyor-book-and-report.pdf"  target="_blank" />
            <SinglePageNavbarLink name="Contact Us" linkTo="/contact" />
        </>
    );
};

export default NavbarLinks;
