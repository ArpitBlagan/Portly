"use client";

import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox"; // Assuming you're using the checkbox from shadcn/ui

type Option = {
  label: string;
  value: string;
};

interface MultiSelectProps {
  options: Option[];
  placeholder?: string;
}

const MultiSelect = ({
  options,
  placeholder = "Select...",
  setSelectedValues,
  selectedValues,
}: any) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);

  // Filter options based on search query
  const filteredOptions = options.filter((option: any) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (option: Option) => {
    setSelectedValues((prev) =>
      prev.some((item) => item === option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="relative w-1/2">
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger
          className={cn(
            "flex items-center justify-between w-full px-4 py-2 text-sm border md:border-zinc-700 rounded-md shadow-sm focus:outline-none",
            selectedValues.length > 0 ? "bg-blue-50" : "bg-transparent"
          )}
        >
          <span>
            {selectedValues.length > 0
              ? selectedValues.map((item) => item.label).join(", ")
              : placeholder}
          </span>
          <ChevronDown className="w-4 h-4 ml-2" />
        </Popover.Trigger>

        <Popover.Content className="w-full mt-2 bg-black border rounded-md shadow-lg max-h-60 overflow-y-auto p-2">
          {/* Search Input */}
          <div className="px-3 py-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 text-sm border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Search..."
            />
          </div>

          {/* Options List */}
          <div className="space-y-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option: any) => (
                <div
                  key={option}
                  className={cn(
                    "flex items-center justify-between p-2 cursor-pointer rounded-md",
                    selectedValues.some((item) => item == option)
                      ? "bg-blue-500 text-white"
                      : ""
                  )}
                  onClick={() => handleSelect(option)}
                >
                  <label className="flex items-center space-x-2">
                    <Checkbox
                      checked={selectedValues.some((item) => item == option)}
                    />
                    <span>{option}</span>
                  </label>
                  {selectedValues.some((item) => item == option) && (
                    <Check className="w-4 h-4" />
                  )}
                </div>
              ))
            ) : (
              <p className="p-2 text-sm text-gray-500">No results found.</p>
            )}
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
};

export default MultiSelect;
