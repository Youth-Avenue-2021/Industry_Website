import ContactForm from "./FormComponent/ContactForm";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-1/2">
        <h2 className="mb-10 text-5xl font-semibold -mt-15">Contact Us</h2>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
