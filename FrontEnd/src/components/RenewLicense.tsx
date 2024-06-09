/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cRw61ZECUEr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function RenewLicense() {
  return (
    <div className="w-full bg-[#0B1D3F] text-white">
      <div className="container mx-auto py-12 md:py-20 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">Renew Your Driver's License</h1>
          <p className="mt-4 max-w-xl mx-auto text-gray-300 md:text-xl">
            Quickly and securely renew your driver's license online. Follow the steps below to get started.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg ring-1 ring-gray-200 mx-auto w-full max-w-2xl">
          <div className="p-6 md:p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-gray-500 font-medium">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#3B5998] focus:border-[#3B5998]"
                  />
                </div>
                <div>
                  <Label htmlFor="middleName" className="text-gray-500 font-medium">
                    Middle Name
                  </Label>
                  <Input
                    id="middleName"
                    placeholder="Q."
                    className="bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#3B5998] focus:border-[#3B5998]"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-500 font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#3B5998] focus:border-[#3B5998]"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-500 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#3B5998] focus:border-[#3B5998]"
                />
              </div>
              <div>
                <Label htmlFor="licenseNumber" className="text-gray-500 font-medium">
                  License Number
                </Label>
                <Input
                  id="licenseNumber"
                  placeholder="ABC123456"
                  className="bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#3B5998] focus:border-[#3B5998]"
                />
              </div>
              <div>
                <Label htmlFor="expirationDate" className="text-gray-500 font-medium">
                  Expiration Date
                </Label>
                <Input
                  id="expirationDate"
                  type="date"
                  className="bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#3B5998] focus:border-[#3B5998]"
                />
              </div>
              <div>
                <Label htmlFor="payment" className="text-gray-500 font-medium">
                  Payment Method
                </Label>
                <Select
                  id="payment"
                  className="bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#3B5998] focus:border-[#3B5998]"
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="credit-card">Credit Card</SelectItem>
                    <SelectItem value="debit-card">Debit Card</SelectItem>
                    <SelectItem value="paypal">PayPal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="medicalPdf" className="text-gray-500 font-medium">
                    Upload Medical PDF
                  </Label>
                  <Input
                    id="medicalPdf"
                    type="file"
                    accept="application/pdf"
                    className="bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#3B5998] focus:border-[#3B5998]"
                  />
                </div>
                <div>
                  <Label htmlFor="userIdPdf" className="text-gray-500 font-medium">
                    Upload User ID PDF
                  </Label>
                  <Input
                    id="userIdPdf"
                    type="file"
                    accept="application/pdf"
                    className="bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#3B5998] focus:border-[#3B5998]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="userPhoto" className="text-gray-500 font-medium">
                    Upload User Photo
                  </Label>
                  <Input
                    id="userPhoto"
                    type="file"
                    accept="image/*"
                    className="bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#3B5998] focus:border-[#3B5998]"
                  />
                </div>
                <div>
                  <Label htmlFor="userLicensePdf" className="text-gray-500 font-medium">
                    Upload User License PDF
                  </Label>
                  <Input
                    id="userLicensePdf"
                    type="file"
                    accept="application/pdf"
                    className="bg-white border-gray-300 text-gray-900 focus:ring-2 focus:ring-[#3B5998] focus:border-[#3B5998]"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#3B5998] hover:bg-[#2D4373] text-white font-medium rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#3B5998] focus:ring-offset-2"
              >
                Renew License
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}