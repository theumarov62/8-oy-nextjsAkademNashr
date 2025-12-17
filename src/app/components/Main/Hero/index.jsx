import React from "react";

function Hero() {
  return (
    <section className="bg-[#252420] text-white pt-[80px] pb-[150px] bg-[url('/python-book.svg')] bg-no-repeat bg-[position:calc(100%-170px)_40px]">
      <div className="container max-w-[1100px] ml-auto mr-auto">
        {/* Left */}
        <div className="flex flex-col items-start w-[387px]">
          <h1 className="font-[700] text-[40px] leading-[120%] mb-[24px] ">
            Pythonda dasturlash asoslari
          </h1>
          <p className="font-[400]  text-4 leading-[150%] tracking-[0.5px] mb-[32px]">
            Dasturlash asoslariga oid o‘zbek tilidagi ilk eng mukammal
            qo‘llanma. Kitobning har bir bo‘limi uchun maxsus video darslar{" "}
            yozilgan bo‘lib, ularga kitobda ko‘rsatilgan QR kod orqali o‘tish
            mumkin.
          </p>
          <button
            className="w-[155px] h-[39px] rounded-[4px] flex items-center justify-center bg-[#FF7500] text-white cursor-pointer"
            type="button"
          >
            Buyurtma berish
          </button> 
        </div>
      </div>
    </section>
  );
}

export default Hero;
