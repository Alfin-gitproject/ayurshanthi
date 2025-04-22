import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Coupon from "../models/coupon.js";

export const newCoupon = catchAsyncErrors(async (req, res, next) => {

    const { code, discountType, discountValue, expirationDate, usageLimit } = req.body;

    // Validate discountType and discountValue
    if (discountType === 'percentage' && (discountValue <= 0 || discountValue >= 100)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid discount value. For percentage discount, the value must be greater than 0 and less than 100.'
        });
    }

    // Create coupon if validation passes
    const coupon = await Coupon.create({
        code,
        discountType,
        discountValue,
        expirationDate,
        usageLimit 
    });

    res.status(201).json({
        success: true,
        coupon
    });
});


export const checkCoupon = catchAsyncErrors(async (req, res, next) => {
    const { code } = req.body;
    const userId = req.user._id;  

    const coupon = await Coupon.findOne({
        code: code,
        expirationDate: { $gte: new Date() },
        $expr: { $lt: ["$usedCount", "$usageLimit"] }, 
        usedBy: { $ne: userId }  
    });

    if (!coupon) {
        return res.status(400).json({
            success: false,
            message: "Coupon is invalid."
        });
    }

    res.status(200).json({
        success: true,
        message: "Coupon is valid.",
        coupon
    });
});

export const applyCoupon = catchAsyncErrors(async (req, res, next) => {
    const { code } = req.body;
    const userId = req.user._id;  

    const coupon = await Coupon.findOneAndUpdate(
        {
            code: code,
            expirationDate: { $gte: new Date() },
            $expr: { $lt: ["$usedCount", "$usageLimit"] }, 
            usedBy: { $ne: userId }  
        },
        {
            $inc: { usedCount: 1, usageLimit: -1 }, // Decrement usageLimit by 1
            $push: { usedBy: userId } 
        },
        { new: true }
    );

    if (!coupon) {
        return res.status(400).json({
            success: false,
            message: "Coupon is invalid."
        });
    }

    res.status(200).json({
        success: true,
        message: "Coupon applied successfully!",
        coupon
    });
});



export const editCoupon = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;
    const { code, discountType, discountValue, expirationDate, usageLimit } = req.body;

    const updatedCoupon = await Coupon.findByIdAndUpdate(
        id,
        {
            code,
            discountType,
            discountValue,
            expirationDate,
            usageLimit
        },
        { new: true, runValidators: true }
    );

    if (!updatedCoupon) {
        return res.status(404).json({
            success: false,
            message: "Coupon not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Coupon updated successfully!",
        coupon: updatedCoupon
    });
});

export const deleteCoupon = catchAsyncErrors(async (req, res, next) => {
    const { id } = req.params;

    const coupon = await Coupon.findByIdAndDelete(id);

    if (!coupon) {
        return res.status(404).json({
            success: false,
            message: "Coupon not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Coupon deleted successfully!"
    });
});

export const getAllCoupons = catchAsyncErrors(async (req, res, next) => {
    const coupons = await Coupon.find();

    if (!coupons || coupons.length === 0) {
        return res.status(404).json({
            success: false,
            message: "No coupons found"
        });
    }

    res.status(200).json({
        success: true,
        coupons
    });
});
