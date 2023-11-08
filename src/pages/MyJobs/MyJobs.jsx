import { Helmet } from "react-helmet-async";
import Table from "./Table/Table";

const MyJobs = () => {
  return (
    <div className="container mx-auto min-h-[70vh] padding">
      <Helmet>
        <title>My Jobs | Jobs</title>
      </Helmet>
      <Table />
    </div>
  );
};

export default MyJobs;
