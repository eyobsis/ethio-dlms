
import {Link} from "react-router-dom"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

export default function About() {
  return (
<>
  <section className="relative w-full h-[500px] flex items-center justify-center bg-gray-900">
  <img
    alt="Hero Banner"
    className="absolute inset-0 w-full h-full object-cover opacity-80"
    height="200"
    src={'https://ideogram.ai/assets/image/lossless/response/3KK3neicTeWVDOgrnlptUQ'}
    style={{
      aspectRatio: "1920/500",
      objectFit: "cover",
    }}
    width="1920"
  />
  </section>
    <div className="bg-[#0a2540] text-white min-h-[100dvh] flex flex-col">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-white">
                  About Us
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl dark:text-gray-400 mt-4">
                  Learn more about our Driving License Management System and how it can streamline your license process.
                </p>
                <div className="mt-6">
                  <Link
                    to="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#1e90ff] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#1e90ff]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1e90ff] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Find Out More
                  </Link>
                </div>
              </div>
             
            </div>
            <div className="space-y-4">
                <div className="bg-[#1e90ff]/10 rounded-lg p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)]">
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <p className="text-gray-300">
                    Our mission is to revolutionize the driving license management process, making it more efficient,
                    cost-effective, and accessible for individuals and organizations. We strive to streamline the entire
                    license lifecycle, from application to renewal, ensuring a seamless experience for our clients.
                  </p>
                </div>
                <div className="bg-[#1e90ff]/10 rounded-lg p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)]">
                  <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <img
                        src="/placeholder.svg"
                        width={64}
                        height={64}
                        alt="Team Member 1"
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-bold">John Doe</h3>
                        <p className="text-gray-300">CEO</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <img
                        src="/placeholder.svg"
                        width={64}
                        height={64}
                        alt="Team Member 2"
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-bold">Jane Smith</h3>
                        <p className="text-gray-300">CTO</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <img
                        src="/placeholder.svg"
                        width={64}
                        height={64}
                        alt="Team Member 3"
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-bold">Michael Johnson</h3>
                        <p className="text-gray-300">Head of Engineering</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <img
                        src="/placeholder.svg"
                        width={64}
                        height={64}
                        alt="Team Member 4"
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-bold">Emily Davis</h3>
                        <p className="text-gray-300">Product Manager</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1e90ff]/10 rounded-lg p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)]">
                  <h2 className="text-2xl font-bold mb-4">Our History</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold">2018 - Founding</h3>
                      <p className="text-gray-300">
                        Our company was founded with the goal of revolutionizing the driving license management process.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">2020 - First Product Launch</h3>
                      <p className="text-gray-300">
                        We launched our first Driving License Management System, which quickly gained traction in the
                        market.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">2022 - Expansion and Partnerships</h3>
                      <p className="text-gray-300">
                        We expanded our reach and formed strategic partnerships to further enhance our product
                        offerings.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">2023 - Continuous Innovation</h3>
                      <p className="text-gray-300">
                        We remain committed to continuous innovation, ensuring our system stays at the forefront of the
                        industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Key Features</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our Driving License Management System automates the license process, saves time, reduces costs,
                  provides fast response, and ensures accurate information.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="bg-[#1e90ff]/10 rounded-lg p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)]">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-white">Automated Process</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-400">
                    Our system automates the entire license process, reducing manual effort and ensuring efficiency.
                  </p>
                </div>
              </div>
              <div className="bg-[#1e90ff]/10 rounded-lg p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)]">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-white">Time Savings</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-400">
                    Our system streamlines the license process, saving you valuable time and resources.
                  </p>
                </div>
              </div>
              <div className="bg-[#1e90ff]/10 rounded-lg p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)]">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-white">Cost Reduction</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-400">
                    Our system helps you reduce the costs associated with the license process, leading to significant
                    savings.
                  </p>
                </div>
              </div>
              <div className="bg-[#1e90ff]/10 rounded-lg p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)]">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-white">Fast Response</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-400">
                    Our system provides fast and efficient responses to your license-related inquiries, ensuring timely
                    service.
                  </p>
                </div>
              </div>
              <div className="bg-[#1e90ff]/10 rounded-lg p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)]">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-white">Accurate Information</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-400">
                    Our system ensures accurate and up-to-date information, eliminating errors and providing reliable
                    data.
                  </p>
                </div>
              </div>
              <div className="bg-[#1e90ff]/10 rounded-lg p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)]">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-white">Scalable Solution</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-400">
                    Our system is designed to scale with your growing needs, ensuring it can handle increasing volumes
                    and complexity.
                  </p>
                </div>
              </div>
              <div className="bg-[#1e90ff]/10 rounded-lg p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)]">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-white">Customizable</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-400">
                    Our system can be customized to fit your specific needs and workflows, ensuring a seamless
                    integration.
                  </p>
                </div>
              </div>
              <div className="bg-[#1e90ff]/10 rounded-lg p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)]">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-white">Secure and Compliant</h3>
                  <p className="text-sm text-gray-300 dark:text-gray-400">
                    Our system adheres to the highest security standards and ensures compliance with relevant
                    regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Testimonials</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear what our customers have to say about our Driving License Management System.
                </p>
              </div>
              <Carousel className="w-full max-w-5xl">
                <CarouselContent>
                  <CarouselItem>
                    <div className="bg-[#1e90ff]/10 rounded-lg p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)]">
                      <div className="flex items-center mb-4">
                        <img
                          src="/placeholder.svg"
                          width={48}
                          height={48}
                          alt="Testimonial 1"
                          className="rounded-full mr-4"
                        />
                        <div>
                          <h3 className="text-lg font-bold">Jane Doe</h3>
                          <p className="text-gray-300">CEO, Acme Inc.</p>
                        </div>
                      </div>
                      <p className="text-gray-300">
                        "The Driving License Management System has been a game-changer for our organization. It has
                        streamlined our license process, saved us time and money, and provided us with accurate and
                        up-to-date information. Highly recommended!"
                      </p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="bg-[#1e90ff]/10 rounded-lg p-6 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)]">
                      <div className="flex items-center mb-4">
                        <img src="/placeholder.svg" width={48} height={48} alt="Testimonial 2" />
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  )
}