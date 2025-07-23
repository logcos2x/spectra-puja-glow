import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Camera, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Guided Art Tours",
      description: "Expert-led tours through Kolkata's most prestigious Durga Puja installations with cultural insights and historical context."
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture the essence of Durga Puja with professional photography guidance and access to exclusive vantage points."
    },
    {
      icon: Users,
      title: "Cultural Experiences",
      description: "Immerse yourself in Bengali culture with traditional ceremonies, local cuisine, and authentic cultural showcases."
    }
  ];

  return (
    <section id="services" className="py-20 bg-durga-cream/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the rich cultural heritage of Durga Puja through our carefully crafted services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;