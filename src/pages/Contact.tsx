import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Instagram } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nama tidak boleh kosong").max(100, "Nama maksimal 100 karakter"),
  email: z.string().trim().email("Email tidak valid").max(255, "Email maksimal 255 karakter"),
  subject: z.string().trim().min(1, "Subjek tidak boleh kosong").max(200, "Subjek maksimal 200 karakter"),
  message: z.string().trim().min(1, "Pesan tidak boleh kosong").max(1000, "Pesan maksimal 1000 karakter"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate form
    try {
      contactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
        return;
      }
    }

    setIsSubmitting(true);
    
    try {
      // Insert into Supabase contacts table
      const { error } = await supabase
        .from('contacts')
        .insert({
          full_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        });

      if (error) throw error;

      toast({
        title: "Terima kasih!",
        description: "Pesan Anda telah kami terima. Kami akan segera menghubungi Anda.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Terjadi kesalahan",
        description: "Maaf, pesan Anda gagal dikirim. Silakan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Hubungi Kami</h1>
            <p className="text-xl text-white/90">
              Kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui formulir atau informasi kontak di bawah.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi formulir di bawah ini dan kami akan segera menghubungi Anda.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nama Anda"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subjek *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Topik pesan Anda"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-sm text-destructive">{errors.subject}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tulis pesan Anda di sini..."
                      rows={6}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Address */}
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Alamat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    VOffice BYE<br />
                    Jl. Terusan Jakarta No.404<br />
                    Sukamiskin, Kec. Arcamanik<br />
                    Kota Bandung, Jawa Barat
                  </p>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:hello@mindsunited.id" 
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    hello@mindsunited.id
                  </a>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-3">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>Instagram</CardTitle>
                </CardHeader>
                <CardContent>
                  <a 
                    href="https://www.instagram.com/kami.mindsunited/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    @kami.mindsunited
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Follow kami untuk update terbaru tentang program dan kegiatan.
                  </p>
                </CardContent>
              </Card>

              {/* Volunteer CTA */}
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle>Bergabung sebagai Relawan</CardTitle>
                  <CardDescription>
                    Ingin berkontribusi untuk kesehatan mental masyarakat? Bergabunglah dengan tim relawan kami!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Kirimkan email ke hello@mindsunited.id dengan subjek "Volunteer Application" dan ceritakan mengapa Anda tertarik bergabung.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Lokasi Kami</h2>
            <div className="rounded-2xl overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6886595!2d107.6663574!3d-6.9297448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e89a6c6c1111%3A0x1111111111111111!2sJl.%20Terusan%20Jakarta%20No.404%2C%20Sukamiskin%2C%20Kec.%20Arcamanik%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Minds United di Bandung"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
