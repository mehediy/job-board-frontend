import Features from "./Features";
import Banner from "./Header/Banner";
import JobsByCategory from "./JobsByCategory/JobsByCategory";

const Home = () => {
  return (
    <>
      <Banner />
      <JobsByCategory />
      <Features />
    </>
  );
};

export default Home;
