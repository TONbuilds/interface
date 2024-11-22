"use client";
import React, { useState } from "react";
import { Modal, Button, Input, Form } from "antd";
import { createSubmission } from "@/api/api";
import { App as AntdApp } from "antd";

interface SubmissionModalProps {
  postId: string;
}

const SubmissionModal = ({ postId }: SubmissionModalProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const { notification } = AntdApp.useApp();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleSubmit = async (values: any) => {
    try {
      const result = await createSubmission(postId, values);

      console.log(result, "result");

      notification.success({
        message: "Submission Successful!",
        description: "Your submission has been successfully uploaded.",
        placement: "topRight",
      });
      // router.push("/bountydashboard");
      console.log("Submitted", result);
      handleCancel();
    } catch (error) {
      console.error("Error creating submission:", error);
      notification.error({
        message: "Submission Failed",
        description: "Something went wrong. Please try again.",
        placement: "topRight",
      });
    }
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <div className="bounty-submission">
      <Button type="primary" onClick={showModal}>
        Submit Now
      </Button>

      <Modal
        title="Bounty  Submission"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="submission-modal"
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            label="Link to Your Submission"
            name="submissionLink"
            rules={[
              { required: true, message: "Please input the submission link!" },
              {
                type: "url",
                message: "Please enter a valid URL!",
              },
            ]}
          >
            <Input placeholder="Enter Link to Your Submission" />
          </Form.Item>

          <Form.Item
            label="Tweet Link"
            name="tweetLink"
            rules={[
              {
                type: "url",
                message: "Please enter a valid Tweet URL!",
              },
            ]}
          >
            <Input placeholder="Enter Tweet Link" />
          </Form.Item>

          <Form.Item
            label="Project Title"
            name="projectTitle"
            rules={[
              { required: true, message: "Please input the project title!" },
              {
                max: 100,
                message: "Project title cannot exceed 100 characters!",
              },
            ]}
          >
            <Input placeholder="Enter Project Title" />
          </Form.Item>

          <Form.Item
            label="Project Description"
            name="projectDescription"
            rules={[
              {
                required: true,
                message: "Please input the project description!",
              },
              {
                max: 500,
                message: "Description cannot exceed 500 characters!",
              },
            ]}
          >
            <Input.TextArea placeholder="Enter Project Description" rows={4} />
          </Form.Item>

          <Form.Item
            label="Project GitHub Link"
            name="projectGithubLink"
            rules={[
              { required: true, message: "Please input the GitHub link!" },
              {
                type: "url",
                message: "Please enter a valid GitHub URL!",
              },
            ]}
          >
            <Input placeholder="Enter GitHub Link" />
          </Form.Item>

          <Form.Item
            label="Project Website"
            name="projectWebsite"
            rules={[
              { required: true, message: "Please input the project website!" },
              {
                type: "url",
                message: "Please enter a valid Website URL!",
              },
            ]}
          >
            <Input placeholder="Enter Project Website" />
          </Form.Item>

          <Form.Item
            label="Project Twitter Profile Link"
            name="projectTwitterProfile"
            rules={[
              {
                required: true,
                message: "Please input the Twitter profile link!",
              },
              {
                type: "url",
                message: "Please enter a valid Twitter Profile URL!",
              },
            ]}
          >
            <Input placeholder="Enter Twitter Profile Link" />
          </Form.Item>

          <Form.Item
            label="Anything Else"
            name="anythingElse"
            rules={[
              {
                max: 300,
                message: "Additional information cannot exceed 300 characters!",
              },
            ]}
          >
            <Input.TextArea placeholder="Additional Information" rows={2} />
          </Form.Item>

          <Form.Item
            label="Your TON Wallet Address"
            name="tonWalletAddress"
            rules={[
              {
                required: true,
                message: "Please input your TON wallet address!",
              },
            ]}
          >
            <Input placeholder="Enter TON Wallet Address" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default SubmissionModal;
