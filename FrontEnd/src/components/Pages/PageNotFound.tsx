//page not found page

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <main className="flex items-center justify-center h-[100dvh]">
      <Card className="max-w-md w-full bg-orange-500 text-white">
        <CardHeader>
          <CardTitle>404 - Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Oops, it looks like the page you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-orange-500 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-700 disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Go back home
          </Link>
        </CardContent>
      </Card>
    </main>
  );
}
