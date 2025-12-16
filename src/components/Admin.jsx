import './Admin.css';

function Admin() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user.role !== 'admin') {
    return <div className="container"><h2>Access Denied</h2></div>;
  }
  return (
    <div className="container">
      <h2>Welcome to Admin Dashboard</h2>
      <p>Admin features</p>
      <div className="button-grid">
        <button className="dashboard-button">View Users</button>
        <button className="dashboard-button">Generate Reports</button>
      </div>
    </div>
  );
}

export default Admin;