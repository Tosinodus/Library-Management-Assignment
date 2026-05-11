import LibraryAttendant from "../models/LibraryAttendant.js";

export const createAttendant = async (req, res) => {
  try {
    const attendant = await LibraryAttendant.create(req.body);

    res.status(201).json(attendant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAttendants = async (req, res) => {
  try {
    const attendants = await LibraryAttendant.find();

    res.json(attendants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};