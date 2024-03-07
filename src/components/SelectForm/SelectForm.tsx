import React from "react";

type Option = {
  value: string;
  label: string;
};

type SelectFormProps = {
  label: string;
  options: Option[];
  defaultValue?: string;
};

const SelectForm: React.FC<SelectFormProps> = ({
  label,
  options,
  defaultValue = "Choose an option",
}) => {
  return (
    <form className="max-w-sm mx-auto">
      <label
        htmlFor="select"
        className="block  m-1 text-md font-medium text-gray-900 "
      >
        {label}
      </label>
      <select
        id="select"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:outline-none"
        defaultValue={defaultValue}
      >
        <option disabled>{defaultValue}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SelectForm;
