import React from "react";

const SubscribeSection = () => {
  return (
    <div className="py-10 overflow-hidden text-center bg-yellowColor">
      <h2 className="py-5 text-4xl leading-[3.2rem] md:leading-none">Subscribe To Our NewsLetter</h2>
      <div className="container mx-auto">
        <form onSubmit={(event) => event.preventDefault()} className="flex flex-col items-center justify-center w-full mx-auto my-8 md:flex-row">
          <input onSubmit={() => console.log("done")} type="email" className="w-4/5 px-5 py-3 text-center duration-200 outline-none md:py-4 md:text-left md:w-2/5" placeholder="abc@xyz.com" required />
          <button type="submit" className="w-4/5 px-4 py-3 duration-100 bg-gray-900 md:text-left md:w-auto md:px-5 md:py-4 text-yellowColor">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
