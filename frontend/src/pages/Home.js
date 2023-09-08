import { useEffect } from "react"
import { useOrdersContext } from "../hooks/useOrdersContext"

// components
//import OrderDetails from "../components/OrderDetails"
import OrderForm from "../components/OrderForm"

const Home = () => {
  const { dispatch } = useOrdersContext() // removed "orders ,"

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('/api/orders')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_ORDERS', payload: json})
      }
    }

    fetchOrders()
  }, [dispatch])

  return (
    <div className="home" dir="rtl"> {/*rtl = right to left for hebrew*/}
    <OrderForm />
    <p></p>
    <p></p>
    
    </div>
  )
}

export default Home