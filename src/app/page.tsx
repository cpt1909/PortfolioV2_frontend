'use client';

import { Skill, SkillResponse } from "@/app/types";
import { useState, useEffect } from "react";
import Cora from "@/app/components/cora";
import "./globals.css";

export default function Home() {
    
    const [skills, setSkills] = useState<Skill[]>([]);

    async function fetchData(): Promise<void>{
        const res = await fetch("/api/data", {
            cache: "no-store",
        });
        const data = (await res.json()) as SkillResponse;
        setSkills(data.skills);
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <center>
        <div className="container pl-10 pr-10 min-h-screen max-w-7xl">
            <div className="header pt-10 pb-10 md:pb-40 flex flex-wrap justify-between">
                <div className="titlebar gap-5 items-center hidden sm:flex">
                    <img 
                        src={"cpt-logo.png"}
                        height={64}
                        width={64}
                        className="rounded-4xl hidden sm:block"
                        />
                    <div>
                    <p className="text-xl font-bold">Thaarakenth C P</p>
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
                <h1 className="font-extrabold text-3xl text-left sm:text-5xl pb-5">Hi — I'm Thaarakenth</h1>
                <p className="text-justify text-md sm:text-xl pb-5">A Software Development Engineer specializing in Artificial Intelligence and Full-Stack solutions. Experienced in delivering cloud-ready, scalable systems and high-performance applications</p>
            </div>
            <div className="mobile-navbar h-auto flex justify-evenly items-center gap-3 md:hidden">
                <div className="pl-5 pr-5 w-auto h-12 flex justify-center items-center border rounded-2xl">Scroll to Projects</div>
            </div>

            <div className="skills pt-15 flex flex-wrap justify-center md:justify-start gap-x-10 gap-y-10">
                {
                    skills && (
                        skills.map((skillItem, index) => (
                            <div key={index} className="skill-object w-65 h-auto min-h-30 border border-gray-700 rounded-3xl p-5 box-shadow">
                                <p className="text-left font-bold pb-5">{skillItem.domain}</p>
                                <p className="text-left">{skillItem.items.join(" • ")}</p>
                            </div>
                        ))
                    )
                }
            </div>

            <h1 className="text-left pt-12 font-medium text-xl">Projects</h1>
            <div className="projects pt-8 flex flex-wrap justify-center md:justify-start gap-x-10 gap-y-10">
            </div>
        <Cora/>
        </div>
    </center>
  );
}