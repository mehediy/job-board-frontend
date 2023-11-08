import { CheckIcon } from "@chakra-ui/icons";
import { features } from "../../constants";
import { jobBackground2 } from "../../assets/images";

const Features = () => {
  return (
    <div className="bg-dark padding-y">
      <div className="container mx-auto h-full padding flex items-center justify-between">
        <div className="max-w-xl space-y-6 md:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl !leading-tight text-primary font-bold">
            Get the job that's right for you
          </h1>
          <p className="text-light text-lg ">
            Search millions of jobs and get the inside scoop on companies with
            employee reviews, personalized salary tools, and more.
          </p>
          <div className="text-lg font-medium text-light space-y-2">
            {features.map((item, idx) => (
              <p key={idx}>
                <span className="text-brand-primary mr-2">
                  <CheckIcon />
                </span>
                {item.description}
              </p>
            ))}
          </div>
        </div>
        <div className="hidden lg:block w-[45%]">
          <img className="w-full" src={jobBackground2} />
        </div>
      </div>
    </div>
  );
};

export default Features;
