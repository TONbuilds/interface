"use client";
import React, { useEffect, useState } from "react";
import { Alert, Button, Input, Typography } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { App as AntdApp } from "antd";

const { Title, Text } = Typography;

const VerifyOtp: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const { handleOtpVerification } = useAuth();
  const router = useRouter();
  const { notification } = AntdApp.useApp();

  useEffect(() => {
    const emailFromUrl = searchParams.get("email");
    if (emailFromUrl) {
      setEmail(emailFromUrl);
    }
  }, [searchParams]);

  const handleOtpChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleVerifyOtp = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
      setLoading(true);
      try {
        const response = await handleOtpVerification(email, enteredOtp);
        if (response.token) {
          router.push("/bounties");
          notification.success({
            message: "Success",
            description: "OTP Verified Successfully",
            placement: "topRight",
          });
        } else {
          <Alert message="Success Text" type="success" />;
          notification.error({
            message: "Verification Failed",
            description: "OTP Verification Failed",
            placement: "topRight",
          });
        }
      } catch (error: any) {
        notification.error({
          message: error || "Error",
          description: "An error occurred during OTP verification",
          placement: "topRight",
        });
      } finally {
        setLoading(false);
      }
    } else {
      notification.warning({
        message: "Incomplete OTP",
        description: "Please enter the complete 6-digit OTP",
        placement: "topRight",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-xl w-full max-w-md">
        <MailOutlined style={{ fontSize: "3rem", color: "#0AD372" }} />

        <Title level={3} className="mt-4 text-gray-700">
          Verify Your OTP
        </Title>

        <Text className="text-gray-500 mb-4 text-center">
          We have sent a one-time password to{" "}
          <span className="font-semibold text-gray-700">{email}</span>.
        </Text>

        <div className="flex gap-3 mt-4 mb-6">
          {otp.map((digit, index) => (
            <Input
              key={index}
              id={`otp-${index}`}
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:border-[#0AD372] focus:outline-none"
              style={{ fontSize: "1.25rem", transition: "border-color 0.3s" }}
            />
          ))}
        </div>

        <Button
          type="primary"
          loading={loading}
          className="mt-4 w-full bg-[#0AD372] border-none text-lg py-2.5 rounded-lg shadow-md transition-all"
          onClick={handleVerifyOtp}
          style={{
            backgroundColor: "#0AD372",
            borderColor: "transparent",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </Button>
      </div>
    </div>
  );
};

export default VerifyOtp;
