// import { cn } from "@/lib/utils";

// export default function hero() {
//   return (
//     <>
// <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
//       <div
//         className={cn(
//           "absolute inset-0 z-0",
//           "[background-size:100px_100px]",
//           "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
//           "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
//         )}
//       />
     
     
//       <div className=" flex flex-col z-10 w-screen h-screen px-4 sm:px-6 md:px-10 lg:px-[64px] py-10 sm:py-16 md:py-20 lg:py-[120px] gap-[40px]  items-center">
//         <div className=" max-w-[300px] sm:max-w-[600px] md:max-w-[1000px] lg:max-w-[1312px] font-manrope font-bold text-[36px] sm:text-[48px] md:text-[64px] lg:text-[88px]  leading-[44px] sm:leading-[56px] md:leading-[72px] lg:leading-[96px] tracking-[0%] text-center">Empowering Businesses with Smart Software Solutions</div>
//         <div className="max-w-[200px] sm:max-w-[300px] md:max-w-[550px] lg:max-w-[600px] font-inter font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[48px] tracking-[-0.01em] text-center">From restaurants to enterprise management, we build tools that grow with your goals.</div>
//         <div className="flex w-[280px] sm:w-[300px] md:w-[326px]  h-[48px] sm:h-[52px] md:h-[56px] gap-[12px] sm:gap-[14px] md:gap-[16px] rotate-0 opacity-100">
//           <button className=" w-[140px] sm:w-[160px] md:w-[170px] lg:w-[181px] h-[44px] sm:h-[48px] md:h-[52px] lg:h-[56px] gap-[8px] sm:gap-[10px] md:gap-[11px] lg:gap-[12px] rotate-0 opacity-100 rounded-[16px] border border-[1px] p-[8px] sm:p-[10px] md:p-[12px] lg:p-[16px] font-manrope font-semibold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[24px]  tracking-[0%] align-middle">Schedule a Demo</button>
//           <button className=" bg-blue-500 w-[100px] sm:w-[110px] md:w-[120px] lg:w-[129px] h-[44px] sm:h-[48px] md:h-[52px] lg:h-[56px] gap-[8px] sm:gap-[10px] md:gap-[11px] lg:gap-[12px] rotate-0 opacity-100 rounded-[16px] p-[8px] sm:p-[10px] md:p-[12px] lg:p-[16px] font-manrope font-semibold text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[24px] tracking-[0%] align-middle">Contact Us</button></div>
//       </div>
//     </div>




      
//     </>
//   )
// }
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full h-[80vh] grid place-items-center text-center relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1F1F1F_1px,transparent_1px),linear-gradient(to_bottom,#1F1F1F_1px,transparent_1px)] [background-size:90px_90px]"></div>
      <div className="z-10 px-6 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold  font-manrope mb-6">
          Empowering Businesses with <br /> Smart Software Solutions
        </h1>
        <p className="text-lg text-gray-600 font-inter mb-8">
          From restaurants to enterprise management, we <br /> build tools that grow with your goals.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" className="font-inter text-gray-700 border-gray-300">
            Schedule a Demo
          </Button>
          <Button className="bg-primary font-inter hover:bg-primary/90">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
