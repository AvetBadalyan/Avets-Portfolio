import Card from '../../Components/Card/Card';
import data from './data';
import './Education.scss';

const Education = () => {
  return (
    <section id="education">
      <h2 data-aos="zoom-in-up" className="container section-heading">
        Education & Training
      </h2>
      <p data-aos="fade-right" className="container education__intro">
        Academic background and professional training that supported my
        transition from finance into software engineering.
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
                <strong>Duration:</strong> {item.duration}
              </p>
              <p className="university-card__meta">
                <strong>Faculty:</strong> {item.faculty}
              </p>
              {item.description && (
                <p className="university-card__meta">
                  <strong>Description:</strong> {item.description}
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
