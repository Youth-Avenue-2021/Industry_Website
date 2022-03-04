import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center w-4/5 md:w-[20%]">
      <Link className="my-1 footer-link text-white/70 hover:text-white" to="/">
        Privacy Policy
      </Link>
      <Link className="my-1 footer-link text-white/70 hover:text-white" to="/">
        Contact Us
      </Link>
      <Link className="my-1 footer-link text-white/70 hover:text-white" to="/">
        Products Gallery
      </Link>
      <Link className="my-1 footer-link text-white/70 hover:text-white" to="/">
        About Company
      </Link>
    </div>
  );
};

export default FooterLinks;
