import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, MapPin } from "lucide-react";

const TravelPackages = () => {
  const packages = [
    {
      title: "Durga Preview Express",
      duration: "1 Night & 2 Days",
      dates: "19-22 September 2025",
      description: "An exclusive overnight bus tour of Kolkata's 10 finest Durga Puja installations.",
      features: [
        "10 hours tour duration",
        "10 Puja Installations",
        "Comfortable bus transport",
        "Local guide included"
      ],
      icon: Clock
    },
    {
      title: "Heritage Puja Experience",
      duration: "2 Nights & 3 Days",
      dates: "18-22 September 2025",
      description: "VIP access to 24 Durga Puja Art installations with Bonedi Bari tour experience.",
      features: [
        "VIP access to 24 installations",
        "Bonedi Bari tour",
        "Daytime cultural showcases",
        "Premium accommodation"
      ],
      icon: Users
    },
    {
      title: "Mahalaya River Special",
      duration: "3 Nights & 4 Days",
      dates: "Sunday, 21 September 2025",
      description: "Hooghly River Cruise & Heritage Tour with performances, stories & Bengali lunch.",
      features: [
        "Hooghly River cruise",
        "Heritage tour included",
        "Cultural performances",
        "Traditional Bengali lunch"
      ],
      icon: MapPin
    }
  ];

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Exclusive Travel Packages</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your perfect Durga Puja experience with our specially curated travel packages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                  <pkg.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{pkg.title}</CardTitle>
                <div className="text-primary font-semibold">{pkg.duration}</div>
                <div className="text-sm text-muted-foreground flex items-center justify-center">
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
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-semibold text-foreground mb-4">Pick your journey</p>
          <p className="text-muted-foreground">
            1 Night & 2 Days | 2 Nights & 3 Days | 3 Nights & 4 Days
          </p>
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;