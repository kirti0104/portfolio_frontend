"use client";

import React from "react";
import Header from "@/components/Header";


const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default DefaultLayout;
