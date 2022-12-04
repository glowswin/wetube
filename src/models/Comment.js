import mongoose from "mongoose";
const CommentSchema = new mongoose.Schema({
  comment: { type: String, required: true, trim: true },
  createdAt: { type: Date, required: true, default: Date.now },
  ownvideo: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Movie",
  },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
