"use client";
import React from "react";

const RevalidateButton = ({ tag }: { tag: string }) => {
  const handleClick = async () => {
    await fetch("/api/revalidate?tag=" + tag, { method: "POST" });
  };
  return (
    <button
      onClick={() => {
        handleClick();
      }}
    >
      캐시 비우기
    </button>
  );
};

export default RevalidateButton;
