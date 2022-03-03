const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-1/2">
        <h2 className="mb-10 text-5xl font-semibold -mt-15">Contact Us</h2>
        <form className="flex flex-col items-center justify-center w-3/5">
          <input className="inputStyles" type="text" placeholder="Full Name" required />
          <input className="inputStyles" type="email" placeholder="abc@xyz.com" required />
          <input className="inputStyles" type="number" placeholder="+91-123456789" required />
          <textarea className="w-full h-[8rem] inputStyles" placeholder="Write a message"></textarea>
          <input type="submit" value="Send Message" className="w-full p-3 my-2 text-white duration-200 outline-none cursor-pointer active:ring-offset-4 hover:ring hover:ring-yellow-500 hover:ring-offset-2 bg-yellow-800/40" />
        </form>
      </div>
    </>
  );
};

export default Contact;
