const express = require("express");
const router = express.Router();
const postSchema = require("../model/postSchema");

router.post("/posts", async (req, res) => {
  const { title, content } = req.body;

  // await postSchema.deleteMany();

  try {
    const data = new postSchema({
      title: title,
      content: content,
    });

    const saveData = await data.save();
    res.status(201).json(saveData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/posts/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await postSchema.findByIdAndDelete(id);
    res.status(200).json({ message: `your post ${id}has been deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/posts", async (req, res) => {
  try {
    const data = await postSchema.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/posts/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await postSchema.findByIdAndUpdate(id, updatedData, options);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
