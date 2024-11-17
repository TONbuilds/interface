import React, { useEffect, useState } from "react";
import { Button, Modal, Input, Card, Spin } from "antd";
import { CalendarOutlined, DollarCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useBounties } from "@/hooks/useBounties";

interface BountyDetailsProps {
  postId: string;
}

const BountyDetails: React.FC<BountyDetailsProps> = ({ postId }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    console.log("Submitted", { description, url });
    setIsModalVisible(false);
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
        <div
          className="flex w-[90%] flex-col md:flex-row justify-center gap-8 py-12 px-6 ml-auto mr-auto"
          style={{ maxHeight: "80vh" }}
        >
          <Card
            className="shadow-lg rounded-xl p-6 w-full md:w-2/3 flex flex-col gap-6"
            style={{
              borderColor: "#E0E0E0",
              borderRight: "4px solid #E0E0E0",
              background: "linear-gradient(90deg, #ffffff 70%, #f9f9f9)",
            }}
          >
            {/* Title and Logo */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <h2 className="text-3xl font-bold text-[#2D3748]">
                  {selectedBounty?.title || "Exciting Bounty Challenge"}
                </h2>
                <p className="text-sm text-[#718096] mt-2">
                  Complete this challenge before the deadline and win amazing
                  rewards!
                </p>
              </div>
              <div
                className="flex justify-center items-center w-20 h-20 bg-white rounded-full shadow-lg"
                style={{ overflow: "hidden", border: "2px solid #E0E0E0" }}
              >
                <Image
                  src={selectedBounty?.logo || "/placeholder.png"}
                  height={80}
                  width={80}
                  alt="bounty logo"
                  className="object-cover"
                />
              </div>
            </div>

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
            className="flex flex-col justify-center items-center bg-white rounded-lg p-6 shadow-md w-full md:w-1/3"
            style={{ borderColor: "#E0E0E0" }}
          >
            <h3 className="text-xl font-semibold text-[#2D3748] mb-4">
              Ready to Submit?
            </h3>
            <Button
              type="primary"
              size="large"
              className="bg-[#22CC77] text-white hover:bg-[#318949] w-full"
              onClick={showModal}
            >
              Submit Your Work
            </Button>
          </div>
        </div>
      )}

      <Modal
        title="Submit Bounty Details"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        width={400}
      >
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-semibold">Description</p>
            <Input.TextArea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your bounty description"
              rows={4}
            />
          </div>
          <div>
            <p className="font-semibold">URL</p>
            <Input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter your project URL"
            />
          </div>
          <div className="mt-4 flex justify-center">
            <Button
              type="primary"
              onClick={handleSubmit}
              className="bg-[#22CC77] text-white hover:bg-[#318949]"
            >
              Submit
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BountyDetails;
