import Merch1 from "../../assets/images/merch-1.webp";

const Section5 = () => {
  return (
    <div className="bg-5 bg-cover bg-no-repeat flex flex-col w-full h-fit lg:px-14 xl:px-20">
      <div className="flex relative flex-col w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
        <div className="flex justify-center items-center lg:text-3lg lg:mt-20 lg:pt-1 xl:text-3xl xl:mt-28 xl:pt-1">
          <h1>
            <span className="font-bold font-jakarta-sans text-custom-white lg:mr-3 xl:mr-5">
              our
            </span>
            <span className="italic font-caslon-condensed text-custom-white">
              merch
            </span>
          </h1>
        </div>
        <div>
          <div className="flex tems-center justify-center">
            <img
              src={Merch1}
              alt=""
              className="w-full lg:mt-6 xl:mt-8 xl:mx-7"
            />
          </div>
        </div>
        <div
          className="font-jakarta-sans font-light text-custom-white self-end underline hover:cursor-pointer lg:text-2lg lg:mt-10 lg:mb-28 xl:text-2xl xl:mr-7 xl:mt-16 xl:mb-40"
          tabIndex="0"
          role="button"
        >
          {" "}
          more...
        </div>
      </div>
    </div>
  );
};

export default Section5;
