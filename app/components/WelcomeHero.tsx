import { ArrowUpRight, Ticket } from "lucide-react";
import { Button } from "./ui/button";
import { Countdown } from "./common/Countdown";
import { FC, PropsWithChildren } from "react";
import { cn } from "./utils";

interface Props extends PropsWithChildren<{}> {
  variant: "home" | "ticket";
}

export const WelcomeHero: FC<Props> = ({ variant, children }) => {
  return (
    <section
      className={cn(
        "mx-auto max-w-6xl w-full h-full",
        variant === "home" ? "mt-44" : "mt-20"
      )}
    >
      <div className="relative z-20 flex flex-col gap-10 items-center text-center">
        <div className="flex flex-col gap-2">
          <p className="text-center md:text-balance text-5xl sm:text-hero font-semibold lg:text-wrap">
            ¡Gracias por estar presente en el {' '}
            <a
              href="https://x.com/search?q=%23Aforshow" target="_blank"
              rel="noreferrer"
              className="inline-block bg-gradient-to-r from-caPrimary-500 to-caSecondary-500 text-transparent bg-clip-text font-[800]">
              Aforshow!
            </a>
          </p>
          {children}
        </div>
        <div className="md:w-5/6 w-full px-4">
          <h2 className="text-caTextSecondary text-lg mb-3">
            Puedes ver la repetición del evento aquí:
          </h2>
          <div className="aspect-video w-full h-full">
            <iframe src="https://player.twitch.tv/?video=2256897068&parent=afor.show"  frameBorder="0" allowFullScreen scrolling="no" height="100%" width="100%"></iframe>
          </div>
        </div>

        <div className="flex gap-6 pb-12">
          {variant === "home" && (
            <a href="#ticket">
              <Button size="xl">
                Ver tu ticket
                <Ticket className="size-6 ml-3" />
              </Button>
            </a>
          )}
          {variant === "ticket" && (
            <a href="/">
              <Button size="xl">
                Ir al inicio
                <ArrowUpRight className="size-6 ml-2" />
              </Button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
