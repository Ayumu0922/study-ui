"use client";
import SearchBar from "@/components/SearchBar/SearchBar";
import SelectForm from "@/components/SelectForm/SelectForm";
import React, { useState } from "react";
import { FaUsers } from "react-icons/fa";
import Datepicker from "react-tailwindcss-datepicker";

const PatientPage = () => {
  const options = [
    { value: "All", label: "All" },
    { value: "Today", label: "Today" },
    { value: "Tommorrow", label: "Tommorrow" },
    { value: "Last Week", label: "Last Week" },
  ];

  // date picker の状態を any 型で定義
  const [value, setValue] = useState<any>({
    startDate: new Date(),
    endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
  });

  const handleValueChange = (newValue: any, e?: HTMLInputElement) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div className="w-full h-screen  bg-gray-100 flex flex-col z-0">
      {/* top bar */}
      <div className="bg-indigo-400 text-white h-12 flex items-center px-4 font-bold text-md gap-[35%] ">
        <h1>DICOM VIEWER</h1>
        <h1>Patient Search</h1>
      </div>
      {/* content */}
      <div className="flex flex-1 overflow-hidden ">
        {/* left content */}
        <div className=" w-[400px] p-4 overflow-y-auto border-r-[3px] ">
          <FaUsers className=" text-3xl" />
          <SearchBar />
          <SelectForm
            label="Select Date"
            options={options}
            defaultValue="Choose a date"
          />
          <Datepicker value={value} onChange={handleValueChange} />
        </div>
        {/* right content */}
        <div className="flex-1 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th>Status</th>
                <th>Patient Name</th>
                <th>Patient ID</th>
                <th>Modality</th>
                {/* 他のヘッダーをここに追加 */}
              </tr>
            </thead>
            <tbody>{/* テーブルの内容 */}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientPage;
