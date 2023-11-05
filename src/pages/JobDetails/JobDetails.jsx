import { useParams } from "react-router-dom";
import { getJob } from "../../api/jobs";
import Spinner from "../../components/loader/Spinner";
import Button from "../../components/buttons/Button";
import { peopleIcon } from "../../assets/icons";

const JobDetails = () => {
  const { id } = useParams();
  const { data: job, isPending, isError, error } = getJob(id);
  const jobApplyHandler = () => {
    console.log("Apply");
  };

  return (
    <div className="container mx-auto min-h-screen">
      {isPending ? (
        <Spinner />
      ) : (
        <>
          {/* Banner */}
          <div className="h-[200px] md:h-[400px] xl:h-[450px] px-0 md:px-4">
            <img
              className="w-full h-full object-cover"
              src={job?.data?.banner}
            />
          </div>

          {/* Details */}
          <div className="padding space-y-4 max-w-5xl mx-auto">
            {/* Heading */}
            <div className="flex gap-4 flex-col md:flex-row justify-between items-center md:items-start flex-1">
              <div className="flex gap-4 flex-col md:flex-row items-center md:items-start">
                <div className="bg-slate-200 w-[64px] h-[64px]"></div>
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-brand-primary font-semibold">
                    {job?.data?.user}
                  </p>
                  <h1 className="heading-2">{job?.data?.title}</h1>
                  <p className="text-light flex items-center gap-2 mt-4">
                    <img src={peopleIcon} />
                    Applicants: {job?.data?.applicants}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end gap-4">
                <Button
                  variant={"accent"}
                  label={"Apply Now"}
                  onClick={jobApplyHandler}
                />

                <p className="text-lg font-semibold">
                  Salary: BDT {job?.data?.salary}
                </p>
              </div>
            </div>
            <div className="border-b-2 border-dark mt-4 mb-2"></div>
            {/* End Heading */}
            {/* Description */}
            <div>
              <h2 className="heading-2 pb-2">Description</h2>
              <p className="text-light">{job?.data?.description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default JobDetails;
