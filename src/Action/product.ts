import { instance } from "@/Axios/config";

export const fetchingProducts = () => async (dispatch:any) =>{
    dispatch({type:"product/fetching"})
    try {
        const data = await instance.get(`/products`)
        dispatch({type:"product/fetchingSuccess",payload:data})
    } catch (error:any) {
        dispatch({type:"product/fetchingFailded",payload:error})
    }
}
export const addProducts = (product:any) => async (dispatch:any) =>{
    try {
        const data = await instance.post(`/products`,product)
        dispatch({type:"product/add",payload:data})
    } catch (error:any) {
        
    }
}
export const removeProducts = (product:any) => async (dispatch:any) =>{
    try {
        await instance.delete(`/products/${product.id}`)
        dispatch({type:"product/remove",payload:product.id})
    } catch (error) {
        
    }
}
export const updateProducts = (product:any) => async (dispatch:any) =>{
      try {

        const data = await instance.put(`/products/${product.id}`,product)
        dispatch({type:"product/update",payload:data})
    } catch (error:any) {
        
    }
}