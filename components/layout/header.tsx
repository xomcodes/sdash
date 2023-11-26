import React from "react";

import { Message, SearchNormal, Notification } from "iconsax-react";
import { RiSettingsLine } from "react-icons/ri";

import { Avatar, TextInput, rem } from "@mantine/core";
import { HamburgerMenu, TranslationPopover } from "@/popovers";

export const Header = () => {
  return (
    <header className="flex justify-between py-[16px] px-[32px] bg-[#F7F7FF] dark:bg-[#2b396b] ">
      <div className=" max-[811px]:hidden">
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
              border: "0.0625rem solid transparent",
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
      </div>

      <div className=" flex justify-between  items-center max-[960px]:w-full">
        <section className="flex gap-[clamp(16px,2.2vw,32px)] items-center ">
          <div className=" flex gap-[clamp(12px,1.6vw,24px)] items-center max-[961px]:hidden">
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
          </div>

          <article className="  gap-[clamp(16px,2.2vw,32px)] items-center hidden max-[960px]:flex">
            <TranslationPopover />
          </article>
        </section>
        <article className="  gap-[clamp(16px,2.2vw,32px)] items-center hidden max-[960px]:flex max-[960px]:items-end ">
          <HamburgerMenu />
        </article>
      </div>
    </header>
  );
};
