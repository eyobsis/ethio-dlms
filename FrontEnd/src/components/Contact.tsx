
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="flex min-h-screen flex-col bg-[#1e293b] text-white">

<section className="relative w-full h-[500px] flex items-center justify-center bg-gray-900">
      <img
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        height="500"
        src="/contactus.jpeg"
        style={{
          aspectRatio: "1920/500",
          objectFit: "cover",
        }}
        width="1920"
      />
     
    </section>
            
            <br />
            <br />
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl text-center">  Get in Touch</h3>
            <br /> 
                        <h4 className="text-white font-bold text-center">
                            Have a question or need assistance? Fill out the
                            form and we'll get back to you as soon as possible.
                        </h4>
            <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-12 md:px-6 lg:py-16">
                <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">

               
                        
                    <div className="space-y-6">
                        
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Our Location</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="aspect-video overflow-hidden rounded-lg">
                                    <img
                                        alt="Google Maps"
                                        className="h-full w-full object-cover"
                                        height="400"
                                        src="https://www.bing.com/maps?q=addis+ababa&FORM=HDRSC7&cp=9.027223%7E38.736945&lvl=14.5"
                                        style={{
                                            aspectRatio: "600/400",
                                            objectFit: "cover",
                                        }}
                                        width="600"
                                    />
                                </div>
                                <div className="mt-4 text-sm text-gray-400">
                                    Addis Ababa, Ethiopia
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="space-y-6">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Contact Us</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="grid gap-4">
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                placeholder="Your email"
                                                type="email"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            className="min-h-[120px]"
                                            id="message"
                                            placeholder="Your message"
                                        />
                                    </div>
                                    <Button className="w-full" type="submit">
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
           
        </div>
    );
}
