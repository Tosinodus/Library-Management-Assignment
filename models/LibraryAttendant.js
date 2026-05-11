import mongoose from "mongoose";

const attendantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    staffId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const LibraryAttendant = mongoose.model(
  "LibraryAttendant",
  attendantSchema
);

export default LibraryAttendant;