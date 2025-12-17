import React from "react";

function Footer() {
  return (
    <footer className="pt-[56px] pb-[56px] bg-[#F8F8F8]">
      <div className="container max-w-[1100px] ml-auto mr-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-[12px]">
            <img src="/akademnashr-logo.svg" alt="AkademNashr Logosi" />
            <p className="font-[700] text-[32px] text-[#252420]">
              Akadem
              <span className="text-[#FF7500]">nashr</span>
            </p>
          </a>
          {/* Socials */}
          <div className="flex gap-4 items-center justify-center">
            <a href="#">
              <img src="/icon-telegram.svg" alt="Telegram Icon" />
            </a>

            <a href="#">
              <img src="/icon-facebook.svg" alt="Facebook Icon" />
            </a>

            <a href="#">
              <img src="/icon-instagram.svg" alt="Instagram Icon" />
            </a>
          </div>
        </div>

        {/* Line */}
        <div className="w-100% h-1 bg-[#25242080]/50 mt-[40px] mb-[64px]"></div>

        {/* Footer bottom */}
        <div className="flex items-start justify-between">
          <ul className="text-[#252420]">
            <li className="font-[400] text-[16px]">
              <a href="#">Bosh sahifa</a>
            </li>
            <li className="font-[400] text-[16px]">
              <a href="#">Kitoblar</a>
            </li>
            <li className="font-[400] text-[16px]">
              <a href="#">Aksiyalar</a>
            </li>
            <li className="font-[400] text-[16px]">
              <a href="#">Yangiliklar</a>
            </li>
            <li className="font-[400] text-[16px]">
              <a href="#">Kontaktlar</a>
            </li>
          </ul>
          <ul>
            <li className="font-[400] text-[16px]">
              <a href="#">Ilmiy nashrlar</a>
            </li>
            <li className="font-[400] text-[16px]">
              <a href="#">Ilmiy-ommabop nashrlar</a>
            </li>
            <li className="font-[400] text-[16px]">
              <a href="#">Ma’rifiy nashrlar</a>
            </li>
            <li className="font-[400] text-[16px]">
              <a href="#">Lug’atlar</a>
            </li>
            <li className="font-[400] text-[16px]">
              <a href="#">Adabiy-badiiy nashrlar</a>
            </li>
            <li className="font-[400] text-[16px]">
              <a href="#">Abituriyentlar uchun</a>
            </li>
            <li className="font-[400] text-[16px]">
              <a href="#">Bolalar uchun</a>
            </li>
          </ul>
          <ul>
            <li className="font-[400] text-[16px]">
              <a href="#">Ko’p so’raladigan savollar</a>
            </li>
            <li className="font-[400] text-[16px]">
              <a href="#">Yetkazib berish haqida</a>
            </li>
            <li className="font-[400] text-[16px]">
              <a href="#">To’lov usullari haqida</a>
            </li>
          </ul>
          <ul>
            <li className="font-[400] text-[16px]">
              <a href="#">Bo’sh ish o’rinlari</a>
            </li>
            <li className="font-[400] text-[16px]">
              <a href="#">Biz bilan bog’lanish</a>
            </li>
            <li className="font-[400] text-[16px]">
              <a href="#">Maxfiylik nizomi</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
