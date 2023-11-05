import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const axios = useAxios();
export const getJobs = () => {
  const jobs = useQuery({
    queryKey: ["jobs"],
    queryFn: () => axios.get("/jobs"),
  });
  return jobs;
};
