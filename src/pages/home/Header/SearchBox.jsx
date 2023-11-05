import { searchIcon } from "../../../assets/icons";
import Button from "../../../components/buttons/Button";

const SearchBox = () => {
  return (
    <div className="bg-primary p-2 flex justify-between flex-col md:flex-row gap-2 rounded border border-brand-primary">
      <div className="flex gap-2 p-2 flex-1">
        <img src={searchIcon} />
        <input
          className="outline-none w-full"
          type="text"
          placeholder="Search by Job Title"
        />
      </div>
      <Button label={"Find Jobs"} variant={"accent"} />
    </div>
  );
};

export default SearchBox;
