import React from "react";

function Header() {
  return (
    <header className="pt-[16px] pb-[16px]">
      <div className="container max-w-[1100px] ml-auto mr-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-[12px]">
          <img src="/akademnashr-logo.svg" alt="AkademNashr Logosi" />
          <p className="font-[700] text-[32px] text-[#252420]">
            Akadem
            <span className="text-[#FF7500]">nashr</span>
          </p>
        </a>
        {/* Links & Register button */}
        <div className="flex items-center justify-center gap-[32px]">
          <ul className="flex items-center justify-center gap-[32px]">
            <li>
              <a className="" href="#">
                Bosh sahifa
              </a>
            </li>
            <li>
              <a className="" href="#">
                Kitoblar
              </a>
            </li>
            <li>
              <a className="" href="#">
                Aksiyalar
              </a>
            </li>
            <li>
              <a className="" href="#">
                Kontaktlar
              </a>
            </li>
          </ul>
          <button
            className="w-[155px] h-[39px] rounded-[4px] flex items-center justify-center bg-[#FF7500] text-white cursor-pointer"
            type="button"
          >
            Ro'yhatdan o'tish
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
