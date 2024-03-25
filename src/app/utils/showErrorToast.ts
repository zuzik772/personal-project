import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

export const showErrorToast = () => {
  const { toast } = useToast();
  toast({
    title: "Error",
    description: "Oops! Something went wrong",
    variant: "destructive",
    className: cn(
      "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
    ),
  });
};
