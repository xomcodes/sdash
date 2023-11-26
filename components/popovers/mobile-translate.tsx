import React, { useState } from "react";
import { Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ArrowDown, ArrowDown2, Translate } from "iconsax-react";
import { useTheme } from "next-themes";

const data = [
  { id: 1, language: "English" },
  { id: 2, language: "Spanish" },
  { id: 3, language: "Francais" },
];

export const MobileTranslate = () => {
  const { resolvedTheme } = useTheme();
  return (
    <Popover width={100} position="bottom" withArrow={false}>
      <Popover.Target>
        <span>
          <Translate
            size="22"
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
          {data.map(({ id, language }) => (
            <div
              className="iflex gap-2 p-2 rounded-lg hover:bg-[#ddd] dark:hover:bg-slate-700"
              key={id}
            >
              <Text className="cursor-pointer">{language}</Text>
            </div>
          ))}
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};
