export interface Car {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export const CARS: Car[] = [
  // Economy Vehicles
  { id: 'vitz', name: 'Toyota Vitz', price: 40, category: 'Economy', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800' },
  { id: 'note', name: 'Nissan Note', price: 40, category: 'Economy', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },
  { id: 'gk3', name: 'Honda GK3', price: 45, category: 'Economy', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800' },
  { id: 'aqua', name: 'Toyota Aqua', price: 45, category: 'Economy', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800' },
  { id: 'gp5', name: 'Honda GP5', price: 50, category: 'Economy', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800' },

  // SUVs
  { id: 'cx5-2014', name: 'Mazda CX-5 (2014)', price: 70, category: 'SUV', image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&q=80&w=800' },
  { id: 'cx5-2016', name: 'Mazda CX-5 (2016)', price: 80, category: 'SUV', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },
  { id: 'cx5-2018', name: 'Mazda CX-5 (2018)', price: 100, category: 'SUV', image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&q=80&w=800' },
  { id: 'xtrail', name: 'Nissan X-Trail', price: 80, category: 'SUV', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },
  { id: 'vezel', name: 'Honda Vezel', price: 80, category: 'SUV', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },

  // Utility Vehicles
  { id: 'hilux-d4d', name: 'Toyota Hilux D4D', price: 120, category: 'Utility', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },
  { id: 'hilux-gd6', name: 'Toyota Hilux GD6', price: 160, category: 'Utility', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },

  // Luxury SUVs
  { id: 'fortuner-d4d', name: 'Toyota Fortuner D4D', price: 120, category: 'Luxury SUV', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },
  { id: 'fortuner-gd6', name: 'Toyota Fortuner GD6', price: 160, category: 'Luxury SUV', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },
  { id: 'prado', name: 'Toyota Prado', price: 180, category: 'Luxury SUV', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },
  { id: 'prado-2024', name: 'Toyota Prado (2024)', price: 500, category: 'Luxury SUV', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },
  { id: 'lc300', name: 'Land Cruiser 300 Series', price: 700, category: 'Luxury SUV', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },

  // Premium Vehicles
  { id: 'glc', name: 'Mercedes-Benz GLC', price: 200, category: 'Premium', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },
  { id: 'ranger-platinum', name: 'Ford Ranger Platinum', price: 350, category: 'Premium', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },
  { id: 'raptor', name: 'Ford Raptor', price: 450, category: 'Premium', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' },

  // Minibus
  { id: 'quantum', name: 'Baby Quantum', price: 120, category: 'Minibus', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800' }
];

export const TERMS = [
  'Age 23 years & above',
  'Driver\'s licence: 3 years & above experience',
  'ID OR Passport (Original or soft copy)',
  'Refundable deposit of $200 - $500',
  'Details of next of kin (2 people)',
  'Next of kin registered with Ecocash',
  'Proof of residency & employment',
  'Rental charges to be paid in full upon collection'
];

export const FAQS = [
  {
    question: 'What documents do I need to rent a car?',
    answer: 'You need a valid ID or Passport, and a driver\'s license with at least 3 years of experience.'
  },
  {
    question: 'Is there a security deposit?',
    answer: 'Yes, a refundable deposit of $200 - $500 is required depending on the vehicle category.'
  },
  {
    question: 'Can I pick up the car from the airport?',
    answer: 'Yes, we offer airport pickup and drop-off services for an additional $20.'
  },
  {
    question: 'What are the payment terms?',
    answer: 'Rental charges must be paid in full upon collection of the vehicle.'
  }
];

export const CONTACT_PHONE = '0778724715';
export const WHATSAPP_BASE_URL = `https://wa.me/263778724715`;
