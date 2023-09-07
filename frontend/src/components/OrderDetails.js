import { useOrdersContext } from '../hooks/useOrdersContext'
import React, { useState } from 'react';

// date fns
//import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { format } from 'date-fns';

const OrderDetails = ({ order }) => {
  const [items] = useState(order.items || []);

  const { dispatch } = useOrdersContext()
  const handleClick = async () => {
    const response = await fetch('/api/orders/' + order._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_ORDER', payload: json})
    }
  }

  return (
    <div className="order-details">
      <h4>לקוח: {order.title}</h4>
      <p>תאריך הזמנה: {format(new Date(order.createdAt), 'dd/MM HH:mm')}
        {/*formatDistanceToNow(new Date(order.createdAt), { addSuffix: true })*/}</p>
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
            <span className="material-symbols-outlined" style={{color: "red", display:'contents'}}  onClick={handleClick}>delete</span>
      </div>
    </div>
  );
};

export default OrderDetails;
