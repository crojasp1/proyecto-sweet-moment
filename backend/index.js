const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");

app.use(express.json());
app.use(cors());

// Database Connection with MongoDB
mongoose.connect(
  "mongodb+srv://camiloRojasDev:102938@cluster0.lxxigr8.mongodb.net/ecomerce"
);

// API creation
//Conección a la API
app.get("/", (req, res) => {
  res.send("Aplicación Express esta funcionando");
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Conectado al puerto: " + port);
  } else {
    console.log("Error: " + error);
  }
});

//Image Storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

//Creando puntos de acceso para cargar las imagenes

app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// Esquema para crear productos

const Product = mongoose.model("Product", {
  id: {
    type: Number,

  },
  name: {
    type: String,
   
  },
  image: {
    type: String,

  },
  category: {
    type: String,
 
  },
  new_price: {
    type: Number,
   
  },
  old_price: {
    Nombre: String,
  
  },
  date: {
    type: Date,
    default: Date.now
  },
  avilable: {
    type: Boolean,
    default: true
  },
});

//Creando punto de acceso para agregar un solo producto
app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if(products.length>0){
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id+1;
  }
  else{
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("Saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//Creando API para eliminar productos
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({id:req.body.id});
  console.log("Removed");
  res.json({
    success:true,
    name:req.body.name
  })
})

//Creando API para obtener todos los productos
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All Products Fetched");
  res.send(products);
});

// Shema creating for User model

const Users = mongoose.model('Users',{
  name:{
    type:String,
  },
  email:{
    type:String,
    unique:true,
  },
  password:{
    type:String,
  },
  cartData:{
    type:Object,
  },
  date:{
    type:Date,
    default:Date.now,
  }
})

//Creating Edpoint for refistring the user
app.post('/singup',async (req,res)=>{

  let check = await Users.findOne({email:req.body.email});
  if (check) {
    return res.status(400).json({success:false,errors:"existing user found with same email address"})
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i]=0;
  }
  const user = new Users({
    name:req.body.uusername,
    email:req.body.email,
    password:req.body.password,
    cartData:cart,
  })

  await user.save();

  const data = {
    user:{
      id:user.id
    }
  }

  const token = jwt.sing(data, 'secret_ecom');
  res.json({success:true,token})

})
