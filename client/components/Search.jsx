import React, { useState } from "react";

const Search = ({ value, handleChange }) => {
  return <input placeholder="search" value={value} onChange={handleChange} />;
};

export { Search };
