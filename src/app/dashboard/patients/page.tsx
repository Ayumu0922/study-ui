"use client";
import { DataTable } from "@/components/DataTable/DataTable";
import { DatePicker } from "@/components/DatePicker/DatePicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";

const PatientPage = () => {
  return (
    <div className="w-full h-screen  bg-gray-100 flex flex-col z-0">
      {/* top bar */}
      <div className="bg-blue-500 text-white h-12 flex items-center px-4 font-bold text-md gap-[35%] ">
        <h1>DICOM VIEWER</h1>
        <h1>Patient Search</h1>
      </div>
      {/* content */}
      <div className="flex flex-1 overflow-hidden ">
        {/* left content */}
        <div className=" w-[400px] p-4 overflow-y-auto border-r-[3px] flex   justify-center">
          <FaUsers className=" text-3xl " />
          <div className="flex flex-col gap-5 mt-10">
            <div className="flex w-full max-w-sm items-center space-x-2 mt-4">
              <Input type="text" placeholder="Patient Name" />
              <Button type="submit">Search</Button>
            </div>
            <DatePicker />
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <label htmlFor="airplane-mode">MRI</label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <label htmlFor="airplane-mode">CT</label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <label htmlFor="airplane-mode">X-Ray</label>
            </div>
          </div>
        </div>
        {/* right content */}
        <div className="flex-1 overflow-y-auto  p-6">
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default PatientPage;
