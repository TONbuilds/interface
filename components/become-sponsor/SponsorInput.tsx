"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Form, Input, Button, Upload, Typography, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { uploadMedia } from "@/api/api";
import { useProfile } from "@/hooks/useProfile";
import HostCompetition from "./HostCompetition";

const { Title, Text } = Typography;

const MAX_FILE_SIZE_MB = 5; // Set maximum file size to 5MB

const SponsorInput = () => {
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [profilePicturePath, setProfilePicturePath] = useState("");
  const [companyLogoPath, setCompanyLogoPath] = useState("");
  const [isHostCompetitionOpen, setIsHostCompetitionOpen] = useState(false);
  const [form] = Form.useForm();
  const { profile, handleFetchProfile, handleCompleteProfile } = useProfile();

  const toggleHostCompetition = () => {
    setIsHostCompetitionOpen(!isHostCompetitionOpen);
  };

  const handleUploadChange = async (info: any, type: "profile" | "logo") => {
    const file = info.fileList[0]?.originFileObj;
    if (!file) return;

    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      message.error(`File size exceeds ${MAX_FILE_SIZE_MB}MB.`);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    setUploading(true);

    try {
      const response = await uploadMedia(formData);
      message.success("File uploaded successfully!");
      const uploadedPath = response.data.data.fileName;
      console.log(uploadedPath, "uploadedPath");
      if (type === "profile") {
        setProfilePicturePath(uploadedPath);
      } else if (type === "logo") {
        setCompanyLogoPath(uploadedPath);
      }
    } catch (error) {
      console.error("File upload error:", error);
      message.error("Failed to upload the file. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const onFinish = async (values: any) => {
    setSubmitting(true);
    try {
      const sponsorData = {
        firstName: values.firstName,
        lastName: values.lastName,
        userName: values.userName,
        profilePic: profilePicturePath || "",
        company: {
          name: values.company_name,
          userName: values.company_username,
          website: values.company_url,
          entityName: values.entity,
          logo: companyLogoPath || "",
          twitter: values.company_twitter || "",
          industry: values.industry ? values.industry.split(",") : [],
          bio: values.company_bio || "",
        },
      };

      await handleCompleteProfile(sponsorData);
      message.success("Sponsor created successfully!");
      setIsHostCompetitionOpen(true);
      // router.push("/bounties");
      form.resetFields();
      setProfilePicturePath("");
      setCompanyLogoPath("");
    } catch (error) {
      console.error("Error while creating sponsor:", error);
      message.error(
        "Failed to create sponsor. Please ensure all required fields are filled."
      );
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (!profile) {
      handleFetchProfile();
    }
  }, [profile, handleFetchProfile]);

  // const firstName = profile?.firstName;
  // const lastName = profile?.lastName;
  // const username = profile?.userName;

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col gap-10 w-[50%]">
        <div className="flex flex-col justify-center items-center">
          <Title level={2} className="text-[#2D3748]">
            Welcome to XYZ
          </Title>
          <Text className="text-[#A0AEC0] text-xl font-medium">
            Lets start with some basic information about your company.
          </Text>
        </div>
        <Form
          onFinish={onFinish}
          layout="vertical"
          form={form}
          initialValues={{ remember: true }}
          className="w-full"
        >
          <div className="flex flex-col gap-6 w-full">
            <Title level={3} className="text-[#475569]">
              About You
            </Title>
            <div className="flex items-center justify-between">
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: "First Name is required!" }]}
                className="w-[48%]"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[{ required: true, message: "Last Name is required!" }]}
                className="w-[48%]"
              >
                <Input />
              </Form.Item>
            </div>
            <Form.Item
              label="User Name"
              name="userName"
              rules={[{ required: true, message: "Username is required!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Profile Picture"
              name="profile_picture"
              extra="SVG, PNG, JPG or GIF (MAX. 800x400px, 5MB)"
            >
              <Upload
                name="file"
                listType="picture"
                onChange={(info) => handleUploadChange(info, "profile")}
                beforeUpload={() => false}
                maxCount={1}
              >
                <Button icon={<UploadOutlined />} disabled={uploading}>
                  {uploading ? "Uploading..." : "Click to upload"}
                </Button>
              </Upload>
            </Form.Item>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <Title level={3} className="text-[#475569]">
              About Your Company
            </Title>
            <div className="flex items-center justify-between">
              <Form.Item
                label="Company Name"
                name="company_name"
                rules={[
                  { required: true, message: "Company Name is required!" },
                ]}
                className="w-[48%]"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Company Username"
                name="company_username"
                rules={[
                  { required: true, message: "Company Username is required!" },
                ]}
                className="w-[48%]"
              >
                <Input />
              </Form.Item>
            </div>
            <div className="flex items-center justify-between">
              <Form.Item
                label="Company Twitter"
                name="company_twitter"
                rules={[
                  {
                    type: "url",
                    message: "Please enter a valid URL!",
                  },
                ]}
                className="w-[48%]"
              >
                <Input placeholder="e.g., https://twitter.com/yourcompany" />
              </Form.Item>
              <Form.Item
                label="Entity Name"
                name="entity"
                rules={[
                  { required: true, message: "Entity Name is required!" },
                ]}
                className="w-[48%]"
              >
                <Input />
              </Form.Item>
            </div>
            <Form.Item
              label="Company Logo"
              name="company_logo"
              extra="SVG, PNG, JPG (MAX. 800x400px, 5MB)"
            >
              <Upload
                name="file"
                listType="picture"
                beforeUpload={() => false}
                onChange={(info) => handleUploadChange(info, "logo")}
                maxCount={1}
              >
                <Button icon={<UploadOutlined />} disabled={uploading}>
                  {uploading ? "Uploading..." : "Click to upload"}
                </Button>
              </Upload>
            </Form.Item>
            <Form.Item
              label="Industry"
              name="industry"
              rules={[{ required: true, message: "Industry is required!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Company Short Bio" name="company_bio">
              <Input.TextArea placeholder="What does your company do?" />
            </Form.Item>
          </div>

          <Form.Item className="flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              disabled={uploading || submitting}
              className="bg-gradient-to-b from-[#318949] to-[#22CC77] py-2 rounded-lg text-white w-full"
            >
              {submitting ? "Submitting..." : "Create Sponsor"}
            </Button>
          </Form.Item>
        </Form>
        <HostCompetition
          isOpen={isHostCompetitionOpen}
          togglePopup={toggleHostCompetition}
        />{" "}
      </div>
    </div>
  );
};

export default SponsorInput;
