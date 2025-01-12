import { Link } from "react-router-dom";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";

import T11 from "../../../assets/images/works/thesis/T1/t1-1.webp";
import T12 from "../../../assets/images/works/thesis/T1/t1-2.webp";
import T21 from "../../../assets/images/works/thesis/T2/t2-1.webp";
import T22 from "../../../assets/images/works/thesis/T2/t2-2.webp";
import T31 from "../../../assets/images/works/thesis/T3/t3-1.webp";
import T32 from "../../../assets/images/works/thesis/T3/t3-2.webp";
import T41 from "../../../assets/images/works/thesis/T4/t4-1.webp";
import T42 from "../../../assets/images/works/thesis/T4/t4-2.webp";
import T51 from "../../../assets/images/works/thesis/T5/t5-1.webp";
import T52 from "../../../assets/images/works/thesis/T5/t5-2.webp";
import T61 from "../../../assets/images/works/thesis/T6/t6-1.webp";
import T62 from "../../../assets/images/works/thesis/T6/t6-2.webp";
import T71 from "../../../assets/images/works/thesis/T7/t7-1.webp";
import T72 from "../../../assets/images/works/thesis/T7/t7-2.webp";
import T81 from "../../../assets/images/works/thesis/T8/t8-1.webp";
import T82 from "../../../assets/images/works/thesis/T8/t8-2.webp";
import T91 from "../../../assets/images/works/thesis/T9/t9-1.webp";
import T92 from "../../../assets/images/works/thesis/T9/t9-2.webp";
import T101 from "../../../assets/images/works/thesis/T10/t10-1.webp";
import T102 from "../../../assets/images/works/thesis/T10/t10-2.webp";

const Thesis = () => {
  return (
    <div>
      <FixNavbar />
      <div className="bg-category bg-no-repeat bg-cover lg:h-fit h-[1300px] lg:px-14 xl:px-20">
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
                  <img src={T12} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={T11} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Analisis Semiotik Makna Karakter Chinese Lucky Cat pada Logo Restoran Chinese Fast Food Da Jia Hao.</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Christabel Amanda</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] mx-4 lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="2">
                  <img src={T22} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={T21} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Analisis Strategi Rebranding Exsport pada Tahun 2020 Terhadap Perubahan Target Market yang Dituju.</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Vania Jovita</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="3">
                  <img src={T32} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={T31} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Analisis Pesan Komunikasi dan Semiotika Visual pada Iklan Komedi #Letmeexplain Seri Flashes pada Youtube Valorant.</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Kayla Federica Jiemesha</p>
                </Link>
              </div>
            </article>
          </div>

          <div className="flex mt-2 lg:mt-10">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="4">
                  <img src={T42} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={T41} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Analisis Strategi Brand Activation Cat Dulux pada House of Sweet Embrace Exhibition.</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Gabriella Lova Lucetta</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] mx-4 lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="5">
                  <img src={T52} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={T51} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Analisis Gaya Visual pada Seserahan Pertunangan Etnis Tionghoa di Surabaya.</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Natasya Chandra</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="6">
                  <img src={T62} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={T61} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Analisis Pentingnya Memiliki Ciri Khas Gaya Visual Fotografer terhadap Jenjang Karir Dunia Fotografi Fashion</h2>
                  <p className="font-caslon-condensed font-light text-[8px] italic lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Thomas Verdy Sutanto</p>
                </Link>
              </div>
            </article>
          </div>
          <div className="flex mt-2 lg:mt-10">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="7">
                  <img src={T72} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={T71} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Artikulasi Identitas Kosmopolitan pada Konten Visual Fotografi “Anomali Coffee” di Bali.</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Celine Nadia Marchiella</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] mx-4 lg:mx-8 xl:mx-10 relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="8">
                  <img src={T82} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={T81} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Analisis Guideline Penyusunan Strategi Fashion Photoshoot dari Dua Brand dengan Produk Serupa.</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Merry Christin Sutedjo</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="9">
                  <img src={T92} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={T91} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Analisis Usabilitas pada Desain Website Mobile Modico dengan Menggunakan Teori Jakob Nielsen.</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Olyvia Irene Hunggianto</p>
                </Link>
              </div>
            </article>
          </div>
          <div className="flex mt-2 lg:mt-10 lg:mb-40">
            <article className="flex flex-col w-[33%] relative">
              <div className="flex flex-col grow text-custom-purple hover:cursor-pointer">
                <Link to="10">
                  <img src={T102} className="absolute w-full opacity-0 transition-opacity duration-300 hover:opacity-100" />
                  <img src={T101} className="w-full" />
                  <h2 className="font-jakarta-sans font-semibold text-justify leading-tight text-[12px] mt-2 lg:text-2lg xl:mt-3 xl:text-2xl">Analisis Komparasi Strategi Visual Branding Logo Mojotrisno Sentra Kuningan dengan Logo yang dibuat oleh Artificial Intelligence.</h2>
                  <p className="font-caslon-condensed font-light italic text-[8px] lg:text-1lg lg:mt-1 xl:text-1xl xl:mt-2">Renata Agustine Putri Pratama</p>
                </Link>
              </div>
            </article>
            <article className="flex flex-col w-[33%] mx-4 lg:mx-8 xl:mx-10 relative">
            </article>
            <article className="flex flex-col w-[33%] relative"></article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Thesis;
