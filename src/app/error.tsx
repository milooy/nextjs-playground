"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.log("error", error);
  }, [error]);
  return (
    <div>
      <h1>에러 발생</h1>
      <button onClick={() => reset()}>새로고침</button>
    </div>
  );
}
