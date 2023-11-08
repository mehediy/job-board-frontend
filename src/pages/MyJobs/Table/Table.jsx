import Row from "./Row";
import { getMyJobs } from "../../../api/jobs";
import Spinner from "../../../components/loader/Spinner";
import { useDeleteJob } from "../../../api/mutations";
import toast from "react-hot-toast";

const Table = () => {
  //    { data: job, isPending, isError, error } = getJobs(category, searchQuery);
  const { data: job, isPending, isError, error, refetch } = getMyJobs();

  const {
    mutateAsync: deleteJob,
    isPending: deletingJob,
    isSuccess: deleteSuccess,
    error: deleteError,
  } = useDeleteJob();

  const deleteHandler = async (_id) => {
    try {
      await deleteJob(_id).then((res) => {
        if (res.data.deletedCount == 1) {
          toast.success("Job deleted");
        }
      });
      refetch();
    } catch (error) {
      toast.error(deleteError.message);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="heading-2 text-center pb-8">My Jobs</h1>
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
            <th scope="col" colSpan={2} className="px-6 py-3 text-center">
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
          ) : job?.data?.length === 0 ? (
            <tr>
              <td
                className="px-6 py-4 h-[100px] text-center text-error"
                colSpan={7}
              >
                No jobs found
              </td>
            </tr>
          ) : (
            job?.data?.map((job, idx) => (
              <Row
                key={idx}
                idx={idx}
                job={job}
                deleteHandler={deleteHandler}
              />
            ))
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
