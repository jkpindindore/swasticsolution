/*
  # Create Inquiries and Contact Forms Tables

  1. New Tables
    - `inquiries`
      - `id` (uuid, primary key)
      - `name` (text) - Customer name
      - `email` (text) - Customer email
      - `phone` (text) - Customer phone number
      - `company` (text, nullable) - Company name
      - `product` (text, nullable) - Product interested in
      - `message` (text) - Inquiry message
      - `created_at` (timestamptz) - Timestamp of inquiry
    
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text) - Customer name
      - `email` (text) - Customer email
      - `phone` (text) - Customer phone number
      - `subject` (text) - Contact subject
      - `message` (text) - Contact message
      - `created_at` (timestamptz) - Timestamp of contact
  
  2. Security
    - Enable RLS on both tables
    - Add policy for anyone to insert inquiries (public form submission)
    - Add policy for anyone to insert contacts (public form submission)
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  product text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit inquiries"
  ON inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can submit contacts"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);