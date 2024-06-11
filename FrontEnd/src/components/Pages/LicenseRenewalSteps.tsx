/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9NBSebK04n8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#0B1D3B] text-white">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Renew Your Driving License
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl dark:text-gray-400">
                  Streamline your driving license renewal process with our
                  easy-to-use platform. Get started today!
                </p>
                <div className="space-x-4 mt-6">
                  <Link
                    href="/renew-license"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-[#1E4FD0] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#1E4FD0]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1E4FD0] disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Renew Now
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                alt="Ad Banner"
                className="w-full max-h-[200px] object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0B1D3B]">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Renew Your License in 3 Easy Steps
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Follow these simple steps to renew your driving license
                  quickly and conveniently.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold">Step 1: Gather Documents</h3>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  Collect the required documents, such as your current license,
                  proof of identity, and any necessary fees.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold">
                  Step 2: Complete Application
                </h3>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  Fill out the online renewal application form with your
                  personal and vehicle information.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold">Step 3: Submit and Wait</h3>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  Submit your application and payment, then wait for your new
                  license to arrive in the mail.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0B1D3B]">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Get answers to the most common questions about renewing your
                  driving license.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold">
                  How long does the renewal process take?
                </h3>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  The renewal process typically takes 2-4 weeks from the time
                  your application is submitted. However, processing times may
                  vary depending on the volume of applications.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold">
                  What documents do I need to renew?
                </h3>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  You'll need to provide your current driver's license, proof of
                  identity (such as a birth certificate or passport), and any
                  applicable fees.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold">Can I renew online?</h3>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  Yes, you can complete the entire renewal process online
                  through our secure platform. This is the fastest and most
                  convenient way to renew your license.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-bold">
                  How much does it cost to renew?
                </h3>
                <p className="text-sm text-gray-300 dark:text-gray-400">
                  The cost to renew your driving license varies by state, but
                  typically ranges from $20 to $50. You can check the exact fee
                  for your state on our website.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
