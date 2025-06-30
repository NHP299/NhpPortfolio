import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export const ContactSection = () => {
  const formRef = useRef(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_95n9ju9",
        "template_nyj2ged",
        formRef.current,
        "qz0klx3CsCQ1_Mvac"
      )
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thanks for your message. I’ll reply soon.",
        });
        setIsSubmitting(false);
        formRef.current?.reset();
      })
      .catch(() => {
        toast({
          title: "Error!",
          description: "Something went wrong. Try again later.",
        });
        setIsSubmitting(false);
      });
  };
  
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm looking for opportunities to grow as a developer and contribute to
          real-world projects. If you're hiring or open to collaboration, feel
          free to connect with me!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            {/* Title */}
            <h3 className="text-3xl font-semibold text-primary">Contact Information</h3>

            {/* Contact List */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-6">
                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-medium min-w-[80px]">Email:</h4>
                  <a
                    href="mailto:Nhp29904@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors break-all">
                    Nhp29904@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-6">
                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-medium min-w-[80px]">Phone:</h4>
                  <a
                    href="tel:+84766707431"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    +84 766 707 431
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-6">
                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-medium min-w-[80px]">Location:</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Hoa Minh, Da Nang, Vietnam
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/ph%C3%BAc-nguy%E1%BB%85n-219a20366/"
                  target="_blank"             
                  className="hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/NHP299"
                  target="_blank"                
                  className="hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/huu.phuc.500369"
                  target="_blank"                  
                  className="hover:text-primary transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.youtube.com/@phucnguyen5243"
                  target="_blank"               
                  className="hover:text-primary transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit} ref={formRef}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Huu Phuc Ng..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="nhp29904@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
