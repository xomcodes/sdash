import React from "react";

import clsx from "clsx";
import { Category, Icon } from "iconsax-react";
import { useRouter } from "next/router";
import { FaRegUser } from "react-icons/fa";
import { PiBriefcaseLight } from "react-icons/pi";
import { SlLock } from "react-icons/sl";
import { useIntl } from "react-intl";

export const SideBarList = () => {
  const { pathname } = useRouter();

  const intl = useIntl();
  const dashboard = intl.messages["page.home.sidebar.dashboard"] as string;
  const customer = intl.messages["page.home.sidebar.customer"] as string;
  const sidebarData = intl.messages[
    "page.home.sidebar.data"
  ] as unknown as Record<string, string>;
  const sidebarLowerData = intl.messages[
    "page.home.sidebar.lowerpartdata"
  ] as unknown as Record<string, string>;

  const listArr = [
    {
      id: 1,
      name: dashboard,
      children: [
        {
          id: 1,
          icon: <Category size="22" />,
          name: sidebarData?.home,
          link: "/",
        },
        {
          id: 2,
          icon: <FaRegUser size="22" />,
          name: sidebarData?.files,
          link: "#",
        },

        {
          id: 3,
          icon: <PiBriefcaseLight size="22" />,
          name: sidebarData?.deadlines,
          link: "#",
        },

        {
          id: 4,
          icon: <SlLock size="22" />,
          name: sidebarData?.management,
          link: "#",
        },
        {
          id: 5,
          icon: <SlLock size="22" />,
          name: sidebarData?.database,
          link: "#",
        },
      ],
    },

    {
      id: 2,
      name: customer,
      children: [
        {
          id: 1,
          icon: <Category size="22" />,
          name: sidebarLowerData?.team,
          link: "#",
        },
        {
          id: 2,
          icon: <FaRegUser size="22" />,
          name: sidebarLowerData?.invoice,
          link: "#",
        },

        {
          id: 3,
          icon: <PiBriefcaseLight size="22" />,
          name: sidebarLowerData?.settings,
          link: "#",
        },

        {
          id: 4,
          icon: <SlLock size="22" />,
          name: sidebarLowerData?.announcement,
          link: "#",
        },
        {
          id: 5,
          icon: <SlLock size="22" />,
          name: sidebarLowerData?.media,
          link: "#",
        },
        {
          id: 6,
          icon: <SlLock size="22" />,
          name: sidebarLowerData?.client,
          link: "#",
        },
      ],
    },
  ];

  return (
    <section className=" flex flex-col gap-[clamp(38px,5vw,72px)]">
      {listArr.map(({ name, id, children }) => (
        <div className="" key={id}>
          <h4 className=" border-b border-b-[#E3E3E3] dark:border-b-grey  pb-[18px] text-[clamp(9px,1vw,16px]) dark:text-white text-[#1F1F1F] font-medium  whitespace-nowrap ">
            {name}
          </h4>
          <ul className="flex flex-col gap-[clamp(14px,1.9vw,16px)] pt-[18px] ">
            {children.map(({ id, icon, name, link }) => (
              <li
                className={clsx(
                  pathname.includes(link) ? " text-blue dark:text-blue" : null,
                  "flex gap-2 items-center dark:text-white text-[#121212] font-normal  text-[14px] cursor-pointer hover:bg-[#2D6DED] hover:text-white    py-1.5 rounded-[5px] px-1 "
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
