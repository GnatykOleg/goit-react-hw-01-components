import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr className={s.tr}>
          <th className={s.tr__th}>Type</th>
          <th className={s.tr__th}>Amount</th>
          <th className={s.tr__th}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={s.tbody__tr}>
            <td className={s.tbody__td}>{type}</td>
            <td className={s.tbody__td}>{amount}</td>
            <td className={s.tbody__td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
