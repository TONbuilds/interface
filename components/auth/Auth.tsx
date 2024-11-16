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

  useEffect(() => {
    if (token && !profile) {
      handleFetchProfile();
    }
  }, [token, profile, handleFetchProfile]);
  const isLoggedIn = !!token && !!profile;

  const userName = profile?.firstName || "Guest";
  const profilePic = "";

  const menuItems = [
    {
      key: "profile",
      label: <Link href="/profile">Profile</Link>,
    },
    {
      key: "editProfile",
      label: <Link href="/edit-profile">Edit Profile</Link>,
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
      await handleEmailLogin(email);
      handleCloseModal();
      router.push(`/verify-request?email=${encodeURIComponent(email)}`);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (trigger) {
      handleOpenModal();
    }
  }, [trigger]);

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
              className="px-6 py-3 text-lg font-bold text-green-500 border rounded-xl bg-gray-100 hover:bg-green-100 hover:opacity-90 transition-opacity"
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
