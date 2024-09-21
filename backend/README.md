```
backend/
  ├── models/
  │   ├── Product.js
  │   ├── Category.js
  │   ├── Coupon.js
  │   └── Offer.js
  ├── controllers/
  │   ├── productController.js
  │   ├── categoryController.js
  │   ├── couponController.js
  │   └── offerController.js
  ├── routes/
  │   ├── productRoutes.js
  │   ├── categoryRoutes.js
  │   ├── couponRoutes.js
  │   └── offerRoutes.js
  ├── app.js
  └── server.js
```

Products:

- POST `/api/products` (Create a product)
- GET `/api/products` (Get all products)
- GET `/api/products/:id` (Get a specific product)
- PUT `/api/products/:id` (Update a product)
- DELETE `/api/products/:id` (Delete a product)


Categories:

- POST `/api/categories` (Create a category)
- GET `/api/categories` (Get all categories)
- DELETE `/api/categories/:id` (Delete a category)


Coupons:

- POST `/api/coupons` (Create a coupon)
- GET `/api/coupons` (Get all coupons)
- GET `/api/coupons/:id` (Get a specific coupon)
- PUT `/api/coupons/:id` (Update a coupon)
- DELETE `/api/coupons/:id` (Delete a coupon)

Offers:

- POST `/api/offers` (Create an offer)
- GET `/api/offers` (Get all offers)
- GET `/api/offers/:id` (Get a specific offer)
- PUT `/api/offers/:id` (Update an offer)
- DELETE `/api/offers/:id` (Delete an offer)

User Management:

- POST `/api/users/register` (Register a new user)
- POST `/api/users/login` (User login)
- GET `/api/users/profile` (Get user profile)
- PUT `/api/users/profile` (Update user profile)
- POST `/api/users/address` (Add a new address)
- DELETE `/api/users/address/:addressId` (Delete an address)
- GET `/api/users/orders` (Get user's order history)


Admin User Management:

- PUT `/api/users/change-role` (Change user role)
- POST `/api/users/add-user` (Add a new user)
- GET `/api/users/list` (List all users)
- POST `/api/users/create-delivery-boy` (Create a new delivery boy)

Delivery boy:

- POST `/api/delivery/login` (Delivery boy login)
- GET `/api/delivery/packed-orders` (Get all packed orders)
- POST `/api/delivery/accept-order/:orderId` (Accept an order)
- GET `/api/delivery/accepted-orders` (Get all accepted orders)
- PUT `/api/delivery/update-order-status/:orderId` (Update order status to delivered)

Order Management:

- POST `/api/orders` (Create a new order)
- GET `/api/orders` (Get all orders - admin only)
- GET `/api/orders/:id` (Get a specific order)
- PUT `/api/orders/:id/status` (Update order status)
- PUT `/api/orders/:id/assign-delivery` (Assign a delivery boy to an order)



