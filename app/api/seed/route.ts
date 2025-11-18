import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Category from '@/models/Category';
import Product from '@/models/Product';
import Banner from '@/models/Banner';

export async function GET() {
  try {
    await connectDB();

    // Clear existing data
    await Category.deleteMany({});
    await Product.deleteMany({});
    await Banner.deleteMany({});

    // Seed Categories
    const categories = await Category.insertMany([
      {
        name: 'Bánh Sinh Nhật',
        slug: 'banh-sinh-nhat',
        description: 'Bánh sinh nhật đẹp mắt và ngon miệng',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800',
        isActive: true,
      },
      {
        name: 'Bánh Cupcake',
        slug: 'banh-cupcake',
        description: 'Cupcake thơm ngon với nhiều hương vị',
        image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800',
        isActive: true,
      },
      {
        name: 'Bánh Kem',
        slug: 'banh-kem',
        description: 'Bánh kem mềm mịn, ngọt ngào',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800',
        isActive: true,
      },
      {
        name: 'Bánh Quy',
        slug: 'banh-quy',
        description: 'Bánh quy giòn tan, đa dạng hương vị',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800',
        isActive: true,
      },
      {
        name: 'Cà Phê Lạnh',
        slug: 'cold-coffee',
        description: 'Cà phê lạnh mát lạnh, thơm ngon',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800',
        isActive: true,
      },
      {
        name: 'Kem',
        slug: 'ice-cream',
        description: 'Kem tươi mát, nhiều hương vị',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800',
        isActive: true,
      },
      {
        name: 'Ốc Quế',
        slug: 'cone',
        description: 'Kem ốc quế thơm ngon',
        image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800',
        isActive: true,
      },
      {
        name: 'Sữa Lắc',
        slug: 'milkshake',
        description: 'Sữa lắc mát lạnh, béo ngậy',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800',
        isActive: true,
      },
      {
        name: 'Bánh Tart',
        slug: 'tart',
        description: 'Bánh tart với nhiều loại nhân',
        image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800',
        isActive: true,
      },
      {
        name: 'Bánh Donut',
        slug: 'donut',
        description: 'Donut ngọt ngào, nhiều màu sắc',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800',
        isActive: true,
      },
      {
        name: 'Bánh Macaron',
        slug: 'macaron',
        description: 'Macaron Pháp tinh tế',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800',
        isActive: true,
      },
      {
        name: 'Bánh Tiramisu',
        slug: 'tiramisu',
        description: 'Tiramisu Ý đậm đà',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800',
        isActive: true,
      },
    ]);

    // Seed Products
    const products = await Product.insertMany([
      {
        name: 'Bánh Sinh Nhật Dâu Tây',
        slug: 'banh-sinh-nhat-dau-tay',
        description: 'Bánh sinh nhật với kem tươi và dâu tây tươi ngon, được trang trí đẹp mắt',
        price: 299000,
        originalPrice: 350000,
        images: [
          'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800',
          'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800',
        ],
        category: categories[0]._id,
        stock: 50,
        isActive: true,
        isFeatured: true,
        rating: 4.8,
        reviews: 120,
      },
      {
        name: 'Cupcake Chocolate',
        slug: 'cupcake-chocolate',
        description: 'Cupcake chocolate đậm đà với kem phủ ngọt ngào',
        price: 45000,
        images: [
          'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800',
          'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800',
        ],
        category: categories[1]._id,
        stock: 100,
        isActive: true,
        isFeatured: true,
        rating: 4.6,
        reviews: 89,
      },
      {
        name: 'Bánh Kem Vanilla',
        slug: 'banh-kem-vanilla',
        description: 'Bánh kem vanilla mềm mịn, thơm ngon',
        price: 250000,
        originalPrice: 300000,
        images: [
          'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800',
        ],
        category: categories[2]._id,
        stock: 30,
        isActive: true,
        isFeatured: true,
        rating: 4.7,
        reviews: 156,
      },
      {
        name: 'Bánh Quy Socola Chip',
        slug: 'banh-quy-socola-chip',
        description: 'Bánh quy giòn với socola chip đậm đà',
        price: 80000,
        images: [
          'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800',
        ],
        category: categories[3]._id,
        stock: 200,
        isActive: true,
        isFeatured: false,
        rating: 4.5,
        reviews: 234,
      },
      {
        name: 'Cà Phê Đá Xay',
        slug: 'ca-phe-da-xay',
        description: 'Cà phê đá xay mát lạnh, thơm ngon',
        price: 55000,
        images: [
          'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800',
        ],
        category: categories[4]._id,
        stock: 150,
        isActive: true,
        isFeatured: true,
        rating: 4.9,
        reviews: 312,
      },
      {
        name: 'Kem Dâu Tây',
        slug: 'kem-dau-tay',
        description: 'Kem dâu tây tươi mát, ngọt ngào',
        price: 35000,
        originalPrice: 40000,
        images: [
          'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800',
        ],
        category: categories[5]._id,
        stock: 180,
        isActive: true,
        isFeatured: true,
        rating: 4.8,
        reviews: 278,
      },
      {
        name: 'Kem Ốc Quế Vanilla',
        slug: 'kem-oc-que-vanilla',
        description: 'Kem ốc quế vanilla truyền thống',
        price: 30000,
        images: [
          'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800',
        ],
        category: categories[6]._id,
        stock: 250,
        isActive: true,
        isFeatured: false,
        rating: 4.6,
        reviews: 189,
      },
      {
        name: 'Sữa Lắc Dâu Tây',
        slug: 'sua-lac-dau-tay',
        description: 'Sữa lắc dâu tây béo ngậy, mát lạnh',
        price: 60000,
        images: [
          'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800',
        ],
        category: categories[7]._id,
        stock: 120,
        isActive: true,
        isFeatured: true,
        rating: 4.7,
        reviews: 145,
      },
      {
        name: 'Bánh Tart Mâm Xôi',
        slug: 'banh-tart-mam-xoi',
        description: 'Bánh tart với mâm xôi tươi ngon',
        price: 120000,
        images: [
          'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800',
        ],
        category: categories[8]._id,
        stock: 40,
        isActive: true,
        isFeatured: false,
        rating: 4.6,
        reviews: 67,
      },
      {
        name: 'Donut Socola',
        slug: 'donut-socola',
        description: 'Donut với lớp socola phủ ngọt ngào',
        price: 35000,
        images: [
          'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800',
        ],
        category: categories[9]._id,
        stock: 150,
        isActive: true,
        isFeatured: false,
        rating: 4.5,
        reviews: 198,
      },
      {
        name: 'Macaron Hỗn Hợp',
        slug: 'macaron-hon-hop',
        description: 'Hộp macaron với nhiều hương vị khác nhau',
        price: 180000,
        originalPrice: 220000,
        images: [
          'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800',
        ],
        category: categories[10]._id,
        stock: 60,
        isActive: true,
        isFeatured: true,
        rating: 4.9,
        reviews: 89,
      },
      {
        name: 'Tiramisu Classic',
        slug: 'tiramisu-classic',
        description: 'Tiramisu Ý cổ điển, đậm đà hương vị',
        price: 150000,
        images: [
          'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800',
        ],
        category: categories[11]._id,
        stock: 35,
        isActive: true,
        isFeatured: true,
        rating: 5.0,
        reviews: 156,
      },
    ]);

    // Seed Banners
    await Banner.insertMany([
      {
        title: 'AP CAKE SHOP',
        subtitle: 'Walnut Honey Ice Cream',
        description: 'Chào mừng đến với Ap Cake Shop, nơi mỗi chiếc bánh là một hành trình thú vị đầy hương vị.',
        image: 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=1200',
        link: '/products',
        position: 'hero',
        isActive: true,
        order: 1,
      },
      {
        title: 'Ưu Đãi Đặc Biệt',
        subtitle: 'Giảm 20% cho đơn hàng đầu tiên',
        description: 'Đăng ký ngay để nhận ưu đãi đặc biệt',
        image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800',
        link: '/products',
        position: 'promotion',
        isActive: true,
        order: 1,
      },
    ]);

    return NextResponse.json({
      success: true,
      message: 'Seed data created successfully',
      data: {
        categories: categories.length,
        products: products.length,
        banners: 2,
      },
    });
  } catch (error: any) {
    console.error('Seed error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

