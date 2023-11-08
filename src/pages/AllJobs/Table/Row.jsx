import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/formatDate";

const Row = ({ idx, job }) => {
  const { _id, user, title, date, deadline, applicants, salary } = job;
  return (
    <tr className="bg-white border-b ">
      <td className="w-4 p-4">
        <div className="flex items-center">{idx + 1}</div>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        {title}
      </th>
      <td className="px-6 py-4">{user}</td>
      <td className="px-6 py-4">{formatDate(date)}</td>
      <td className="px-6 py-4">{formatDate(deadline)}</td>
      <td className="px-6 py-4"> {salary}</td>
      <td className="px-6 py-4">
        <Link
          to={`/job/${_id}`}
          className="font-medium text-blue-600  hover:underline"
        >
          Details
        </Link>
      </td>
    </tr>
  );
};

export default Row;
