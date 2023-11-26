export const GetAllProducts = (req,res) =>{
    res.send("Here you get all the products")
}

export const SinglelProducts = (req,res) =>{
    res.send("Here you get Single product.")
}

export const addProducts = (req,res) =>{
    try{
        const {name, price, category, image } = req.body;
        if(!name || !price || !category || !image) return res.status(404).json({success:false, message:"All Products addded"})

        const product = new ProductModal({
            name,price,category,image
        })
    } catch (error){
        return res.status(500).json({ success:false, message: error })
    }
}