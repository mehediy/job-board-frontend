import { Helmet } from "react-helmet-async";
import Table from "./Table/Table";

const AppliedJobs = () => {
  return (
    <div className="container mx-auto min-h-[70vh] padding">
      <Helmet>
        <title>Applied Jobs | Jobs</title>
      </Helmet>
      <Table />
    </div>
  );
};

export default AppliedJobs;
