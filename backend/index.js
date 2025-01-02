const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const propertyRoutes = require('./routes/propertyRoutes');
const contactRoutes = require('./routes/contactRoutes');
const { default: mongoose } = require('mongoose');

const app = express();

// main().then(()=>{
//     console.log("DB connected");
// })

// async function main(){
//     await mongoose.connect("mongodb://localhost:27017/truenest");
// }

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Serve static files from assets/images folder
// app.use('/images', express.static(path.join(__dirname, 'assets', 'images')));

const uri = "mongodb://localhost:27017/truenest";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('MongoDB connected');
})
.catch((err) => {
    console.error('MongoDB connection error', err);
});

app.get('/', (req, res) => {
    res.json("Success");
});

// app.post("/api/contacts",async (req,res)=>{
//     try {
//         const { name, email, message } = req.body;
    
//         console.log("got requets body " , req.body)
//         // Create a new contact document
//         const newContact = new Contact({
//           name,
//           email,
//           message
//         });
    
//         // Save the document in the database
//         await newContact.save();
    
//         res.status(201).json({ message: 'Contact form submitted successfully', contact: newContact });
//       } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//       }
// })

// Routes
app.use('/api/properties', propertyRoutes);
app.use('/api/contacts', contactRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
