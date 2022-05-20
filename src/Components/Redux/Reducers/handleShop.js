const initialState = {
    shopData : []
}

const handleShop = (state = initialState, action) =>{
    switch (action.type) 
    {
        case "ADDSHOP":
            return {
                ...state,
                shopData: [...state.shopData,action.payLoad]
            }
        case "REMOVESHOP":
            const temp = state.shopData.filter((val) => val.id!==action.payLoad)
            return{
                ...state,
                shopData : temp
            }
        default :
            return state
    }
}
export default handleShop;