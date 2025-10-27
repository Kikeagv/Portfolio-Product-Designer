import { HydrateClient } from "~/trpc/server";
import { LinkPreview } from "~/components/ui/link-preview";
import AnimatedContent from "~/components/AnimatedContent";
import FaultyTerminal from "~/components/FaultyTerminal";

export default function Home() {
  return (
    <HydrateClient>
      <main className="h-screen w-full bg-black text-white">
        <div className="relative h-screen w-full">
          <FaultyTerminal
            scale={1.8}
            gridMul={[2, 1]}
            digitSize={1.2}
            timeScale={1}
            pause={false}
            scanlineIntensity={1}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0}
            tint="#ffffff"
            mouseReact={true}
            mouseStrength={0.5}
            pageLoadAnimation={false}
            brightness={0.2}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatedContent
              distance={200}
              direction="vertical"
              reverse={false}
              duration={1.5}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1.0}
              threshold={0.2}
              delay={0.3}
            >
              <section className="mx-auto max-w-4xl px-4 text-left">
                <div className="mx-auto mb-10 max-w-3xl text-xl text-white md:text-3xl">
                  <LinkPreview
                    url="https://tailwindcss.com"
                    className="font-bold text-purple-400"
                  >
                    Tailwind CSS
                  </LinkPreview>{" "}
                  and{" "}
                  <LinkPreview
                    url="https://framer.com/motion"
                    className="font-bold text-purple-400"
                  >
                    Framer Motion
                  </LinkPreview>{" "}
                  are a great way to build modern websites.
                </div>
                <div className="mx-auto max-w-3xl text-xl text-white md:text-3xl">
                  Visit{" "}
                  <LinkPreview
                    url="https://ui.aceternity.com"
                    className="font-bold text-purple-400"
                  >
                    Aceternity UI
                  </LinkPreview>{" "}
                  for amazing Tailwind and Framer Motion components.
                </div>
              </section>
            </AnimatedContent>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
