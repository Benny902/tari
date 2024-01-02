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

  const availableItems = ['*חסה', '*חסה לאליק', '*לבבות חסה', '*חסה סלנובה', '*תפוח אדמה אדום', '*תפוח אדמה לבן', '*תפוח סמיט', '*חציל',
                           '*מלפפון', '*מלפפון בייבי', '*עגבניה', '*שרי', '*שרי תמר', '*שרי לובלו', '*שרי צהובה', '*גזר 10', '*גזר קצוץ',
                            '*כרוב אדום', '*כרוב לבן ','*א.א שמפניון', '*פורטובלו', '*בצל אדום', '*בצל יבש', '*בצל ירוק', '*פטרוזוליה',
                             '*נבטים', '*בטטה', '*פלפל אדום', '*פלפל צהוב', '*פלפל ירוק', '*פלפל חריף', '*פלפל חריף אדום'];
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
    marginRight:'1px',
    //width: '40%',
    minWidth:'200px',
    float:'center',
  };
  const removeButton = {
    background:'red',
    height:'18px',
    padding: '16px',
    lineHeight: '0px',
    marginBottom:'1px',
    float:'center',
  };
  const submitButton = {
    background:'blue',
    marginBottom:'10px',
    marginTop:'10px',
    //width: '70%',
    minWidth:'250px',
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
      <h2>הוספת הזמנה חדשה</h2>
      <label></label>
      <input
      placeholder='שם לקוח'
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label></label>
      <input
      placeholder="מס' פלאפון"
        type="number"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
      <div className="form-group">
        <h3>מוצרים <p style={{fontSize: '14px', marginTop: '-4px'}}>(ניתן לרשום כוכבית * על מנת לראות את רשימת המוצרים) </p></h3>
        
        {items.map((item, index) => (
          <div key={index}>
          <p></p>
            <label> </label>
            <input
            placeholder='מוצר (נא לציין יחידות/קרטון/ק"ג)'
              type="text"
              name="item"
              value={item.item}
              onChange={(e) => handleInputChange(index, e)}
              list={`suggestions-${index}`}
            />
            <button type="button" style={removeButton} onClick={() => handleRemoveItem(index)}>
                -  הסרת מוצר  
              </button>
            <datalist id={`suggestions-${index}`}>
              {getSuggestions(item.item).map((suggestion, i) => (
                <option key={i} value={suggestion} />
              ))}
            </datalist>
       
          </div>
        ))}
        <button type="button" style={addButton} onClick={handleAddItem}>
          + הוספת מוצר
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
