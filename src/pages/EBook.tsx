import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Eye } from "lucide-react";
import ebookCareer from "@/assets/ebook-career.jpg";
import ebookGrowth from "@/assets/ebook-growth.jpg";

const EBook = () => {
  const ebooks = [
    {
      id: 1,
      title: "Career Mapping 101: Menyiapkan Masa Depan Setelah Beasiswa",
      description: "Membantu peserta merancang peta karier sejak dini agar beasiswa menjadi batu loncatan, bukan garis akhir.",
      cover: ebookCareer,
      driveLink: "https://drive.google.com/file/d/1rXOHVfK_rtOxvPIWsPZILdTt1Wko_rrZ/view?usp=drive_link",
      outline: [
        "Memahami nilai beasiswa: lebih dari sekadar funding",
        "Mapping: dari tujuan jangka pendek hingga visi jangka panjang",
        "Menyusun action plan dan timeline realistis",
        "Membangun network dan memanfaatkan kesempatan",
        "Menghadapi ketidakpastian: pivot dan adaptasi",
      ],
    },
    {
      id: 2,
      title: "The Growth Mindset Journey: Belajar dari Seleksi Beasiswa",
      description: "Menanamkan cara berpikir berkembang — bahwa proses lebih penting dari hasil, dan setiap langkah adalah bagian dari perjalanan sukses.",
      cover: ebookGrowth,
      driveLink: "https://drive.google.com/file/d/1FUdkZWGlJjkS6hw8H55I2iG-pI4kTa9U/view?usp=drive_link",
      outline: [
        "Apa itu growth mindset dan mengapa penting?",
        "Menerima kegagalan sebagai kesempatan belajar",
        "Proses vs. hasil: mengubah perspektif kesuksesan",
        "Membangun resiliensi mental melalui refleksi",
        "Merayakan setiap langkah kecil dalam perjalanan",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Sumber Daya Gratis dari Minds United</h1>
            <p className="text-xl text-white/90">
              Unduh e-book yang dirancang untuk membantu perencanaan karier dan membangun pola pikir berkembang.
            </p>
          </div>
        </div>
      </section>

      {/* E-Books */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {ebooks.map((ebook, index) => (
              <div key={ebook.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                {/* Cover Image */}
                <div className="w-full lg:w-1/2">
                  <Card className="overflow-hidden shadow-card">
                    <img 
                      src={ebook.cover} 
                      alt={`Cover ${ebook.title}`}
                      className="w-full h-auto"
                    />
                  </Card>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{ebook.title}</h2>
                    <p className="text-lg text-muted-foreground">{ebook.description}</p>
                  </div>

                  {/* Outline */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Yang Akan Anda Pelajari:</h3>
                    <ul className="space-y-2">
                      {ebook.outline.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="flex-1"
                      asChild
                    >
                      <a 
                        href={ebook.driveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Download className="w-5 h-5" />
                        Buka / Unduh E-Book
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing Note */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">Catatan Lisensi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                E-book ini gratis untuk penggunaan pribadi. Mohon tidak disebarluaskan tanpa menyertakan kredit kepada Minds United. 
                Jika Anda ingin membagikan, silakan gunakan link halaman ini atau hubungi kami untuk izin lebih lanjut.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default EBook;
