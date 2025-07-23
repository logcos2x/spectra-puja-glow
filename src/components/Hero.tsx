import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-durga-gold via-durga-cream to-background" />
      </div>

      {/* Floating decorative circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary rounded-full opacity-20 animate-float z-0" />
      <div
        className="absolute bottom-32 right-16 w-16 h-16 bg-primary rounded-full opacity-15 animate-float z-0"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-12 h-12 bg-muted rounded-full opacity-25 animate-float z-0"
        style={{ animationDelay: "4s" }}
      />

      {/* Main content container */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">
              Official Travel Partner - xyz
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">DURGA PUJA</span>
            <br />
            <span className="text-primary">ART 2025</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Experience the magic of Durga Puja through Spectra's specially
            curated guided Art Tours
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-primary font-medium">📅</span>
              <span>18–22 September 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-medium">📍</span>
              <span>Kolkata</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary font-medium">🎨</span>
              <span>World's Biggest Public Art Festival</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            First look into the world's biggest public art festival, before the
            crowds arrive
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#packages">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Explore Packages
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
