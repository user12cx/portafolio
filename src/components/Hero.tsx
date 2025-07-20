import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { IconMesage } from "./Icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Ivan Bautista
            </span>{" "}
            Developer
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Full Stack
            </span>{" "}

          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Estoy listo para llevar tus ideas al siguiente nivel. ¿Trabajamos juntos?
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">

          <a
            rel="noreferrer noopener"
            href="http://wa.me/992036274"
            target="_blank"
            className={`w-full md:w-1/3 gap-3 ${buttonVariants({
              variant: "default",
            })}`}
          >
            Whatsapp
            <IconMesage />
          </a>

          <a
            rel="noreferrer noopener"
            href="https://github.com/user12cx"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
