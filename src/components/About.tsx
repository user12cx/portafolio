import pilot from "../assets/imagen2.jpeg";
import { Badge } from "./ui/badge";
import { Code, Cpu, Settings, Network, BookOpenCheck, Rocket, Star, Database } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32 space-y-16">
      {/* Sección Sobre Mí */}
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt="Foto de perfil"
            className="w-[300px] object-contain rounded-lg"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Sobre{" "}
              </span>
              Mí
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <BookOpenCheck className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-primary">Formación Académica</h3>
                  <p className="text-muted-foreground">
                    <span className="font-medium">2022-2025</span> - Ingeniería de Software en SENATI (Último año)
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Especialización en desarrollo ágil, arquitecturas escalables y gestión de proyectos TI.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Cpu className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-primary">Tecnologías Principales</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge className="bg-cyan-500/10 text-cyan-500">
                      <Code className="h-3 w-3 mr-1" /> React.js
                    </Badge>
                    <Badge className="bg-green-500/10 text-violet-500">
                      <Code className="h-3 w-3 mr-1" /> Next-10
                    </Badge>
                    <Badge className="bg-purple-500/10 text-purple-500">
                      <Settings className="h-3 w-3 mr-1" /> TypeScript
                    </Badge>
                    <Badge className="bg-green-500/10 text-green-500">
                      <Cpu className="h-3 w-3 mr-1" /> Node.js
                    </Badge>
                    <Badge className="bg-yellow-500/10 text-yellow-500">
                      <Database className="h-3 w-3 mr-1" /> SQL Server
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Network className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-primary">Habilidades Complementarias</h3>
                  <p className="text-muted-foreground mt-2">
                    Conocimientos en redes, infraestructura TI, cableado estructurado y soporte técnico avanzado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Experiencia Profesional */}
      <div className="bg-muted/50 border rounded-lg py-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Experiencia{" "}
          </span>
          Profesional
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarjeta 1 - Rol actual */}
          <div className="bg-background p-6 rounded-lg border">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Rocket className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Junior Developer</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Desarrollo de aplicaciones web y móviles con enfoque en buenas prácticas y calidad de código.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Implementación de componentes reutilizables</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Integración con APIs REST/GraphQL</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Optimización de rendimiento</span>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 - Metodologías */}
          <div className="bg-background p-6 rounded-lg border">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Settings className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Metodologías Ágiles</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Implementación de Scrum y Kanban para gestión eficiente de proyectos:
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-primary">
                Sprint Planning
              </Badge>
              <Badge variant="outline" className="text-primary">
                Daily Stand-ups
              </Badge>
              <Badge variant="outline" className="text-primary">
                Retrospectivas
              </Badge>
              <Badge variant="outline" className="text-primary">
                User Stories
              </Badge>
              <Badge variant="outline" className="text-primary">
                Jira/Trello
              </Badge>
            </div>
          </div>

          {/* Tarjeta 3 - Proyectos */}
          <div className="bg-background p-6 rounded-lg border">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Code className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Proyectos Destacados</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Sistema de Gestión Educativa</h4>
                <p className="text-sm text-muted-foreground">
                  React + Node.js + SQL Server - Implementación de módulos completos
                </p>
              </div>
              <div>
                <h4 className="font-medium">App Móvil para Inventarios</h4>
                <p className="text-sm text-muted-foreground">
                  React Native - Conexión con API REST y sincronización offline
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 4 - Enfoque */}
          <div className="bg-background p-6 rounded-lg border">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Star className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Mi Enfoque</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-muted/50 p-3 rounded text-center">
                <p className="text-sm font-medium">Código Limpio</p>
              </div>
              <div className="bg-muted/50 p-3 rounded text-center">
                <p className="text-sm font-medium">Testing</p>
              </div>
              <div className="bg-muted/50 p-3 rounded text-center">
                <p className="text-sm font-medium">Documentación</p>
              </div>
              <div className="bg-muted/50 p-3 rounded text-center">
                <p className="text-sm font-medium">CI/CD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};