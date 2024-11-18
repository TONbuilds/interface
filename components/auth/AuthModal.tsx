"use client";
import React from "react";
import { Modal, Button, Input, Divider } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "@/hooks/useAuth";
import { App as AntdApp } from "antd";

interface AuthModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  isEmailFormVisible: boolean;
  setIsEmailFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleContinueWithEmail: (email: string) => Promise<void>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isModalOpen,
  handleCloseModal,
  isEmailFormVisible,
  setIsEmailFormVisible,
  handleContinueWithEmail,
  email,
  setEmail,
  isLoading,
}) => {
  const { notification } = AntdApp.useApp();

  const { handleGoogleLogin } = useAuth();
  const googleLogin = async (response: any) => {
    try {
      handleGoogleLogin(response);
      notification.success({
        message: "Login Successful",
        description: "You have logged in successfully using Google.",
        placement: "topRight",
      });
    } catch (err) {
      console.error("Google Login Failed:", err);
      notification.error({
        message: "Login Failed",
        description:
          "There was an issue logging you in. Please try again later.",
        placement: "topRight",
      });
    }
  };
  const googleLoginError = () => {
    notification.error({
      message: "Login Failed",
      description: "There was an issue logging you in. Please try again later.",
      placement: "topRight",
    });
  };
  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCloseModal}
      footer={null}
      centered
      className="custom-modal"
    >
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-green-500">
          You are One Step Away
        </h2>
        <p className="text-lg text-gray-600">
          From earning in global standards
        </p>

        {isEmailFormVisible ? (
          <div className="mt-4 space-y-4">
            <Input
              placeholder="Enter your email address"
              prefix={<MailOutlined />}
              className="mb-4 py-2 border rounded-xl"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="primary"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-xl font-semibold"
              onClick={() => handleContinueWithEmail(email)}
              loading={isLoading}
              style={{ backgroundColor: "#22c55e", color: "#fff" }}
            >
              Continue with Email
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <GoogleLogin onSuccess={googleLogin} onError={googleLoginError} />
            <Divider plain className="text-lg text-gray-700">
              OR
            </Divider>
            <Button
              type="default"
              icon={
                <MailOutlined
                  style={{ fontSize: "22px", marginRight: "10px" }}
                />
              }
              className="w-full py-4 text-xl text-white border border-green-500 hover:bg-green-100 hover:text-white hover:opacity-80 email-login-btn"
              onClick={() => setIsEmailFormVisible(true)}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                Continue with Email
              </span>
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default AuthModal;
