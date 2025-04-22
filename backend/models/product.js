import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [ true, "Please enter product name"],
        maxLength: [200, "Product name cannot Exceeds 200 charcters"]
    },
    price:{
        type:Number,
        required: [ true, "Please enter product Price"],
    },
    actualPrice:{
        type:Number,
        required: [ true, "Please enter product Actual Price"],
    },
    offer:{
        type:Number,
        required: [ false],
    },
    description:{
        type: {
            text: {
                type: String,
                required: [ false, "Please enter product description"],
                maxLength: [5000, "Description cannot exceed 5000 characters"]
            },
            benefits: {
                type: String,
                required: [ false, "Please enter product benefits"],
                maxLength: [5000, "Benefits cannot exceed 5000 characters"]
            },
            usage: {
                type: String,
                required: [ false, "Please enter product usage instructions"],
                maxLength: [5000, "Usage instructions cannot exceed 5000 characters"]
            }
        },
        required: [ true, "Please enter product description"]
    },
    ratings:{
        type: Number,
        default:4
    },
    images: [
        {
            public_id:{
               type:String,
               required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please enter product category"],
        enum: {
          values: [
            "Cosmetics",
            "Kids",
            "HealthCare"
          ],
          message: "Please select correct category",
        },
    },
    seller:{
        type: String,
        required:[false]
    },
    stock:{
        type:Number,
        required: [true,"Please enter product stock"]
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User",
                required:true,
            },
            ratings:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            },
        }
    ],
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:false
    },
}, {timestamps:true})

const products = mongoose.model('Product',productSchema)

export default products