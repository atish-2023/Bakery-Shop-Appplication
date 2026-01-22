export interface WishlistItem {
  productId: number;
  addedDate: Date;
  notes?: string;
  priority?: 'low' | 'medium' | 'high';
}