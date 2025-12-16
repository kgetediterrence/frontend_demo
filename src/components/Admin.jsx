function Admin() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user.role !== 'admin') {
    return <div>Access Denied</div>;
  }
  return (
    <div>
      <h2>Welcome to Admin Dashboard</h2>
      <p>Admin features</p>
      <button>View Users</button>
      <button>Generate Reports</button>
    </div>
  );
}

export default Admin;