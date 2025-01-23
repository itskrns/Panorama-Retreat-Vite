import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success(
        "Account created successfully! Confirm you email to login."
      );
    },
    onError: (err) => toast.error(err),
  });

  return { signUp, isLoading };
}
