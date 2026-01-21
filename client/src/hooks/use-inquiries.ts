import { useMutation } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

// POST /api/inquiries
export function useCreateInquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      // For this static version, we simulate the API call since there's no backend logic requested
      // But we keep the structure correct for when the backend is ready
      // const res = await fetch(api.inquiries.create.path, {
      //   method: api.inquiries.create.method,
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      // if (!res.ok) throw new Error('Failed to submit inquiry');
      // return res.json();

      // Simulation for frontend-only demo:
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent",
        description: "Thank you for contacting Tulsi Mehndi Studio. We will get back to you soon!",
        variant: "default",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us via WhatsApp.",
        variant: "destructive",
      });
    }
  });
}
