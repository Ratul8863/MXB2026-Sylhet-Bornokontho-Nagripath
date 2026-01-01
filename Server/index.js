const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const multer = require("multer");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
// app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve audio


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.4o53jzz.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

 const db = client.db("BornoKonthoDB");
 const lettersCollection = db.collection("letters");
 const usersCollection = db.collection("users");

 // Multer setup for file uploads 
//  const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, path.join(__dirname, "uploads")),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });

// const upload = multer({
//   storage,
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype.startsWith("audio/")) cb(null, true);
//     else cb(new Error("Only audio files allowed"));
//   },
// });

// Routes

// Home
app.get("/", (req, res) => {
  res.send("Server is running successfully 🚀");
});

// Add new letter
// app.post("/letters", upload.single("audioFile"), async (req, res) => {
//   try {
//     const letterData = {
//       bangla: req.body.bangla,
//       syloti: req.body.syloti,
//       pronunciation: req.body.pronunciation,
//       meaning: req.body.meaning,
//       category: req.body.category,
//       audioFile: req.file ? `/uploads/${req.file.filename}` : null,
//       createdAt: new Date(),
//     };
//     const result = await lettersCollection.insertOne(letterData);
//     res.status(201).json(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to add letter" });
//   }
// });


// app.post("/letters", async (req, res) => {
//   try {
//     const letterData = {
//       bangla: req.body.bangla,
//       syloti: req.body.syloti,
//       pronunciation: req.body.pronunciation,
//       meaning: req.body.meaning,
//       category: req.body.category,
//       level: req.body.level,
//       banglaexample: req.body.banglaexample,
//       sylotiexample: req.body.sylotiexample,

//       // 🎧 Separate audio links
//       banglaAudioUrl: req.body.banglaAudioUrl,
//       sylotiAudioUrl: req.body.sylotiAudioUrl,

//       createdAt: new Date(),
//     };
// console.log(letterData);
//     const result = await lettersCollection.insertOne(letterData);

//     res.status(201).json({
//       success: true,
//       message: "Letter added successfully",
//       insertedId: result.insertedId,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       success: false,
//       error: "Failed to add letter",
//     });
//   }
// });


app.post("/letters", async (req, res) => {
  try {
    const letterData = {
      bangla: req.body.bangla,
      syloti: req.body.syloti,
      pronunciation: req.body.pronunciation,
      meaning: req.body.meaning,
      category: req.body.category,
      level: req.body.level,
      banglaexample: req.body.banglaexample,
      sylotiexample: req.body.sylotiexample,
      banglaAudioUrl: req.body.banglaAudioUrl,
      sylotiAudioUrl: req.body.sylotiAudioUrl,
      createdAt: new Date(),
    };
    const result = await lettersCollection.insertOne(letterData);
    res.status(201).json({ success: true, insertedId: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to add letter" });
  }
});

app.put("/letters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = {
      bangla: req.body.bangla,
      syloti: req.body.syloti,
      pronunciation: req.body.pronunciation,
      meaning: req.body.meaning,
      category: req.body.category,
      level: req.body.level,
      banglaexample: req.body.banglaexample,
      sylotiexample: req.body.sylotiexample,
      banglaAudioUrl: req.body.banglaAudioUrl,
      sylotiAudioUrl: req.body.sylotiAudioUrl,
      updatedAt: new Date(),
    };
    const result = await lettersCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData }
    );
    res.json({ success: true, modifiedCount: result.modifiedCount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to update letter" });
  }
});

app.delete("/letters/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await lettersCollection.deleteOne({ _id: new ObjectId(id) });
    res.json({ success: true, deletedCount: result.deletedCount });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Failed to delete letter" });
  }
});






// add User to db
app.post('/users',async(req,res) => {
  const user = req.body;
  const result = await usersCollection.insertOne(user);
  res.send(result);
})

app.get('/users/:email',async(req,res) => {
  const email = req.params.email;
  const query = {email: email};
  const result = await usersCollection.findOne(query);
  res.send(result);
})



app.post("lete", async(req,res) => {
  const newdata = req.body;
  console.log(newdata);
  const result = await lettersCollection.insertOne(newdata);
  res.send(result);
})

app.get("/lete", async(req,res) => {
  // const cursor = lettersCollection.find();
  // const result = await cursor.toArray();

  const result = await lettersCollection.find({}).toArray();
  res.send(result);
});

app.delete("/lete/:id", async(req,res) => {
  const id = req.params.id;
  const query = {_id: new ObjectId(id)};
  const result = await lettersCollection.deleteOne(query);  
  res.send(result);
});






app.patch('/users', async (req,res)=>{
  const {email,lastSignInTime} = req.body;
  console.log(email,lastSignInTime);
  const filter = {email: email};
  const updateDoc = {
    $set: {
      lastSignInTime: lastSignInTime
    },
  };
  const result = await usersCollection.updateOne(filter, updateDoc);
  res.send(result);
})

// Get all letters
app.get("/letters", async (req, res) => {
  try {
    const letters = await lettersCollection.find({}).toArray();
    res.json(letters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch letters" });
  }
});

app.get("/letters/home", async (req, res) => {
  try {
    const limit = Number(req.query.limit) || 5;

    const letters = await lettersCollection
      .find({})
      .project({ syloti: 1 }) // only needed field
      .limit(limit)
      .toArray();

    res.json(letters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch home letters" });
  }
});


// Delete letter
// app.delete("/letters/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const result = await lettersCollection.deleteOne({ _id: new ObjectId(id) });
//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to delete letter" });
//   }
// });

// Update letter (optional)
// Update letter (audio only)
// app.put("/letters/:id", upload.single("audioFile"), async (req, res) => {
//   try {
//     const id = req.params.id;

//     const updateData = {};

//     // Only update audio
//     if (req.file) {
//       updateData.audioFile = `/uploads/${req.file.filename}`;
//     }

//     const result = await lettersCollection.updateOne(
//       { _id: new ObjectId(id) },
//       { $set: updateData }
//     );

//     res.json(result);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to update audio" });
//   }
// });

// app.put("/letters/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const updatedData = {
//       bangla: req.body.bangla,
//       syloti: req.body.syloti,
//       meaning: req.body.meaning,
//       category: req.body.category,
//       banglaexample: req.body.banglaexample,
//       sylotiexample: req.body.sylotiexample,
//       banglaAudioUrl: req.body.banglaAudioUrl,
//       sylotiAudioUrl: req.body.sylotiAudioUrl,
//       updatedAt: new Date(),
//     };

//     const result = await lettersCollection.updateOne(
//       { _id: new ObjectId(id) },
//       { $set: updatedData }
//     );

//     res.json({
//       success: true,
//       modifiedCount: result.modifiedCount,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to update letter",
//     });
//   }
// });




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);







app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
