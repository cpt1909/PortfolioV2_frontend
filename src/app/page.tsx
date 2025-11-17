'use client';

import { useState } from "react";
import Cora from "./components/cora";
import "./globals.css";

export default function Home() {
  return (
    <div className="main min-h-screen max-w-7xl">
      <div className="header mt-10 flex flex-wrap justify-between">
        <div className="left_part flex gap-5 items-center">
          <img 
            src={"cpt-logo.png"}
            height={64}
            width={64}
            className="rounded-4xl"
            />
          <div>
            <p className="text-xl font-bold">CPT</p>
            <p className="text-sm">Software &bull; AI &bull; Web</p>
          </div>
        </div>

        <div className="navbar hidden md:flex gap-5 text-md items-center">
          <p>Projects</p>
          <p>About</p>
          <p>Contact</p>
          <p>Resume</p>
        </div>
        
      </div>
      
      
    {/* <Cora/> */}
    </div>
  );
}