import {
  Message,
  SearchNormal,
  Notification,
  Image,
  HambergerMenu,
} from "iconsax-react";
import React from "react";
import { RiSettingsLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiTranslate2 } from "react-icons/ri";
import { TextInput, rem } from "@mantine/core";
import { useTheme } from "next-themes";

export const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <main className="flex justify-between py-[16px] px-[32px] bg-[#F7F7FF] ">
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
            borderRadius: "15px",
            paddingBlock: "15px",
            "&::placeholder": {
              color: "#ccc",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "22.4px",
            },
            "&:focus": {
              border: `${rem(1)} solid #2F70F2`,
            },
          },
        }}
        icon={<SearchNormal size={22} />}
        placeholder="Search Property..."
      />

      <section className="flex gap-[clamp(16px,2.2vw,32px)] items-center ">
        <div className=" flex gap-[clamp(12px,1.6vw,24px)] items-center max-[800px]:hidden">
          <Message size="24" className=" cursor-pointer" />
          <RiSettingsLine size="24" className=" cursor-pointer" />
          <Notification size="24" className=" cursor-pointer" />
          <RiTranslate2 size="24" className=" cursor-pointer" />
        </div>

        <div className=" flex gap-[14px] items-center whitespace-nowrap ">
          <figure className="w-[]">
            <img
              src="/profile-pix.svg"
              alt=" profile picture"
              width={32}
              height={32}
            />
          </figure>
          <h4 className=" text-[16px] font-normal text-[#121212]">
            Alex Smith
          </h4>
          <GiHamburgerMenu size={22} className="cursor-pointer" />
        </div>
      </section>
    </main>
  );
};
