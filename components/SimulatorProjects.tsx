import Image from "next/image";

const projects = [
  {
    title: "Tank Crew Training Simulator",
    category: "Military Simulator",
    description:
      "Multi-PC networked tank simulator with Driver, Gunner, Commander and Instructor stations, integrated with immersive training environments.",
    tags: ["Unreal Engine 5", "Multi-PC LAN", "6-DOF Motion Platform", "VR Ready"],
  },
  {
    title: "6-DOF Motion Platform",
    category: "Motion Platform",
    description:
      "Integrated FlyPT Mover with AMC-AASD15A controller for realistic vehicle motion feedback and simulator movement.",
    tags: ["FlyPT Mover", "AMC-AASD15A", "UDP / Network"],
  },
  {
    title: "Military Simulation Environment",
    category: "Unreal Engine Projects",
    description:
      "Realistic terrain, vehicles and training scenarios developed with Unreal Engine 5 for simulation and multiplayer applications.",
    tags: ["Unreal Engine 5", "C++ / Blueprints", "Multiplayer"],
  },
  {
    title: "Unity VR Training",
    category: "VR Simulator",
    description:
      "Immersive VR training scenarios using Meta Quest and Meta Horizon Interaction SDK, including hand-tracking interaction.",
    tags: ["Unity", "Meta Quest", "Meta Horizon SDK", "Hand Tracking"],
  },
  {
    title: "Driver / Gunner / Commander / Instructor",
    category: "Multi-Role Simulator",
    description:
      "Networked training system with synchronized stations, real-time communication and scenario control.",
    tags: ["Unity / Unreal", "LAN Networking", "Real-time"],
  },
];

export default function SimulatorProjects() {
  return (
    <section id="simulator-projects" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
          My Work
        </p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Simulator <span className="text-sky-400">Projects</span>
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Advanced training simulators for defense and industrial applications,
          using Unity and Unreal Engine with VR, motion platforms and networked
          multiplayer systems.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl">
        <Image
          src="/images/simulator-projects.png"
          alt="Simulator projects portfolio showcase"
          width={1536}
          height={1024}
          className="h-auto w-full"
          priority
        />
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 transition hover:-translate-y-1 hover:border-sky-500/50"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">
              {project.category}
            </p>
            <h3 className="mt-2 text-xl font-bold text-white">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
