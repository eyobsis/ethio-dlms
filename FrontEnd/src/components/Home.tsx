/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wpLlqarx7bJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {Link} from 'react-router-dom'; 
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardContent, Card } from "@/components/ui/card"
import { CarouselItem, CarouselContent, Carousel } from "@/components/ui/carousel"
import Banner from './Banner';

export default function Home() {
  return (

    <div className="flex flex-col min-h-[100dvh]">
      <Banner />
     
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-[#0C213F] text-white">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="space-y-6">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Streamline Your Driving License Management
                </h1>
                <p className="max-w-[700px] text-gray-200 md:text-xl">
                  Our Drivers License Management System (DLMS) simplifies the process of managing your driving license,
                  from renewal to address changes and driving record access.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 px-6 text-sm font-medium text-[#1e3a8a] shadow transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white px-6 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-[#1e3a8a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  alt="DLMS"
                  className="max-w-full rounded-lg"
                  height={600}
                  src="/banner2.png"
                  style={{
                    aspectRatio: "600/600",
                    objectFit: "cover",
                  }}
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0C1E26] text-white" id="features">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simplify Your Driving License Management
                </h2>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our DLMS offers a range of features to make managing your driving license a breeze.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-lg font-bold text-white">License Renewal</h3>
                <p className="text-sm text-gray-200">
                  Renew your driving license with ease, right from your fingertips.
                </p>
              </div>
              <div className="grid gap-1 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-lg font-bold text-white">Address Change</h3>
                <p className="text-sm text-gray-200">Update your address information quickly and securely.</p>
              </div>
              <div className="grid gap-1 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-lg font-bold text-white">Driving Record Access</h3>
                <p className="text-sm text-gray-200">Access your driving record anytime, anywhere.</p>
              </div>
              <div className="grid gap-1 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-lg font-bold text-white">Notifications</h3>
                <p className="text-sm text-gray-200">
                  Get timely reminders for license renewal and other important updates.
                </p>
              </div>
              <div className="grid gap-1 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-lg font-bold text-white">Online Payments</h3>
                <p className="text-sm text-gray-200">Securely pay for your driving license services online.</p>
              </div>
              <div className="grid gap-1 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-lg font-bold text-white">24/7 Support</h3>
                <p className="text-sm text-gray-200">Our dedicated support team is available to assist you anytime.</p>
              </div>
              <div className="grid gap-1 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-lg font-bold text-white">Instant Verification</h3>
                <p className="text-sm text-gray-200">Get your driving license verified instantly.</p>
              </div>
              <div className="grid gap-1 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-lg font-bold text-white">Personalized Dashboard</h3>
                <p className="text-sm text-gray-200">Manage all your driving license information in one place.</p>
              </div>
              <div className="grid gap-1 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-lg font-bold text-white">Driving History Tracking</h3>
                <p className="text-sm text-gray-200">Keep track of your driving history and violations.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0C1E26] text-white" id="how-to-use">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm">How to Use</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Navigating the DLMS</h2>
                <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn how to make the most of our Drivers License Management System.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-lg font-bold text-white">Create an Account</h3>
                <p className="text-sm text-gray-200">
                  Sign up for a DLMS account to access all the features and manage your driving license.
                </p>
              </div>
              <div className="grid gap-1 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-lg font-bold text-white">Renew Your License</h3>
                <p className="text-sm text-gray-200">
                  Use the DLMS to easily renew your driving license before it expires.
                </p>
              </div>
              <div className="grid gap-1 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-lg font-bold text-white">Update Your Address</h3>
                <p className="text-sm text-gray-200">
                  Quickly update your address information through the DLMS to keep your records up-to-date.
                </p>
              </div>
              <div className="grid gap-1 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-lg font-bold text-white">Access Your Records</h3>
                <p className="text-sm text-gray-200">
                  View your driving history, violations, and other important records anytime.
                </p>
              </div>
              <div className="grid gap-1 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-lg font-bold text-white">Set Reminders</h3>
                <p className="text-sm text-gray-200">
                  Get timely notifications for license renewals and other important updates.
                </p>
              </div>
              <div className="grid gap-1 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors">
                <h3 className="text-lg font-bold text-white">Pay Online</h3>
                <p className="text-sm text-gray-200">
                  Securely pay for your driving license services through the DLMS.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0F212F] text-white" id="testimonials">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Users Say</h2>
              <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied customers about their experience with our DLMS.
              </p>
            </div>
            <Carousel
              breakpoints={{
                640: {
                  itemsToScroll: 1,
                  itemsToShow: 1,
                },
                768: {
                  itemsToScroll: 2,
                  itemsToShow: 2,
                },
                1024: {
                  itemsToScroll: 3,
                  itemsToShow: 3,
                },
              }}
              className="w-full max-w-5xl"
              itemsToScroll={1}
              itemsToShow={1}
              slideClassName="p-4"
            >
              <CarouselContent>
                <CarouselItem>
                  <Card className="bg-white/10 text-white hover:bg-white/20 transition-colors">
                    <CardContent>
                      <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                        “The DLMS made renewing my license a breeze. The process was seamless and the support team was
                        incredibly helpful.“
                      </blockquote>
                      <div className="mt-4 flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="/placeholder-avatar.png" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">John Doe</div>
                          <div className="text-sm text-gray-200">Satisfied DLMS User</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="bg-white/10 text-white hover:bg-white/20 transition-colors">
                    <CardContent>
                      <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                        “I love how the DLMS allows me to access my driving record anytime, anywhere. It's a
                        game-changer!“
                      </blockquote>
                      <div className="mt-4 flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="/placeholder-avatar.png" />
                          <AvatarFallback>JA</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">Jane Appleseed</div>
                          <div className="text-sm text-gray-200">Satisfied DLMS User</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card className="bg-white/10 text-white hover:bg-white/20 transition-colors">
                    <CardContent>
                      <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                        “The DLMS made updating my address information a breeze. I'm so glad I found this service.“
                      </blockquote>
                      <div className="mt-4 flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src="/placeholder-avatar.png" />
                          <AvatarFallback />
                        </Avatar>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </section>
      </main>
    </div>
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