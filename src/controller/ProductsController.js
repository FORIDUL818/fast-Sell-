import Product from "../model/productModel.js";

export const createProduct= async (req,res) => {
    try {
        let {name,description,price,discountPrice,category,brand,stock,images,ratings,numOfReviews}=req.body;

        let userData = new Product({
            name,
            description,
            price,
            discountPrice,
            category,
            stock,
            images,
            ratings,
        })
     userData.save()
     console.log(userData)
        console.log(name,description,price,discountPrice,category,brand,stock,images,ratings);
        res.status(200).json({data:userData})
      

    } catch (error) {
        res.status(500).json({message:error.message})  
    }
}