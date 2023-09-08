import { useEffect, useState } from "react"
import { useOrdersContext } from "../hooks/useOrdersContext"
import OrderDetails from "../components/OrderDetails"

const Collector = () => {
  const { dispatch } = useOrdersContext()
  const [localOrders, setLocalOrders] = useState([]); // Add local state

  const toggleOrderStatus = async (id, isDone) => {
    const response = await fetch(`/api/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isDone: !isDone })
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'UPDATE_ORDER', payload: json });
      setLocalOrders(prevOrders => 
        prevOrders.map(order => 
          order._id === id ? { ...order, isDone: !isDone } : order
        )
      );
    }
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('/api/orders')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_ORDERS', payload: json});
        setLocalOrders(json);
      }
    }

    fetchOrders()
  }, [dispatch])

  return (
    <div className="home" dir="rtl">
      <h1>רשימת הזמנות</h1>
      <div className="orders">
        {localOrders && localOrders.map(order => (
          <div key={order._id} className={`order-container ${order.isDone ? 'order-done' : 'order-not-done'}`}>
              <OrderDetails order={order} />
              <button onClick={() => toggleOrderStatus(order._id, order.isDone)}>
                  {order.isDone ? '✓ בוצע' : 'בוצע? לחץ אם ההזמנה בוצעה'}
              </button>
          </div>
            
        ))}

      </div>
    </div>
  )
}

export default Collector
//{order.isDone ? '✓ בוצע' : 'בוצע? לחץ אם ההזמנה בוצעה'}