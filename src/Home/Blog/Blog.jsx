import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { Calendar } from "../ui/Icons";
import { posts } from "../../data/content";
import "./Blog.css";

export default function Blog() {
  return (
    <section id="blog" className="section blog">
      <div className="container">
        <SectionHeading index="08" label="Photography Notes" title="Ideas for your next shoot" center>
          <p>Simple, useful thoughts from BMS Studio on preparing for portraits, celebrations and business photography.</p>
        </SectionHeading>

        <div className="posts">
          {posts.map((p, i) => (
            <Reveal key={p.title} variant="up" delay={i * 130}>
              <article className="post">
                <a href="#" className="post__link" aria-label={p.title} />
                <div className="post__media"><img src={p.img} alt="" loading="lazy" /></div>
                <div className="post__body">
                  <span className="post__date"><Calendar width={18} height={18} />{p.date}</span>
                  <h3 className="post__title">{p.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
