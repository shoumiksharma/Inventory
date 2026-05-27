import Product from "../model/product.js";
import Transaction from "../model/transactions.js";

export const addProduct = async (req, res) => {
    try{
        const {name} = req.body;

        const product = await Product.findOne({name});
        if(product){
            return res.status(400)
               .json({message : "A Product with same name already exists"});
        }

        const newProduct = await Product.create({name});
        return res.status(201)
           .json({message : "Product Added !", name});
    }
    catch(err){
        console.log("Add Product Error : ", err);
        res.status(500)
           .json({message : "Server Error"});
    }
}

export const getProducts = async(req, res) => {
    try{
        const productList = await Product.find();

        return res.status(200)
                  .json({message : "Product list fetched", productList});
    }
    catch(err){
        console.log("Get Products Error : ", err);
        res.status(500)
           .json({message : "Server Error"});
    }
}

export const updateProduct = async (req, res) => {
    try{
        const {productId, amt, category} = req.body;

        const product = await Product.findById(productId);
        if(category == 'Issue'){
            product.qty += amt;
        }
        else{
            product.qty -= amt;
        }

        const newTxn = await Transaction.create(
            {
                product : productId,
                amt,
                category,
                qty : product.qty
            }
        )

        await product.save();

        return res.status(200)
                  .json({message : "Transaction completed", newTxn, product})

    }
    catch(err){
        console.log("Update Error : ", err);
        res.status(500)
           .json({message : "Server Error"});
    }
}

export const getTransactions = async(req, res) => {
    try{
        const {productId} = req.params;

        const txns = await Transaction.find({product : productId});

        return res.status(200)
                  .json({message : "Transactons fetched Successfully!", txns});
    }
    catch(err){
        console.log("Get Transaction Error : ", err);
        res.status(500)
           .json({message : "Server Error"});  
    }
}







export const deleteProduct = async (req, res) => {
    try {
        const {name} = req.params;

        const deleted = await Product.findOneAndDelete({name});
        if(!deleted){
            return res.status(400)
                      .json({message : "Product not found"});
        }

        return res.status(200)
                  .json({message : "Product deleted Successfully!", name});
    } 
    catch (err) {
        console.log("Delete Product Error : ", err);
        res.status(500)
           .json({Message : "Server Error"});
    }
}