import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, GraduationCap, Shield, Heart, TrendingUp, Calendar, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";
import ebookCareer from "@/assets/ebook-career.jpg";
import ebookGrowth from "@/assets/ebook-growth.jpg";

const Home = () => {
  const values = [
    {
      icon: Shield,
      title: "Aman & Terpercaya",
      description: "Pendekatan yang aman, rahasia terjaga, dan berbasis empati.",
    },
    {
      icon: Users,
      title: "Berbasis Komunitas",
      description: "Dukungan antarpeserta dan sesi peer-support rutin.",
    },
    {
      icon: TrendingUp,
      title: "Praktis & Terapan",
      description: "Pelatihan yang bisa langsung dipraktekkan.",
    },
  ];

  const programs = [
    {
      icon: GraduationCap,
      title: "Seminar",
      description: "Sesi edukasi singkat dengan pembicara ahli. Cocok untuk pengenalan topik.",
      link: "/programs",
    },
    {
      icon: BookOpen,
      title: "Bootcamp",
      description: "Pelatihan intensif untuk skill development dan latihan praktik.",
      link: "/programs",
    },
    {
      icon: Heart,
      title: "Support Community",
      description: "Sesi peer-support mingguan dan kelompok berbagi.",
      link: "/programs",
    },
  ];

  const upcomingEvents = [
    {
      date: "15 Nov 2025",
      title: "Mengelola Stres di Tempat Kerja",
      description: "Seminar online dengan psikolog klinis",
      type: "Seminar",
    },
    {
      date: "22 Nov 2025",
      title: "Bootcamp Communication Skills",
      description: "3 hari pelatihan intensif",
      type: "Bootcamp",
    },
    {
      date: "Setiap Rabu",
      title: "Support Group Session",
      description: "Sesi peer-support rutin, 19:00 WIB",
      type: "Community",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Ilustrasi komunitas support Minds United" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Minds United — Bersama Menjaga Kesehatan Mental & Mengembangkan Diri
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Komunitas dukungan, pelatihan, dan sumber daya untuk kesehatan mental dan pertumbuhan pribadi.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
              <div className="flex items-center gap-2 text-white/90">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Seminar</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Bootcamp</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Support Community</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/ebook">
                  <BookOpen className="w-5 h-5" />
                  Unduh E-Book Gratis
                </Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/events">
                  <Calendar className="w-5 h-5" />
                  Lihat Kegiatan
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-hero flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* E-Books Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">E-Book Gratis dari Minds United</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unduh panduan praktis untuk pengembangan karier dan pola pikir berkembang.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* E-Book 1 */}
            <Card className="overflow-hidden">
              <div className="aspect-square">
                <img 
                  src={ebookCareer} 
                  alt="Cover e-book Career Mapping 101" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Career Mapping 101: Menyiapkan Masa Depan Setelah Beasiswa</CardTitle>
                <CardDescription>
                  Membantu peserta merancang peta karier sejak dini agar beasiswa menjadi batu loncatan, bukan garis akhir.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="default" 
                  className="w-full" 
                  asChild
                >
                  <a 
                    href="https://drive.google.com/file/d/1rXOHVfK_rtOxvPIWsPZILdTt1Wko_rrZ/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="w-4 h-4" />
                    Buka / Unduh E-Book
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/ebook">Pelajari Lebih Lanjut</Link>
                </Button>
              </CardContent>
            </Card>

            {/* E-Book 2 */}
            <Card className="overflow-hidden">
              <div className="aspect-square">
                <img 
                  src={ebookGrowth} 
                  alt="Cover e-book The Growth Mindset Journey" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">The Growth Mindset Journey: Belajar dari Seleksi Beasiswa</CardTitle>
                <CardDescription>
                  Menanamkan cara berpikir berkembang — bahwa proses lebih penting dari hasil, dan setiap langkah adalah bagian dari perjalanan sukses.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="default" 
                  className="w-full" 
                  asChild
                >
                  <a 
                    href="https://drive.google.com/file/d/1FUdkZWGlJjkS6hw8H55I2iG-pI4kTa9U/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="w-4 h-4" />
                    Buka / Unduh E-Book
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/ebook">Pelajari Lebih Lanjut</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berbagai program untuk mendukung perjalanan kesehatan mental dan pengembangan diri Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-14 h-14 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={program.link}>
                        Pelajari Lebih Lanjut
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kegiatan Mendatang</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ikuti seminar, bootcamp, dan sesi support community kami.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary">{event.date}</span>
                    <span className="text-xs px-2 py-1 bg-secondary/20 text-secondary rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/events">Daftar</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="default" size="lg" asChild>
              <Link to="/events">
                Lihat Semua Kegiatan
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
