const express= require("express");
const cors = require('cors');

//import routers
 const userRouter = require("./src/routers/User.route");
const ProductRouter = require("./src/routers/Product.route");

// Server creation or app config
const app=express();
//morgan
const logger= require("morgan");
const UserRouter = require("./src/routers/User.route");
const OrderRouter = require("./src/routers/Order.route");
const DashboardRouter = require("./src/routers/Dashboard.route");

// cors Middleware
// Allow requests from your React frontend
// Allow both common Vite ports
// Make sure this is at the VERY TOP of your file, right after initializing app


// This allows ALL domains (including your new Netlify URL)
app.use(cors()); 



//App Level middleware
app.use(logger("dev"));
app.use(express.json());// body parser for conversion

//Router Middleware 
app.use("/api/product",ProductRouter);
app.use("/api/UserAccounts",UserRouter);
app.use("/api/OrderDetails",OrderRouter);
app.use("/api/Dashboard",DashboardRouter);







//  app.listen(8000,()=>{
//      console.log("server is running on port 8000 welcome to express app....");
    
// });
module.exports=app;
//http://localhost:8000/api/product/create-product
