"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useProfile } from "@/hooks/useProfile";
import { useAuth } from "@/hooks/useAuth";
import DropdownMenu from "./DropdownMenu";
import AuthModal from "./AuthModal";
import Link from "next/link";
import { App as AntdApp } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

interface AuthProps {
  trigger: boolean;
}

const Auth: React.FC<AuthProps> = ({ trigger }) => {
  console.log(trigger, "trigger");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEmailFormVisible, setIsEmailFormVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { token } = useSelector((state: RootState) => state.auth);
  const { profile, handleFetchProfile } = useProfile();
  const router = useRouter();
  const { handleEmailLogin, handleLogout } = useAuth();
  const { notification } = AntdApp.useApp();

  useEffect(() => {
    if (token && !profile) {
      handleFetchProfile();
    }
  }, [token, profile, handleFetchProfile]);
  const isLoggedIn = !!token && !!profile;

  const userName = profile?.name || "Guest";
  console.log(profile, "checking profile");
  const profilePic = "";

  const menuItems = [
    {
      key: "profile",
      label: <Link href="/profile">Profile</Link>,
    },
    {
      key: "dashboard",
      label: <Link href="/bountydashboard">Dashboard</Link>,
    },

    {
      key: "logout",
      label: (
        <a
          href="#"
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </a>
      ),
    },
  ];

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsEmailFormVisible(false);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleContinueWithEmail = async (email: string) => {
    setIsLoading(true);
    try {
      const res = await handleEmailLogin(email);
      console.log(res.payload, "checking res");
      handleCloseModal();
      notification.open({
        message: "OTP Sent",
        description: res.payload,
        icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
        placement: "topRight",
        duration: 3,
      });
      router.push(`/verify-request?email=${encodeURIComponent(email)}`);
    } catch (error) {
      console.error("Error logging in with email", error);

      notification.open({
        message: "Email Sending Failed",
        description:
          "An error occurred while sending the email. Please try again.",
        icon: <CloseCircleOutlined style={{ color: "#ff4d4f" }} />,
        placement: "topRight",
        duration: 5,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (trigger && !isModalOpen) {
      handleOpenModal();
    }
  }, [trigger, isModalOpen]);

  return (
    <div className="flex items-center gap-4">
      {isLoggedIn ? (
        <DropdownMenu
          userName={userName}
          profilePic={profilePic}
          menuItems={menuItems}
        />
      ) : (
        <>
          {!trigger && (
            <button
              onClick={handleOpenModal}
              className="px-6 py-1.5 text-lg  text-green-500 border rounded-xl bg-gray-50 hover:bg-green-100 hover:opacity-90 transition-opacity font-16"
            >
              Join Us
            </button>
          )}

          <AuthModal
            isModalOpen={isModalOpen}
            handleCloseModal={handleCloseModal}
            isEmailFormVisible={isEmailFormVisible}
            setIsEmailFormVisible={setIsEmailFormVisible}
            handleContinueWithEmail={handleContinueWithEmail}
            email={email}
            setEmail={setEmail}
            isLoading={isLoading}
          />
        </>
      )}
    </div>
  );
};

export default Auth;
