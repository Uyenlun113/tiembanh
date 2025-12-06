import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Banner from '@/models/Banner';
import mongoose from 'mongoose';

export const dynamic = 'force-dynamic';

// Helper để validate ObjectId
function isValidObjectId(id: string): boolean {
  return mongoose.Types.ObjectId.isValid(id);
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    await connectDB();
    const { id } = await Promise.resolve(params);
    
    // Validate ObjectId format
    if (!isValidObjectId(id)) {
      return NextResponse.json(
        { success: false, error: `Invalid banner ID format: ${id}` },
        { status: 400 }
      );
    }

    const banner = await Banner.findById(id);
    if (!banner) {
      return NextResponse.json(
        { success: false, error: `Banner not found with ID: ${id}` },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: banner });
  } catch (error: any) {
    console.error('GET banner error:', error);
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
    
    // Validate ObjectId format
    if (!isValidObjectId(id)) {
      return NextResponse.json(
        { success: false, error: `Invalid banner ID format: ${id}` },
        { status: 400 }
      );
    }

    const body = await request.json();
    console.log('PUT banner request:', { id, bodyKeys: Object.keys(body) });

    // Kiểm tra banner có tồn tại không trước khi update
    const existingBanner = await Banner.findById(id);
    console.log('Existing banner check:', { 
      found: !!existingBanner, 
      id,
      bannerId: existingBanner?._id?.toString() 
    });

    if (!existingBanner) {
      // List tất cả banners để debug
      const allBanners = await Banner.find({}).select('_id title').limit(10);
      console.log('All banners in DB:', allBanners.map(b => ({ id: b._id.toString(), title: b.title })));
      
      return NextResponse.json(
        { 
          success: false, 
          error: `Banner not found with ID: ${id}`,
          debug: { 
            id, 
            isValid: isValidObjectId(id),
            totalBanners: await Banner.countDocuments(),
            sampleIds: allBanners.map(b => b._id.toString())
          }
        },
        { status: 404 }
      );
    }

    // Update banner
    const banner = await Banner.findByIdAndUpdate(
      id, 
      body, 
      { new: true, runValidators: true }
    );
    
    if (!banner) {
      return NextResponse.json(
        { 
          success: false, 
          error: `Failed to update banner with ID: ${id}`,
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ success: true, data: banner });
  } catch (error: any) {
    console.error('PUT banner error:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { success: false, error: 'Validation error', details: error.errors },
        { status: 400 }
      );
    }
    
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
    const banner = await Banner.findByIdAndDelete(id);
    if (!banner) {
      return NextResponse.json({ success: false, error: 'Banner not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: {} });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

