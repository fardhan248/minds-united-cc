# Minds United — Website Komunitas Kesehatan Mental

Website resmi untuk Minds United, komunitas dukungan kesehatan mental dan pengembangan diri di Indonesia.

## Fitur Utama

- **Multi-halaman responsif**: Home, About, E-Book, Programs, Events, Contact
- **E-Book gratis**: Dua e-book yang dapat diunduh langsung dari Google Drive
- **Program**: Seminar, Bootcamp, dan Support Community
- **Events**: Kalender kegiatan mendatang
- **Contact**: Formulir kontak dengan validasi
- **Design system**: Warna teal dan lavender yang hangat dan mendukung
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## Teknologi

- React 18 + TypeScript
- Vite
- TailwindCSS dengan design system kustom
- shadcn/ui components
- React Router untuk routing
- Zod untuk validasi form
- Supabase (sudah tersambung, siap untuk backend)

## Struktur Halaman

### Home (`/`)
- Hero section dengan CTA
- Nilai-nilai utama (3 cards)
- Featured e-books (2 books)
- Program overview (3 cards)
- Upcoming events (3 events)

### About (`/about`)
- Mission & Vision
- Core Values
- Metode kerja
- Tim

### E-Book (`/ebook`)
- 2 e-book dengan cover image
- Deskripsi dan outline
- Download buttons (Google Drive links)
- Licensing note

### Programs (`/programs`)
- Tabs: Seminar / Bootcamp / Community
- Detail program dengan schedule, format, facilitator
- CTA untuk pendaftaran

### Events (`/events`)
- List kegiatan mendatang
- Detail event dengan date, time, location
- Badge untuk tipe event

### Contact (`/contact`)
- Form kontak dengan validasi
- Contact info (alamat, email, Instagram)
- Google Maps embed
- Volunteer CTA

## Setup & Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Koneksi Backend (Supabase)

Project ini sudah tersambung ke Supabase. Untuk menambahkan fitur backend:

### 1. Database Tables (Saran)

```sql
-- Tabel contacts untuk form kontak
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel registrations untuk pendaftaran event
CREATE TABLE registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  program_id TEXT NOT NULL,
  session TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabel newsletter untuk mailing list
CREATE TABLE newsletter (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 2. Update Form Handlers

Di `src/pages/Contact.tsx` dan `src/components/Footer.tsx`, ganti placeholder submission dengan:

```typescript
import { supabase } from "@/integrations/supabase/client";

// Di handleSubmit:
const { error } = await supabase
  .from('contacts')
  .insert([formData]);

if (error) {
  toast({
    title: "Error",
    description: "Gagal mengirim pesan. Silakan coba lagi.",
    variant: "destructive",
  });
  return;
}
```

### 3. Email Notifications (Optional)

Gunakan Supabase Edge Functions dengan Resend untuk mengirim email konfirmasi.

## Customization

### Colors
Edit `src/index.css` untuk mengubah warna utama:
- `--primary`: Soft teal (172, 64%, 45%)
- `--secondary`: Muted lavender (270, 35%, 65%)
- `--accent`: Warm coral (20, 85%, 65%)

### Content
- E-book links ada di `src/pages/Home.tsx` dan `src/pages/EBook.tsx`
- Program details di `src/pages/Programs.tsx`
- Event list di `src/pages/Events.tsx`
- Contact info di `src/pages/Contact.tsx` dan `src/components/Footer.tsx`

## Assets

- Hero image: `src/assets/hero-community.jpg`
- E-book covers: `src/assets/ebook-career.jpg`, `src/assets/ebook-growth.jpg`
- Favicon: `public/favicon.png`

## Links Eksternal

- Instagram: https://www.instagram.com/kami.mindsunited/?hl=en
- E-Book 1: https://drive.google.com/file/d/1rXOHVfK_rtOxvPIWsPZILdTt1Wko_rrZ/view?usp=drive_link
- E-Book 2: https://drive.google.com/file/d/1FUdkZWGlJjkS6hw8H55I2iG-pI4kTa9U/view?usp=drive_link

## Accessibility

- Semantic HTML5 elements
- ARIA labels pada interactive elements
- Alt text untuk semua gambar
- Keyboard navigation support
- Form validation dengan error messages
- Focus states visible

## SEO

- Meta tags untuk social media (OG & Twitter cards)
- Semantic HTML structure
- Descriptive titles dan descriptions
- sitemap.xml dan robots.txt di folder public

## License

© 2025 Minds United — Semua hak dilindungi.
