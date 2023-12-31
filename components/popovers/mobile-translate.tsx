import React, { useState } from "react";
import Link from "next/link";

import { Popover } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Translate } from "iconsax-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const data = [
  { id: 1, language: "English" },
  { id: 2, language: "Spanish" },
  { id: 3, language: "Francais" },
];

export const MobileTranslate = () => {
  const { resolvedTheme } = useTheme();
  const [opened, { close, toggle }] = useDisclosure(false);
  const { locales } = useRouter();
  return (
    <Popover width={100} position="bottom" withArrow={false}>
      <Popover.Target>
        <span className=" cursor-pointer">
          <Translate
            size="22"
            className=" cursor-pointer"
            color={resolvedTheme === "light" ? "black" : "white"}
          />
        </span>
      </Popover.Target>
      <Popover.Dropdown
        sx={{
          borderRadius: 8,
        }}
        className="dark:bg-my-blue dark:border-none"
      >
        <div className=" flex flex-col gap-1">
          {[...(locales as string[])].sort().map((locale) => (
            <div
              className="iflex gap-2 p-2 rounded-lg hover:bg-[#ddd] dark:hover:bg-[#2D6DED]"
              key={locale}
            >
              <Link
                href="/"
                locale={locale}
                onClick={() => {
                  close();
                }}
              >
                {locale === "en"
                  ? "English"
                  : locale === "chn"
                  ? "Chinese"
                  : "Dutch"}
              </Link>
            </div>
          ))}
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};
