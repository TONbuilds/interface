"use client";
import React, { useEffect, useState } from "react";
import { Form, Input, Button, Card, Row, Col, Space, Tag, message } from "antd";
import {
  PlusOutlined,
  DollarOutlined,
  FileDoneOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { useProfile } from "@/hooks/useProfile";
import { App as AntdApp } from "antd";

const { TextArea } = Input;

const ProfileCard: React.FC = () => {
  const [form] = Form.useForm();
  const [skills, setSkills] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [totalEarnings, setTotalEarnings] = useState<number>(0);
  const [totalProjects, setTotalProjects] = useState<number>(0);
  const [totalWins, setTotalWins] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const { handleFetchProfile, handleCompleteProfile } = useProfile();
  const { message } = AntdApp.useApp();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await handleFetchProfile();
        console.log(data.payload.name, "Profile data fetched");
        if (data) {
          console.log({
            name: data.payload.name,
            email: data.payload.email,
            walletAddress: data.payload.walletAddress,
            intro: data.payload.intro,
            github: data.payload.socials?.github,
            linkedin: data.payload.socials?.linkedin,
            website: data.payload.socials?.website,
          });
          form.setFieldsValue({
            name: data.payload.name || "",
            email: data.payload.email || "",
            walletAddress: data.payload.walletAddress || "",
            intro: data.payload.intro || "",
            github: data.payload.socials?.github || "",
            linkedin: data.payload.socials?.linkedin || "",
            website: data.payload.socials?.website || "",
          });
          // console.log(data.payload.name, "checking");
          setSkills(data.payload.skills || []);
          setTotalEarnings(data.payload.totalEarning || 0);
          setTotalProjects(data.payload.totalProjectSubmitted || 0);
          setTotalWins(data.payload.totalWin || 0);
        }
      } catch (error: any) {
        message.error("Failed to load profile data.");
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleAddSkill = () => {
    if (inputValue && !skills.includes(inputValue)) {
      setSkills([...skills, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveSkill = (removedSkill: string) => {
    setSkills(skills.filter((skill) => skill !== removedSkill));
  };

  const handleSubmit = async (values: any) => {
    message.success("Profile data submitted successfully.");

    console.log("Form Submitted", values);
    setLoading(true);
    try {
      const profileData = {
        name: values.name,
        email: values.email,
        walletAddress: values.walletAddress,
        intro: values.intro,
        socials: {
          github: values.github,
          linkedin: values.linkedin,
          website: values.website,
        },

        skills,
      };
      await handleCompleteProfile(profileData);
      message.success("Profile data submitted successfully.");
    } catch (error: any) {
      message.error("Failed to submit profile data.");
      console.error("Error submitting profile data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#fff",
        minHeight: "100vh",
        borderRadius: "15px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
        fontFamily: "Inter, sans-serif",
        marginTop: "15px",
        marginBottom: "100px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "40px",
          maxWidth: "900px",
          marginTop: "auto",
        }}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item name="name">
                <Input
                  placeholder="Your Name"
                  style={{ borderRadius: "8px", padding: "12px" }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                rules={[
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  placeholder="Email Address"
                  style={{ borderRadius: "8px", padding: "12px" }}
                  disabled
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="walletAddress"
                rules={[
                  {
                    required: true,
                    message: "Wallet address is required!",
                  },
                ]}
              >
                <Input
                  placeholder="Wallet Address"
                  style={{ borderRadius: "8px", padding: "12px" }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="intro">
                <TextArea
                  rows={1}
                  placeholder="Your Introduction (Optional)"
                  style={{ borderRadius: "8px" }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={8}>
              <Form.Item
                name="github"
                rules={[
                  {
                    pattern:
                      /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+$/,
                    message: "Please enter a valid GitHub profile URL!",
                  },
                ]}
              >
                <Input
                  placeholder="GitHub Profile"
                  style={{ borderRadius: "8px", padding: "12px" }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="linkedin"
                rules={[
                  {
                    pattern:
                      /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+$/,
                    message: "Please enter a valid LinkedIn profile URL!",
                  },
                ]}
              >
                <Input
                  placeholder="LinkedIn Profile"
                  style={{ borderRadius: "8px", padding: "12px" }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="website">
                <Input
                  placeholder="Personal Website"
                  style={{ borderRadius: "8px", padding: "12px" }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={24}>
              <Form.Item>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Space>
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Add a Skill"
                      onPressEnter={handleAddSkill}
                      style={{
                        borderRadius: "8px",
                        padding: "12px",
                        flex: 1,
                      }}
                    />
                    <Button
                      type="primary"
                      icon={<PlusOutlined />}
                      style={{
                        background:
                          "linear-gradient(180deg, #318949 0%, #2C7 100%)",
                        borderRadius: "8px",
                        border: "none",
                        padding: "12px 20px",
                      }}
                      onClick={handleAddSkill}
                    >
                      Add Skill
                    </Button>
                  </Space>
                  <div style={{ marginTop: "10px" }}>
                    {skills.map((skill) => (
                      <Tag
                        key={skill}
                        closable
                        onClose={() => handleRemoveSkill(skill)}
                        style={{
                          marginBottom: "5px",
                          backgroundColor: "#e1f7d5",
                          color: "#56ab2f",
                          borderRadius: "20px",
                        }}
                      >
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </Space>
              </Form.Item>
            </Col>
          </Row>

          <Row justify="end">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              style={{
                background: "linear-gradient(180deg, #318949 0%, #2C7 100%)",
                border: "none",
                padding: "14px 20px",
                fontSize: "16px",
                borderRadius: "8px",
                width: "100%",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
              }}
            >
              {loading ? "Saving..." : "Save Profile"}{" "}
            </Button>
          </Row>
        </Form>
      </div>

      <Row gutter={[16, 16]} style={{ marginTop: "40px" }} justify="center">
        <Col xs={24} sm={12} md={8}>
          <Card
            style={{
              textAlign: "center",
              background: "linear-gradient(135deg, #56ab2f, #a8e063)",
              color: "white",
              borderRadius: "15px",
              padding: "15px 20px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              height: "180px",
            }}
          >
            <DollarOutlined
              style={{ fontSize: "40px", marginBottom: "15px" }}
            />
            <h3>Total Earnings</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              {totalEarnings}
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            style={{
              textAlign: "center",
              background: "linear-gradient(135deg, #ff5e62, #ff9966)",
              color: "white",
              borderRadius: "15px",
              padding: "15px 20px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              height: "180px",
            }}
          >
            <FileDoneOutlined
              style={{ fontSize: "40px", marginBottom: "15px" }}
            />
            <h3>Total Projects Submitted</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>
              {totalProjects}
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            style={{
              textAlign: "center",
              background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
              color: "white",
              borderRadius: "15px",
              padding: "15px 20px",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              height: "180px",
            }}
          >
            <TrophyOutlined
              style={{ fontSize: "40px", marginBottom: "15px" }}
            />
            <h3>Total Wins</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>{totalWins}</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileCard;
