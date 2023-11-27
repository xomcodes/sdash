import React from "react";
import { Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ArrowDown2 } from "iconsax-react";
import { useRouter } from "next/router";
import Link from "next/link";

const data = [
  { id: 1, language: "English" },
  { id: 2, language: "Spanish" },
  { id: 3, language: "Francais" },
];

export const TranslationPopover = () => {
  const [opened, { close, toggle }] = useDisclosure(false);
  const { locales } = useRouter();

  return (
    // <Popover
    //   opened={opened}
    //   onChange={close}
    //   width="target"
    //   position="bottom"
    //   withArrow={false}
    // >
    //   <Popover.Target>
    //     <Text className="text-sm flex  gap-2 cursor-pointer" onClick={toggle}>
    //       Pick Language
    //       <ArrowDown2 size={18} />
    //     </Text>
    //   </Popover.Target>
    //   <Popover.Dropdown
    //     sx={{
    //       borderRadius: 8,
    //     }}
    //     className="dark:bg-my-blue dark:border-none"
    //   >
    //     <div className=" flex flex-col gap-1">
    //       {data.map(({ id, language }) => (
    //         <div
    //           className="iflex gap-2 p-2 rounded-lg hover:bg-[#ddd] dark:hover:bg-[#2D6DED] "
    //           key={id}
    //         >
    //           <Text className="cursor-pointer">{language}</Text>
    //         </div>
    //       ))}
    //     </div>
    //   </Popover.Dropdown>
    // </Popover>

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
                  : locale === "fr"
                  ? "French"
                  : "Dutch"}
                {/* <Text className="cursor-pointer">{l}</Text> */}
              </Link>
            </div>
          ))}
        </div>
      </Popover.Dropdown>
    </Popover>
  );
};
