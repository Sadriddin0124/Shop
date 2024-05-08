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
    addCart: async(payload)=> {
        try {
          const response = axiosClient.post(`/carts/add`, payload)
          return response
        } catch (error) {
            console.log(error);
        }
    },
 }))