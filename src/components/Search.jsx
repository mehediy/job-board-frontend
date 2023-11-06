import { useState } from "react";
import { searchIcon } from "../assets/icons";
import Button from "./buttons/Button";

const Search = ({ searchHandler, value }) => {
  const [searchQuery, setSearchQuery] = useState(value);

  return (
    <div className="bg-primary p-2 flex justify-between flex-col md:flex-row gap-2 rounded border border-brand-primary">
      <div className="flex gap-2 p-2 flex-1">
        <img src={searchIcon} />
        <input
          className="outline-none w-full"
          defaultValue={value}
          type="text"
          placeholder="Search by Job Title"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <Button
        label={"Find Jobs"}
        variant={"accent"}
        onClick={() => searchHandler(searchQuery)}
      />
    </div>
  );
};

export default Search;
