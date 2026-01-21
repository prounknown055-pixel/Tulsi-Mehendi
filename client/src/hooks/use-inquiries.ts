import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

export interface InsertInquiry {
  name: string;
  email: string;
  message: string;
}

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const { error } = await supabase
        .from("inquiries")
        .insert([data]);

      if (error) {
        throw error;
      }

      return true;
    },

    onSuccess: () => {
      toast({
        title: "Inquiry Sent",
        description:
          "Thank you for contacting Tulsi Mehndi Studio. We will get back to you soon!",
      });
    },

    onError: () => {
      toast({
        title: "Error",
        description:
          "Something went wrong. Please try again or WhatsApp us.",
        variant: "destructive",
      });
    },
  });
}
