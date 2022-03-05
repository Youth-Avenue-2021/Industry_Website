import InputComponent from "../InputComponents/InputComponent";

const ContactForm = () => {
  const submitForm = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitForm} className="flex flex-col items-center justify-center w-full">
      <InputComponent class_name="inputStyles" type="text" placeholder="Full Name" />
      <InputComponent class_name="inputStyles" type="email" placeholder="abc@xyz.com" />
      <InputComponent class_name="inputStyles" type="number" placeholder="+91-123456789" />
      <textarea className="w-full h-[8rem] inputStyles" placeholder="Write a message"></textarea>
      <input type="submit" value="Send Message" className="w-full p-3 my-2 text-white duration-200 outline-none cursor-pointer focus:ring focus:ring-gray-600 focus:ring-offset-2 bg-gray-900" />
    </form>
  );
};

export default ContactForm;
