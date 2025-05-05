"use client";

import { useState } from "react";
import Loader from "./Loader";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isLoaderFinished, setIsLoaderFinished] = useState(false);

  return (
    <>
      {!isLoaderFinished && <Loader onFinish={() => setIsLoaderFinished(true)} />}
      {isLoaderFinished && children}
    </>
  );
}
