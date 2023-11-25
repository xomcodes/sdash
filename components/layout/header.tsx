import React from "react";
import { TranslationPopover } from "..";

import { useTheme } from "next-themes";
import { Message, SearchNormal, Notification } from "iconsax-react";
import { RiSettingsLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { Avatar, TextInput, rem } from "@mantine/core";

export const Header = () => {
  // const { resolvedTheme, setTheme } = useTheme();
  return (
    <header className="flex justify-between py-[16px] px-[32px] bg-[#F7F7FF] dark:bg-[#2b396b] ">
      <TextInput
        miw="25%"
        styles={{
          label: {
            color: "#121212",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "22.4px",
          },

          input: {
            paddingLeft: "14px",
            height: "fit-content",
            lineHeight: "normal",
            border: `none`,
            background: "white",
            // background: resolvedTheme === "light" ? "white" : "#FFFFFFCC ",
            borderRadius: "15px",
            paddingBlock: "15px",
            "&::placeholder": {
              color: "#ccc",
              // color: resolvedTheme === "light" ? "#ccc" : "#000 ",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "22.4px",
            },
            "&:focus": {
              border: `${rem(1)} solid #2F70F2`,
            },
          },
        }}
        icon={<SearchNormal size={22} color="#ccc" />}
        placeholder="Search Property..."
      />

      <section className="flex gap-[clamp(16px,2.2vw,32px)] items-center ">
        <div className=" flex gap-[clamp(12px,1.6vw,24px)] items-center max-[800px]:hidden">
          <TranslationPopover />
          <Message size="24" className=" cursor-pointer" />
          <RiSettingsLine size="24" className=" cursor-pointer" />
          <Notification size="24" className=" cursor-pointer" />
        </div>

        <div className=" flex gap-[14px] items-center whitespace-nowrap ">
          <Avatar src="/profile-pix.svg" size={32} />
          <h4 className=" text-[16px] font-normal text-my-black dark:text-white">
            Alex Smith
          </h4>
          <GiHamburgerMenu size={22} className="cursor-pointer" />
        </div>
      </section>
    </header>
  );
};
