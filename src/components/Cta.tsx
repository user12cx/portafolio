import { Download } from "lucide-react";
import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Informacion
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Detallada{" "}
            </span>
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Puedes descargar mi CV para conocer más sobre mi formación, experiencia y habilidades
            técnicas tanto en desarrollo como en soporte tecnológico.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <a href="/public/image.png" download>
            <Button variant="outline" className="flex items-center gap-2 w-full md:mr-4 md:w-auto">
              <Download className="w-4 h-4" />
              Descargar CV
            </Button>
          </a>

        </div>
      </div>
    </section>
  );
};
