import { produce } from "immer";

const initialState = {
  products:[],
  isLoading:false,
  error:""
} as {products:[],isLoading:boolean,error:string};

export const ProductReducer = (state = initialState,action:any) =>{
  return produce(state,drafState=>{
    switch (action.type) {
      case "product/fetching":
        drafState.isLoading = true
        break;
    case "product/fetchingSuccess":
      drafState.products = action.payload;
      break;
    case "product/fetchingFailded":
      drafState.error = action.payload;
      break;
    case "product/add":
      drafState.products.push(action.payload);
      break;
    case "product/update":
      const product = action.payload;
      drafState.products = state.products.map((item:any)=>item.id === product.id ? product :item);
      break;
    case "product/remove":
      const id = action.payload;
      drafState.products = state.products.filter((item:any)=>item.id !== id);
      break;
    
    
      default:
        return state
      
    }
  })

}