import { Helmet } from "react-helmet-async";
import Features from "./Features";
import Banner from "./Header/Banner";
import JobsByCategory from "./JobsByCategory/JobsByCategory";
import PopularJobs from "./PopularJobs";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Jobs</title>
      </Helmet>
      <Banner />
      <div className="space-y-12 padding-y">
        <JobsByCategory />
        <Features />
        <PopularJobs />
      </div>
    </>
  );
};

export default Home;
