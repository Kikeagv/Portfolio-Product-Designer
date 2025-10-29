import { HydrateClient } from "~/trpc/server";
import { LinkPreview } from "~/components/ui/link-preview";
import AnimatedContent from "~/components/AnimatedContent";
import FaultyTerminal from "~/components/FaultyTerminal";
import SpotlightCard from "~/components/SpotlightCard";

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
        <div className="px-8 pb-6 dark:bg-gray-900">
          <div className="py-12 dark:bg-gray-900">
            <div className="mx-auto max-w-2xl lg:max-w-7xl lg:px-8">
              <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
                <SpotlightCard
                  className="custom-spotlight-card lg:row-span-2"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <div className="@container relative mt-8 min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm"></div>
                </SpotlightCard>

                <SpotlightCard
                  className="custom-spotlight-card flex items-center justify-center max-lg:row-start-1"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <div className="flex w-full flex-col gap-2">
                    <p className="text-xl font-medium text-white">Work</p>
                    <div className="flex w-full grow items-center justify-between">
                      <div className="flex flex-col items-start text-base text-white">
                        <p className="font-normal">Banco Atlántida</p>
                        <p className="font-bold">UX/UI Analyst</p>
                      </div>
                      <p className="text-base font-bold whitespace-nowrap text-white">
                        2023-ongoing
                      </p>
                    </div>
                    <div className="flex w-full items-center justify-center">
                      <div className="h-px w-full bg-white/20"></div>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex flex-col items-start text-base text-white">
                        <p className="font-normal">BlueStar</p>
                        <p className="font-bold">UX/UI Designer</p>
                      </div>
                      <p className="text-base font-bold whitespace-nowrap text-white">
                        2020-2023
                      </p>
                    </div>
                    <div className="flex w-full items-center justify-center">
                      <div className="h-px w-full bg-white/20"></div>
                    </div>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex flex-col items-start text-base text-white">
                        <p className="font-normal">Ministerio de Economía</p>
                        <p className="font-bold">Web design Internship</p>
                      </div>
                      <p className="text-base font-bold whitespace-nowrap text-white">
                        2022-2022
                      </p>
                    </div>
                  </div>
                </SpotlightCard>

                <SpotlightCard
                  className="custom-spotlight-card max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2"></div>
                </SpotlightCard>

                <SpotlightCard
                  className="custom-spotlight-card lg:row-span-2"
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <div className="relative mt-8 min-h-120 w-full grow"></div>
                </SpotlightCard>
              </div>
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
