import {create} from "zustand"
import axiosClient from "../../plugins/axiosClient"

export const useShopCartStore = create((set) => ({ 
    getAllCarts: async(id)=> {
        try {
          const response = axiosClient.get(`/carts/user/${id}`)
          return response
        } catch (error) {
            console.log(error);
        }
    },
 }))