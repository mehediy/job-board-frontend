import { Helmet } from "react-helmet-async";
import Table from "./Table/Table";

const AllJobs = () => {
  return (
    <div className="container mx-auto min-h-[70vh] padding">
      <Helmet>
        <title>All Jobs | Jobs</title>
      </Helmet>
      <Table />
    </div>
  );
};

export default AllJobs;
