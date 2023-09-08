import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const OrderDetails2 = ({ order, handleDelete }) => { 
  const [items] = useState(order.items || []);
  const [isMinimized, setIsMinimized] = useState(
    JSON.parse(localStorage.getItem(`order_${order._id}`)) || false
  );

  useEffect(() => {
    localStorage.setItem(`order_${order._id}`, JSON.stringify(isMinimized));
  }, [isMinimized, order._id]);

  return (
    <div className={`order-details ${isMinimized ? 'minimized' : ''}`}>
      <h4>
        <button onClick={() => setIsMinimized(!isMinimized)}>
          {isMinimized ? '↙' : '↗'}
        </button>&nbsp;&nbsp;  לקוח: {order.title}
        <button className="delete-button" onClick={() => handleDelete(order._id)}>מחק</button>
      </h4>
      {!isMinimized && (
        <>
          <p>תאריך הזמנה: {format(new Date(order.createdAt), 'dd/MM HH:mm')}</p>
          <p><strong>מס' פלאפון  :  </strong>{order.phone}</p>
          <div>
            <strong> : מוצרים</strong>
            {items.map((item, index) => (
              <div key={index}>
                <p>{item.item}</p>
              </div>
            ))}
            <p>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderDetails2;
