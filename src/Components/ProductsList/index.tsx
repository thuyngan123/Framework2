 import { addProducts, fetchingProducts, removeProducts, updateProducts } from '@/Action/product';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
 import { Dispatch } from 'redux'
 
 const ProductsList = () => {
  const dispatch:Dispatch<any> = useDispatch();
  const {products} = useSelector((state:any)=>state.products)
  useEffect(()=>{
    dispatch(fetchingProducts())
  },[])
   return (

     <div>
       <button onClick={()=>{
        console.log("Add Clicked");
        dispatch(addProducts({name:"Product 3"}))
        
       }}>Add Products</button>
      <table className="border-collapse border border-slate-400">
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Action</th>
          </tr>
        </thead>
        {products.map((item:any)=>{
        return (
        <tbody key={item.id}>
          <tr>
            <td>{item.name}</td>
            <td>
          <button onClick={() =>{
             dispatch({ type: "CART/ADD", payload: { ...item, quantity: 1 } })
            }}>
                    Add to cart
           </button>
       <button onClick={()=>{
        console.log("Add Clicked");
        dispatch(removeProducts({id:3}))
        
       }}>Remove Products</button>
       <button onClick={()=>{
        console.log("Update Clicked");
        dispatch(updateProducts({name:"Product 3 update",id:3}))
        
       }}>Update Products</button>
            </td>
          </tr>

        </tbody>
        )})}
      </table>
     </div>
   )
 }
 
 export default ProductsList
 