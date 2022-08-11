import PropTypes from 'prop-types';
import s from './Profile.module.css';
export default function Profile({ username, tag, location, stats, avatar }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.description__image} />
        <p className={s.description__name}>{username}</p>
        <p className={s.description__tag}>{tag}</p>
        <p className={s.description__location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.stats__item}>
          <span className={s.stats__label}>Followers</span>
          <span className={s.stats__quantity}>{stats.followers}</span>
        </li>
        <li className={s.stats__item}>
          <span className={s.stats__label}>Views</span>
          <span className={s.stats__quantity}>{stats.views}</span>
        </li>
        <li className={s.stats__item}>
          <span className={s.stats__label}>Likes</span>
          <span className={s.stats__quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  avatar: PropTypes.string.isRequired,
};
