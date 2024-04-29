import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),

    onSuccess: () => {
      toast.success(`Successfully deleted booking`);
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },

    onError: () => toast.error("Unable to delete booking"),
  });

  return { isDeleting, deleteBooking };
}
