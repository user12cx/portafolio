import {  CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import image from "../assets/imagengit.jpeg";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex items-center justify-center w-[700px] h-[600px] relative ">

        <CardContent className={cn(
          "relative z-10 w-[400px] h-[500px] bg-background border-blue-500",
          " overflow-hidden transition-all duration-300",
          "shadow-[0_0_25px_rgba(0,200,255,0.3)] hover:shadow-[0_0_40px_rgba(0,200,255,0.6)] cursor- bg-transparent"
        )}>
          
            <img
              src={image}
              alt="ivan"
              className="w-full h-auto"
            />
        </CardContent>

      {/* Efecto visual de fondo futurista */}
      <div className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 bg-cyan-400 animate-pulse" />
    </div>
  );
};
