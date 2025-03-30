import ReactCountryFlag from 'react-country-flag';
import './LanguageSkill.scss';

const LanguageSkill = ({ language, proficiency, flagEmoji }) => {
  return (
    <div className="language-skill">
      <div className="language-info">
        <span>{language}</span>
        <ReactCountryFlag
          countryCode={flagEmoji}
          svg
          style={{ fontSize: '1em', width: '1.5rem' }}
        />
      </div>
      <div className="progress-bar" data-aos="fade-right">
        <div className="progress" style={{ width: `${proficiency}%` }}></div>
      </div>
    </div>
  );
};

export default LanguageSkill;
