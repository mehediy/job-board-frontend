import { getPopularJobs } from "../../api/jobs";
import SkeletonCard from "../../components/loader/SkeletonCard";
import JobCard from "./JobsByCategory/JobCard";

const PopularJobs = () => {
  //   Load Jobs Data
  const { data, isPending, isError, error } = getPopularJobs();

  return (
    <div className="container mx-auto padding">
      <div className="text-center space-y-4">
        <h2 className="heading-1 text-primary">Popular Jobs</h2>
        <p className="text-light text-lg">
          Jobs that are applied by most people
        </p>
      </div>

      <div className="py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
          {isPending ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            data?.data?.map((job, idx) => <JobCard key={idx} job={job} />)
          )}
        </div>
        {isError && (
          <span className="text-center text-error">Error: {error.message}</span>
        )}
      </div>
    </div>
  );
};

export default PopularJobs;
