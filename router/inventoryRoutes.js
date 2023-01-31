const express = require("express");
const inventoryTable = require("../models/inventoryTableModel/inventoryModel");


const inventoryRouter = express.Router();

inventoryRouter.get("/inventory",async(req,res)=>{
    try{
        const invetoryDetails = await inventoryTable.find();

        res.status(200).json({
            status:"success",
            invetoryDetails
        })
      
    }
    catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        });
    }
});

inventoryRouter.get("/inventory/:type",async(req,res)=>{
    try{
        const invetoryDetails = await inventoryTable.find({inventory_type:req.params.type});

        res.status(200).json({
            status:"success",
            invetoryDetails
        })
      
    }
    catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        });
    }
});

inventoryRouter.post("/createInventory",async(req,res)=>{
    try{
        const invetoryDetails = await inventoryTable.create(req.body);

        res.status(200).json({
            status:"success",
            invetoryDetails
        })
      
    }
    catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        });
    }
});
inventoryRouter.put('/itemName/availableQuantity/:id', async (req, res) => {
    try {
        const inventary = await inventaryData.findOne({ id: req.params._id })
        const update = await inventaryData.updateOne({
           avail_quantity: req.body.avail_quantity
        })
        res.status(200).json({
            status: "Success",
            result: update,
        })

    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})


module.exports = inventoryRouter;