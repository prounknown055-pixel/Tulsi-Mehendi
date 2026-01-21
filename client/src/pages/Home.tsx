import { useState } from "react";
import { motion } from "framer-motion";
import { SITE } from "../config/site";
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Send, 
  Phone, 
  MapPin, 
  Clock,
  Menu,
  X
} from "lucide-react";
import { FaPinterest, FaWhatsapp } from "react-icons/fa"; // Importing from react-icons for brand specific ones not in Lucide
import { Button } from "@/components/ui/button";
// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gold/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-script text-3xl text-henna transform -rotate-2">Tulsi</span>
            <span className="ml-2 font-serif text-xl tracking-widest text-primary uppercase">Mehndi</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-foreground/80 hover:text-primary font-medium tracking-wide transition-colors text-sm uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-border absolute w-full"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md text-center"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         {/* Simple mandala-like patterns using CSS radial gradients */}
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent translate-x-1/3 -translate-y-1/3"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent -translate-x-1/3 translate-y-1/3 opacity-50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-primary font-serif italic text-lg md:text-xl mb-4 tracking-widest">
            Welcome to
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-script text-henna mb-6 leading-tight drop-shadow-sm">
            Tulsi Mehndi Studio
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-10 max-w-2xl mx-auto">
            Adorning your hands with elegance, tradition, and artistry in the heart of Mumbai.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 rounded-full px-8 py-6 text-lg"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Gallery
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Image Overlays */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hidden lg:block absolute right-0 bottom-0 w-1/3 h-2/3 pointer-events-none"
      >
        {/* Intricate Mehndi Hand Illustration Placeholder */}
        <img 
          src="https://pixabay.com/get/gadd7c0bfbf099062858347a2e1bdeff1df29b7c4260835550ab16e16ff5eb298eebaee87e6991ead3473ed2e12d991741b16c43e127203445e65b1699fbc7077_1280.jpg" 
          alt="Mehndi Design"
          className="w-full h-full object-contain object-bottom opacity-50 mix-blend-multiply mask-image-gradient"
        />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl z-0 transform -rotate-2"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              {/* About Section Image - Artist Applying Mehndi */}
              <img 
                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Artist applying mehndi"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-henna mb-6">
              The Art of Tradition
            </h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Tulsi Mehndi Studio, we believe that mehndi is not just an adornment, but a cherished ritual that marks the beginning of joyous celebrations. Located in Mumbai, we specialize in creating intricate, bespoke designs that tell your unique story.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Using only 100% natural, organic henna, we ensure a rich, dark stain that is safe for your skin. Whether it's the grandeur of a wedding or the intimacy of a festival, our artistry adds a touch of royal elegance to your special moments.
            </p>
            
            <div className="grid grid-cols-3 gap-8 text-center border-t border-border pt-8">
              <div>
                <span className="block text-3xl font-serif text-primary mb-1">5+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Years Exp.</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-primary mb-1">500+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Brides</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-primary mb-1">100%</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Organic</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Bridal Mehndi",
      description: "Intricate, full-hands and feet designs that tell your love story. Includes consultation and trial.",
      price: "Starting from ₹5,100",
      image: "https://images.unsplash.com/photo-1616091093729-c0463d3957eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" // Bridal hands
    },
    {
      title: "Party Henna",
      description: "Elegant, modern designs for bridesmaids and guests. Quick application with beautiful results.",
      price: "Starting from ₹500/hand",
      image: "https://images.unsplash.com/photo-1550608552-4a7b7a783704?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" // Simple design
    },
    {
      title: "Guest Events",
      description: "Hourly packages for Sangeet and Mehndi parties. We bring a team of expert artists.",
      price: "Hourly Packages Available",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" // Group/Event
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-serif italic text-lg tracking-widest">Our Offerings</span>
          <h2 className="text-4xl md:text-5xl font-serif text-henna mt-2 mb-4">Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-serif text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{service.description}</p>
                <div className="inline-block border border-primary/30 rounded-full px-4 py-1">
                  <span className="text-primary font-medium text-sm">{service.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  // Using placeholders from Unsplash with henna keywords
  const images = [
    "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1596236561196-6e271c66286c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1616091093729-c0463d3957eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1582260656641-69234b6e5124?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1598449356475-b9f71db7d847?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-serif italic text-lg tracking-widest">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif text-henna mt-2 mb-4">Design Gallery</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            onClick={() => window.open('https://instagram.com', '_blank')}
          >
            <Instagram className="mr-2 h-4 w-4" /> View More on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -left-20 top-0 text-[20rem] font-script text-primary/5 select-none pointer-events-none">
        Contact
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-henna mb-6">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="text-lg text-muted-foreground mb-10">
              Ready to adorn your hands? Reach out to us for bookings, inquiries, or just to say hello. We typically reply within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Mumbai, Maharashtra (Main City)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground">Phone / WhatsApp</h4>
                  <p className="text-muted-foreground">+91 83693 15540</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-foreground">Hours</h4>
                  <p className="text-muted-foreground">10:00 AM - 8:00 PM (By Appointment)</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-serif font-bold text-foreground mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white p-3 rounded-full shadow-sm text-foreground hover:text-pink-600 hover:shadow-md transition-all">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white p-3 rounded-full shadow-sm text-foreground hover:text-red-600 hover:shadow-md transition-all">
                  <FaPinterest className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white p-3 rounded-full shadow-sm text-foreground hover:text-red-500 hover:shadow-md transition-all">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white p-3 rounded-full shadow-sm text-foreground hover:text-blue-600 hover:shadow-md transition-all">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white p-3 rounded-full shadow-sm text-foreground hover:text-blue-400 hover:shadow-md transition-all">
                  <Send className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-8 py-6 text-lg shadow-lg flex items-center justify-center gap-2 transition-all"
                onClick={() => window.open('https://wa.me/9183693 15540'_blank')}
              >
                <FaWhatsapp className="h-6 w-6" /> Book via WhatsApp
              </Button>
            </div>
          </div>

       {/* Contact Form */}
          </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-script text-3xl text-primary">Tulsi</span>
          <p className="text-white/60 text-sm mt-2">© {new Date().getFullYear()} Tulsi Mehndi Studio. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-sm text-white/60">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
