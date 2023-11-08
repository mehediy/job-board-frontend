import { useNavigate } from "react-router-dom";
import { alarmIcon, calendarIcon, peopleIcon } from "../../../assets/icons";
import Button from "../../../components/buttons/Button";
import { formatDate } from "../../../utils/formatDate";

const JobCard = ({ job }) => {
  const { _id, user, title, date, deadline, applicants, salary } = job;
  const navigate = useNavigate();
  return (
    <div className="bg-primary border border-darker hover:border-brand-primary ease rounded px-6 pt-6 pb-3">
      <div className="flex flex-col gap-4 sm:flex-row justify-between items-start sm:items-end">
        <div className="space-y-1">
          <p className="text-brand-primary">By: {user}</p>
          <h3 className="text-xl text-primary font-bold pb-1">{title}</h3>
          <p className="text-light flex items-center gap-2">
            <img src={calendarIcon} /> Posting Date: {formatDate(date)}
          </p>
          <p className="text-light flex items-center gap-2">
            <img src={alarmIcon} />
            Deadline: {formatDate(deadline)}
          </p>
          <p className="text-light flex items-center gap-2">
            <img src={peopleIcon} />
            Applicants: {applicants}
          </p>
        </div>
        <Button
          className={"!py-2 !px-4 rounded-3xl"}
          variant={"outline"}
          label={"View Details"}
          onClick={() => navigate(`/job/${_id}`)}
        />
      </div>
      <div className="border-b-2 border-dark mt-4 mb-2"></div>

      <p className="text-lg font-semibold">Salary: BDT {salary}</p>
    </div>
  );
};

export default JobCard;
