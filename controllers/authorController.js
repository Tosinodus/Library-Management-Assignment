import Author from "../models/Author.js";

export const createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);

    if (!author) {
      return res.status(404).json({
        message: "Author not found",
      });
    }

    res.json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    await Author.findByIdAndDelete(req.params.id);

    res.json({
      message: "Author deleted",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};