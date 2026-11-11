export interface Tour {
  id: string;
  name: string;
  city: string;
  days: number;
  price: number;
  seats: number;
  departure: string; // YYYY-MM-DD
  image: string;
  isFavorite: boolean;
}

export interface CitySection {
  title: string;
  data: Tour[];
}


export const formatDate = (dateStr: string): string => {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const [year, month, day] = parts;
  return `${day}/${month}/${year}`;
};

// Nhãn số chỗ
export const getSeatLabel = (seats: number): string => {
  if (seats === 0) return 'Hết chỗ';
  if (seats >= 1 && seats <= 3) return `Chỉ còn ${seats} chỗ`;
  return `Còn ${seats} chỗ`;
};


export const groupByCity = (tours: Tour[]): CitySection[] => {
  const map: { [city: string]: Tour[] } = {};

  tours.forEach((tour) => {
    if (!map[tour.city]) {
      map[tour.city] = [];
    }
    map[tour.city].push(tour);
  });

  const sortedCities = Object.keys(map).sort((a, b) => a.localeCompare(b));

  return sortedCities.map((city) => {
    const groupTours = map[city].sort((a, b) => a.departure.localeCompare(b.departure));
    return {
      title: `${city} · ${groupTours.length} tour`,
      data: groupTours,
    };
  });
};