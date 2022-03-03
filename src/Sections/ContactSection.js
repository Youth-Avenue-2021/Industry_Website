import Contact from "../Components/Contact";
import GoogleMap from "../Components/GoogleMap";

const ContactSection = () => {
  return (
    <div className="flex flex-row items-center justify-center mx-auto bg-yellow-400">
      <Contact />
      <GoogleMap />
    </div>
  );
};

export default ContactSection;
