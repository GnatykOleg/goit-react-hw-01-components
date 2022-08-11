import s from './Friend.module.css';
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.friends__item}>
      <span className={isOnline === true ? s.online : s.offline}></span>
      <img
        className={s.friends__avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={s.friends__name}>{name}</p>
    </li>
  );
}
