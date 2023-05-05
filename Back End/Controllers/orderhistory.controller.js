const { Order }=require('../Models/orderhistory.model')
const Bookorder=async(req,res)=>{
    try {
        const NewOrder= new Order(req.body)
        await NewOrder.save()
        res.status(200).send({"msg":"Order Placed Successfully"})
    } catch (error) {
        res.status(400).send(error)
    }
}

const Getorder=async(req,res)=>{
    try {
        const Getallorders= await Order.find({userId:req.body.userId})
        res.status(200).send(Getallorders)
    } catch (error) {
        res.status(400).send(error)
        
    }
}

module.exports={
    Bookorder,Getorder
}