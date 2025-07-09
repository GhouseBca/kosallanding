export default function products(){
  return(
      <div className="flex flex-col items-center">
          <div className=" bg-[#e9f4ff] w-[148px] h-[40px] px-[16px] py-[8px] gap-[8px] rotate-0 opacity-100 rounded-[32px] font-manrope font-medium text-[16px] text-[#0076E2] leading-[24px] tracking-[0%]">our products</div>
      <div className="w-[589px] h-[144px] font-inter font-semibold text-[64px] leading-[72px] tracking-[-0.01em] text-center"><span className="text-[#0a6cdb]">Solutions</span> for Every 
      Business Need.</div>
      <div className="flex flex-col items-center w-[1312px] h-[715px] gap-[32px] rotate-0 opacity-100">
          <div className="bg- w-[799px] h-[555px] p-[48px_32px] gap-[32px] rotate-0 opacity-100 rounded-[40px]"></div>
          <div className="flex flex-row w-[457px] h-[48px] rotate-0 opacity-100 rounded-[48px] p-[4px] gap-[8px] bg-[#ececed] justify-center">
              <div className="text-[#8D8A95] font-manrope font-bold text-[14px] leading-[24px] tracking-[0%] align-middle">Bites</div>
              <div className="text-[#8D8A95] font-manrope font-bold text-[14px] leading-[24px] tracking-[0%] align-middle">Linkedin AI Agent</div>
              <div className="text-[#8D8A95] font-manrope font-bold text-[14px] leading-[24px] tracking-[0%] align-middle">Retailer’s CRM</div>
              <div className="text-[#8D8A95] font-manrope font-bold text-[14px] leading-[24px] tracking-[0%] align-middle">Collection App</div>
          </div>
          <div className=" w-[772px] h-[48px] rotate-0 opacity-100 font-manrope font-medium  text-[#4F4B5C] text-[18px] leading-[24px] tracking-[0%] text-center">Manage every aspect of your restaurant — from digital menus and real-time kitchen displays 
          to seamless billing, analytics, and POS integration.</div>
      </div>
      </div>
  );
}