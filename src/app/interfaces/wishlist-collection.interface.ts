import { WishlistItem } from "./wishlist-item.interface";

export interface WishlistCollection {
  id: string;
  name: string;
  items: WishlistItem[];
  createdDate: Date;
  lastModified: Date;
}