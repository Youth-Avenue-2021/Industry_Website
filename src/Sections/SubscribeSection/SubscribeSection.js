import React, { useContext } from "react";
import LoginContext from "../../Context/LoginContext";

const SubscribeSection = () => {
  // env variables
  const API_KEY = process.env.REACT_APP_API_KEY;
  const DOMAIN = process.env.REACT_APP_DOMAIN;

  const { email, setEmail } = useContext(LoginContext);
  const submitForm = (event) => {
    event.preventDefault();

    const userEmail = { email: email };

    fetch(`${DOMAIN}/api/subscribe/email?ApiKey=${API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userEmail),
    })
      .then(() => console.log("Form Submitted"))
      .catch(() => console.log("Error"));
  };
  return (
    <div className="py-10 overflow-hidden text-center bg-yellowColor">
      <h2 className="py-5 text-4xl leading-[3.2rem] md:leading-none">Subscribe To Our NewsLetter</h2>
      <div className="container mx-auto">
        <form method="POST" onSubmit={submitForm} className="flex flex-col items-center justify-center w-full mx-auto my-8 md:flex-row">
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="w-4/5 px-5 py-3 text-center duration-200 outline-none md:py-4 md:text-left md:w-2/5" placeholder="abc@xyz.com" required />
          <button type="submit" className="w-4/5 px-4 py-3 duration-200 bg-gray-900 md:text-left md:w-auto md:px-5 md:py-4 text-yellowColor">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
