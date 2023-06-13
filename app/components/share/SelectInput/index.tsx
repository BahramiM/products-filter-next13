"use client";
import {
  SelectInputOptionType,
  SelectInputPropsType,
} from "@/app/types/components";

const SelectInput: React.FC<SelectInputPropsType> = ({
  value,
  change,
  options,
}) => {
  return (
    <select
      className="rounded-xl bg-gray-600 hover:bg-gray-700 px-6 py-2 inline-block me-2 h-10 "
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        change(e.target.value)
      }
      value={value}
    >
      {options.map((option: SelectInputOptionType) => (
        <option
          key={option.value}
          className="p-2 leading-20"
          value={option.value}
        >
          {option.text}
        </option>
      ))}
    </select>
  );
};
export default SelectInput;
