
import Hero from "@/components/Hero";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="h-full w-full rounded-md relative flex flex-col items-center justify-center antialiased" style={{
            backgroundColor:'#000000'
          }}>
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold pt-60">
              Nitanshu Goyal
            </h1>
          </div>
          <BackgroundBeams />

      <div className=" max-w-7xl w-full">
        <Hero/>
      </div>
    </main>
  );
}
