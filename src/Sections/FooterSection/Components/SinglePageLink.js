import { Link } from "react-router-dom";

const SinglePageLink = ({ linkTo, name }) => {
  return (
    <Link className="my-1 duration-300 footer-link text-white/70 hover:text-white" to={linkTo}>
      {name}
    </Link>
  );
};

export default SinglePageLink;
