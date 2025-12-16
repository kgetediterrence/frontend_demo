function Tickets() {
  return (
    <div>
      <h2>Welcome to Tickets Dashboard</h2>
      <p>Book tickets</p>
      <select>
        <option>Concert</option>
        <option>Sport</option>
      </select>
      <input type="number" placeholder="Quantity" />
      <button>Checkout</button>
    </div>
  );
}

export default Tickets;