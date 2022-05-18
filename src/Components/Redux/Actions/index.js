export const addShop = (shop) =>{
    return{
        type:"ADDSHOP",
        payLoad : shop
    }
}
export const removeShop = (shop) =>{
    return{
        type:"REMOVESHOP",
        payLoad : shop
    }
}