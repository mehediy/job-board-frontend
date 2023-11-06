import useAuth from "../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";

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