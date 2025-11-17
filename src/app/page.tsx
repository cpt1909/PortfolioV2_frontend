'use client';

import { useState } from "react";
import Cora from "./components/cora";
import "./globals.css";

export default function Home() {
  return (
    <center>
      <div className="container pl-10 pr-10 min-h-screen max-w-7xl">
        <div className="header pt-10 pb-10 flex flex-wrap justify-between">
          <div className="titlebar flex gap-5 items-center">
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

          <nav className="navbar hidden md:flex gap-5 text-md items-center">
            <p>Projects</p>
            <p>About</p>
            <p>Contact</p>
            <p>Resume</p>
          </nav>
        </div>

        <div className="intro justify-items-start">
          <h1 className="font-extrabold text-3xl sm:text-5xl pb-5">Hi — I'm Thaarakenth</h1>
          <p className="text-justify text-md sm:text-xl pb-5">A Software Development Engineer specializing in Artificial Intelligence and full-stack solutions, with experience delivering cloud-ready, scalable and high-performance applications.</p>
        </div>
        <div className="mobile-navbar h-auto flex justify-evenly items-center gap-3 md:hidden">
          <div className="w-30 h-12 flex justify-center items-center border-1 rounded-2xl">Projects</div>
          <div className="w-30 h-12 flex justify-center items-center border-1 rounded-2xl">Get in Touch</div>
        </div>
      {/* <Cora/> */}
      </div>
    </center>
  );
}