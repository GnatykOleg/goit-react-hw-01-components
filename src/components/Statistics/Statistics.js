import PropTypes from 'prop-types';
import s from './Statistics.module.css';
export default function Statistics({ title, stats }) {
  const isTrue = true;
  return (
    <section className={s.statistics}>
      {isTrue ? <h2 className={s.statistics__title}>{title}</h2> : null}
      <ul className={s.statistics__list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={s.statistics__item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={s.statistics__label}>{label}</span>
            <span className={s.statistics__percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
