import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabins,
    onSuccess: () => {
      toast.success("Cabin created successfully!");
      queryClient.invalidateQueries(["cabins"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { createCabin, isCreating };
}
