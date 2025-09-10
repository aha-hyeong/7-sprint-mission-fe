export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  tags: string[];
  ownerId: string;
  favoriteCount?: number;
  isFavorite?: boolean;
  createdAt: string;
  updatedAt: string;
}
