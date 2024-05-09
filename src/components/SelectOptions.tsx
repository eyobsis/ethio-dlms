/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wyGgIRs7Yyp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SelectOptions() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <Card>
              <CardHeader className="bg-gray-900 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Driver's License Renewal</CardTitle>
                    <CardDescription>Renew your license online</CardDescription>
                  </div>
                  <CopyrightIcon className="h-12 w-12" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div>
                    <Label htmlFor="license-number">License Number</Label>
                    <Input id="license-number" placeholder="ABC123456" />
                  </div>
                  <div>
                    <Label htmlFor="expiration-date">Expiration Date</Label>
                    <Input id="expiration-date" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="date-of-birth">Date of Birth</Label>
                    <Input id="date-of-birth" type="date" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Renew License</Button>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader className="bg-gray-900 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Vehicle Registration</CardTitle>
                    <CardDescription>Register your vehicle online</CardDescription>
                  </div>
                  <CarIcon className="h-12 w-12" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="vehicle-make">Vehicle Make</Label>
                    <Input id="vehicle-make" placeholder="Toyota" />
                  </div>
                  <div>
                    <Label htmlFor="vehicle-model">Vehicle Model</Label>
                    <Input id="vehicle-model" placeholder="Camry" />
                  </div>
                  <div>
                    <Label htmlFor="vehicle-year">Vehicle Year</Label>
                    <Input id="vehicle-year" placeholder="2022" type="number" />
                  </div>
                  <div>
                    <Label htmlFor="license-plate">License Plate</Label>
                    <Input id="license-plate" placeholder="ABC123" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register Vehicle</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get started with your application</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our secure and user-friendly platform makes it easy to renew your driver's license or register your
              vehicle.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Renew License
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Register Vehicle
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}


function CopyrightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
    </svg>
  )
}