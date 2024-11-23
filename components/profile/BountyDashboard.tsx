"use client";
import React, { useEffect, useState } from "react";
import { Card, Tag, Spin, Image, Empty } from "antd";
import { App as AntdApp } from "antd";
import { fetchUserSubmissions } from "@/api/api";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const BountyDashboard: React.FC = () => {
  const [lists, setLists] = useState<any[]>([]);
  const { notification } = AntdApp.useApp();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  console.log(lists.length, lists, "length");

  const submissionList = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await fetchUserSubmissions();
      setLists(data);
    } catch (err: any) {
      setError(err);
      notification.error({
        message: "Error Fetching Bounties",
        description: "Something went wrong while fetching your bounties.",
        placement: "topRight",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    submissionList();
  }, []);

  return (
    <div className="w-full py-12 pt-0">
      <div className="relative bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white py-20">
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Your Bounty Dashboard
          </h1>
          <p className="text-xl mb-8">
            Track all your bounty contributions in one place! Stay updated on
            your progress and status.
          </p>
        </div>
      </div>
      {loading && lists.length === 0 && (
        <div className="flex justify-center items-center h-screen">
          <Spin size="large" />
        </div>
      )}
      {!loading && (error || lists.length === 0) && (
        <div className="flex justify-center items-center h-screen">
          <Empty
            description={"No submissions found or may be any error occur"}
          />
        </div>
      )}

      <div className="container mx-auto px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {lists.map((list) => (
          <Card
            key={list.id}
            className="shadow-lg rounded-xl transform "
            style={{
              background: "#ffffff",
              border: "1px solid #E0E0E0",
            }}
          >
            <div className="flex items-center justify-between space-x-4">
              <div>
                <div className="flex items-center justify-between ">
                  <h3 className="text-xl font-bold text-[#2D3748] pb-0">
                    {list.title}
                  </h3>
                  <Image
                    src={list.postId.logo}
                    alt="Bounty Logo"
                    width={70}
                    height={70}
                    preview={false}
                    className="rounded-lg"
                  />
                </div>
                <p className=" text-[#718096] one-line">{list.description}</p>
                <p>
                  {" "}
                  <a
                    href={list.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#22CC77] hover:underline"
                  >
                    {list.url}
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Submitted on: {formatDate(list.createdAt)}
              </p>
              <Tag
                color={
                  list.status === "submitted"
                    ? "blue"
                    : list.status === "accepted"
                    ? "green"
                    : "volcano"
                }
              >
                {list.status === "submitted"
                  ? "Submitted"
                  : list.status === "accepted"
                  ? "Accepted"
                  : "Rejected"}
              </Tag>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BountyDashboard;
