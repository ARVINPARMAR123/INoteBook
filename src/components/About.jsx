import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* About Section */}
      <section className="about-section">
        <h1>About iNoteBook</h1>
        <p>
          iNoteBook is a simple and intuitive note-taking app built with React.
          You can write fast notes, edit them, and keep them organized — all in
          one place.
        </p>
        <p>
          Our mission is to make note-taking easy, fast, and enjoyable for
          everyone — whether you’re a student, professional, or just jotting
          down ideas.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or suggestions? Drop us a message!</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea
            placeholder="Your Message"
            name="message"
            rows="4"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Privacy Policy Section */}
      <section className="privacy-section">
        <h2>Privacy Policy</h2>
        <p>
          At iNoteBook, we respect your privacy and are committed to protecting
          your personal information. We do not collect or store your notes on
          our servers — all data stays in your browser storage unless you
          choose to export or share it.
        </p>
        <p>
          We only use your contact details to respond to your messages. We
          never share your data with third parties without your consent.:contentReference
        </p>
        <p>
          **Contact for privacy concerns:** support@inotebook.app
        </p>
      </section>
    </div>
  );
};

export default About;