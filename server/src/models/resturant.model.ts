import mongoose, { Model, Document } from "mongoose";

export interface IResturant {
  user: mongoose.Schema.Types.ObjectId;
  resturantName: string;
  city: string;
  country: string;
  deliveryTime: number;
  cuisines: string[];
  imageUrl: string;
  menus: mongoose.Schema.Types.ObjectId[]; // array of objedtId for all the menus of a resturant
}

export interface IResturantDocument extends IResturant, Document {
  createdAt: Date;
  updatedAt: Date;
}

const resturantSchema = new mongoose.Schema<IResturantDocument>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    resturantName: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    deliveryTime: {
      type: Number,
      required: true,
    },
    cuisines: [{ type: String, required: true }],
    menus: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menu" }],
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Resturant: Model<IResturantDocument> =
  mongoose.model<IResturantDocument>("Resturant", resturantSchema);
