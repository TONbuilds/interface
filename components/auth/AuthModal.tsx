import React from "react";
import { Modal, Button, Input, Divider } from "antd";
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";

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
            <Button
              type="primary"
              icon={<GoogleOutlined />}
              className="w-full py-3 text-xl text-green-500 border border-green-500 hover:bg-green-100 hover:text-white hover:opacity-80 pt-4 pb-4"
              loading={isLoading}
              style={{ backgroundColor: "#22c55e", color: "#fff" }}
            >
              Continue with Google
            </Button>
            <Divider plain className="text-lg text-gray-700">
              OR
            </Divider>
            <Button
              type="default"
              icon={<MailOutlined />}
              className="w-full py-3 text-xl text-green-500 border border-green-500 hover:bg-green-100 hover:text-white hover:opacity-80 pt-4 pb-4"
              onClick={() => setIsEmailFormVisible(true)}
              style={{ backgroundColor: "#22c55e", color: "#fff" }}
            >
              Continue with Email
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default AuthModal;
