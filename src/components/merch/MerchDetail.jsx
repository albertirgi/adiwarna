import { Link, useParams } from "react-router-dom";
import FixNavbar from "../global/FixNavbar";
import Footer from "../global/Footer";
import { merchs } from "../global/Data";

const MerchDetail = () => {
  const { id } = useParams();
  const merch = merchs.find((merch) => merch.id == id);
  console.log(merch);
  return (
    <>
      <FixNavbar />
      <div id="merch-detail" className="bg-5 bg-cover bg-no-repeat flex flex-col h-fit w-full lg:px-14 xl:px-20">
        <div className="flex relative flex-col w-full h-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px] lg:pt-20 xl:pt-24">
          <img className="w-full" src={merch.img[3].default}></img>
          <div className="w-full h-fit">

          </div>
          <div className="w-full flex flex-row pt-4">
            <div className="basis-2/4 flex flex-col">
              <div className="grid grid-cols-3 gap-x-4">
                <img className="w-full" src={merch.img[0].default}></img>
                <img className="w-full" src={merch.img[1].default}></img>
                <img className="w-full" src={merch.img[2].default}></img>
              </div>
              <div className="h-full flex items-center mt-4 mb-12">
                <Link to="/event" className="font-bold font-jakarta-sans text-custom-white text-[24px] text-end hover:cursor-pointer hover:underline decoration-1 underline-offset-4">
                  Our <span className="font-caslon-text font-normal italic">Merch</span>
                </Link>
              </div>
            </div>
            <div className="basis-2/4 relative flex flex-col pt-8 lg:pl-12 xl:pl-24 pb-12">
              <p className="absolute font-jakarta-sans text-custom-white font-bold lg:text-[64px] xl:text-[68px] leading-none -top-12">{merch.name}</p>
              <p className="font-jakarta-sans text-custom-white lg:text-[16px] xl:text-[20px] leading-tight ">{merch.desc}</p>
              <p className="font-jakarta-sans text-custom-white lg:text-[16px] xl:text-[20px]  mt-4">Dimensi: {merch.dimension}</p>
              <div className="h-full flex flex-row">
                <div className="basis-1/2 pt-4">
                  <button className="bg-[#0EF0B0] text-[#5C05D7] lg:text-[16px] xl:text-[20px] px-4 py-1 font-jakarta-sans font-bold rounded-3xl">Place Order</button>
                </div>
                <div className="basis-1/2 flex flex-row gap-x-2 justify-end h-fit">
                  <p className="text-custom-white font-jakarta-sans font-light lg:text-[24px] xl:text-[28px] self-end leading-snug">IDR</p>
                  <p className="text-custom-white font-caslon-condensed font-normal lg:text-[48px] xl:text-[56px] italic leading-none">{merch.price}</p>
                  <p className="text-custom-white font-jakarta-sans font-light lg:text-[24px] xl:text-[28px] self-end leading-snug">{merch.uom != "" ? `/${merch.uom}` : ""}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MerchDetail;