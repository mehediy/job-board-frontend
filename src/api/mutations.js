import useAuth from "../context/useAuth";
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
