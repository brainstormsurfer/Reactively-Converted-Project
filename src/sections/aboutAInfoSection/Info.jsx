import { AboutMe } from "../index";

const Info = () => {
  return (
    <>
      <section className="about-a text-center py-3">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="bottom-line" />
          <p className="lead">
            Let me tell you a little about myself and what I do...
          </p>
          <AboutMe />
        </div>
      </section>
    </>
  );
};

export default Info;
