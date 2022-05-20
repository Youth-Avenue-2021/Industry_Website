import { Link } from "react-router-dom";

const ContentBox = () => {
    return (
        <div className="flex flex-col justify-center bg-white content-Shadow group hover:shadow-sm duration-500 w-11/12 md:w-[35rem]">
            <div className="flex flex-col items-start justify-center px-6 py-8 text-center md:text-left md:p-10">
                <h2 className="hidden pt-3 text-3xl text-center md:block">ShreeBai Industries</h2>
                <span className="hidden w-1/3 h-1 duration-500 rounded group-hover:w-1/2 md:inline-block md:my-7 bg-yellowColor"></span>
                <p className="my-2 text-base">
                    Established in the year 2000 in Rajkot, Gujarat, “Shree Bai industries”, has established itself as a formidable enterprise involved in manufacturing supplying an immaculate range of Conveyor Systems & Conveyor Chains. The company is run by young and energetic <mark>Mr. Premji Devaliya.</mark>{" "}
                </p>
                <p className="my-2 text-base">The company has mastered the art of accuracy in order to develop the quality products each time. Quality is the most essential part of their products which are mostly applied to CNC Turning Centers and other CNC / Automatically operated Conveyor Systems. Research & Development team has earned the company good reputation years after years and the continuous growth of the company reflects the same loudly.</p>
                <p className="my-2 text-base">Hunger to improve every time with latest technology has earned the company ample of business and goodwill.</p>
                <Link to="/contact" className="px-5 py-2 mx-auto my-5 duration-300 bg-white border-2 md:mx-0 md:hover:ml-2 hover:bg-yellowColor border-yellowColor">
                    Contact Us <i className="ml-1 fa-solid fa-angles-right"></i>
                </Link>
            </div>
        </div>
    );
};

export default ContentBox;
