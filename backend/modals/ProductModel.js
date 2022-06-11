const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            rquired: true,
            ref: "User",
        },
        name:{
            type: String,
            required: true 
        },
        image:{
            type: String,
            required: true
        },
        brand:{
            type: String,
            required: true
        },
        category:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        }
        
    }
)