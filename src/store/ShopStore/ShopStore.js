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
    },
    getProductSlider: async()=> {
        try {
          const response = axios.get(`https://dummyjson.com/products?limit=6`)
          return response
        } catch (error) {
            console.log(error);
        }
    },
    getProductFilter: async()=> {
        try {
          const response = axios.get(`https://dummyjson.com/products?limit=100`)
          return response
        } catch (error) {
            console.log(error);
        }
    },
    getSingleProduct: async(id)=> {
        try {
          const response = axios.get(`https://dummyjson.com/products/${id}`)
          return response
        } catch (error) {
            console.log(error);
        }
    },
    searchProduct: async(value)=> {
        try {
          const response = axios.get(`https://dummyjson.com/products/search?q=${value}`)
          return response
        } catch (error) {
            console.log(error);
        }
    },
 }))