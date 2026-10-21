import { useState } from "react";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { serviceOptions } from "../../data/content";
import "./Contact.css";

const initial = { name: "", email: "", service: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!values.name.trim()) er.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) er.email = "Please enter a valid email";
    if (!values.service) er.service = "Please choose a service";
    if (values.message.trim().length < 10) er.message = "Tell us a little more (10+ characters)";
    return er;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) return;
    setStatus("sending");
    // TODO: replace with your API call, e.g. fetch("/api/contact", { method: "POST", body: JSON.stringify(values) })
    setTimeout(() => {
      setStatus("sent");
      setValues(initial);
    }, 900);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <Reveal as="span" className="eyebrow">[07] Contact</Reveal>
          <Reveal as="h2" delay={100} className="contact__title">Let's Discuss Your Photography Project</Reveal>
          <Reveal as="p" delay={200}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </Reveal>
          <Reveal delay={300} className="contact__map">
            <iframe
              title="Studio location"
              src="https://www.google.com/maps?q=London+Eye&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>

        <Reveal as="form" variant="right" delay={200} className="form" onSubmit={onSubmit} noValidate>
          <div className="form__row">
            <label className="field">
              <span>Full Name</span>
              <input name="name" value={values.name} onChange={onChange} placeholder="ex: John Doe" autoComplete="name" aria-invalid={!!errors.name} />
              {errors.name && <em>{errors.name}</em>}
            </label>
            <label className="field">
              <span>Your Email</span>
              <input name="email" type="email" value={values.email} onChange={onChange} placeholder="ex: johndoe@email.com" autoComplete="email" aria-invalid={!!errors.email} />
              {errors.email && <em>{errors.email}</em>}
            </label>
          </div>

          <label className="field">
            <span>Service Selection</span>
            <select name="service" value={values.service} onChange={onChange} aria-invalid={!!errors.service}>
              <option value="">Select one</option>
              {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
            {errors.service && <em>{errors.service}</em>}
          </label>

          <label className="field">
            <span>Your Message</span>
            <textarea name="message" rows={6} value={values.message} onChange={onChange} placeholder="Tell us what's on your mind..." aria-invalid={!!errors.message} />
            {errors.message && <em>{errors.message}</em>}
          </label>

          <div className="form__actions">
            <Button type="submit" icon={false} disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Submit Inquiry"}
            </Button>
            {status === "sent" && <p className="form__ok" role="status">Thank you! We'll be in touch shortly.</p>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
