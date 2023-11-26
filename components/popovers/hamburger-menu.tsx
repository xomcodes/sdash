import { Menu, Button, Text } from "@mantine/core";
import {
  Message,
  Notification,
  SearchFavorite,
  Setting,
  Translate,
} from "iconsax-react";
import { GiHamburgerMenu } from "react-icons/gi";

export const HamburgerMenu = () => {
  return (
    <Menu shadow="md" width="200" position="bottom-end">
      <Menu.Target>
        <span>
          <GiHamburgerMenu />
        </span>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Smart Transaction</Menu.Label>
        <Menu.Item
          sx={{}}
          icon={<Setting size={14} className="cursor-pointer" />}
        >
          Settings
        </Menu.Item>
        <Menu.Item icon={<Message size={14} className="cursor-pointer" />}>
          Messages
        </Menu.Item>
        <Menu.Item icon={<Notification size={14} className="cursor-pointer" />}>
          Notification
        </Menu.Item>
        <Menu.Item
          icon={<SearchFavorite size={14} className="cursor-pointer" />}
          rightSection={
            <Text size="xs" color="dimmed">
              ⌘K
            </Text>
          }
        >
          Search
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Language Zone</Menu.Label>
        <Menu.Item icon={<Translate size={14} className="cursor-pointer" />}>
          Languages
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
