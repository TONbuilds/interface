import React from "react";
import { Dropdown, Avatar } from "antd";
import { MenuProps } from "antd";
import Image from "next/image";

interface DropdownMenuProps {
  userName: string;
  profilePic?: string;
  menuItems: MenuProps["items"];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  userName,
  profilePic,
  menuItems,
}) => {
  return (
    <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
      <div className="flex items-center gap-2 cursor-pointer">
        {profilePic ? (
          <Image
            src={profilePic}
            alt="Profile"
            height={32}
            width={32}
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <Avatar
            size={32}
            style={{
              backgroundColor: "#0AD372",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {userName.charAt(0).toUpperCase()}
          </Avatar>
        )}
        <span className="text-white">{userName}</span>
      </div>
    </Dropdown>
  );
};

export default DropdownMenu;
