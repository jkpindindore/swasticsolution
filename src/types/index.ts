export interface Inquiry {
  name: string;
  email: string;
  phone: string;
  company?: string;
  product?: string;
  message: string;
}

export interface Contact {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs?: string[];
}

export type Page = 'home' | 'about' | 'products' | 'industries' | 'blog' | 'contact';
