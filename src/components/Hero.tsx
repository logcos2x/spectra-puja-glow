import { Button } from "@/components/ui/button";
import durgahero from "@/assets/durga-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-durga-gold via-durga-cream to-background" />
      </div>
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">DURGA PUJA</span>
                <br />
                <span className="text-primary">ART 2025</span>
              </h1>
              <div className="flex items-center space-x-4 text-lg font-medium">
                <span className="text-foreground">18–22 SEPTEMBER 2025</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-primary">KOLKATA</span>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              First look into the world's biggest public art festival, 
              before the crowds arrive
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                EXCLUSIVE TRAVEL PACKAGES
              </h2>
              <p className="text-muted-foreground">
                Experience the magic of Durga Puja through Spectra's 
                specially curated guided Art Tours
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Packages
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={durgahero} 
                alt="Durga Puja Art" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;