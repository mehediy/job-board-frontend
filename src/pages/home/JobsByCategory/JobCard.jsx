import { alarmIcon, calendarIcon, peopleIcon } from "../../../assets/icons";
import Button from "../../../components/buttons/Button";

const JobCard = ({ job }) => {
  const { by, title, date, deadline, applicants, salary } = job;
  return (
    <div className="bg-primary border border-darker hover:border-brand-primary ease rounded px-6 pt-6 pb-3">
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <p className="text-brand-primary">By {by}</p>
          <h3 className="text-xl text-primary font-bold pb-1">{title}</h3>
          <p className="text-light flex items-center gap-2">
            <img src={calendarIcon} /> Posting Date: {date}
          </p>
          <p className="text-light flex items-center gap-2">
            <img src={alarmIcon} />
            Deadline: {deadline}
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
        />
      </div>
      <div className="border-b-2 border-dark mt-4 mb-2"></div>

      <p className="text-lg font-semibold">
        Salary: {salary[0]} - {salary[1]} BDT
      </p>
    </div>
  );
};

export default JobCard;
