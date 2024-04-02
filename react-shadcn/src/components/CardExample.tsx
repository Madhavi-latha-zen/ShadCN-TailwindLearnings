import "./CardExample.css";

import * as React from "react";
import { Textarea } from "@/components/ui/textarea";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent } from "@/components/ui/tabs";

import { Calendar as CalendarIcon } from "lucide-react";

import { addDays, format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const notifications = [
  {
    title: "Everything",
    description: "Email digest, mentions & all activity.",
  },
  {
    title: "Available",
    description: "Only mentions and comments.",
    image: "public/boy.png",
  },
  {
    title: "Ignoring",
    description: "Turn off all notifications.",
  },
];
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
type CardProps = React.ComponentProps<typeof Card>;
type Checked = DropdownMenuCheckboxItemProps["checked"];

const FormSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

function CardExample({ className, ...props }: CardProps) {
  const [date, setDate] = React.useState<Date>();
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
  const [activeMethod, setActiveMethod] = React.useState("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      security_emails: true,
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="p-14 h-[400px]">
      <div className="border-2 border-gray p-8 flex h-[1300px]">
        <div className="ml-2">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Create an account</CardTitle>
                  <CardDescription>
                    Enter your email below to create your account
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <Button className="flex items-center mr-5 mt-5 bg-white text-black border-2 border-gray w-[165px]">
                        <img
                          src="public/github.png"
                          alt="GitHub Logo"
                          className="w-6 h-6 mr-1"
                        />
                        GitHub
                      </Button>
                      <Button className="flex items-center mt-5 w-100 bg-white text-black  border-2 border-gray w-[165px]">
                        <img
                          src="public/google.png"
                          alt="Google Logo"
                          className="w-6 h-6 mr-1"
                        />
                        Google
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <div className="flex justify-content-center">
                  <hr className="border-1 border-black w-[80px] m-3 ml-6" />
                  <div>OR CONTINUE WITH</div>
                  <hr className="border-1 border-black w-[90px] m-3" />
                </div>

                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Email</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Password</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Create Account</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          <Tabs defaultValue="account" className="w-[400px] mt-8">
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>
                    Add a new payment method to your account.
                  </CardDescription>
                </CardHeader>
                <div className="flex">
                  <div
                    className={`border-2 border-gray p-5 m-5 w-[130px] ${
                      activeMethod === "card" ? "border-black" : ""
                    }`}
                    onClick={() => setActiveMethod("card")}
                  >
                    <img className="" src="public/card.png" alt="" />
                    <Label htmlFor="name" className="ml-2">
                      Card
                    </Label>
                  </div>
                  <div
                    className={`border-2 border-gray p-5 m-5 w-[130px] ${
                      activeMethod === "paypal" ? "border-black" : ""
                    }`}
                    onClick={() => setActiveMethod("paypal")}
                  >
                    <img className="mt-3 ml-3" src="public/paypal.png" alt="" />
                    <Label htmlFor="name" className="mt-5">
                      PayPal
                    </Label>
                  </div>
                  <div
                    className={`border-2 border-gray p-5 m-5 w-[130px] ${
                      activeMethod === "apple" ? "border-black" : ""
                    }`}
                    onClick={() => setActiveMethod("apple")}
                  >
                    <img src="public/apple.png" alt="" />
                    <Label htmlFor="name">Apple</Label>
                  </div>
                </div>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Card Name</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                </CardContent>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[350px] justify-start text-left font-normal",
                        !date && "text-muted-foreground space-y-1 ml-6"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <CardFooter>
                  <Button className="w-full mt-6">Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="ml-8 h-[150px]">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription>
                    Invite your team members to collaborate.
                  </CardDescription>
                </CardHeader>
                <div className="flex">
                  <div className="ml-1">
                    <img
                      src="public/girl.png"
                      alt="GitHub Logo"
                      className="w-[3rem] h-10 ml-8"
                    />
                  </div>
                  <div className="ml-6">
                    <Label htmlFor="name">Sofia Davis</Label>
                    <CardDescription>m@example.com</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="bg-white text-black border-2 border-gray w-[100px] ml-12"
                      >
                        Owner
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                      >
                        Status Bar
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={showActivityBar}
                        onCheckedChange={setShowActivityBar}
                        disabled
                      >
                        Activity Bar
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={showPanel}
                        onCheckedChange={setShowPanel}
                      >
                        Panel
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex p-8">
                  <div className="ml-1">
                    <img
                      src="public/boy.png"
                      alt="GitHub Logo"
                      className="w-[3rem] h-10 mr-12"
                    />
                  </div>
                  <div className="mr-6">
                    <Label htmlFor="name">Jackson Lee</Label>
                    <CardDescription>p@example.com</CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="bg-white text-black border-2 border-gray w-[125px] ml-7"
                      >
                        Billing
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                      >
                        Status Bar
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={showActivityBar}
                        onCheckedChange={setShowActivityBar}
                        disabled
                      >
                        Activity Bar
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={showPanel}
                        onCheckedChange={setShowPanel}
                      >
                        Panel
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
          <Tabs defaultValue="account" className="w-[400px] mt-5">
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Share this document</CardTitle>
                  <CardDescription>
                    Anyone with the link can view this document.
                  </CardDescription>
                  <div className="flex">
                    <div className="space-y-1 mt-5">
                      <Input
                        id="name"
                        defaultValue="http://example.com/link/to/document"
                      />
                    </div>
                    <div>
                      <Button variant="ghost" className="mt-5">
                        Copy Link
                      </Button>
                    </div>
                  </div>
                  <div>
                    <hr className="mt-3"></hr>
                  </div>
                  <div className="mt-5">
                    <div className="mt-5">
                      <Label htmlFor="name">People with access</Label>
                    </div>

                    <div className="flex mt-5">
                      <div className="ml-1">
                        <img
                          src="public/girl.png"
                          alt="GitHub Logo"
                          className="w-[3rem] h-10 ml-2"
                        />
                      </div>
                      <div className="ml-6">
                        <Label htmlFor="name">Olivia Martin</Label>
                        <CardDescription>m@example.com</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            className="bg-white text-black border-2 border-gray w-[100px] ml-12"
                          >
                            Can Edit
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuSeparator />
                          <DropdownMenuCheckboxItem
                            checked={showStatusBar}
                            onCheckedChange={setShowStatusBar}
                          >
                            Can Edit
                          </DropdownMenuCheckboxItem>

                          <DropdownMenuCheckboxItem
                            checked={showPanel}
                            onCheckedChange={setShowPanel}
                          >
                            Can View
                          </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex mt-6">
                      <div className="ml-1">
                        <img
                          src="public/girl.png"
                          alt="GitHub Logo"
                          className="w-[3rem] h-10 ml-2"
                        />
                      </div>
                      <div className="ml-6">
                        <Label htmlFor="name">Isabella Nguyen</Label>
                        <CardDescription>b@example.com</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            className="bg-white text-black border-2 border-gray w-[100px] ml-12"
                          >
                            Can Edit
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuSeparator />
                          <DropdownMenuCheckboxItem
                            checked={showStatusBar}
                            onCheckedChange={setShowStatusBar}
                          >
                            Can Edit
                          </DropdownMenuCheckboxItem>

                          <DropdownMenuCheckboxItem
                            checked={showPanel}
                            onCheckedChange={setShowPanel}
                          >
                            Can View
                          </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="flex mt-7">
                      <div className="ml-1">
                        <img
                          src="public/girl.png"
                          alt="GitHub Logo"
                          className="w-[3rem] h-10 ml-2"
                        />
                      </div>
                      <div className="ml-6">
                        <Label htmlFor="name">Sofia Davis</Label>
                        <CardDescription>m@example.com</CardDescription>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            className="bg-white text-black border-2 border-gray w-[100px] ml-12"
                          >
                            Can Edit
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                          <DropdownMenuSeparator />
                          <DropdownMenuCheckboxItem
                            checked={showStatusBar}
                            onCheckedChange={setShowStatusBar}
                          >
                            Can Edit
                          </DropdownMenuCheckboxItem>

                          <DropdownMenuCheckboxItem
                            checked={showPanel}
                            onCheckedChange={setShowPanel}
                          >
                            Can View
                          </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </TabsContent>
          </Tabs>
          <Tabs defaultValue="account" className="w-[400px] mt-5">
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Pick a date</CardTitle>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
                      <Select
                        onValueChange={(value) =>
                          setDate(addDays(new Date(), parseInt(value)))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="0">Today</SelectItem>
                          <SelectItem value="1">Tomorrow</SelectItem>
                          <SelectItem value="3">In 3 days</SelectItem>
                          <SelectItem value="7">In a week</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="rounded-md border">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                        />
                      </div>
                    </PopoverContent>
                  </Popover>
                </CardHeader>
              </Card>
            </TabsContent>
          </Tabs>
          <Card className={cn("w-[400px] mt-5", className)} {...props}>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Choose what you want to be notified about.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div>
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-15 w-12 translate-y-1 rounded-full">
                      <img src="public/github.png" alt="GitHub Logo" />
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none ml-6">
                        {notification.title}
                      </p>
                      <p className="text-sm text-muted-foreground ml-6">
                        {notification.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="ml-6">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Report an issue</CardTitle>
                  <CardDescription>
                    What area are you having problems with?
                  </CardDescription>
                </CardHeader>
                <div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="bg-white text-black border-2 border-gray w-[165px] ml-6"
                      >
                        Billing
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                      >
                        Status Bar
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={showActivityBar}
                        onCheckedChange={setShowActivityBar}
                        disabled
                      >
                        Activity Bar
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={showPanel}
                        onCheckedChange={setShowPanel}
                      >
                        Panel
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="bg-white text-black border-2 border-gray w-[165px] ml-5"
                      >
                        Severity
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                      >
                        Status Bar
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={showActivityBar}
                        onCheckedChange={setShowActivityBar}
                        disabled
                      >
                        Activity Bar
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked={showPanel}
                        onCheckedChange={setShowPanel}
                      >
                        Panel
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <CardContent className="space-y-2 mt-5">
                  <div className="space-y-1">
                    <Label htmlFor="name">Email</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Description</Label>
                    <Textarea placeholder="Type your message here." />
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="">
                    <div>{/* <Button variant="ghost">Cancel</Button> */}</div>
                  </div>
                  <div className="ml-38">
                    <Button className="ml-15">Submit</Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
          <Tabs defaultValue="account" className="w-[400px] mt-8">
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>shadcn/ui</CardTitle>
                  <CardDescription>
                    Beautifully designed components that you can copy and paste
                    into your apps. Accessible. Customizable. Open Source.
                  </CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
          </Tabs>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              <div>
                <div className="space-y-4">
                  <div>
                    <FormField
                      control={form.control}
                      name="marketing_emails"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 mt-10">
                          <div className="space-y-0.5">
                            <h3 className="mb-4 text-lg font-medium">
                              Strictly Necessary
                            </h3>
                            <CardDescription className="mb-5">
                              Manage your cookie settings here.
                            </CardDescription>
                            <div className="flex">
                              <div className="mt-3 mt-5">
                                <FormLabel className="text-base">
                                  Functional Cookies
                                </FormLabel>
                                <FormDescription>
                                  These cookies allow the website to provide
                                  personalized functionality.
                                </FormDescription>
                              </div>
                              <div className="mt-3">
                                {" "}
                                <FormControl>
                                  <Switch
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="mt-3">
                                <FormLabel className="text-base">
                                  Performance Cookies
                                </FormLabel>
                                <FormDescription>
                                  These cookies help to improve the performance
                                  of the website.
                                </FormDescription>
                              </div>
                              <div className="mt-3">
                                {" "}
                                <FormControl>
                                  <Switch
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="mt-3">
                                <FormLabel className="text-base">
                                  Marketing emails
                                </FormLabel>
                                <FormDescription>
                                  Receive emails about new products, features,
                                  and more.
                                </FormDescription>
                              </div>
                              <div className="mt-3">
                                {" "}
                                <FormControl>
                                  <Switch
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                              </div>
                            </div>
                            <div id="mt-15">
                              <Button
                                variant="ghost"
                                className="w-full bg-white text-black  border-2 border-gray"
                              >
                                Submit
                              </Button>
                            </div>
                          </div>
                        </FormItem>
                      )}
                    />{" "}
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default CardExample;
