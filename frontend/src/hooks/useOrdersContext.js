import { OrdersContext } from "../context/OrdersContext"
import { useContext } from "react"

export const useOrdersContext = () => {
  const context = useContext(OrdersContext)

  if(!context) {
    throw Error('useOrdersContext must be used inside a OrdersContextProvider')
  }

  return context
}