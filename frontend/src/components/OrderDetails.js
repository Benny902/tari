import React from 'react';
import { useOrdersContext } from '../hooks/useOrdersContext';
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const OrderDetails = ({ order }) => {
  const { dispatch } = useOrdersContext();

  const handleClick = async () => {
    const response = await fetch('/api/orders/' + order._id, {
      method: 'DELETE'
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_ORDER', payload: json });
    }
  }

  return (
    <div className="order-details">
      <h4>{order.title}</h4>
      <p><strong>מס' פלאפון איש קשר :  </strong>{order.phone}</p>
      <div>
        {order.items && order.items.map((item, index) => (
          <div key={index}>
            <p><strong> <strong>  כמות : </strong>{item.reps} , מוצר :  </strong>{item.item}</p>
            <p></p>
          </div>
        ))}
      </div>
      <p>{formatDistanceToNow(new Date(order.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" style={{color: "red", display:'contents'}}  onClick={handleClick}>delete</span>
    </div>
  )
}

export default OrderDetails;
