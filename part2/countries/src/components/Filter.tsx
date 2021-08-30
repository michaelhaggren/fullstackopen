import React from 'react';

type FilterProps = {
  filter: string;
  handleFilterChange: (event: { target: HTMLInputElement }) => void;
};

export const Filter = ({ filter, handleFilterChange }: FilterProps) => (
  <div>
    Filter countries by letters or name
    <div>
      <input
        value={filter}
        placeholder="search for countries..."
        onChange={handleFilterChange}
      />
    </div>
  </div>
);
