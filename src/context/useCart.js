import { create } from "zustand";
import axios from "axios";
import { toast } from "react-hot-toast";



export const useCartStore = create((set, get) => ({
	cart: [],
	coupon: null,
	total: 0,
	subtotal: 0,



    addToCart: async (item_id, quantity) => {
		try {
			await axios.post("https://test-ecomerce.hrt-wü.de/api/cart/add-item", { item_id:item_id,quantity:quantity });
			toast.success("Product added to cart");

			set((prevState) => {
				const existingItem = prevState.cart.find((item) => item._id ===item_id);
				const newCart = existingItem
				
				return { cart: newCart };
			});
			get().calculateTotals();
		} catch (error) {
			toast.error(error.response.data.message || "An error occurred");
		}
	},

}));
