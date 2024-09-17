import { useState, useEffect } from "react";
import logo from "/public/Lambang_Kab._Kutai_Kertanegara.png";
import logo_i from "/public/Lambang_Kab._Kutai_Kertanegara.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  const [openNavBar, setopenNavBar] = useState(false);
  const [win, setWindow] = useState<any>(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handle = () => {
      setWindow(window.scrollY);
    };
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("scroll", handle);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handle);
    };
  }, []);

  return (
    <div
      className={` ud-header fixed left-0 top-0 z-40 flex w-full items-center 
    ${pathName == "/" && win <= 15 ? "bg-transparent" : "bg-primary"} `}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 flex ">
            <a
              href="/"
              className="navbar-logo w-full py-5 flex lg:flex-col items-center "
            >
              <img
                src="assets/images/logo/logo-invert.png"
                alt="logo"
                className="header-logo w-6 md:w-16 mr-2 lg:mr-0"
              />
              <p className="text-white font-bold mt-1">NUTRITION</p>
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              {/* burger */}
              <button
                onClick={() => setopenNavBar((p) => !p)}
                id="navbarToggler"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white" />
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white" />
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white" />
              </button>
              {/* burger */}

              <nav
                className={`absolute right-4 top-full transition-all ease-in
              ${
                openNavBar || width > 768
                  ? "-translate-y-[0vh]"
                  : "-translate-y-[100vh]"
              }
              w-full max-w-[250px] rounded-lg bg-primary py-5 shadow-lg dark:bg-dark-2 md:static md:block md:w-full md:max-w-full md:bg-transparent md:px-4 md:py-0 md:shadow-none dark:md:bg-transparent xl:px-6`}
              >
                <ul className=" md:flex 2xl:ml-20 mx-auto ">
                  <li className="group relative ">
                    <a
                      href="/"
                      className="ud-menu-scroll mx-8 flex py-2 text-base font-medium  group-hover:text-gray-300 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-white lg:group-hover:text-white lg:group-hover:opacity-70 "
                    >
                      BERANDA
                    </a>
                  </li>
                  <li className="group relative ">
                    <a
                      href="/content?tag=artikel"
                      className="ud-menu-scroll mx-8 flex py-2 text-sm font-medium  group-hover:text-gray-300 lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                    >
                      ARTIKEL
                    </a>
                  </li>
                  <li className="group relative ">
                    <a
                      href="/content?tag=kegiatan"
                      className="ud-menu-scroll mx-8 flex py-2 text-sm font-medium  group-hover:text-gray-300 lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                    >
                      KEGIATAN
                    </a>
                  </li>
                  <li className="group relative ">
                    <a
                      href="/video"
                      className="ud-menu-scroll mx-8 flex py-2 text-sm font-medium  group-hover:text-gray-300 lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                    >
                      VIDEO
                    </a>
                  </li>
                  <li className="group relative ">
                    <a
                      href="/galeri"
                      className="ud-menu-scroll mx-8 flex py-2 text-sm font-medium  group-hover:text-gray-300 lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                    >
                      GALERI
                    </a>
                  </li>

                  <li className="group relative ">
                    <a
                      href="#team"
                      className="ud-menu-scroll mx-8 flex py-2 text-sm font-medium  group-hover:text-gray-300 lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                    >
                      PROFIL
                    </a>
                  </li>
                  <li className="group relative ">
                    <a
                      href="/contact"
                      className="ud-menu-scroll mx-8 flex py-2 text-sm font-medium  group-hover:text-gray-300 lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                    >
                      KONTAK
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* signin 
          <div className="flex items-center justify-end pr-16 lg:pr-0">
            <label
              htmlFor="themeSwitcher"
              className="inline-flex  items-center"
              aria-label="themeSwitcher" 
            >
              <input
                type="checkbox"
                name="themeSwitcher"
                id="themeSwitcher"
                className="sr-only"
              />
              <span className="hidden text-white dark:block">
                <svg
                  className="fill-current"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2172_3070)">
                    <path d="M12 6.89999C9.18752 6.89999 6.90002 9.18749 6.90002 12C6.90002 14.8125 9.18752 17.1 12 17.1C14.8125 17.1 17.1 14.8125 17.1 12C17.1 9.18749 14.8125 6.89999 12 6.89999ZM12 15.4125C10.125 15.4125 8.58752 13.875 8.58752 12C8.58752 10.125 10.125 8.58749 12 8.58749C13.875 8.58749 15.4125 10.125 15.4125 12C15.4125 13.875 13.875 15.4125 12 15.4125Z" />
                    <path d="M12 4.2375C12.45 4.2375 12.8625 3.8625 12.8625 3.375V1.5C12.8625 1.05 12.4875 0.637497 12 0.637497C11.55 0.637497 11.1375 1.0125 11.1375 1.5V3.4125C11.175 3.8625 11.55 4.2375 12 4.2375Z" />
                    <path d="M12 19.7625C11.55 19.7625 11.1375 20.1375 11.1375 20.625V22.5C11.1375 22.95 11.5125 23.3625 12 23.3625C12.45 23.3625 12.8625 22.9875 12.8625 22.5V20.5875C12.8625 20.1375 12.45 19.7625 12 19.7625Z" />
                    <path d="M18.1125 6.74999C18.3375 6.74999 18.5625 6.67499 18.7125 6.48749L19.9125 5.28749C20.25 4.94999 20.25 4.42499 19.9125 4.08749C19.575 3.74999 19.05 3.74999 18.7125 4.08749L17.5125 5.28749C17.175 5.62499 17.175 6.14999 17.5125 6.48749C17.6625 6.67499 17.8875 6.74999 18.1125 6.74999Z" />
                    <path d="M5.32501 17.5125L4.12501 18.675C3.78751 19.0125 3.78751 19.5375 4.12501 19.875C4.27501 20.025 4.50001 20.1375 4.72501 20.1375C4.95001 20.1375 5.17501 20.0625 5.32501 19.875L6.52501 18.675C6.86251 18.3375 6.86251 17.8125 6.52501 17.475C6.18751 17.175 5.62501 17.175 5.32501 17.5125Z" />
                    <path d="M22.5 11.175H20.5875C20.1375 11.175 19.725 11.55 19.725 12.0375C19.725 12.4875 20.1 12.9 20.5875 12.9H22.5C22.95 12.9 23.3625 12.525 23.3625 12.0375C23.3625 11.55 22.95 11.175 22.5 11.175Z" />
                    <path d="M4.23751 12C4.23751 11.55 3.86251 11.1375 3.37501 11.1375H1.50001C1.05001 11.1375 0.637512 11.5125 0.637512 12C0.637512 12.45 1.01251 12.8625 1.50001 12.8625H3.41251C3.86251 12.8625 4.23751 12.45 4.23751 12Z" />
                    <path d="M18.675 17.5125C18.3375 17.175 17.8125 17.175 17.475 17.5125C17.1375 17.85 17.1375 18.375 17.475 18.7125L18.675 19.9125C18.825 20.0625 19.05 20.175 19.275 20.175C19.5 20.175 19.725 20.1 19.875 19.9125C20.2125 19.575 20.2125 19.05 19.875 18.7125L18.675 17.5125Z" />
                    <path d="M5.32501 4.125C4.98751 3.7875 4.46251 3.7875 4.12501 4.125C3.78751 4.4625 3.78751 4.9875 4.12501 5.325L5.32501 6.525C5.47501 6.675 5.70001 6.7875 5.92501 6.7875C6.15001 6.7875 6.37501 6.7125 6.52501 6.525C6.86251 6.1875 6.86251 5.6625 6.52501 5.325L5.32501 4.125Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_2172_3070">
                      <rect width={24} height={24} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </label>
            <div className="hidden sm:flex">
              <a
                href="signin.html"
                className="loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
              >
                Sign In
              </a>
              <a
                href="signup.html"
                className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:"
              >
                Sign Up
              </a>
            </div>
          </div>
          signin */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
