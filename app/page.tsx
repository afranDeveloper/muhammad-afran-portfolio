import ProjectGallery, { type ProjectImage } from "../components/ProjectGallery";

const img = (file: string, caption: string): ProjectImage => ({
  src: `/images/projects/${file}.jpg`,
  caption,
});

type Project = {
  number: string;
  title: string;
  text: string;
  tags: string[];
  images?: ProjectImage[];
};

const projects: Project[] = [
  {
    number: "01",
    title: "Tank Crew Training Simulator",
    text: "Multi-station training environment connecting driver, gunner, commander and instructor systems over a shared LAN.",
    tags: ["Unreal Engine 5", "Multi-PC LAN", "6-DOF Motion", "VR Ready"],
    images: [
      img("tank-crew-main", "Tank crew simulator"),
      img("tank-driver-station", "Driver station"),
      img("tank-gunner-station", "Gunner station"),
      img("tank-commander-station", "Commander station"),
      img("tank-instructor-station", "Instructor station"),
    ],
  },
  {
    number: "02",
    title: "Multi-Role Training System",
    text: "Networked driver, gunner, commander and instructor stations with synchronized simulation, real-time communication and scenario control.",
    tags: ["Unity / Unreal", "LAN Networking", "Real-time"],
    images: [
      img("multirole-control-room", "Instructor control room"),
      img("multirole-vehicle", "Simulated vehicle"),
      img("multirole-cockpit", "Driver cockpit view"),
    ],
  },
  {
    number: "03",
    title: "6-DOF Motion Platform",
    text: "Real-time motion data pipeline integrating simulation telemetry with FlyPT Mover and an AMC-AASD15A controller for smooth, accurate movement.",
    tags: ["UDP", "FlyPT Mover", "AMC-AASD15A", "Motion"],
    images: [
      img("motion-platform-main", "6-DOF motion platform"),
      img("motion-flypt-mover", "FlyPT Mover telemetry"),
      img("motion-amc-aasd15a", "AMC-AASD15A controller"),
    ],
  },
  {
    number: "04",
    title: "VR & AR Training Systems",
    text: "Immersive interactive training applications for Meta Quest, including hand interaction and simulator integrations.",
    tags: ["Unity", "Meta Quest", "Horizon Interaction SDK", "Hand Tracking"],
    images: [
      img("vr-training-main", "VR training session"),
      img("vr-hand-tracking-1", "Hand-tracked controls"),
      img("vr-hand-tracking-2", "Hand interaction"),
    ],
  },
  {
    number: "05",
    title: "Military Simulation Environment",
    text: "Realistic terrain, vehicles and training scenarios built in Unreal Engine 5, optimized for training and multiplayer.",
    tags: ["Unreal Engine 5", "C++ / Blueprints", "Multiplayer"],
    images: [
      img("ue5-environment-main", "UE5 training scenario"),
      img("ue5-environment-terrain", "Open terrain"),
      img("ue5-environment-editor", "Unreal Editor"),
    ],
  },
  {
    number: "06",
    title: "Hardware-Integrated Simulator",
    text: "Arduino Mega controllers, incremental encoders, proximity sensors and switch panels connected to real-time simulation software.",
    tags: ["Arduino", "Encoders", "Sensors"],
  },
];

const skills = [
  "Unity 3D", "C#", "Unreal Engine 5", "Meta Quest",
  "Meta Horizon Interaction SDK", "VR / AR", "Multiplayer / LAN",
  "Vehicle Physics", "Simulation Systems", "UDP / TCP",
  "Arduino", "Encoders & Sensors", "FlyPT Mover"
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="brand">MA<span>.</span></div>
        <div className="navlinks">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="eyebrow">SENIOR UNITY DEVELOPER · SIMULATORS · VR/AR</div>
        <h1>Building immersive<br /><em>real-time worlds.</em></h1>
        <p className="lead">
          I&apos;m Muhammad Afran — a senior developer focused on games, professional simulators,
          VR/AR training systems, multiplayer experiences and hardware-connected real-time applications.
        </p>
        <div className="actions">
          <a className="button primary" href="#work">Explore my work <span>↘</span></a>
          <a className="button ghost" href="#contact">Let&apos;s talk</a>
        </div>
        <div className="hero-grid">
          <div><strong>10+</strong><span>Years experience</span></div>
          <div><strong>Unity</strong><span>Primary engine</span></div>
          <div><strong>VR / AR</strong><span>Immersive systems</span></div>
          <div><strong>Real-time</strong><span>Simulation & hardware</span></div>
        </div>
      </section>

      <section id="work" className="section">
        <div className="section-head">
          <div><span className="kicker">SELECTED WORK</span><h2>Systems that connect<br /><em>software to reality.</em></h2></div>
          <p>From multiplayer tank training to motion platforms and VR interaction, I build systems where simulation, networking and physical hardware work together.</p>
        </div>
        <div className="project-grid">
          {projects.map((p) => (
            <article className="project" key={p.number}>
              {p.images?.length ? (
                <ProjectGallery number={p.number} title={p.title} images={p.images} />
              ) : (
                <div className="project-art"><span>{p.number}</span><div className="crosshair">+</div></div>
              )}
              <div className="project-body">
                <h3>{p.title}</h3><p>{p.text}</p>
                <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="kicker">TECHNICAL TOOLKIT</div>
        <h2>Built for <em>complexity.</em></h2>
        <div className="skill-list">{skills.map((s, i) => <div className="skill" key={s}><span>{String(i+1).padStart(2,"0")}</span>{s}</div>)}</div>
      </section>

      <section id="about" className="section about">
        <div className="kicker">ABOUT</div>
        <div className="about-grid">
          <h2>Developer.<br /><em>Simulator builder.</em><br />Problem solver.</h2>
          <div>
            <p>I create real-time interactive software for games, simulation, serious games and training. My work spans Unity/C#, Unreal Engine, VR/AR, multiplayer networking, vehicle physics and direct hardware integration.</p>
            <p>I also build the bridge between digital simulation and physical systems — including Arduino controllers, incremental encoders, proximity sensors, UDP telemetry and FlyPT Mover motion platforms.</p>
            <p>For Quest-based experiences, I use Meta Horizon Interaction SDK to build robust hand and controller interaction and integrate immersive interfaces into larger simulator systems.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="kicker">GET IN TOUCH</div>
        <h2>Have a simulator,<br /><em>game or VR idea?</em></h2>
        <p>Available for senior development, simulator engineering, VR/AR and real-time interactive projects.</p>
        <a className="contact-link" href="mailto:afran_hafeez@yahoo.com">afran_hafeez@yahoo.com↗</a>
        <div className="footer-line"><span>Muhammad Afran · Senior Unity Developer</span><span>© 2026</span></div>
      </section>
    </main>
  );
}
