import { Link } from "react-router-dom";
import Email from "../../../assets/images/email.svg";
import LinkedIn from "../../../assets/images/linkedin.svg";
import Picture1 from "../../../assets/images/works/thesis/T5/1.webp";
import Picture2 from "../../../assets/images/works/thesis/T5/2.webp";
import Picture3 from "../../../assets/images/works/thesis/T5/3.webp";
import Picture4 from "../../../assets/images/works/thesis/T5/4.webp";
import Picture5 from "../../../assets/images/works/thesis/T5/5.webp";
import Profile from "../../../assets/images/works/thesis/T5/t5-1.webp";
import FixNavbar from "../../global/FixNavbar";
import Footer from "../../global/Footer";

const T4 = () => {
  return (
    <div>
      <FixNavbar />
      <div className="bg-category bg-no-repeat bg-cover h-fit lg:px-14 xl:px-20">
        <div className="flex relative flex-col w-full mx-auto lg:max-w-[1024px] xl:max-w-[1440px]">
          <div className="lg:text-2lg lg:mt-24 xl:text-2xl xl:mt-28">
            <div className="flex flex-1 items-center justify-between">
              <div>
                <Link to="/category">
                  <span className="font-medium font-jakarta-sans text-custom-purple lg:mr-1 xl:mr-2">currated</span>
                  <span className="italic font-medium font-caslon-condensed text-custom-purple">works</span>
                </Link>
              </div>
              <div>
                <Link to="/category/thesis">
                  <span className="italic font-caslon-condensed text-custom-purple">Thesis</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:text-2lg xl:text-2xl lg:mt-8 xl:mt-20 lg:mb-2 xl:mb-3"></div>
          <div className="flex">
            <div className="w-[58%] flex flex-col justify-between">
              <div className="flex-col mb-5">
                <p className="font-bold font-jakarta-sans text-custom-purple leading-tight lg:text-[2.05em] xl:text-[2.8em]">Analisis Gaya Visual pada Seserahan Pertunangan Etnis Tionghoa di Surabaya</p>
              </div>
              <div className="flex-col self-end">
                <p className="font-extralight font-caslon-condensed text-custom-purple lg:text-[1.2em] xl:text-[1.6em] mb-2">Natasya Chandra</p>
                <div className="flex">
                  <div className="w-[25%]">
                    <div className="flex mb-2">
                      <img src={Email} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">natasya.chandra04@gmail.com</p>
                    </div>
                    <div className="flex mb-2">
                      <img src={LinkedIn} className="flex justify-between items-start text-center w-[10%] lg:mr-2 xl:mr-3" />
                      <p className="font-extralight italic font-caslon-condensed text-custom-purple lg:text-[0.8em] xl:text-[0.95em]">Natasya Chandra</p>
                    </div>
                  </div>
                  <div className="w-[15%]"></div>
                  <div className="w-[70%]">
                    <p className="font-semilight font-jakarta-sans text-custom-purple text-justify lg:text-[0.8em] xl:text-[1em] mb-3">
                      Tingjing merupakan suatu prosesi awal dari pernikahan, yaitu acara pertunangan atau kalungan yang dilaksanakan dengan adat etnis Tionghoa. Dalam prosesi ini terdapat budaya untuk membagikan bingkisan atau hampers sebagai ucapan syukur dan terima kasih, kepada keluarga dan
                      teman-teman. Penelitian ini bertujuan untuk menganalisis gaya visual dalam seserahan atau hampers pertunangan etnis Tionghoa di Surabaya. Penelitian ini dilakukan dengan menggunakan pendekatan kualitatif yang dianalisis secara deskriptif. Hasil dari penelitian ini adalah data
                      visual hampers ditahun 2023 dan gaya visual yang sedang trend di masyarakat. Selain itu, memberikan pemahaman lebih baik mengenai makna gaya visual budaya etnis Tionghoa, juga peluang dan inovasi gaya visual dalam seserahan pertunangan etnis Tionghoa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[4.5%]"></div>
            <img src={Profile} className="flex justify-between items-start text-center w-[37.5%]" alt="Picture1" />
          </div>
          <div className="flex gap-5 lg:mt-6 xl:mt-12 lg:mb-16 xl:mb-20">
            <div className="w-[50%]">
              <div className="flex flex-col gap-5">
                <img src={Picture1} className="flex justify-between items-start text-center" />
                <div className="w-[50%] self-end">
                  <img src={Picture2} />
                </div>
              </div>
            </div>
            <div className="w-[50%] flex gap-5 self-end">
              <div className="flex flex-col w-[49.5%] gap-5">
                <img src={Picture3} />
                <img src={Picture4} />
              </div>
              <div className="w-[50.5%]">
                <img src={Picture5} />
              </div>
            </div>
          </div>
          <div className="flex flex-col relative lg:pb-56 xl:pb-72">
            <p className="self-end font-light underline font-jakarta-sans text-custom-purple text-justify xl:text-[1.5em]">
              <Link to="/category">more works</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default T4;