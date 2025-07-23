import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, MapPin, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Happy Travelers" },
    { icon: MapPin, number: "50+", label: "Destinations Covered" },
    { icon: Award, number: "10+", label: "Years Experience" },
    { icon: Star, number: "4.9", label: "Average Rating" },
  ];

  return (
    <section id="about" className="py-20 bg-durga-cream/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                About Spectra
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At SPECTRA, we create events and experiences that span a
                  spectrum of ideas, styles and formats. No one-size-fits-all
                  just fresh, colourful concepts tailored to every occasion.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Why Choose Spectra?
            </h3>

            <div className="space-y-4">
              {[
                {
                  title: "Exclusive Access",
                  description:
                    "VIP access to premium Durga Puja installations and heritage locations",
                },
                {
                  title: "Expert Guides",
                  description:
                    "Local cultural experts who bring stories and traditions to life",
                },
                {
                  title: "Authentic Experiences",
                  description:
                    "Genuine cultural immersion with traditional ceremonies and cuisine",
                },
                {
                  title: "Premium Comfort",
                  description:
                    "Carefully selected accommodations and private transportation",
                },
                {
                  title: "Small Groups",
                  description:
                    "Intimate group sizes for personalized attention and experience",
                },
                {
                  title: "Cultural Insight",
                  description:
                    "Deep dive into Bengali art, history, and spiritual traditions",
                },
              ].map((feature, index) => (
                <Card key={index} className="bg-background border-border">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;