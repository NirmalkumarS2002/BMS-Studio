import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { ArrowUpRight, Folder, Pin } from "../ui/Icons";
import { projects, LOREM_LONG } from "../../data/content";
import "./FeaturedProjects.css";

function ProjectCard({ p, index }) {
  return (
    <Reveal
      as="article"
      variant="up"
      delay={(index % 3) * 120}
      className={`project ${p.tall ? "project--tall" : ""}`}
      style={{ order: p.order }}
    >
      <img className="project__img" src={p.img} alt="" loading="lazy" />
      <div className="project__shade" />

      <a href="#" className="project__link" aria-label={p.title}>
        <span className="arrow-circle project__arrow"><ArrowUpRight width={20} height={20} /></span>
      </a>

      <div className="project__body">
        <h3 className="project__title">{p.title}</h3>
        <ul className="project__meta">
          <li><Folder width={20} height={20} />{p.category}</li>
          <li><Pin width={20} height={20} />{p.location}</li>
        </ul>
      </div>
    </Reveal>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading index="01" label="Featured Project" title="Signature Projects From Editorial Photography">
          <p>{LOREM_LONG}</p>
        </SectionHeading>

        <div className="projects">
          {[1, 2].map((col) => (
            <div className="projects__col" key={col}>
              {projects.filter((p) => p.col === col).map((p) => (
                <ProjectCard key={p.title} p={p} index={p.order} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
