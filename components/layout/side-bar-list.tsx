import clsx from "clsx";
import { link } from "fs";
import { Category, Icon } from "iconsax-react";
import { useRouter } from "next/router";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { PiBriefcaseLight } from "react-icons/pi";
import { SlLock } from "react-icons/sl";

export const SideBarList = () => {
  const { pathname } = useRouter();
  const listArr = [
    {
      id: 1,
      name: "Dashboard",
      children: [
        {
          id: 1,
          icon: <Category size="22" color="#121212" />,
          name: "Home",
          link: "/",
        },
        {
          id: 2,
          icon: <FaRegUser size="22" color="#121212" />,
          name: "Files",
          link: "#",
        },

        {
          id: 3,
          icon: <PiBriefcaseLight size="22" color="#121212" />,
          name: "Deadline Project",
          link: "#",
        },

        {
          id: 4,
          icon: <SlLock size="22" color="#121212" />,
          name: "Management",
          link: "#",
        },
        {
          id: 5,
          icon: <SlLock size="22" color="#121212" />,
          name: "Database",
          link: "#",
        },
      ],
    },

    {
      id: 2,
      name: "Customer Data",
      children: [
        {
          id: 1,
          icon: <Category size="22" color="#121212" />,
          name: "Team Award",
          link: "#",
        },
        {
          id: 2,
          icon: <FaRegUser size="22" color="#121212" />,
          name: "Invoice Data",
          link: "#",
        },

        {
          id: 3,
          icon: <PiBriefcaseLight size="22" color="#121212" />,
          name: "Settings",
          link: "#",
        },

        {
          id: 4,
          icon: <SlLock size="22" color="#121212" />,
          name: "Announcement",
          link: "#",
        },
        {
          id: 5,
          icon: <SlLock size="22" color="#121212" />,
          name: "Media Assets",
          link: "#",
        },
        {
          id: 6,
          icon: <SlLock size="22" color="#121212" />,
          name: "Client Feedback",
          link: "#",
        },
      ],
    },
  ];

  return (
    <section className=" flex flex-col gap-[clamp(38px,5vw,72px)]">
      {listArr.map(({ name, id, children }) => (
        <div className="" key={id}>
          <h4 className=" border-b border-b-[#E3E3E3] pb-[18px] text-[clamp(9px,1vw,16px]) text-[#1F1F1F] font-medium  ">
            {name}
          </h4>
          <ul className="flex flex-col gap-[clamp(14px,1.9vw,16px)] pt-[18px] ">
            {children.map(({ id, icon, name, link }) => (
              <li
                className={clsx(
                  pathname.includes(link) ? " text-blue" : null,
                  "flex gap-2 items-center text-[#121212] font-normal  text-[14px] cursor-pointer hover:bg-grey py-1.5 rounded-[5px] px-1 "
                )}
                key={id}
              >
                {icon}
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
