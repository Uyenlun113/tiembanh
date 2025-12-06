import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Banner from '@/models/Banner';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const position = searchParams.get('position');
    const all = searchParams.get('all'); // Thêm param để lấy tất cả (cho admin)
    
    let query: any = {};
    
    // Nếu có param 'all' hoặc position được set (kể cả rỗng), lấy tất cả banners
    // Nếu không, chỉ lấy active banners
    if (!all && position === null) {
      query.isActive = true;
    }
    
    if (position && position !== '') {
      query.position = position;
    }
    
    const banners = await Banner.find(query).sort({ order: 1, createdAt: -1 });
    return NextResponse.json({ success: true, data: banners });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const banner = await Banner.create(body);
    return NextResponse.json({ success: true, data: banner }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

