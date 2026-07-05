import "./Hero.css";
import profile from "../profile.jpg";

function Hero() {
  return (
    <section className="hero">
      
      <img
        src={profile}
        alt="profile"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          marginBottom: "20px",
        }}
      />

      <h1>Hi, I'm Your Name 👋</h1>
      <p>Frontend React Developer | Full Stack Learner</p>

      <div>
        <button>View Projects</button>
        <button style={{ marginLeft: "10px", background: "#111827", color: "white" }}>
          Contact Me
        </button>
      </div>
    </section>
  );
}

export default Hero;