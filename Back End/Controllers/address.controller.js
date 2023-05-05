const {Address}=require('../Models/address.model')


/*

    {
    "state":"Rajasthan",
    "pincode":313324,
    "city":"Rajsamand",
    "street":"Nayakwadi",
    "landmark":"New imli",
    "country":"India",
    "housenumber":249,
    "mobilenubmer":+918003740674
    }

*/
const AddNewAddress=async(req,res)=>{

    try {
        let AddNewAddress= new Address(req.body)
        await AddNewAddress.save()
        res.status(200).send({"msg":"New Address Successfully created"})       
    } catch (error) {
        res.status(400).send(error)              
    }

}

const GetAllAddress=async(req,res)=>{

    try {
        let GetAlladdresses= await Address.find({userId:req.body.userId})
        res.status(200).send(GetAlladdresses)       
    } catch (error) {
        res.status(400).send(error)              
    }
    
}

const deleteaddress=async(req,res)=>{
    const{id}=req.params

    const deleteid= await Address.findOne({_id:id})
    try {
        if(req.body.userId===deleteid.userId){
            let GetAlladdresses= await Address.findByIdAndDelete({_id:id})
            res.status(200).send({"msg":"Address Deleted Successfully"}) 
        }else{
        res.status(400).send({"msg":"you are not Authorized"})              

        }
             
    } catch (error) {
        res.status(400).send(error)              
    }
    
}

module.exports={
    AddNewAddress,GetAllAddress,deleteaddress
}