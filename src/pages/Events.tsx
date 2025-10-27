import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const events = [
    {
      id: 1,
      date: "15 Nov 2025",
      dateDetail: "Jumat, 15 November 2025",
      time: "19:00 - 21:00 WIB",
      title: "Mengelola Stres di Tempat Kerja",
      description: "Seminar online tentang teknik praktis mengurangi stres dan meningkatkan produktivitas di lingkungan kerja.",
      type: "Seminar",
      format: "Online via Zoom",
      capacity: "50 peserta",
      facilitator: "Dr. Sarah Wijaya, M.Psi.",
      status: "open",
    },
    {
      id: 2,
      date: "22 Nov 2025",
      dateDetail: "Jumat, 22 November 2025",
      time: "09:00 - 15:00 WIB",
      title: "Bootcamp Communication Skills - Hari 1",
      description: "Hari pertama dari pelatihan intensif 3 hari untuk mengembangkan keterampilan komunikasi.",
      type: "Bootcamp",
      format: "Hybrid (Online & Offline)",
      location: "VOffice BYE, Bandung",
      capacity: "30 peserta",
      facilitator: "Tim Minds United",
      status: "open",
    },
    {
      id: 3,
      date: "27 Nov 2025",
      dateDetail: "Rabu, 27 November 2025",
      time: "19:00 - 20:30 WIB",
      title: "Weekly Support Group Session",
      description: "Sesi peer-support mingguan dalam kelompok kecil. Ruang aman untuk berbagi pengalaman.",
      type: "Community",
      format: "Online via Zoom",
      capacity: "12 peserta",
      facilitator: "Maria Kusuma",
      status: "open",
    },
    {
      id: 4,
      date: "07 Des 2025",
      dateDetail: "Sabtu, 7 Desember 2025",
      time: "15:00 - 17:00 WIB",
      title: "Mental Health Awareness Circle",
      description: "Diskusi bulanan tentang topik kesehatan mental dengan pembicara tamu.",
      type: "Community",
      format: "Hybrid",
      location: "VOffice BYE, Bandung",
      capacity: "40 peserta",
      facilitator: "Guest Speaker",
      status: "open",
    },
    {
      id: 5,
      date: "13 Des 2025",
      dateDetail: "Jumat, 13 Desember 2025",
      time: "09:00 - 15:00 WIB",
      title: "Resilience Building Bootcamp - Hari 1",
      description: "Program intensif 2 hari untuk membangun ketahanan mental dan kemampuan adaptasi.",
      type: "Bootcamp",
      format: "Offline",
      location: "VOffice BYE, Bandung",
      capacity: "25 peserta",
      facilitator: "Dr. Sarah Wijaya & Tim",
      status: "open",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Seminar":
        return "bg-primary/10 text-primary";
      case "Bootcamp":
        return "bg-secondary/10 text-secondary";
      case "Community":
        return "bg-accent/10 text-accent";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Kegiatan Minds United</h1>
            <p className="text-xl text-white/90">
              Ikuti seminar, bootcamp, dan sesi support community kami. Daftar sekarang untuk mengamankan tempat Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-6">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-card transition-smooth">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-center min-w-[60px]">
                        <div className="text-2xl font-bold text-primary">{event.date.split(' ')[0]}</div>
                        <div className="text-sm text-muted-foreground">{event.date.split(' ')[1]}</div>
                      </div>
                      <Badge className={getTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                    </div>
                    {event.status === "open" && (
                      <Badge variant="outline" className="border-green-500 text-green-600 self-start sm:self-auto">
                        Pendaftaran Dibuka
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl">{event.title}</CardTitle>
                  <CardDescription className="text-base">{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{event.dateDetail}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span>{event.format}</span>
                        {event.location && <span className="text-muted-foreground text-xs">{event.location}</span>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Fasilitator: </span>
                      <span className="font-medium">{event.facilitator}</span>
                    </div>
                    <Button variant="default" asChild>
                      <Link to="/contact">
                        Daftar Sekarang
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Tidak Menemukan yang Anda Cari?</CardTitle>
              <CardDescription className="text-base">
                Hubungi kami untuk informasi lebih lanjut tentang program dan kegiatan lainnya.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">Hubungi Kami</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Events;
