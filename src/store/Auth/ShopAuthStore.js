import {create} from "zustand"
import axiosClient from "../../plugins/axiosClient"

export const useShopAuthStore = create((set) => ({ 
    Login: async(payload)=> {
        try {
          const response = axiosClient.post(`/auth/login`, payload)
          return response
        } catch (error) {
            console.log(error);
        }
    },
 }))