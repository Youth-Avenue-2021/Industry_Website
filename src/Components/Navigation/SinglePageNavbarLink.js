import { Link } from "react-router-dom";

const SinglePageNavbarLink = ({ linkTo, name }) => {
  return (
    <Link className="my-1 duration-300 navbar-link text-black/80 hover:text-black md:mx-4" to={linkTo}>
      {name}
    </Link>
  );
};

export default SinglePageNavbarLink;
