import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative w-full h-screen">
      <div className="absolute size-full">
        <Image
          src={"/bg-img.jpg"}
          alt="background"
          fill
          className="size-full"
        />
      </div>
      {children}
    </main>
  );
}
