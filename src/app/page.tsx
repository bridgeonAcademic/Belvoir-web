import Banner from "./components/ui/banner/banner";
import Footer from "./components/ui/footer/Footer";
import Navbar from "./components/ui/navbar/Navbar";
import Image from 'next/image';

export default function Home() {
  return (

    <>
      <Navbar />
      <Banner/>
      <Footer />
      <div className="h-96"></div>
      <div className="h-96"></div>
    </>

  );
}







// <div className="min-h-screen flex justify-center items-center p-4">
//         <div className="bg-orange-50 w-full max-w-6xl rounded-lg shadow-md overflow-hidden">
          
//           <div className="flex flex-col md:flex-row items-center p-6 gap-8">
//             <div className="w-full md:w-1/2 lg:w-2/5 order-1">
//               <div className="relative aspect-square w-full max-w-md mx-auto">
//                 <img
//                   src="/home/banner1.jpg"
//                   alt="Elegant jacket display"
//                   className="rounded-lg object-cover w-full h-full shadow-sm"
//                 />
//               </div>
//             </div>

//             <div className="w-full md:w-1/2 lg:w-3/5 space-y-4 text-center md:text-left order-2">
//               <h1 className="text-3xl md:text-4xl font-sans tracking-wide text-gray-900 font-semibold">
//                 Tailoring
//               </h1>
//               <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
//                 Our expert tailors craft custom-fit garments that match your
//                 unique style and needs. From alterations to bespoke tailoring,
//                 we ensure every stitch reflects perfection.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>