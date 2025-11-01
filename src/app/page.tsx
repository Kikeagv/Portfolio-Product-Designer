import { HydrateClient } from "~/trpc/server";
import { LinkPreview } from "~/components/ui/link-preview";
import AnimatedContent from "~/components/AnimatedContent";
import FaultyTerminal from "~/components/FaultyTerminal";

export default function Home() {
  return (
    <HydrateClient>
      <main className="h-screen w-full bg-black text-white">
        <div className="relative h-8/10 w-full xl:h-1/2">
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
              <section className="mx-auto max-w-7xl px-2 text-left">
                <div className="mx-auto mb-10 max-w-6xl px-6 text-4xl leading-none text-white lg:text-6xl">
                  Hello! I&apos;m{" "}
                  <LinkPreview
                    url="https://enriquegarcia.dev"
                    className="font-bold text-purple-400"
                  >
                    Enrique
                  </LinkPreview>{" "}
                  García, a Product designer simplifying{" "}
                  <LinkPreview
                    url="https://www.figma.com/community/search?resource_type=files&sort=new&query=banking%20app"
                    className="font-bold text-purple-400"
                  >
                    Banking
                  </LinkPreview>{" "}
                  through research and{" "}
                  <LinkPreview
                    url="https://www.interaction-design.org/literature/topics/design-thinking"
                    className="font-bold text-purple-400"
                  >
                    Design
                  </LinkPreview>
                  <div className="pt-4 text-xl font-semibold lg:text-4xl">
                    - Currently at Banco Atlántida redefining the digital
                    banking as UX/UI Analyst
                  </div>
                </div>
              </section>
            </AnimatedContent>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
