import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, X } from "lucide-react";



interface ProjectProps {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
}

const featuredProjects: ProjectProps[] = [
  {
    id: 1,
    title: "Sistema de Ventas",
    description: "Plataforma web para administración escolar",
    longDescription: "Sistema completo con módulos de calificaciones, asistencia, comunicación padres-profesores y panel administrativo. Desarrollado con React y Node.js.",
    tags: ["React", "Node.js", "Sql Server", "Tailwind", "Sustand "],
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4M-fWbKq7qF1i6cMGoCYXkWj9uo11zZxbSA&s'
   },
  {
    id: 2,
    title: "App Inventario Personal",
    description: "Gestión tus gastos de manera continua y flexible",
    longDescription: "Aplicación móvil con autenticación, notificaciones push y sincronización en tiempo real usando Firebase.",
    tags: ["React Native", "Sql Server", "Expo Go"],
    image: 'https://cdn-www.stelorder.com/wp-content/uploads/2024/02/programa-de-gestion-empresarial-de-STEL-Order-1.png'
  },
  {
    id: 3,
    title: "E-commerce Local",
    description: "Tienda online para negocio local",
    longDescription: "Catálogo de productos, carrito de compras, pasarela de pagos con Stripe y panel de administración con Next.js.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUYK8NcPLZ9FMbpYt2spnEgZ-kMdsDb9QXQ&s'
  },
];

const allSkills: string[] = [
  "React", "TypeScript", "Node.js", "Express", 
  "MongoDB", "PostgreSQL", "Firebase", "Tailwind CSS",
  "React Native", "Next.js", "Git", "Scrum"
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  return (
    <section id="projects" className="container py-24 sm:py-32 space-y-8">
      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-background rounded-full p-2 z-10"
              >
                <X className="h-6 w-6" />
              </button>
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <p>{selectedProject.longDescription}</p>
              
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map(tag => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              
              <div className="pt-4">
                <Button onClick={() => setSelectedProject(null)}>
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contenido principal */}
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Mis <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Proyectos</span>
        </h2>
        <p className="text-muted-foreground text-xl mt-4 max-w-[700px] mx-auto">
          Algunos de mis trabajos recientes como desarrollador Junior
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {allSkills.map(skill => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map(project => (
          <Card key={project.id} className="hover:shadow-md transition-shadow">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setSelectedProject(project)}
              >
                Ver detalles
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button size="lg">
          Ver todos mis proyectos
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};