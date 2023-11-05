import { useState } from "react";
import Button from "../../../components/buttons/Button";
import { categories, jobs } from "../../../constants";
import JobCard from "./JobCard";

const JobsByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  console.log(selectedCategory);
  return (
    <div className="container mx-auto padding">
      <div className="text-center space-y-4">
        <h2 className="heading-1 text-primary">Jobs by category</h2>
        <p className="text-light text-lg">
          Find the job that's perfect for you.
        </p>
      </div>
      <div>
        <div className="flex gap-2 justify-center py-12">
          {categories.map((cat) => (
            <Button
              className={"rounded-3xl"}
              variant={selectedCategory === cat.id ? "accent" : ""}
              onClick={() => setSelectedCategory(cat.id)}
              key={cat.id}
              label={cat.label}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
          {jobs.map((job, idx) => (
            <JobCard key={idx} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsByCategory;
