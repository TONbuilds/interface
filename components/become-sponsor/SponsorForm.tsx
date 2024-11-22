"use client";
import React from "react";
import Script from "next/script";

declare global {
  interface Window {
    Tally: any;
  }
}

const SponsorForm = () => {
  return (
    <>
      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window.Tally !== "undefined") {
            window.Tally.loadEmbeds();
          }
        }}
      />
      <div
        style={{ textAlign: "center", marginTop: "20px" }}
        className="tallyFormContainer"
      >
        <iframe
          data-tally-src="https://tally.so/r/wLEaa2"
          loading="lazy"
          width="100%"
          height="1230"
          title="Sponsor Form"
          style={{
            border: "none",
            borderRadius: "8px",
          }}
        ></iframe>
      </div>
    </>
  );
};

export default SponsorForm;
