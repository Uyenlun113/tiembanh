import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Promotion from '@/models/Promotion';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    await connectDB();
    const { id } = await Promise.resolve(params);
    const promotion = await Promotion.findById(id)
      .populate('products')
      .populate('categories');
    if (!promotion) {
      return NextResponse.json({ success: false, error: 'Promotion not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: promotion });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    await connectDB();
    const { id } = await Promise.resolve(params);
    const body = await request.json();
    const promotion = await Promotion.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!promotion) {
      return NextResponse.json({ success: false, error: 'Promotion not found' }, { status: 404 });
    }
    await promotion.populate('products');
    await promotion.populate('categories');
    return NextResponse.json({ success: true, data: promotion });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    await connectDB();
    const { id } = await Promise.resolve(params);
    const promotion = await Promotion.findByIdAndDelete(id);
    if (!promotion) {
      return NextResponse.json({ success: false, error: 'Promotion not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

