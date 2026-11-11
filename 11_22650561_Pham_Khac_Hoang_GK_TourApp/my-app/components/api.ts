import { Tour } from '../utils/tour';

// Dữ liệu API chuẩn chỉnh đáp ứng đầy đủ yêu cầu đề bài
export const mockToursData: Tour[] = [
  {
    id: "1",
    name: "Đà Lạt mộng mơ ",
    city: "Đà Lạt",
    days: 3,
    price: 3590000,
    seats: 2,
    departure: "2026-11-05",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=500&auto=format&fit=crop",
    isFavorite: true
  },
  {
    id: "2",
    name: "Khám phá thành phố ngàn hoa Đà Lạt",
    city: "Đà Lạt",
    days: 2,
    price: 2490000,
    seats: 0,
    departure: "2026-11-12",
    image: "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=500&auto=format&fit=crop",
    isFavorite: false
  },
  {
    id: "3",
    name: "Hành trình di sản Phố cổ Hội An",
    city: "Hội An",
    days: 4,
    price: 4200000,
    seats: 3,
    departure: "2026-11-08",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=500&auto=format&fit=crop",
    isFavorite: true
  },
  {
    id: "4",
    name: "Trải nghiệm văn hóa Hội An cổ kính",
    city: "Hội An",
    days: 3,
    price: 3100000,
    seats: 0,
    departure: "2026-11-15",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=500&auto=format&fit=crop",
    isFavorite: false
  },
  {
    id: "5",
    name: "Nha Trang thiên đường biển đảo",
    city: "Nha Trang",
    days: 3,
    price: 3890000,
    seats: 5,
    departure: "2026-11-02",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=500&auto=format&fit=crop",
    isFavorite: false
  },
  {
    id: "6",
    name: "Du ngoạn vịnh biển Nha Trang xanh mát",
    city: "Nha Trang",
    days: 4,
    price: 4500000,
    seats: 2,
    departure: "2026-11-10",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=500&auto=format&fit=crop",
    isFavorite: true
  },
  {
    id: "7",
    name: "Phú Quốc - Đảo ngọc hoàng hôn tuyệt đẹp",
    city: "Phú Quốc",
    days: 4,
    price: 5990000,
    seats: 1,
    departure: "2026-11-06",
    image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=500&auto=format&fit=crop",
    isFavorite: false
  },
  {
    id: "8",
    name: "Khám phá Bắc đảo Phú Quốc hoang sơ",
    city: "Phú Quốc",
    days: 3,
    price: 4890000,
    seats: 6,
    departure: "2026-11-14",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=500&auto=format&fit=crop",
    isFavorite: false
  },
  {
    id: "9",
    name: "Check-in Vũng Tàu cuối tuần",
    city: "Vũng Tàu",
    days: 2,
    price: 1890000,
    seats: 8,
    departure: "2026-11-03",
    image: "https://images.unsplash.com/photo-1578637387939-43c525bf900f?q=80&w=500&auto=format&fit=crop",
    isFavorite: false
  },
  {
    id: "10",
    name: "Hành trình về miền biển Vũng Tàu",
    city: "Vũng Tàu",
    days: 2,
    price: 1990000,
    seats: 3,
    departure: "2026-11-11",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500&auto=format&fit=crop",
    isFavorite: false
  },
  {
    id: "11",
    name: "Sapa - Chinh phục nóc nhà Đông Dương",
    city: "Sapa",
    days: 3,
    price: 3790000,
    seats: 4,
    departure: "2026-11-04",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=500&auto=format&fit=crop",
    isFavorite: false
  },
  {
    id: "12",
    name: "Mùa lúa chín Sapa mờ sương",
    city: "Sapa",
    days: 4,
    price: 4690000,
    seats: 10,
    departure: "2026-11-13",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=500&auto=format&fit=crop",
    isFavorite: false
  }
];

// Hàm giả lập API GET (lấy danh sách tour)
export const fetchToursAPI = async (): Promise<Tour[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...mockToursData]);
    }, 500); // Giả lập độ trễ mạng nhẹ giống fetch thật
  });
};

// Hàm giả lập API PUT (cập nhật trạng thái yêu thích)
export const updateFavoriteAPI = async (id: string, isFavorite: boolean): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tour = mockToursData.find((t) => t.id === id);
      if (tour) {
        tour.isFavorite = isFavorite;
        resolve(true);
      } else {
        reject(new Error("Không tìm thấy tour"));
      }
    }, 300);
  });
};