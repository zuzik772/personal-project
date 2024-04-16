import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

export const useToastFunctions = () => {
  const { toast } = useToast();

  const showSuccessToast = (message: string) => {
    toast({
      title: "Success",
      description: `${message} successfully`,
      className: cn(
        "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
      ),
    });
  };

  const showErrorToast = () => {
    toast({
      title: "Error",
      description: "Oops! Something went wrong",
      variant: "destructive",
      className: cn(
        "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
      ),
    });
  };

  return { showSuccessToast, showErrorToast };
};
