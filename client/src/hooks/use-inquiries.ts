import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";
import type { InsertInquiry } from "@/shared/schema";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const { error } = await supabase
        .from("inquiries")
        .insert({
          name: data.name,
          email: data.email,
          message: data.message,
        });

      if (error) {
        console.error("Supabase error:", error);
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
