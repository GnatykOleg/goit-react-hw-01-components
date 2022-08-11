import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './Transactions/TransactionHistory';

import user from '../data//user';
import data from '../data/data';
import friends from '../data/friends';
import transactions from '../data/transactions';

export default function App() {
  return (
    <div
      style={{
        padding: '40px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '15px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

// style={{
//         padding: '20px',
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         width: '1440px',
//       }}
