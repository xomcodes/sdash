import { clsx } from "@mantine/core";
import { Moon, Sun1 } from "iconsax-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export const ThemeControl = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <main className=" bg-gray-300 dark:bg-[#2D6DED] w-fit px-2 py-2 rounded-lg flex gap-2 items-center">
      {/* #282541 */}
      <section
        onClick={() => setTheme("light")}
        className={clsx(
          resolvedTheme === "light"
            ? " rounded-md bg-white"
            : "bg-[transparent]",
          "flex gap-1 items-center cursor-pointer py-1 px-2"
        )}
      >
        <Sun1
          size="24"
          color={resolvedTheme === "light" ? "#000" : "#fff"}
          variant="Bold"
        />
        <h2
          className={clsx(
            resolvedTheme === "light" ? "#000" : "#5B5A5A",
            " text-xs font-medium"
          )}
        >
          Light
        </h2>
      </section>
      <section
        onClick={() => setTheme("dark")}
        className={clsx(
          resolvedTheme === "dark"
            ? "rounded-md bg-[#111C44]"
            : "bg-[transparent]",
          "flex gap-1 py-1 px-2 items-center cursor-pointer"
        )}
      >
        <Moon
          size="22"
          color={resolvedTheme === "light" ? "#5B5A5A" : "#fff"}
          variant="Outline"
        />
        <h2
          className={clsx(
            resolvedTheme === "light" ? "#5B5A5A" : "#fff",
            " text-xs font-medium "
          )}
        >
          Dark
        </h2>
      </section>
    </main>
  );
};
