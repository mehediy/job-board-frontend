import { useNavigate } from "react-router-dom";
import { jobBackground1 } from "../../../assets/images";
import Search from "../../../components/Search";

const Banner = () => {
  const navigate = useNavigate();
  const searchHandler = (query) => {
    navigate(`/all-jobs?search=${query}`);
  };

  return (
    <header className="bg-dark h-[700px] ">
      <div className="container mx-auto h-full px-8 flex items-center justify-between">
        <div className="max-w-xl space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl !leading-tight text-primary font-bold">
            Find Your Dream Job Today with Us
          </h1>
          <p className="text-light">
            Elevate your career with us. Discover a world of job opportunities
            tailored to your skills and aspirations. From fresh graduates to
            seasoned professionals, our platform connects you with top companies
            and resources to fuel your career success. Your dream job is a click
            away.
          </p>
          <Search searchHandler={searchHandler} />
        </div>
        <div className="hidden lg:block w-[40%]">
          <img className="w-full" src={jobBackground1} />
        </div>
      </div>
    </header>
  );
};

export default Banner;
