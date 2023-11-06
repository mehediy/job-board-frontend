import Search from "../../../components/Search";
import Row from "./Row";
import { getJobs } from "../../../api/jobs";
import Spinner from "../../../components/loader/Spinner";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Table = () => {
  // http://localhost:5173/all-jobs?search=
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  // Get search value from Search component
  const searchHandler = (query) => {
    setSearchParams({ search: query || "" });
  };

  //    { data: job, isPending, isError, error } = getJobs(category, searchQuery);
  const { data: job, isPending, isError, error } = getJobs("", searchQuery);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="pb-4 bg-white">
        <div className="relative mt-1">
          <Search searchHandler={searchHandler} value={searchQuery} />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">#</div>
            </th>
            <th scope="col" className="px-6 py-3">
              Job Title
            </th>
            <th scope="col" className="px-6 py-3">
              Posted by
            </th>
            <th scope="col" className="px-6 py-3">
              Posting Date
            </th>
            <th scope="col" className="px-6 py-3">
              Deadline
            </th>
            <th scope="col" className="px-6 py-3">
              Salary
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {isPending ? (
            <tr>
              <td className="px-6 py-4 h-[100px]" colSpan={7}>
                <Spinner />
              </td>
            </tr>
          ) : (
            job?.data?.map((job, idx) => <Row key={idx} idx={idx} job={job} />)
          )}
          {isError && (
            <tr>
              <td
                className="px-6 py-4 h-[100px] text-center text-error"
                colSpan={7}
              >
                Error: {error.message}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
