import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BiLineChart } from "react-icons/bi";
import { TbShoppingCartPlus } from "react-icons/tb";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";

export default function SideBar() {
  return (
    <>
      <section className="w-64 h-screen sidebar">
        <div className="flex flex-col flex-1 bg-white border-r-2 border-r-gray-100 ">
          <div className="logo">
            <img
              src="images/best-trade-logo.png"
              className="h-40 bg-center bg-cover opacity-50 w-80 "
              alt=""
            />
          </div>
          <ul className="flex flex-col justify-center px-2 list-none ">
            <li className="hover:text-sky-600">
              <Link
                to="/dashboard"
                className="flex items-center px-2 py-3 text-base font-bold hover:bg-gradient-to-l from-sky-200 rounded-xl "
              >
                {" "}
                <RxDashboard className="mr-2 text-2xl" /> Dashboard{" "}
              </Link>
            </li>
            <li className="hover:text-sky-600">
              <Link
                to={"chart"}
                className="flex items-center px-2 py-3 text-base font-bold hover:bg-gradient-to-l from-sky-200 rounded-xl "
              >
                {" "}
                <BiLineChart className="mr-2 text-2xl" /> Analytics{" "}
              </Link>
            </li>
            <li className="hover:text-sky-600">
              <Link className="flex items-center px-2 py-3 text-base font-bold hover:bg-gradient-to-l from-sky-200 rounded-xl ">
                {" "}
                <TbShoppingCartPlus className="mr-2 text-2xl" /> Orders{" "}
              </Link>
            </li>
            <li className="hover:text-sky-600">
              <Link to={'schedule'} className="flex items-center px-2 py-3 text-base font-bold hover:bg-gradient-to-l from-sky-200 rounded-xl ">
                {" "}
                <AiOutlineCalendar className="mr-2 text-2xl" /> Schedule{" "}
              </Link>
            </li>
            <li className="hover:text-sky-600">
              <Link className="flex items-center px-2 py-3 text-base font-bold hover:bg-gradient-to-l from-sky-200 rounded-xl ">
                {" "}
                <AiOutlineTeam className="mr-2 text-2xl" /> Team{" "}
              </Link>
            </li>
            <li className="pt-6 logo">
              <img
                src="images/undraw_Success_factors_re_ce93.png"
                className="h-32 bg-transparent bg-center bg-cover opacity-90 w-72 "
                alt=""
              />
            </li>
            <li className="hover:text-sky-600">
              <Link className="flex items-center px-2 py-3 text-base font-bold hover:bg-gradient-to-l from-sky-200 rounded-xl ">
                {" "}
                <AiOutlineSetting className="mr-2 text-2xl" /> Setting{" "}
              </Link>
            </li>
            <li className="hover:text-sky-600">
              <Link className="flex items-center px-2 py-3 text-base font-bold hover:bg-gradient-to-l from-sky-200 rounded-xl ">
                {" "}
                <HiOutlineLogout className="mr-2 text-2xl" /> Log out{" "}
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
