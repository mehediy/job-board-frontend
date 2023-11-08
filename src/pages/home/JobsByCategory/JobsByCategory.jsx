import { useState } from "react";
import Button from "../../../components/buttons/Button";
import { categories } from "../../../constants";
import JobCard from "./JobCard";
import { getJobs } from "../../../api/jobs";
import SkeletonCard from "../../../components/loader/SkeletonCard";

const JobsByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  //   Load Jobs Data
  const { data, isPending, isError, error } = getJobs(selectedCategory);

  return (
    <div className="container mx-auto padding">
      <div className="text-center space-y-4">
        <h2 className="heading-1 text-primary">Jobs by category</h2>
        <p className="text-light text-lg">
          Find the job that's perfect for you.
        </p>
      </div>
      <div>
        <div className="flex gap-2 justify-center flex-wrap py-12">
          <Button
            className={"rounded-3xl"}
            variant={selectedCategory === "" ? "accent" : ""}
            onClick={() => setSelectedCategory("")}
            label={"All Jobs"}
          />
          {categories.map((cat) => (
            <Button
              className={"rounded-3xl"}
              variant={selectedCategory === cat.label ? "accent" : ""}
              onClick={() => setSelectedCategory(cat.label)}
              key={cat.label}
              label={cat.label}
            />
          ))}
        </div>
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

export default JobsByCategory;
