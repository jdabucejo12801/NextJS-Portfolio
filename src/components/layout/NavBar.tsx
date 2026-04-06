"use client";

import { Button } from '@heroui/react';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-6 py-4">
            <Button className="text-xl font-bold">JD</Button>
               <Button variant="secondary">Secondary</Button>
            <div className="flex gap-6">
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}