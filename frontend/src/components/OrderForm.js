import React, { useState } from 'react';

const OrderForm = () => {
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [items, setItems] = useState([{ item: '' }]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

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

  const availableItems = ['מוצר1', '.מוצר2', 'מוצר3', 'מוצר4', 'מוצר5', 'מוצר6', 'מוצר7',
                           'מוצר8', 'מוצר9', 'מוצר10', 'מוצר11', 'מוצר12', 'מוצר13', 'מוצר14', 'מוצר15'];
      /// to be changed to the real products soon.  can start each item with "." so that if user searches for "." he will see all the items.

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : availableItems.filter(item =>
      item.toLowerCase().includes(inputValue)
    );
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
    marginBottom:'10px',
    marginTop:'50px',
    width: '70%'
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
      setSuccessMessage(
        `הזמנה בוצעה בהצלחה!\n\nלקוח: ${title}\nפלאפון: ${phone}\nמוצרים: ${items.map(item => item.item).join(', ')}`
      );
    }
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
              list={`suggestions-${index}`}
            />
            <datalist id={`suggestions-${index}`}>
              {getSuggestions(item.item).map((suggestion, i) => (
                <option key={i} value={suggestion} />
              ))}
            </datalist>
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
      {successMessage && (
        <div className="success-message">
          <pre>{successMessage}</pre>
        </div>
      )}
    </form>
  );
};

export default OrderForm;
