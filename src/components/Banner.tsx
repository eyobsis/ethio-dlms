/**
 * v0 by Vercel.
 * @see https://v0.dev/t/u6QoGqCkYTP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */


export default function Banner() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center bg-gray-900">
      <img
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        height="1080"
        src="/banner.png"
        style={{
          aspectRatio: "1920/1080",
          objectFit: "cover",
        }}
        width="1920"
      />
     
    </section>
  )
}