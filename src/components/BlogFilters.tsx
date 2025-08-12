import * as React from "react";
import { useEffect, useState } from "react";

export interface BlogFilter {
  id?: string;
  name?: string;
}

export interface Props {
  filters: BlogFilter[];
  pathname: string;
}

export default function BlogFilters({ filters, pathname }: Props) {
  const [current, setCurrent] = useState(filters[0]);

  const currentFilter = () => {
    if (pathname === "/blog") return filters[0];
    return (
      filters.find((filter) => filter.name && pathname.includes(encodeURIComponent(filter.name!))) || filters[0]
    );
  };

  useEffect(() => {
    setCurrent(currentFilter());
  }, [pathname]);

  return (
    <fieldset aria-label="Choose a memory option">
      <div className="flex items-center justify-between">
        <div className="text-sm/6 font-medium text-primary">
          Filter by category
        </div>
      </div>
      <div className="mt-2 flex flex-wrap overflow-x-auto pb-2 gap-4">
        {filters.filter((opt) => !!opt.id && !!opt.name).map((option) => {
          const isChecked = option.id === current.id;
          return (
            <label
              key={option.id}
              aria-label={option.name}
              className={`flex-shrink-0 relative flex items-center justify-center rounded-md border p-2 w-auto 
              ${isChecked
                  ? "border-highlight bg-highlight"
                  : "border-primary bg-primary"
                }
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight
                          `}
            >
              <a
                href={option.id === 'all' ? '/blog' : `/blog/category/${encodeURIComponent(option.name!)}`}
                className={`focus:outline-none text-sm font-medium uppercase 
                ${isChecked ? "text-white" : "text-primary"}
              `}
              >
                {option.name}
              </a>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
