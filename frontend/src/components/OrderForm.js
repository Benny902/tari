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

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
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
      
      // Show a pop-up message with the order details
      const orderDetails = `Title: ${title}\nPhone: ${phone}\nItems:\n${items.map(item => `   - ${item.item}: ${item.reps}`).join('\n')}`;
      alert(`Order submitted successfully!\n\n${orderDetails}`);
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
        type="text"
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
              type="text"
              name="reps"
              value={item.reps}
              onChange={(e) => handleInputChange(index, e)}
            />
            <button type="button" onClick={() => handleRemoveItem(index)}>הסרת פריט</button>
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
