import React from "react";
import { List } from "lucide-react";
import CategoryIcon from "./CategoryIcon";

const categories = [
  { label: "All", icon: List },
  { label: "Ekstrakurikuler", icon: "ekstrakurikuler" },
  { label: "Mapel", icon: "mapel" },
];

export default function Category({ filter, setFilter }) {
  return (
    <div className="flex space-x-4">
      {categories.map(({ label, icon }) => {
        const isActive = filter === label;
        return (
          <button
            key={label}
            onClick={() => setFilter(label)}
            className={`flex items-center space-x-1 px-3 py-1 rounded-md transition-colors
              ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            `}
          >
            {typeof icon === "string" ? (
              <CategoryIcon kategori={icon} />
            ) : (
              React.createElement(icon, { className: "w-5 h-5" })
            )}
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
