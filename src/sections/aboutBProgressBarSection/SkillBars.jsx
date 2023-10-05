import { ProgressBar } from '../index'
import { skillsProgression } from "../../utils/website_data";
import { nanoid } from "nanoid";

const SkillBars = () => {
  return (
    <section className="about-b bg-dark py-3">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="bottom-line" />
        {skillsProgression.map((skill) => {
          return <ProgressBar key={nanoid()} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default SkillBars;
