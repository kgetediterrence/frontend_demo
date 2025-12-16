import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div>
      <h2>Welcome, {user.name} {user.surname}</h2>
      <button onClick={() => { localStorage.clear(); navigate('/login'); }}>Logout</button>
      <button onClick={() => navigate('/airtime-data')}>Airtime & Data</button>
      <button onClick={() => navigate('/video-music')}>Video and Music</button>
      <button onClick={() => navigate('/tickets')}>Tickets</button>
      <button onClick={() => user.role === 'admin' ? navigate('/admin') : alert('Access denied')}>Admin Page</button>
    </div>
  );
}

export default Home;