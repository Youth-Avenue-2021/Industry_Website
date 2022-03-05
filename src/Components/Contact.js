import ContactForm from "./FormComponent/ContactForm";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-[100%] md:w-1/3 bg-white pb-20 px-7 md:px-14">
        {/* <h2 className="mb-10 text-5xl font-semibold -mt-15">Contact Us</h2> */}
        <SectionHeading heading={"Get In Touch"} />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
