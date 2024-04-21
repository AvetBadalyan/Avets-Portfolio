import Card from "../../Components/Card/Card";
import data from "./data";
import "./Education.scss";

const Education = () => {
  return (
    <section id="education">
      <h2>My Education</h2>
      <p>I'm excited to share my educational experiences below.</p>
      <div className="container education__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="university-card">
            <div className="university-card__icon">
              <img src={item.logo} alt={item.title} />
            </div>
            <div className="university-card__details">
              <h4>{item.title}</h4>
              <p>
                <strong>Duration:</strong> {item.duration}
              </p>
              <p>
                <strong>Faculty:</strong> {item.faculty}
              </p>
              <a
                href={item.link}
                className="btn sm primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.degree}
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;
