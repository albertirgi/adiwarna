import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";

import GD11 from "../../../assets/images/works/graphicDesign/GD1/gd1-1.webp";
import GD12 from "../../../assets/images/works/graphicDesign/GD1/gd1-2.webp";
import GD21 from "../../../assets/images/works/graphicDesign/GD2/gd2-1.webp";
import GD22 from "../../../assets/images/works/graphicDesign/GD2/gd2-2.webp";
import GD31 from "../../../assets/images/works/graphicDesign/GD3/gd3-1.webp";
import GD32 from "../../../assets/images/works/graphicDesign/GD3/gd3-2.webp";
import GD41 from "../../../assets/images/works/graphicDesign/GD4/gd4-1.webp";
import GD42 from "../../../assets/images/works/graphicDesign/GD4/gd4-2.webp";
import GD51 from "../../../assets/images/works/graphicDesign/GD5/gd5-1.webp";
import GD52 from "../../../assets/images/works/graphicDesign/GD5/gd5-2.webp";
import GD61 from "../../../assets/images/works/graphicDesign/GD6/gd6-1.webp";
import GD62 from "../../../assets/images/works/graphicDesign/GD6/gd6-2.webp";
import GD71 from "../../../assets/images/works/graphicDesign/GD7/gd7-1.webp";
import GD72 from "../../../assets/images/works/graphicDesign/GD7/gd7-2.webp";
import GD81 from "../../../assets/images/works/graphicDesign/GD8/gd8-1.webp";
import GD82 from "../../../assets/images/works/graphicDesign/GD8/gd8-2.webp";
import GD91 from "../../../assets/images/works/graphicDesign/GD9/gd9-1.webp";
import GD92 from "../../../assets/images/works/graphicDesign/GD9/gd9-2.webp";
import GD101 from "../../../assets/images/works/graphicDesign/GD10/gd10-1.webp";
import GD102 from "../../../assets/images/works/graphicDesign/GD10/gd10-2.webp";
import GD111 from "../../../assets/images/works/graphicDesign/GD11/gd11-1.webp";
import GD112 from "../../../assets/images/works/graphicDesign/GD11/gd11-2.webp";

const GraphicDesign = () => {
  return (
    <div>
      <FixNavbar />
      <div className="bg-category bg-no-repeat bg-cover h-[1000px] lg:h-fit lg:px-14 xl:px-20">
        <div className="flex relative flex-col h-screen lg:h-auto px-3 lg:px-0 w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
          <div className="flex flex-row justify-between lg:flex-col mt-16 lg:mt-0">
            <div className="order-2 lg:order-1 self-end text-[8px] lg:text-2lg lg:mt-24 xl:text-2xl xl:mt-28">
              <Link to="/category">
                <span className="self-end font-medium font-jakarta-sans text-custom-purple mx-0.5 lg:mx-1 xl:mx-2">currated</span>
                <span className="italic font-medium font-caslon-condensed text-custom-purple">works</span>
              </Link>
            </div>
            <div className="order-1 lg:order-2 self-start text-[24px] lg:text-3lg xl:text-3xl">
              <span className="self-start italic font-medium font-caslon-condensed text-custom-purple">Graphic Design</span>
            </div>
          </div>
          <div className="flex mt-2 lg:mt-10">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="1">
                  <img src={GD12} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={GD11} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Amborasa</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Fiorella Chelsea</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] mx-4 lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="2">
                  <img src={GD22} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={GD21} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">HikeIndo</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Natasha Wisheilla</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="3">
                  <img src={GD32} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={GD31} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Mayatra</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Vannessa Jeane Ananthalia</p>
                </Link>
              </div>
            </article>
          </div>

          <div className="flex mt-2 lg:mt-10">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="4">
                  <img src={GD42} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={GD41} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Akgeni</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Michelle Jennifer</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] mx-4 lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="5">
                  <img src={GD52} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={GD51} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Ztrawberry</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Victoria Guitomo</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="6">
                  <img src={GD62} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={GD61} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Jeanny’s Bakehuis.</h2>
                  <p className="font-caslon-condensed font-light text-[8px] italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Stefanna Shiva</p>
                </Link>
              </div>
            </article>
          </div>
          <div className="flex mt-2 lg:mt-10">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="7">
                  <img src={GD72} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={GD71} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">10.11.45</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Celine Nadia Marchiella</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] mx-4 lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="8">
                  <img src={GD82} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={GD81} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Path Kindness</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Jacqueline Jillian</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="9">
                  <img src={GD92} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={GD91} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Aku dan Tubuhku</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Stefani</p>
                </Link>
              </div>
            </article>
          </div>
          <div className="flex mt-2 lg:mt-10 lg:mb-40">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="10">
                  <img src={GD102} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={GD101} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Nettika</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Shannon Soen Ying Zhen</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] mx-4 lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="11">
                  <img src={GD112} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={GD111} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Saktisangraha</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Miguel Vicenzo</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative"></article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GraphicDesign;
