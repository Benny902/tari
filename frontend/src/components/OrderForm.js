import { useState } from 'react';

const OrderForm = () => {
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [items, setItems] = useState([{ item: '' }]);
  const [error, setError] = useState(null);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...items];
    updatedItems[index][name] = value;
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    setItems([...items, { item: '' }]);
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
      setItems([{ item: '' }]);
      setItems([{ item: '' }]); 
    alert(`הזמנה בוצעה בהצלחה!\n\nלקוח: ${title}\nפלאפון: ${phone}\nמוצרים: ${items.map(item => item.item).join(', ')}`);
    }
  };
  const addButton = {
    background:'green', 
    marginTop:'30px',
    width: '50%'
  };
  const removeButton = {
    background:'red',
  };
  const submitButton = {
    background:'blue',
    marginBottom:'100px',
    marginTop:'50px',
    width: '70%'
  };


  return (
    <form className="create" onSubmit={handleSubmit}>
      <h1>הוספת הזמנה חדשה</h1>
      <label>לקוח</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>מס' פלאפון</label>
      <input
        type="number"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
      <div className="form-group">
        <h2>מוצרים </h2>
        {items.map((item, index) => (
          <div key={index}>
            <label>מוצר (נא לציין יחידות/קרטון/ק"ג) </label>
            <input
              type="text"
              name="item"
              value={item.item}
              onChange={(e) => handleInputChange(index, e)}
            />
            {index > 0 && (
              <button type="button" style={removeButton} onClick={() => handleRemoveItem(index)}>
               -  הסרת פריט  
              </button>
            )}
          </div>
        ))}
        <button type="button" style={addButton} onClick={handleAddItem}>
          + הוספת פריט
        </button>
      </div>
      <button type="submit" style={submitButton}> ✓ סיום הזמנה </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default OrderForm;
