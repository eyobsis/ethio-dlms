/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rrrHwUTKFGH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
    CardTitle,
    CardHeader,
    CardContent,
    CardFooter,
    Card,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Services() {
    return (
        <>

<section className="relative w-full h-[500px] flex items-center justify-center bg-gray-900">
      <img
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        height="500"
        src="/service.jpeg"
        style={{
          aspectRatio: "1920/500",
          objectFit: "cover",
        }}
        width="1920"
      />
     
    </section>
        <main className="container mx-auto my-12 grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="flex flex-col justify-between rounded-lg bg-gray-950 shadow-md dark:bg-gray-950 dark:text-gray-50">
                <div>
                    <CardHeader>
                        <CardTitle className="text-white">
                            Driver's License Renewal
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-400">
                            Renew your driver's license quickly and
                            conveniently. Our online process makes it easy to
                            update your information and get back on the road.
                        </p>
                    </CardContent>
                </div>
                <CardFooter>
                    <Link
                        className="inline-flex w-full items-center justify-center rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-500 dark:focus:ring-offset-gray-950"
                        href="#"
                    >
                        Renew License
                    </Link>
                </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between rounded-lg bg-gray-950 shadow-md dark:bg-gray-950 dark:text-gray-50">
                <div>
                    <CardHeader>
                        <CardTitle className="text-white">
                            New Student Registration
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-400">
                            Get started on your driving journey by registering
                            as a new student. Our team will guide you through
                            the process and help you get your learner's permit.
                        </p>
                    </CardContent>
                </div>
                <CardFooter>
                    <Link
                        className="inline-flex w-full items-center justify-center rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-500 dark:focus:ring-offset-gray-950"
                        href="#"
                    >
                        Register as Student
                    </Link>
                </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between rounded-lg bg-gray-950 shadow-md dark:bg-gray-950 dark:text-gray-50">
                <div>
                    <CardHeader>
                        <CardTitle className="text-white">
                            Vehicle Registration
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-400">
                            Register your vehicle with the state and get your
                            official registration documents. Our streamlined
                            process makes it easy to get your car on the road.
                        </p>
                    </CardContent>
                </div>
                <CardFooter>
                    <Link
                        className="inline-flex w-full items-center justify-center rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-500 dark:focus:ring-offset-gray-950"
                        href="#"
                    >
                        Register Vehicle
                    </Link>
                </CardFooter>
            </Card>
            <Card className="flex flex-col justify-between rounded-lg bg-gray-950 shadow-md dark:bg-gray-950 dark:text-gray-50">
                <div>
                    <CardHeader>
                        <CardTitle className="text-white">
                            Driving Lessons
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-400">
                            Improve your driving skills with our expert
                            instructors. Whether you're a beginner or looking to
                            sharpen your skills, we offer comprehensive driving
                            lessons to meet your needs.
                        </p>
                    </CardContent>
                </div>
                <CardFooter>
                    <Link
                        className="inline-flex w-full items-center justify-center rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-500 dark:focus:ring-offset-gray-950"
                        href="#"
                    >
                        Book Lessons
                    </Link>
                </CardFooter>
            </Card>
        </main>

        </>
    );
}
