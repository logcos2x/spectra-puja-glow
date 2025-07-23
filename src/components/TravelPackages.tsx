import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, MapPin } from "lucide-react";
import durgaExpressImg from "@/assets/durga-express.jpg";
import heritagePujaImg from "@/assets/heritage-puja.jpg";
import riverCruiseImg from "@/assets/river-cruise.jpg";

const TravelPackages = () => {
  const packages = [
    {
      title: "Durga Preview Express",
      dates: "19-22 September 2025",
      description:
        "An exclusive overnight bus tour of Kolkata's 10 finest Durga Puja installations.",
      features: [
        "10 hours tour duration",
        "10 Puja Installations",
        "Local guide included",
      ],
      icon: Clock,
      image: durgaExpressImg,
    },
    {
      title: "Heritage Puja Experience",
      dates: "18-22 September 2025",
      description:
        "VIP access to 24 Durga Puja Art installations with Bonedi Bari tour experience.",
      features: [
        "VIP access to 24 installations",
        "Bonedi Bari tour",
        "Daytime cultural showcases",
        "Premium accommodation",
      ],
      icon: Users,
      image: heritagePujaImg,
    },
    {
      title: "Mahalaya River Special",
      dates: "Sunday, 21 September 2025",
      description:
        "Hooghly River Cruise & Heritage Tour with performances, stories & Bengali lunch.",
      features: [
        "Hooghly River cruise",
        "Heritage tour included",
        "Cultural performances",
        "Traditional Bengali lunch",
      ],
      icon: MapPin,
      image: riverCruiseImg,
    },
  ];

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Exclusive Travel Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your perfect Durga Puja experience with our specially curated
            travel packages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="bg-white border-border hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="relative h-56 w-full flex items-center justify-center bg-white overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
                </div>
              </div>
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-durga-gold/10 rounded-full mb-4 mx-auto group-hover:bg-durga-gold/20 transition-colors">
                  <pkg.icon className="h-8 w-8 text-durga-gold" />
                </div>
                <div className="text-sm text-durga-red flex items-center justify-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {pkg.dates}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center">
                  {pkg.description}
                </p>

                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-foreground"
                    >
                      <div className="w-2 h-2 bg-durga-gold rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Button
                    className="w-full bg-durga-gold hover:bg-durga-gold/90 text-white"
                    size="lg"
                    onClick={() => {
                      window.open(pkg.image, "_blank");
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-durga-red mb-4">
            Pick your journey
          </p>
          <p className="text-durga-gold">
            <a href="/pdfs/1n.pdf">1 Night & 2 Days</a> |{" "}
            <a href="/pdfs/2n.pdf">2 Nights & 3 Days</a> |{" "}
            <a href="/pdfs/3n.pdf">3 Nights & 4 Days</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;