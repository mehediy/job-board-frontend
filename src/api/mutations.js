import useAuth from "../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
const axios = useAxios();

export const useCreateUserAccount = () => {
  const { createUser } = useAuth();
  const mutation = useMutation({
    mutationFn: (user) => {
      return createUser(user.email, user.password);
    },
  });
  return mutation;
};

export const useLoginUserAccount = () => {
  const { loginUser } = useAuth();
  const mutation = useMutation({
    mutationFn: (user) => {
      return loginUser(user.email, user.password);
    },
  });
  return mutation;
};

export const postJob = () => {
  const mutation = useMutation({
    mutationFn: (values) => {
      return axios.post("/jobs", values);
    },
  });
  return mutation;
};

export const useDeleteJob = () => {
  const mutation = useMutation({
    mutationFn: (id) => {
      return axios.delete(`/job/${id}`);
    },
  });
  return mutation;
};

export const useUpdateJob = () => {
  const mutation = useMutation({
    mutationFn: ({ id, values }) => {
      return axios.put(`/job/${id}`, values);
    },
  });
  return mutation;
};
