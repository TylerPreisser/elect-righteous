"use client";

import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

export default function SearchBar({
  onSearch,
  placeholder = "Search candidates, elections...",
  className = "",
  autoFocus = false,
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  }

  function handleClear() {
    setQuery("");
    onSearch("");
    inputRef.current?.focus();
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className={`relative flex items-center ${className}`}
      aria-label="Search"
    >
      {/* Search icon */}
      <span
        className="absolute left-3.5 text-unknown pointer-events-none"
        aria-hidden="true"
      >
        <Search size={18} />
      </span>

      {/* Input */}
      <input
        ref={inputRef}
        type="search"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        autoComplete="off"
        spellCheck={false}
        className="w-full pl-10 pr-10 py-3 bg-white border-2 border-gray-200 rounded-lg text-sm font-body text-charcoal placeholder:text-unknown focus:outline-none focus:border-teal transition-colors duration-200"
        aria-label={placeholder}
      />

      {/* Clear button */}
      {query.length > 0 && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3.5 text-unknown hover:text-charcoal transition-colors duration-200"
          aria-label="Clear search"
        >
          <X size={16} aria-hidden="true" />
        </button>
      )}
    </form>
  );
}
