const SectionHeading = ({ heading }) => {
  return (
    <>
      <div className="mt-24 mb-5">
        <h2 className="w-full text-4xl text-center text-darkGreen">{heading}</h2>
        <span className="inline-block w-20 h-1 my-5 rounded bg-yellowColor"></span>
      </div>
    </>
  );
};

export default SectionHeading;
