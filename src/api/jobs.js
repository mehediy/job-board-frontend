import useAuth from "../hooks/useAuth";
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

export const getMyJobs = () => {
  const { user } = useAuth();
  const job = useQuery({
    queryKey: ["myjobs", user?.email],
    queryFn: () => axios.get(`/jobs/user/${user?.email}`),
  });
  return job;
};

export const getAppliedJobs = (category) => {
  const { user } = useAuth();
  const appliedjobs = useQuery({
    queryKey: ["appliedjobs", user?.email, category],
    queryFn: () =>
      axios.get(
        `/applied-jobs?email=${user?.email}&category=${category || ""}`
      ),
  });
  return appliedjobs;
};
