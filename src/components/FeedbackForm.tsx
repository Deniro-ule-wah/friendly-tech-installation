import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Star } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  feedback: z.string().min(10, {
    message: "Feedback must be at least 10 characters.",
  }),
  rating: z.number().min(1).max(5),
});

export function FeedbackForm() {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      feedback: "",
      rating: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Feedback submitted",
      description: "Thank you for your feedback!",
    });
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Installation Feedback</CardTitle>
        <CardDescription>
          Please rate your experience and provide feedback.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <FormControl>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className={`p-0 ${
                            star <= rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          onClick={() => {
                            setRating(star);
                            field.onChange(star);
                          }}
                        >
                          <Star className="w-8 h-8" />
                        </button>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Feedback</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please share your experience..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit Feedback</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}