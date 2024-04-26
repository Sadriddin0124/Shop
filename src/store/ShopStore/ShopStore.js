import axios from "axios"
import {create} from "zustand"

export const useShopStore = create((set) => ({ 
    products: [],
    getProducts: async(limit, skip)=> {
        try {
          const response = axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
          return response
        } catch (error) {
            console.log(error);
        }
    }
 }))