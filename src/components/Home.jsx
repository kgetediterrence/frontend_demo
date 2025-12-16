import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="container">
      <h2 className="welcome">Welcome, {user.name} {user.surname}</h2>
      <button className="logout-button" onClick={() => { localStorage.clear(); navigate('/login'); }}>Logout</button>
      <div className="button-grid">
        <button className="dashboard-button" onClick={() => navigate('/airtime-data')}>Airtime & Data</button>
        <button className="dashboard-button" onClick={() => navigate('/video-music')}>Video and Music</button>
        <button className="dashboard-button" onClick={() => navigate('/tickets')}>Tickets</button>
        <button className="dashboard-button admin-button" onClick={() => user.role === 'admin' ? navigate('/admin') : alert('Access denied')}>Admin Page</button>
      </div>
    </div>
  );
}

export default Home;