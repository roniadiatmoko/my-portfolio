import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        title: "Sistem Akademik",
        description: "Bagian dari tim development Sistem Akademik Kampus",
        link: "https://siakad.uns.ac.id"
    },
    {
        title: "Presensi Murid Sekolah",
        description: "Bagian dari tim development Sistem presensi murid SMP dengan QR Code",
        link: "#"
    },
    {
        title: "Presensi Ronda",
        description: "Aplikasi kehadiran ronda warga berbasis Github pages dan Google Sheets",
        link: "https://github.com/roniadiatmoko/presensi-ronda",
    },
    {
        title: "Izin Kerja Sama",
        description: "Landing page modern untuk pengajuan izin kerja sama perguruan tinggi",
        link: "https://github.com/roniadiatmoko/izin-kerjasama",
    }
    
];

export default function ProjectsPage(){
    return (
        <div className="max-w-5xl mx-auto px-4 py-32 relative z-10 ">
            <h1 className="text-3xl font-bold mb-8">🧑‍💻 Proyek Saya</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, idx)=>(
                    <ProjectCard 
                        key={idx}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}