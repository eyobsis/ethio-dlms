/**
 * v0 by Vercel.
 * @see https://v0.dev/t/D78LHmuxNJu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <div className="flex min-h-screen flex-col bg-[#1e293b] text-white">
            <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-12 md:px-6 lg:py-16">
                <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                            Get in Touch
                        </h1>
                        <p className="text-gray-400">
                            Have a question or need assistance? Fill out the
                            form and we'll get back to you as soon as possible.
                        </p>
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
            <footer className="bg-[#0f172a] py-6">
                <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
                    <p className="text-sm text-gray-400">
                        © 2024 Driving License Management. All rights reserved.
                    </p>
                    <nav className="flex items-center space-x-4">
                        <Link className="text-sm hover:text-gray-300" href="#">
                            Privacy Policy
                        </Link>
                        <Link className="text-sm hover:text-gray-300" href="#">
                            Terms of Service
                        </Link>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
