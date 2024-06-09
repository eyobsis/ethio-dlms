//banner.tsx
export default function Banner() {
    return (
        <section className="relative w-full h-[100vh] flex items-center justify-center bg-gray-900">
            <img
                alt="Hero Banner"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                height="1080"
                src={"https://ideogram.ai/assets/image/lossless/response/rRUSk2AHT329-RnkFFKnXA"}
                style={{
                    aspectRatio: "1920/1080",
                    objectFit: "cover",
                }}
                width="1920"
            />
        </section>
    );
}
