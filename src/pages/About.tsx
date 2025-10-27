import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users, TrendingUp, Target, Eye, Lightbulb, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empati",
      description: "Kami mendengarkan dengan penuh perhatian dan memahami setiap pengalaman unik.",
    },
    {
      icon: Shield,
      title: "Kerahasiaan",
      description: "Privasi dan keamanan data Anda adalah prioritas utama kami.",
    },
    {
      icon: Users,
      title: "Inklusivitas",
      description: "Semua orang disambut tanpa memandang latar belakang atau identitas.",
    },
    {
      icon: TrendingUp,
      title: "Berbasis Bukti",
      description: "Program kami didukung oleh penelitian dan praktik terbaik dalam psikologi.",
    },
  ];

  const methods = [
    {
      icon: Lightbulb,
      title: "Workshop Interaktif",
      description: "Sesi pembelajaran dengan diskusi dan praktik langsung.",
    },
    {
      icon: Users,
      title: "Sesi Peer-Support",
      description: "Kelompok dukungan dengan fasilitator terlatih.",
    },
    {
      icon: CheckCircle,
      title: "Materi & E-Book",
      description: "Sumber daya yang dapat diakses kapan saja.",
    },
    {
      icon: Heart,
      title: "Kolaborasi Profesional",
      description: "Kerjasama dengan psikolog dan konselor bersertifikat.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Wijaya",
      role: "Founder & Clinical Psychologist",
      bio: "Berpengalaman 10+ tahun dalam psikologi klinis dan konseling.",
    },
    {
      name: "Ahmad Fauzi",
      role: "Program Lead",
      bio: "Spesialis pengembangan kurikulum dan pelatihan keterampilan sosial.",
    },
    {
      name: "Maria Kusuma",
      role: "Volunteer Coordinator",
      bio: "Mengelola komunitas relawan dan program outreach.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Tentang Minds United</h1>
            <p className="text-xl text-white/90">
              Bersama membangun komunitas yang peduli terhadap kesehatan mental dan pengembangan diri.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Misi Minds United</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Membantu individu membangun kesehatan mental yang kuat dan keterampilan pengembangan diri melalui edukasi, pelatihan, dan dukungan komunitas.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-secondary/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Visi Kami</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Menciptakan lingkungan di mana setiap orang merasa didengar, didukung, dan mempunyai akses ke sumber daya untuk tumbuh.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nilai Inti Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Prinsip-prinsip yang memandu setiap program dan kegiatan kami.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Metode Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pendekatan holistik untuk kesehatan mental dan pengembangan diri.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {methods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 mb-3 rounded-xl gradient-hero flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-base">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{method.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tim Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profesional berdedikasi yang siap mendukung perjalanan Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full gradient-hero flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">Bergabung sebagai Relawan</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
