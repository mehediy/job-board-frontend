import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const axios = useAxios();
export const getJobs = (category, search) => {
  const jobs = useQuery({
    queryKey: ["jobs", category, search],
    queryFn: () => axios.get(`/jobs/?cat=${category || ""}&q=${search || ""}`),
  });
  return jobs;
};

export const getJob = (id) => {
  const job = useQuery({
    queryKey: ["job", id],
    queryFn: () => axios.get(`/job/${id}`),
  });
  return job;
};
