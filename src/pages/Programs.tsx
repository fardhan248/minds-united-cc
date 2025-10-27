import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, GraduationCap, Heart, Clock, MapPin, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Programs = () => {
  const programs = {
    seminar: [
      {
        title: "Mengelola Stres di Tempat Kerja",
        description: "Teknik praktis untuk mengurangi stres dan meningkatkan produktivitas di lingkungan kerja.",
        duration: "2 jam",
        format: "Online via Zoom",
        capacity: "50 peserta",
        schedule: "15 November 2025, 19:00-21:00 WIB",
        price: "Gratis",
        facilitator: "Dr. Sarah Wijaya, M.Psi., Psikolog",
      },
      {
        title: "Komunikasi Efektif dalam Hubungan",
        description: "Membangun keterampilan komunikasi yang sehat untuk hubungan yang lebih bermakna.",
        duration: "2 jam",
        format: "Online via Zoom",
        capacity: "50 peserta",
        schedule: "22 November 2025, 19:00-21:00 WIB",
        price: "Gratis",
        facilitator: "Ahmad Fauzi, M.Sc., Konselor",
      },
    ],
    bootcamp: [
      {
        title: "Bootcamp Communication Skills",
        description: "Pelatihan intensif 3 hari untuk mengembangkan keterampilan komunikasi interpersonal dan public speaking.",
        duration: "3 hari (6 jam/hari)",
        format: "Hybrid (Online & Offline di Bandung)",
        capacity: "30 peserta",
        schedule: "22-24 November 2025, 09:00-15:00 WIB",
        price: "Rp 500.000 (Early bird: Rp 350.000)",
        facilitator: "Tim Minds United",
        topics: [
          "Active listening dan empati",
          "Assertive communication",
          "Public speaking dasar",
          "Handling difficult conversations",
        ],
      },
      {
        title: "Resilience Building Bootcamp",
        description: "Program intensif untuk membangun ketahanan mental dan kemampuan adaptasi dalam menghadapi tantangan.",
        duration: "2 hari (6 jam/hari)",
        format: "Offline di Bandung",
        capacity: "25 peserta",
        schedule: "13-14 Desember 2025, 09:00-15:00 WIB",
        price: "Rp 400.000 (Early bird: Rp 300.000)",
        facilitator: "Dr. Sarah Wijaya & Tim",
        topics: [
          "Understanding resilience",
          "Stress management techniques",
          "Building support systems",
          "Goal setting and planning",
        ],
      },
    ],
    community: [
      {
        title: "Weekly Support Group",
        description: "Sesi peer-support mingguan dalam kelompok kecil dengan fasilitator terlatih. Ruang aman untuk berbagi pengalaman dan saling mendukung.",
        duration: "90 menit",
        format: "Online via Zoom",
        capacity: "12 peserta per sesi",
        schedule: "Setiap Rabu, 19:00-20:30 WIB",
        price: "Gratis",
        facilitator: "Rotating facilitators",
        notes: "Peserta baru wajib mengisi form screening. Kerahasiaan dan respect dijamin.",
      },
      {
        title: "Mental Health Awareness Circle",
        description: "Diskusi bulanan tentang topik kesehatan mental dengan pembicara tamu. Open untuk umum.",
        duration: "2 jam",
        format: "Hybrid",
        capacity: "40 peserta",
        schedule: "Sabtu pertama setiap bulan, 15:00-17:00 WIB",
        price: "Gratis",
        facilitator: "Guest speakers",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Program Minds United</h1>
            <p className="text-xl text-white/90">
              Berbagai program untuk mendukung perjalanan kesehatan mental dan pengembangan diri Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Tabs */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="seminar" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="seminar" className="text-sm sm:text-base">
                <GraduationCap className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Seminar</span>
              </TabsTrigger>
              <TabsTrigger value="bootcamp" className="text-sm sm:text-base">
                <BookOpen className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Bootcamp</span>
              </TabsTrigger>
              <TabsTrigger value="community" className="text-sm sm:text-base">
                <Heart className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Community</span>
              </TabsTrigger>
            </TabsList>

            {/* Seminar Tab */}
            <TabsContent value="seminar" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Seminar</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Sesi edukasi singkat dengan pembicara ahli. Cocok untuk pengenalan topik dan diskusi interaktif.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {programs.seminar.map((program, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <CardDescription>{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{program.format}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span>{program.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{program.schedule}</span>
                        </div>
                      </div>
                      <div className="border-t pt-4">
                        <p className="text-sm font-medium">Fasilitator: {program.facilitator}</p>
                        <p className="text-sm text-accent font-semibold mt-2">{program.price}</p>
                      </div>
                      <Button variant="default" className="w-full" asChild>
                        <Link to="/contact">Daftar Sekarang</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Bootcamp Tab */}
            <TabsContent value="bootcamp" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Bootcamp</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Pelatihan intensif untuk skill development dan latihan praktik. Program terstruktur dengan hasil terukur.
                </p>
              </div>
              <div className="space-y-8">
                {programs.bootcamp.map((program, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-2xl">{program.title}</CardTitle>
                      <CardDescription className="text-base">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{program.format}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span>{program.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{program.schedule}</span>
                        </div>
                      </div>
                      
                      {program.topics && (
                        <div>
                          <h4 className="font-semibold mb-2">Topik yang Dibahas:</h4>
                          <ul className="space-y-1">
                            {program.topics.map((topic, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-primary mt-1">•</span>
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="border-t pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <p className="text-sm font-medium">Fasilitator: {program.facilitator}</p>
                          <p className="text-lg text-accent font-bold mt-1">{program.price}</p>
                        </div>
                        <Button variant="default" size="lg" asChild>
                          <Link to="/contact">Daftar Sekarang</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Community Tab */}
            <TabsContent value="community" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Support Community</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Sesi peer-support dan diskusi komunitas. Ruang aman untuk berbagi dan saling mendukung.
                </p>
              </div>
              <div className="space-y-6">
                {programs.community.map((program, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <CardDescription className="text-base">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{program.format}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          <span>{program.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{program.schedule}</span>
                        </div>
                      </div>
                      
                      {program.notes && (
                        <div className="bg-muted/50 p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground">{program.notes}</p>
                        </div>
                      )}

                      <div className="border-t pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <p className="text-sm font-medium">Fasilitator: {program.facilitator}</p>
                          <p className="text-lg text-accent font-semibold mt-1">{program.price}</p>
                        </div>
                        <Button variant="default" asChild>
                          <Link to="/contact">Bergabung</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Programs;
