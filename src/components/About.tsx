import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Sobre {" "}
                </span>
                Mi
              </h2>

              <div className="relative border-l-2 border-cyan-500 pl-6 space-y-6">
                <div className="absolute left-[-6px] top-0 w-3 h-3 bg-cyan-500 rounded-full"></div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Desarrollador Full Stack</h3>
                  <p className="text-muted-foreground">
                    Experiencia en desarrollo web y móvil usando tecnologías como React, Node.js, TypeScript, SQL Server y más.
                  </p>
                </div>

                <div className="absolute left-[-6px] top-20 w-3 h-3 bg-cyan-500 rounded-full"></div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Ingeniero de Software - Senati</h3>
                  <p className="text-muted-foreground">
                    Formación técnica sólida en análisis, diseño y construcción de sistemas escalables.
                  </p>
                </div>

                <div className="absolute left-[-6px] top-[160px] w-3 h-3 bg-cyan-500 rounded-full"></div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Conocimientos en Redes e Infraestructura</h3>
                  <p className="text-muted-foreground">
                    Instalación de cámaras, fibra óptica, mantenimiento de equipos, cableado estructurado y soporte técnico.
                  </p>
                </div>

                <div className="absolute left-[-6px] top-[260px] w-3 h-3 bg-cyan-500 rounded-full"></div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Enfoque integral</h3>
                  <p className="text-muted-foreground">
                    Combino mis conocimientos en desarrollo y redes para ofrecer soluciones completas, tanto en software como en infraestructura.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
