import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Promotion from '@/models/Promotion';

export async function GET() {
  try {
    await connectDB();
    const now = new Date();
    const promotions = await Promotion.find({
      isActive: true,
      startDate: { $lte: now },
      endDate: { $gte: now },
    })
      .populate('products')
      .populate('categories')
      .sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: promotions });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const promotion = await Promotion.create(body);
    await promotion.populate('products');
    await promotion.populate('categories');
    return NextResponse.json({ success: true, data: promotion }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

