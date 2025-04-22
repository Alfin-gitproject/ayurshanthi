import express from 'express';
import { authorizeRoles, isAuthenticateUser } from '../middlewares/auth.js';
import { allOrders, deleteOrder, getOrderDetails, myOrders, newOrder, updateOrder } from '../controllers/orderControllers.js';
import { applyCoupon, checkCoupon, deleteCoupon, editCoupon, getAllCoupons, newCoupon } from '../controllers/couponController.js';

const router = express.Router();

router.route('/order/new').post(isAuthenticateUser,newOrder);
router.route('/order/:id').get(isAuthenticateUser,getOrderDetails);
router.route('/me/orders').get(isAuthenticateUser,myOrders);
router.route('/admin/orders').get(isAuthenticateUser,authorizeRoles("admin"),allOrders);
router.route('/admin/orders/:id').put(isAuthenticateUser,authorizeRoles("admin"),updateOrder);
router.route('/admin/orders/:id').delete(isAuthenticateUser,authorizeRoles("admin"),deleteOrder);
router.route('/admin/coupons').get(isAuthenticateUser,authorizeRoles("admin"),getAllCoupons);
router.route('/admin/coupon/new').post(isAuthenticateUser,authorizeRoles("admin"),newCoupon);
router.route('/coupon/check').post(isAuthenticateUser, checkCoupon);
router.route('/coupon/apply').post(isAuthenticateUser, applyCoupon);
router.route('/admin/coupon/update/:id').put(isAuthenticateUser,authorizeRoles("admin"),editCoupon);
router.route('/admin/coupon/delete/:id').delete(isAuthenticateUser,authorizeRoles("admin"),deleteCoupon);
export default router