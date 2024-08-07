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
    type: Number,

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

//Creating Endpoint for registering the user
app.post('/signup',async (req,res)=>{

  let check = await Users.findOne({email:req.body.email});
  if (check) {
    return res.status(400).json({success:false,errors:"Usuario encontrado con el mismo email"});
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i]=0;
  }
  const user = new Users({
    name:req.body.username,
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

  const token = jwt.sign(data, 'secret_ecom');
  res.json({success:true,token})

})

//Creando endPoint para el registro del usuario

app.post('/login', async (req,res) =>{
  let user = await Users.findOne({email:req.body.email});
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare){
      const data = {
        user:{
          id:user.id
        }
      }
      const token = jwt.sign(data, 'secret_ecom');
      res.json({success:true, token})
    }
    else{
      res.json({success:false, errors:"Contraseña equivocada"})
    }
  }
  else{
    res.json({success:false, errors:"Email equivocado"});
  }
})

// API para obtener los productos mostrados en la pagina de inicio

app.get("/newcollections", async (req, res) => {
  let products = await Product.find({});
  let newcollection = products.slice(1).slice(-8);
  console.log("Nueva colección obtenida");
  res.send(newcollection);
})

// Creando endpoint para Popular

app.get("/popularinlenceria", async (req, res) => {
  let products = await Product.find({category:"lenceria"});
  let popular_in_lenceria = products.slice(0,4);
  console.log("Popular en lenceria");
  res.send(popular_in_lenceria);
  }
  )

    // Creando software intermedio para hacer fetch al usuario

  const fetchUser = async (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
      res.status(401).send({errors:"Porfavor autentique usando un token valido"})

    }else{
      try{
        const data = jwt.verify(token,'secret_ecom');
        req.user = data.user;
        next();
      }catch (error) {
        res.status(401).send({errors:"Porfavor autentique usando un token valido"});
      }
    }
  }

  // Creando Endpoint para agregar productor en cartData

  app.post('/addtocart', fetchUser, async (req,res) => {
    console.log("added", req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] +=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added");
  })

// Creando endpoint para eliminar productos del cartData
  app.post('/removefromcart', fetchUser, async (req, res) =>{
    console.log("removed", req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("removed");
  })

  // Creando endpoint para obtener informacion de cartData (Persistencia del carrito)

  app.post('/getcart', fetchUser, async (req, res) => {
    console.log("Get Cart")
    let userData = await Users.findOne({_id:req. user.id});
    res.json(userData.cartData);
  })
