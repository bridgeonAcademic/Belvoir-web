import Footer from "./components/ui/footer/Footer";
import Navbar from "./components/ui/navbar/Navbar";
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" h-[700px] flex justify-center items-center ">
        <div className=" bg-blue-300 h-[500px] w-3/4 rounded-md">
          <Image
            src="/home/banner1.jpg"
            alt="Elegant jacket display"
            className="object-center w-full h-full transform scale-110 rounded-md"
            width={400}
            height={400}
          />
        </div>
      </div>
      <Footer />
      <div className="h-96"></div>
      <div className="h-96"></div>
    </>
  );
}
