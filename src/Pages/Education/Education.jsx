import Card from '../../Components/Card/Card';
import data from './data';
import './Education.scss';

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <h2 data-aos="zoom-in-up" className="section-heading">
          Education & Training
        </h2>
      </div>
      <p data-aos="fade-right" className="container education__intro">
        Professional trainings, certifications, and academic studies
      </p>
      <div className="container education__container" data-aos="fade-up">
        {data.map(item => (
          <Card key={item.id} className="university-card">
            <div className="university-card__icon">
              <img src={item.logo} alt={item.title} />
            </div>
            <div className="university-card__details">
              <h4 className="university-card__title">{item.title}</h4>
              <p className="university-card__meta">
                <span className="text-highlight">Duration:</span> {item.duration}
              </p>
              <p className="university-card__meta">
                <span className="text-highlight">Faculty:</span> {item.faculty}
              </p>
              {item.description && (
                <p className="university-card__meta">
                  <span className="text-highlight">Description:</span> {item.description}
                </p>
              )}
              {item.link && (
                <a
                  href={item.link}
                  className="btn sm primary university-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.degree}
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;
