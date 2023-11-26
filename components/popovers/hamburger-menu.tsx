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
    <Menu shadow="md" width="200">
      <Menu.Target>
        <span>
          <GiHamburgerMenu />
        </span>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Smart Transaction</Menu.Label>
        <Menu.Item sx={{}} icon={<Setting size={14} />}>
          Settings
        </Menu.Item>
        <Menu.Item icon={<Message size={14} />}>Messages</Menu.Item>
        <Menu.Item icon={<Notification size={14} />}>Notification</Menu.Item>
        <Menu.Item
          icon={<SearchFavorite size={14} />}
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
        <Menu.Item icon={<Translate size={14} />}>Languages</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
