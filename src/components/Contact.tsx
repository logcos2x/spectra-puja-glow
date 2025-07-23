import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us for bookings, queries, or any assistance you need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center bg-background border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Office Address</h3>
              <p className="text-sm text-muted-foreground">
                123 Park Street<br />
                Kolkata, West Bengal<br />
                700016, India
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-background border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">
                +91 8420797474<br />
                Call for instant booking
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-background border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">
                mail@spectrainfo.in<br />
                info@spectrainfo.in
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-background border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
              <p className="text-sm text-muted-foreground">
                Mon - Sat: 9AM - 7PM<br />
                Sun: 10AM - 5PM
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;