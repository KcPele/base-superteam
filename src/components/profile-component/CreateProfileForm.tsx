import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCountryList } from "../../../hooks/useCountryList";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  fullname: z
    .string()
    .min(2, { message: "Project name must be at least 2 characters." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
  projectUrl: z.string().url({ message: "Please enter a valid URL." }),
  projectTwitter: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address." }),
  businessPhone: z.object({
    countryCode: z.string(),
    number: z
      .string()
      .min(10, { message: "Please enter a valid phone number." }),
  }),
  location: z.string(),
  bountyType: z.string(),
  image: z.any().optional(),
});

const CreateProfileForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      fullname: "",
      description: "",
      projectUrl: "",
      projectTwitter: "",
      email: "",
      businessPhone: {
        countryCode: "",
        number: "",
      },
      location: "",
      bountyType: "",
      image: null,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const countries = useCountryList(); // hypothetical hook to get the list of countries

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 gap-5"
        >
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl className="border-baseblack rounded-xl px-3 py-5">
                  <Input
                    placeholder="enter full name"
                    {...field}
                    className="bg-transparent"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl className="border-baseblack rounded-xl px-3 py-5">
                  <Input
                    placeholder="youremail@domain.com"
                    {...field}
                    className="bg-transparent"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Location</FormLabel>
                <FormControl className="border-baseblack rounded-xl px-3 py-5">
                  {/* <Input placeholder="Enter your location" {...field} className="bg-transparent" /> */}
                  <Select {...field}>
                    <SelectTrigger className="bg-transparent border-baseblack">
                      <SelectValue placeholder="select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-basebgblack text-basewhite border-baseblack">
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.name} (+{country.dial_code})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Your-One-Line-Bio</FormLabel>
                <FormControl className="border-baseblack rounded-xl px-3 py-5">
                  <Textarea
                    placeholder="profile description"
                    {...field}
                    className="bg-transparent h-36"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Upload Image</FormLabel>
                <FormControl className="border-baseblack rounded-xl px-3 py-5 border-dotted border-2 p-4 grid gap-3 h-36">
                  <Input
                    type="file"
                    accept="image/*"
                    {...field}
                    className="bg-transparent"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="page-transition col-span-2 w-fit mx-auto bg-baseblue hover:bg-transparent border border-baseblue hover:text-baseblue rounded-full py-2 px-10 text-basewhite text-xs flex"
          >
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateProfileForm;
