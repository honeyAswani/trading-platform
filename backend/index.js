require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const auth = require("./middleware/auth");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

/*
app.get("/addPositions" , async (req,res) =>{
    let tempPositions =[
  {
    product: "CNC",
    name: "EVEREADY",
    qty: 2,
    avg: 316.27,
    price: 312.35,
    net: "+0.58%",
    day: "-1.24%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "JUBLFOOD",
    qty: 1,
    avg: 3124.75,
    price: 3082.65,
    net: "+10.04%",
    day: "-1.35%",
    isLoss: true,
  },
];
    
tempPositions.forEach((item) =>{
    let newPosition = new PositionsModel({
        product: item.product,    
        name: item.name,
        qty: item.qty,
        avg: item.avg,
        price: item.price,
        net: item.day,
        day: item.day ,
        isLoss: item.isLoss,
    });

    newPosition.save();
});
res.send("Done with positions!");

});
*/

app.get('/allHoldings',auth, async(req,res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', auth,async(req,res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", auth,async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // Save the order
    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();

    let holding = await HoldingsModel.findOne({ name });

    if (mode === "BUY") {
      if (holding) {
        holding.qty += Number(qty);
        holding.price = Number(price);
        await holding.save();
      } else {
        await HoldingsModel.create({
          name,
          qty: Number(qty),
          avg: Number(price),
          price: Number(price),
          net: "0%",
          day: "0%",
        });
      }
    }

    if (mode === "SELL") {
      if (!holding) {
        return res.status(400).json({
          message: "You don't own this stock",
        });
      }

      if (holding.qty < Number(qty)) {
        return res.status(400).json({
          message: "Not enough shares to sell",
        });
      }

      holding.qty -= Number(qty);

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await holding.save();
      }
    }

    res.json({ message: "Order executed successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

app.post("/signup", async (req, res) => {

    try {

        const { fullname, email, mobile, password } = req.body;
        const user = await UserModel.findOne({ email });

        if (user) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await UserModel.create({

            fullname,

            email,

            mobile,

            password: hashedPassword

        });

        res.status(201).json({
            message: "Signup Successful"
        });

    }

    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

app.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });

        if (!user) {

            return res.status(400).json({
                message: "Invalid Email or Password"
            });

        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return res.status(400).json({
                message: "Invalid Email or Password"
            });

        }

        const token = jwt.sign(

            {
                id: user._id,
                email: user.email
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "1d"
            }

        );

        res.json({

            token,

            user: {

                id: user._id,

                fullname: user.fullname,

                email: user.email

            }

        });

    }

    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

});

app.listen(PORT, ()=>{
    console.log("App started");
    mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err);
  });
    
});