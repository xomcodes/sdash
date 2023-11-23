import { Moon, Sun1 } from "iconsax-react";
import React from "react";

export const ThemeControl = () => {
  return (
    // <main className='flex items-center rounded-xs px-[12px] py-[16px] gap-[12px]'

    // >
    //   <section className='py-[12px] '
    //     sx={{
    //       ...myStyles,
    //       ...getRenderedOption({
    //         light: {
    //           background: "white",
    //           boxShadow: theme.shadows.xs,
    //           borderRadius: theme.radius.xs,
    //           paddingBlock: theme.spacing.xs,
    //           paddingInline: theme.spacing.sm,
    //         },
    //         dark: {},
    //       }),
    //     }}
    //     gap={theme.spacing.sms}
    //     align="center"
    //     onClick={() => toggleColorScheme("light")}
    //   >
    //     <Sun1 size="20" variant="Bold" />
    //     <Title order={4}>Light</Title>
    //   </section>

    //   <Flex
    //     sx={{
    //       color: getRenderedOption({
    //         light: theme.colors.white[7],
    //         dark: "#ffffff",
    //       }),
    //       cursor: "pointer",
    //       ...getRenderedOption({
    //         light: {},
    //         dark: {
    //           background: theme.colors.violet[9],
    //           borderRadius: theme.radius.xs,
    //           paddingBlock: theme.spacing.xs,
    //           paddingInline: theme.spacing.sm,
    //         },
    //       }),
    //     }}
    //     gap={theme.spacing.sms}
    //     align="center"
    //     onClick={() => toggleColorScheme("dark")}
    //   >
    //     <Moon size="20" variant="Outline" />
    //     <Title order={4}>Dark</Title>
    //   </Flex>
    // </main>

    <main className=" bg-gray-300 px-2 py-2 rounded-lg flex gap-3 items-center">
      <section className=" flex gap-1 px-1 py-1 rounded-md bg-white items-center cursor-pointer">
        <Sun1 size="24" variant="Bold" />
        <h2 className=" text-xs font-medium">Light</h2>
      </section>

      <section className=" flex gap-1 items-center">
        <Moon size="22" variant="Outline" />
        <h2 className=" text-xs font-medium ">Dark</h2>
      </section>
    </main>
  );
};
