import React from "react";
import { Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ArrowDown, ArrowDown2 } from "iconsax-react";

const data = [
  { id: 1, language: "English" },
  { id: 2, language: "Spanish" },
  { id: 3, language: "Francais" },
];

export const TranslationPopover = () => {
  const [opened, { close, toggle }] = useDisclosure(false);

  return (
    <Popover
      opened={opened}
      onChange={close}
      width="target"
      position="bottom"
      withArrow={false}
    >
      <Popover.Target>
        <Text className="text-sm flex  gap-2 cursor-pointer" onClick={toggle}>
          Pick Language
          <ArrowDown2 size={18} />
        </Text>
      </Popover.Target>
      <Popover.Dropdown
        sx={{
          borderRadius: 8,
        }}
        className="dark:bg-slate-800"
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
