import { useState } from 'react';

const OrderForm = () => {
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [items, setItems] = useState([{ item: '', reps: '' }]);
  const [error, setError] = useState(null);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...items];
    updatedItems[index][name] = value;
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    setItems([...items, { item: '', reps: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = { title, phone, items };

    const response = await fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setError(null);
      setTitle('');
      setPhone('');
      setItems([{ item: '', reps: '' }]);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>הוספת הזמנה חדשה</h3>
      <label>שם העסק</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>מס' פלאפון איש קשר</label>
      <input
        type="number"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
      <div className="form-group">
        <h3>מוצרים</h3>
        {items.map((item, index) => (
          <div key={index}>
            <label>מוצר:</label>
            <input
              type="text"
              name="item"
              value={item.item}
              onChange={(e) => handleInputChange(index, e)}
            />
            <label>כמות:</label>
            <input
              type="number"
              name="reps"
              value={item.reps}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
        ))}
        <button type="button" onClick={handleAddItem}>הוספת פריט</button>
      </div>
      <button type="submit">סיום הזמנה</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default OrderForm;
