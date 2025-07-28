import Image from "next/image";
import { portfolioData } from "../data-index";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <section className="text-center mt-12">
        <Image
          src={portfolioData.profileImage}
          alt={portfolioData.name}
          width={160}
          height={160}
          className="rounded-full mx-auto shadow-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{portfolioData.name}</h1>
        <p className="text-xl text-blue-600">{portfolioData.title}</p>
      </section>

      {/* About */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Sobre mim</h2>
        <p className="text-gray-700 mt-4">{portfolioData.about}</p>
      </section>

      {/* Projects */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Projetos</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {portfolioData.projects.map((project, idx) => (
            <div key={idx} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.link} target="_blank" className="text-blue-600 font-medium mt-2 block">
                Ver no GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-semibold">Contato</h2>
        <div className="flex justify-center gap-6 mt-4">
          <a href={portfolioData.contact.linkedin} target="_blank" className="text-blue-600">LinkedIn</a>
          <a href={portfolioData.contact.github} target="_blank" className="text-blue-600">GitHub</a>
          <a href={`mailto:${portfolioData.contact.email}`} className="text-blue-600">Email</a>
          <a href={portfolioData.contact.whatsapp} target="_blank" className="text-blue-600">WhatsApp</a>
        </div>
      </section>
    </main>
  );
}