import { Link } from "react-router-dom";
import RegisterForRenewal from "./RegisterForRenewal";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

export default function LicenseRenwalSteps() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-1 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Renew Your Driver's License
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-gray-300">
                Follow our simple process to renew your driver's license quickly
                and easily. Ensure you have all the necessary documents ready.
              </p>
              <div className="mt-6">
                <Link
                  to="/register-for-renewal"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#1E40AF] px-8 text-sm font-medium text-gray-50 shadow-md transition-colors hover:bg-[#1E40AF]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1E40AF] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#1E40AF] dark:text-gray-50 dark:hover:bg-[#1E40AF]/90 dark:focus-visible:ring-[#1E40AF]"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://ideogram.ai/assets/image/lossless/response/QJWY7VV6QPaWvjJEWqImJQ"
                width="700"
                height="300"
                alt="Driver's License Renewal"
                className="mx-auto aspect-[5/2] overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Renewal Steps
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                Follow these steps to renew your driver's license.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-1">
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between rounded-lg bg-gray-100 p-4 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div>
                    <h3 className="text-lg font-bold">Personal Information</h3>
                    <p className="text-sm text-gray-400 dark:text-gray-300">
                      Update your personal details for the renewal process.
                    </p>
                  </div>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pt-4">
                  <RegisterForRenewal />
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between rounded-lg bg-gray-100 p-4 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div>
                    <h3 className="text-lg font-bold">Vision Test</h3>
                    <p className="text-sm text-gray-400 dark:text-gray-300">
                      Ensure your vision meets the required standards.
                    </p>
                  </div>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pt-4">
                  <div className="space-y-4">
                    <p>
                      A vision test is required to renew your license. Make sure
                      your eyesight meets the necessary standards for safe
                      driving.
                    </p>
                    <div className="flex justify-end">
                      <Button className="bg-[#1E40AF] text-gray-50 shadow-md hover:bg-[#1E40AF]/90 focus-visible:ring-[#1E40AF] dark:bg-[#1E40AF] dark:text-gray-50 dark:hover:bg-[#1E40AF]/90 dark:focus-visible:ring-[#1E40AF]">
                        Next
                      </Button>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between rounded-lg bg-gray-100 p-4 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div>
                    <h3 className="text-lg font-bold">Fee Payment</h3>
                    <p className="text-sm text-gray-400 dark:text-gray-300">
                      Pay the required renewal fees.
                    </p>
                  </div>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pt-4">
                  <div className="space-y-4">
                    <p>
                      Pay the necessary fees for renewing your driver's license.
                      The amount varies depending on your state and the type of
                      license.
                    </p>
                    <div className="flex justify-end">
                      <Button className="bg-[#1E40AF] text-gray-50 shadow-md hover:bg-[#1E40AF]/90 focus-visible:ring-[#1E40AF] dark:bg-[#1E40AF] dark:text-gray-50 dark:hover:bg-[#1E40AF]/90 dark:focus-visible:ring-[#1E40AF]">
                        Next
                      </Button>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between rounded-lg bg-gray-100 p-4 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div>
                    <h3 className="text-lg font-bold">
                      Receive Renewed License
                    </h3>
                    <p className="text-sm text-gray-400 dark:text-gray-300">
                      Get your renewed license once all steps are completed.
                    </p>
                  </div>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pt-4">
                  <div className="space-y-4">
                    <p>
                      After completing all the necessary steps, you will receive
                      your renewed driver's license either by mail or at the DMV
                      office.
                    </p>
                    <div className="flex justify-end">
                      <Button className="bg-[#1E40AF] text-gray-50 shadow-md hover:bg-[#1E40AF]/90 focus-visible:ring-[#1E40AF] dark:bg-[#1E40AF] dark:text-gray-50 dark:hover:bg-[#1E40AF]/90 dark:focus-visible:ring-[#1E40AF]">
                        Finish
                      </Button>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] mx-auto text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                Get answers to common questions about the license renewal
                process.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-1">
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between rounded-lg bg-white shadow-md p-4 font-medium transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                  <div>
                    <h3 className="text-lg font-bold">
                      What documents do I need to bring?
                    </h3>
                    <p className="text-sm text-gray-400 dark:text-gray-300">
                      Make sure you have the required identification and
                      residency documents.
                    </p>
                  </div>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pt-4">
                  <div className="space-y-4">
                    <p>
                      You'll need to bring the following documents to the DMV:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Proof of identity (current driver's license, passport,
                        etc.)
                      </li>
                      <li>Proof of social security number</li>
                      <li>
                        Proof of residency (utility bill, bank statement, etc.)
                      </li>
                    </ul>
                    <p>Make sure all documents are valid and up-to-date.</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between rounded-lg bg-white shadow-md p-4 font-medium transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                  <div>
                    <h3 className="text-lg font-bold">
                      How much does it cost to renew a driver's license?
                    </h3>
                    <p className="text-sm text-gray-400 dark:text-gray-300">
                      Understand the fees associated with the driver's license
                      renewal process.
                    </p>
                  </div>
                  <ChevronDownIcon className="h-5 w-5 transition-transform [&[data-state=open]]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pt-4">
                  <div className="space-y-4">
                    <p>
                      The fees for renewing a driver's license vary by state,
                      but typically include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Renewal application fee: $20-$50</li>
                      <li>Vision test fee: $5-$15</li>
                      <li>License issuance fee: $20-$50</li>
                    </ul>
                    <p>Check with your local DMV for exact amounts.</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
