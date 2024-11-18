import React, { useEffect, useState } from "react";
import { Button, Modal, Input, Card, Spin } from "antd";
import {
  CalendarOutlined,
  DollarCircleOutlined,
  EditOutlined,
  LinkOutlined,
  SendOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { useBounties } from "@/hooks/useBounties";
import { createSubmission } from "@/api/api";
import { App as AntdApp } from "antd";
import { useRouter } from "next/navigation";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

interface BountyDetailsProps {
  postId: string;
}

const BountyDetails: React.FC<BountyDetailsProps> = ({ postId }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const { notification } = AntdApp.useApp();
  const router = useRouter();
  const { token } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async () => {
    const submissionData = {
      description,
      url,
    };
    try {
      const result = await createSubmission(postId, submissionData);
      notification.success({
        message: "Submission Successful!",
        description: "Your submission has been successfully uploaded.",
        placement: "topRight",
      });
      router.push("/bountydashboard");
      console.log("Submitted", result);
      handleCancel();
      setUrl("");
      setDescription("");
    } catch (error) {
      console.error("Error creating submission:", error);
      notification.error({
        message: "Submission Failed",
        description: "Something went wrong. Please try again.",
        placement: "topRight",
      });
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { handleFetchBountyDetails, selectedBounty, status, error } =
    useBounties();

  useEffect(() => {
    const fetchSingleBountyData = async () => {
      try {
        await handleFetchBountyDetails(postId);
      } catch (err) {
        console.error("Error fetching single bounty:", err);
      }
    };

    if (!selectedBounty || selectedBounty._id !== postId) {
      fetchSingleBountyData();
    }
  }, [postId, handleFetchBountyDetails, selectedBounty]);

  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  if (error) return <div>Error loading data</div>;

  return (
    <div>
      <div
        className="w-full relative flex items-center justify-center"
        style={{
          height: "50vh",
          background: "linear-gradient(90deg, #22CC77 0%, #318949 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">
            {selectedBounty?.title || "Bounty Details"}
          </h1>
          <p className="text-lg">
            Discover and participate in this exciting bounty challenge.
          </p>
        </div>
      </div>

      {status === "loading" && (
        <div className="w-full flex justify-center items-center">
          <Spin size="large" />
        </div>
      )}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <div className="flex w-[90%] flex-col md:flex-row justify-center gap-8 py-12 px-6 ml-auto mr-auto">
          <Card
            className="shadow-lg rounded-xl p-6 w-full md:w-2/3 flex flex-col gap-6"
            style={{
              borderColor: "#E0E0E0",
              borderRight: "4px solid #E0E0E0",
              background: "linear-gradient(90deg, #ffffff 70%, #f9f9f9)",
              overflow: "hidden",
            }}
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#2D3748]">
                  {selectedBounty?.title || "Exciting Bounty Challenge"}
                </h2>
                <p className="text-sm text-[#718096] mt-2 break-words">
                  {selectedBounty?.description ||
                    "Complete this challenge before the deadline and win amazing rewards!"}
                </p>
              </div>
              <div
                className="flex justify-center items-center w-20 h-20 bg-white rounded-full shadow-lg"
                style={{
                  overflow: "hidden",
                  border: "2px solid #E0E0E0",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={selectedBounty?.logo || "/placeholder.png"}
                  height={120}
                  width={120}
                  alt="bounty logo"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Date and Reward Section */}
            <div className="flex items-center gap-4 w-full mt-7">
              <div className="flex flex-col items-start w-1/2">
                <div className="flex items-center justify-center gap-2">
                  <CalendarOutlined className="text-2xl text-[#22CC77]" />
                  <h3 className="text-xl font-bold text-[#475569] mb-0">
                    End Date
                  </h3>
                </div>
                <p className="text-lg font-medium text-[#2D3748] mt-2 ml-8">
                  {formatDate(
                    selectedBounty?.endDate || new Date().toISOString()
                  )}
                </p>
                <p className="text-sm text-[#718096] italic">
                  Complete before the deadline to win!
                </p>
              </div>

              <div className="flex flex-col items-start w-1/2">
                <div className="flex items-center justify-center gap-2">
                  <DollarCircleOutlined className="text-2xl text-[#FFD700]" />
                  <h3 className="text-xl font-bold text-[#475569] mb-0">
                    Bounty Reward
                  </h3>
                </div>
                <p className="text-lg font-medium text-[#2D3748] mt-2 ml-8">
                  {selectedBounty?.bounty || "TBD"} TON
                </p>
                <p className="text-sm text-[#718096] italic">
                  Earn TON tokens for completing this challenge!
                </p>
              </div>
            </div>
          </Card>

          <div
            className="flex flex-col justify-between bg-white rounded-lg p-6 shadow-md w-full md:w-1/3 h-80"
            style={{ borderColor: "#E0E0E0" }}
          >
            {/* Top Section with Icon */}
            <div className="flex flex-col items-center">
              <img
                src="https://cdn.pixabay.com/photo/2016/10/10/14/46/icon-1728549_640.jpg"
                alt="Submit Icon"
                className="h-16 w-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-[#2D3748] mb-4">
                Ready to Submit?
              </h3>

              {token ? (
                <Button
                  type="primary"
                  size="large"
                  className="bg-[#22CC77] text-white hover:bg-[#318949] w-full"
                  onClick={showModal}
                >
                  Submit Your Work
                </Button>
              ) : (
                <>
                  <Button
                    type="primary"
                    size="large"
                    className="bg-[#22CC77] text-white hover:bg-[#318949] w-full"
                    onClick={showModal}
                    disabled
                  >
                    Submit Your Work
                  </Button>
                  <div className="text-red-500 text-center">
                    Please log in to submit your work.
                  </div>
                </>
              )}
            </div>

            <div className="text-sm text-gray-600 mt-4 text-center">
              Make sure to include all relevant details before submission.{" "}
              <br />
              Need help?{" "}
              <a href="#" className="text-[#22CC77] underline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      )}

      <Modal
        title={
          <div className="text-center text-xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <UploadOutlined style={{ color: "#22CC77", fontSize: "24px" }} />
            Submit Your Work
          </div>
        }
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        width={500}
        className="custom-modal"
      >
        <div className="flex flex-col gap-6 p-4">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <EditOutlined style={{ color: "#22CC77" }} />
              Description
            </label>
            <Input.TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe your bounty project here..."
              rows={4}
              className="rounded-lg border-gray-300 focus:ring-[#22CC77] focus:border-[#22CC77]"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <LinkOutlined style={{ color: "#22CC77" }} />
              URL
            </label>
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your project URL"
              className="rounded-lg border-gray-300 focus:ring-[#22CC77] focus:border-[#22CC77]"
            />
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              type="primary"
              onClick={handleSubmit}
              className="w-full rounded-full px-6 py-3 bg-gradient-to-r from-[#22CC77] to-[#318949] text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <SendOutlined />
              Submit Your Work
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BountyDetails;
