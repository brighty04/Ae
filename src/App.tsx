/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Car as CarIcon, 
  ChevronRight, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  HelpCircle, 
  Mail, 
  Menu, 
  X,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { CARS, TERMS, FAQS, CONTACT_PHONE, WHATSAPP_BASE_URL, Car } from './constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <CarIcon className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-light tracking-widest text-white uppercase">Luxe Rentals</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#fleet" className="text-white/70 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Fleet</a>
              <a href="#terms" className="text-white/70 hover:text-white px-3 py-2 text-sm font-medium transition-colors">Terms</a>
              <a href="#faq" className="text-white/70 hover:text-white px-3 py-2 text-sm font-medium transition-colors">FAQ</a>
              <a href="#contact" className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-white/90 transition-colors">Book Now</a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black border-b border-white/10 px-4 pt-2 pb-6 space-y-1"
          >
            <a href="#fleet" onClick={() => setIsOpen(false)} className="block text-white/70 hover:text-white px-3 py-4 text-base font-medium">Fleet</a>
            <a href="#terms" onClick={() => setIsOpen(false)} className="block text-white/70 hover:text-white px-3 py-4 text-base font-medium">Terms</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="block text-white/70 hover:text-white px-3 py-4 text-base font-medium">FAQ</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block bg-white text-black px-3 py-4 rounded-lg text-base font-medium text-center">Book Now</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920" 
          alt="Luxury Car" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 uppercase tracking-[0.3em] text-sm mb-4"
        >
          Premium Car Rental Service
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-8xl font-light text-white mb-8 tracking-tight"
        >
          Hire a car <span className="italic font-serif">today</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full text-sm font-medium hover:bg-white/90 transition-all transform hover:scale-105">
            Book Now
          </a>
          <a href="#contact" className="w-full sm:w-auto border border-white/30 text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-white/10 transition-all">
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Horizontal Scrolling Collage */}
      <div className="relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-4 px-8 overflow-x-auto no-scrollbar pb-8"
        >
          {CARS.map((car, i) => (
            <motion.div 
              key={car.id}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-72 md:w-96 aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img 
                src={car.image} 
                alt={car.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

const CarCard = ({ car }: { car: Car }) => {
  const handleRent = () => {
    const message = encodeURIComponent(`Hi, I'm interested in renting the ${car.name} for $${car.price}/day. Is it available?`);
    window.open(`${WHATSAPP_BASE_URL}?text=${message}`, '_blank');
  };

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="text-white text-xs font-medium uppercase tracking-wider">{car.category}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-light text-white mb-2">{car.name}</h3>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-2xl font-medium text-white">${car.price}</span>
            <span className="text-white/40 text-sm ml-1">/ day</span>
          </div>
          <button 
            onClick={handleRent}
            className="flex items-center text-white/60 hover:text-white transition-colors text-sm group/btn"
          >
            Rent Now <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Fleet = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(CARS.map(c => c.category)))];

  const filteredCars = activeCategory === 'All' 
    ? CARS 
    : CARS.filter(c => c.category === activeCategory);

  return (
    <section id="fleet" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-white/40 mb-4">Our Fleet</h2>
          <h3 className="text-4xl md:text-5xl font-light text-white">Choose your <span className="font-serif italic">experience</span></h3>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-white text-black' 
                  : 'bg-zinc-900 text-white/60 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <div className="mt-16 p-8 bg-zinc-900/30 border border-white/5 rounded-3xl text-center">
          <h4 className="text-white/60 text-sm uppercase tracking-widest mb-4">Extra Services</h4>
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center text-white">
              <MapPin className="h-5 w-5 mr-2 text-white/40" />
              <span>Airport Pickup / Drop-off</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10"></div>
            <span className="text-xl font-medium text-white">$20</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Terms = () => {
  return (
    <section id="terms" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-sm uppercase tracking-[0.4em] text-white/40 mb-4">Requirements</h2>
          <h3 className="text-4xl font-light text-white mb-8">Terms & <span className="font-serif italic">Conditions</span></h3>
          <div className="space-y-4">
            {TERMS.map((term, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="flex items-start"
              >
                <ShieldCheck className="h-5 w-5 text-white/40 mr-4 mt-1 flex-shrink-0" />
                <p className="text-white/70 font-light">{term}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800" 
            alt="Driving" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-white/40 mb-4">Questions</h2>
          <h3 className="text-4xl font-light text-white">Frequently Asked</h3>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-white/10">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-light text-white/80 group-hover:text-white transition-colors">{faq.question}</span>
                <HelpCircle className={`h-5 w-5 text-white/20 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-white/50 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(`New Inquiry from Website:\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`);
    window.open(`${WHATSAPP_BASE_URL}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm uppercase tracking-[0.4em] text-white/40 mb-4">Get in Touch</h2>
          <h3 className="text-4xl font-light text-white mb-8">Let's start your <span className="font-serif italic">journey</span></h3>
          
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-zinc-900 flex items-center justify-center mr-6 border border-white/5">
                <Phone className="h-5 w-5 text-white/40" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Call Us</p>
                <p className="text-white text-lg font-light">{CONTACT_PHONE}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-zinc-900 flex items-center justify-center mr-6 border border-white/5">
                <Mail className="h-5 w-5 text-white/40" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email Us</p>
                <p className="text-white text-lg font-light">info@luxerentals.co.zw</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-zinc-900 flex items-center justify-center mr-6 border border-white/5">
                <Clock className="h-5 w-5 text-white/40" />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Working Hours</p>
                <p className="text-white text-lg font-light">Mon - Sat: 08:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
          <div className="space-y-6">
            <div>
              <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">Your Name</label>
              <input 
                required
                type="text" 
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">Email Address</label>
              <input 
                required
                type="email" 
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-white/40 text-xs uppercase tracking-widest mb-2">Message</label>
              <textarea 
                required
                rows={4}
                value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-white text-black py-4 rounded-xl font-medium hover:bg-white/90 transition-all"
            >
              Send to WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center">
          <CarIcon className="h-6 w-6 text-white/40" />
          <span className="ml-2 text-sm font-light tracking-[0.3em] text-white/60 uppercase">Luxe Rentals</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
          <a href="#" className="text-white/40 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
          <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
        </div>

        <p className="text-white/20 text-xs">
          © {new Date().getFullYear()} Luxe Car Rentals. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Fleet />
        <Terms />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
