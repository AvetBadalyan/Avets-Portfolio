/**
 * CountryFlag - inline SVG flags for the small set of languages shown in the
 * About section. Replaces react-country-flag, which fetched each flag from
 * cdn.jsdelivr.net at runtime — those requests carried a 7-day cache lifetime
 * set by the CDN (flagged by Lighthouse) and added extra network round-trips.
 *
 * Inlining the four flags we actually use (AM, GB, FR, RU) removes the external
 * dependency entirely: zero network requests, no third-party cache headers, and
 * the SVGs ship inside the already-cached JS bundle.
 *
 * Flag artwork adapted from lipis/flag-icons (MIT licensed):
 * https://github.com/lipis/flag-icons
 * Content was rephrased for compliance with licensing restrictions.
 */

const flagPaths = {
  AM: (
    <>
      <path fill="#d90012" d="M0 0h640v160H0z" />
      <path fill="#0033a0" d="M0 160h640v160H0z" />
      <path fill="#f2a800" d="M0 320h640v160H0z" />
    </>
  ),
  FR: (
    <>
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#000091" d="M0 0h213.3v480H0z" />
      <path fill="#e1000f" d="M426.7 0H640v480H426.7z" />
    </>
  ),
  RU: (
    <>
      <path fill="#fff" d="M0 0h640v160H0z" />
      <path fill="#0039a6" d="M0 160h640v160H0z" />
      <path fill="#d52b1e" d="M0 320h640v160H0z" />
    </>
  ),
  GB: (
    <>
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path
        fill="#FFF"
        d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
      />
      <path
        fill="#C8102E"
        d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
      />
      <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
      <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
    </>
  ),
};

/**
 * @param {object} props
 * @param {"AM"|"FR"|"RU"|"GB"} props.countryCode
 * @param {string} [props.title] - Accessible name for the flag when it is not
 *   hidden from assistive technology. When omitted (or when the parent passes
 *   aria-hidden="true") the SVG carries no accessible name, which is correct
 *   for purely decorative usage.
 * @param {object} [props.style]
 * @param {string} [props.className]
 */
const CountryFlag = ({ countryCode, title, style, className, ...rest }) => {
  const paths = flagPaths[countryCode];
  if (!paths) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
      role="img"
      aria-label={title || undefined}
      className={className}
      style={style}
      {...rest}
    >
      {title && <title>{title}</title>}
      {paths}
    </svg>
  );
};

export default CountryFlag;
