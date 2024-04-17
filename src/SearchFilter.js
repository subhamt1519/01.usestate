import React, { useState } from "react";

export default function SearchFilter() {
  const items = [
    "Apple",
    "Banana",
    "Guava",
    "Pine Apple",
    "Watermelom",
    "Strawberry",
    "Grapes",
  ];

  const [search, setSearch] = useState("");

  const handleSearchFilter = (e) => {
    setSearch(e.target.value);
  };

  const filteredArray = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input type="text" onChange={handleSearchFilter} />
      <ul>
        {filteredArray.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
