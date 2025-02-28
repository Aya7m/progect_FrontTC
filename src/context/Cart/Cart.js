import axios from "axios";

import { createContext} from "react";


export let cartContext = createContext()




const CartProvider = ({ children }) => {


  









  async function addProductToCart(item_id, quantity) {
    try {
      let data = await axios.post('https://test-ecomerce.hrt-wü.de/api/cart/add-item', {
        'item_id': item_id,

        'qty': quantity,


      }, {
        headers: {
          'Country-Id': '1',
          'Authorization': "Bearer " + localStorage.getItem('token')
        }
      })


      return data

    } catch (error) {
      console.log(error);

    }

  }



  function removeItem(item_id) {
    try {
      let data = axios.post('https://test-ecomerce.hrt-wü.de/api/cart/remove-item', {
        'item_id': item_id,

      }, {
        headers: {
          'Country-Id': '1',
          'Authorization': "Bearer " + localStorage.getItem('token')
        }
      })
    } catch (error) {
      console.log(error);
    }
  }


  function increaseQuantity(item_id) {
    try {
      let data = axios.post('https://test-ecomerce.hrt-wü.de/api/cart/increase-item', {
        'item_id': item_id,
        'qty': 1
      }, {
        headers: {
          'Country-Id': '1',
          'Authorization': "Bearer " + localStorage.getItem('token')
        }
      })
    } catch (error) {
      console.log(error);
    }
  }


  function decreaseQuantity(item_id) {
    try {
      let data = axios.post('https://test-ecomerce.hrt-wü.de/api/cart/decrease-item', {
        'item_id': item_id,
        'qty': 1
      }, {
        headers: {
          'Country-Id': '1',
          'Authorization': "Bearer " + localStorage.getItem('token')
        }
      })

    } catch (error) {
      console.log(error);
    }
  }



  function detailProduct(item_id) {
    try {
      let data = axios.get('https://test-ecomerce.hrt-wü.de/api/product/find/' + item_id, {
        headers: {
          'Country-Id': '1',
          'Authorization': "Bearer " + localStorage.getItem('token')
        }
      })
      return data
    } catch (error) {
      console.log(error);
    }
  }




  function destroyCart() {
    try {
      let data = axios.post('https://test-ecomerce.hrt-wü.de/api/cart/destroy-cart', {
      }, {
        headers: {
          'Country-Id': '1',
          'Authorization': "Bearer " + localStorage.getItem('token')
        }
      })
      return data
    } catch (error) {
      console.log(error);
    }
  }







  async function createOrder(shipping_street_address, shipping_state, shipping_country, payment_method) {



    try {
      const data = await axios.post('https://test-ecomerce.xn--hrt-w-ova.de/api/order/create', {
        "shipping_street_address": shipping_street_address,
        "shipping_state": shipping_state,
        "shipping_country": shipping_country,
        "payment_method": payment_method
      },
        {
          headers: {
            'Country-Id': '1',
            'Authorization': "Bearer " + localStorage.getItem('token')

          }
        })



     


        return data
    


    } catch (error) {
      console.error("Error creating order:", error.response?.data || error.message);
      return null;

    }



  }

















  return (
    <cartContext.Provider value={{ addProductToCart, removeItem, increaseQuantity, decreaseQuantity, detailProduct, destroyCart, createOrder }}>
      {children}

    </cartContext.Provider>
  )
}

export default CartProvider
