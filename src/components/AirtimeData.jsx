import './Dashboard.css';

function AirtimeData() {
  return (
    <div className="container">
      <h2>Welcome to Airtime & Data Dashboard</h2>
      <p>Select airtime or data bundle</p>
      <select>
        <option>Airtime R10</option>
        <option>Data 1GB</option>
      </select>
      <button>Submit</button>
    </div>
  );
}

export default AirtimeData;