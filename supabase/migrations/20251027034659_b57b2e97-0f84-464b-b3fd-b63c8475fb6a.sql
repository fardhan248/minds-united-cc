
-- Create contacts table
CREATE TABLE public.contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (submit contact form)
CREATE POLICY "Anyone can submit contact form"
ON public.contacts
FOR INSERT
TO public
WITH CHECK (true);

-- Only authenticated users can view contacts (for admin panel)
CREATE POLICY "Authenticated users can view contacts"
ON public.contacts
FOR SELECT
TO authenticated
USING (true);

-- Insert 10 synthetic Indonesian contact messages
INSERT INTO public.contacts (full_name, email, subject, message, created_at) VALUES
('Aulia Rahman', 'aulia.rahman@gmail.com', 'Konsultasi kesehatan mental', 'Halo, saya ingin tahu lebih lanjut tentang program support group. Apakah ada sesi yang cocok untuk pemula?', NOW() - INTERVAL '2 days'),
('Nabila Pratiwi', 'nabila.pratiwi@yahoo.com', 'Bootcamp mindfulness', 'Apakah bootcamp mindfulness masih dibuka? Saya tertarik untuk bergabung dan ingin tahu biayanya.', NOW() - INTERVAL '5 days'),
('Rizki Firmansyah', 'rizki.firm@gmail.com', 'Pertanyaan tentang seminar', 'Saya tertarik mengikuti seminar tentang manajemen stres. Kapan jadwal seminar berikutnya?', NOW() - INTERVAL '7 days'),
('Dinda Safitri', 'dinda.safitri@outlook.com', 'Ingin menjadi relawan', 'Halo Minds United, saya mahasiswa psikologi dan ingin bergabung sebagai relawan. Bagaimana caranya?', NOW() - INTERVAL '10 days'),
('Farhan Hidayat', 'farhan.h88@gmail.com', 'Download e-book', 'Terima kasih untuk e-book gratisnya! Sangat membantu untuk perencanaan karier saya setelah lulus.', NOW() - INTERVAL '12 days'),
('Siti Nurhaliza', 'siti.nurh@yahoo.com', 'Kerjasama dengan kampus', 'Saya dari BEM universitas, ingin mengundang Minds United untuk workshop di kampus kami. Bisa dibahas?', NOW() - INTERVAL '15 days'),
('Bayu Wijaya', 'bayu.wijaya@gmail.com', 'Tanya tentang support community', 'Apakah sesi support community diadakan setiap minggu? Saya ingin ikut tapi jadwal saya agak padat.', NOW() - INTERVAL '18 days'),
('Putri Andini', 'putri.andini22@gmail.com', 'Konseling pribadi', 'Apakah Minds United juga menyediakan sesi konseling pribadi? Atau hanya group session saja?', NOW() - INTERVAL '21 days'),
('Ahmad Maulana', 'ahmad.maulana@outlook.com', 'Informasi bootcamp career mapping', 'Saya fresh graduate dan bingung dengan arah karier. Apakah ada bootcamp khusus untuk career mapping?', NOW() - INTERVAL '25 days'),
('Rina Kusuma', 'rina.kusuma@gmail.com', 'Testimoni dan ucapan terima kasih', 'Halo tim Minds United, saya ingin berbagi bahwa support group kemarin sangat membantu saya. Terima kasih!', NOW() - INTERVAL '28 days');
