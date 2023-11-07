import Row from "./Row";
import { getAppliedJobs } from "../../../api/jobs";
import Spinner from "../../../components/loader/Spinner";

const Table = () => {
  //    { data: job, isPending, isError, error } = getJobs(category, searchQuery);
  const { data: job, isPending, isError, error, refetch } = getAppliedJobs();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
