import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "918420797474";
    const message = "Hi! I'm interested in your Durga Puja travel packages. Please share more details.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <MessageCircle className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;