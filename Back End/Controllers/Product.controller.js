const {Product} = require('../Models/product.model')

/* 
{
    "title":"mi",
    "price":20000,
    "desc":"this is an mi it has great camera and cheaper",
    "category":"mobile",
    "brand":"mi",
    "quantity":1,
    "descountprice":"18000",
    "rating":"4.1",
    "images":"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
}
 
{
    "name":"soniya",
    "email":"soniya@gmail.com",
    "password":"12345",
    "age":22,
    "gender":"femail"
}


*/

const CartPostProduct=async(req,res)=>{
   try {     
    let newcardProduct= new Product(req.body)
    await newcardProduct.save() 
    res.status(200).send({"Msg":"Product Added To Cart Successfully"})  
   } catch (error) {  
    res.status(400).send(error)
   }
}

const CartgetProduct=async(req,res)=>{
    try {
        let Getallproductdata= await Product.find({userId:req.body.userId})    
        res.status(200).send(Getallproductdata)
    } catch (error) {
        res.status(400).send(error)      
    }
}

const CartdeleteProduct=async(req,res)=>{
    // const{id}=req.params
    // let getsingledata= await Product.findOne({_id:id})
    console.log(req.body.userId)
    try {     
            let deletethdata= await Product.deleteMany({userId:req.body.userId})
            res.status(200).send({"msg":"Product deleted Successfully"})  
               
    } catch (error) {
        res.status(400).send(error)      
    }
}

const CartupdateProduct=async(req,res)=>{

    const{id}=req.params
    let getsingledata= await Product.findOne({_id:id})
    try {
        if(req.body.userId==getsingledata.userId){
            let updatednote= await Product.findByIdAndUpdate({_id:id},req.body,{new:true})    
            res.status(200).send(updatednote)
        }else{
            res.status(400).send({"msg":"you are not Authorized"})      
        }
        
    } catch (error) {
        res.status(400).send(error)      
    }
}
module.exports={
    CartPostProduct,CartgetProduct,CartdeleteProduct,CartupdateProduct
}