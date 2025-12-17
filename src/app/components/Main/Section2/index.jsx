import React from "react";

function Why() {
  return (
    <section className="pt-[147px] pb-[210px]">
      <div className="container max-w-[1100px] ml-auto mr-auto">
        <h1 className="font-[700] text-[72px] leading-[120%] tracking-[0.5px]">
          Nega aynan <br /> Akademnashr?
        </h1>

        <div className="mt-[72px] flex items-center justify-center text-start gap-[40px]">
          {/* Card 1 */}
          <div>
            <div className="w-[100px] h-[100px] mb-[32px] bg-[#FF750033]/20 flex items-center justify-center rounded-[50%]">
              <img src="/cursor.svg" alt="Cursor" />
            </div>
            <div className="flex flex-col gap-[12px]">
              <h4 className="font-[700] text-[24px] leading-[120%] tracking-[0.5px]">
                Oson buyurtma qilish
              </h4>
              <p className="font-[400] text-[16px] leading-[150%] tracking-[0.5px]">
                Akademnashr.uz saytidan o’zingizga yoqqan kitobni sodda usulda
                buyurtma qila olasiz.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div>
            <div className="w-[100px] h-[100px] mb-[32px] bg-[#FF750033]/20 flex items-center justify-center rounded-[50%]">
              <img src="/cursor.svg" alt="Cursor" />
            </div>
            <div className="flex flex-col gap-[12px]">
              <h4 className="font-[700] text-[24px] leading-[120%] tracking-[0.5px]">
                Eng sara kitoblar
              </h4>
              <p className="font-[400] text-[16px] leading-[150%] tracking-[0.5px]">
                Trenddagi eng ommabop, turli auditoriyalarga mo’ljallangan har
                xil janrdagi kitoblarni topa olasiz.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div>
            <div className="w-[100px] h-[100px] mb-[32px] bg-[#FF750033]/20 flex items-center justify-center rounded-[50%]">
              <img src="/cursor.svg" alt="Cursor" />
            </div>
            <div className="flex flex-col gap-[12px]">
              <h4 className="font-[700] text-[24px] leading-[120%] tracking-[0.5px]">
                Tez yetkazib berish
              </h4>
              <p className="font-[400] text-[16px] leading-[150%] tracking-[0.5px]">
                O’zbekistonning ixtiyoriy hududiga 3 ish kuni ichida, xalqaro
                buyurtmalarni 10 ish kuni ichida yetkazib beriladi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
