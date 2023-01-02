import React, { ChangeEvent } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  placeholder?: string;
  className?: string | null | undefined;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onSearchChange,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={e => onSearchChange(e)}
  />
);
export default SearchBox;
