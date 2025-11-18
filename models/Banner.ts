import mongoose, { Schema, Document } from 'mongoose';

export interface IBanner extends Document {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  link?: string;
  position: 'hero' | 'sidebar' | 'footer' | 'promotion';
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const BannerSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    position: {
      type: String,
      enum: ['hero', 'sidebar', 'footer', 'promotion'],
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Banner || mongoose.model<IBanner>('Banner', BannerSchema);

