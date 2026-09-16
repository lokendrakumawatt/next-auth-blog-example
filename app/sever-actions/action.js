"use server"
import mongoose from "mongoose"
const schema = new mongoose.Schema({ title: String, desc: String, slug: String })
export async function blogData(slug) {
    if (mongoose.connection.readyState != 1) {
        await mongoose.connect("mongodb://localhost:27017/programing");
    }
    const a = mongoose.models.language || mongoose.model("language", schema);
    const b = await a.findOne({ slug }).lean();
    return b;
}