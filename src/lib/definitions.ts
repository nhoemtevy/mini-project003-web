export type productType = {
  id?: number;
  name: string;
  price: number;
  category: string;
  desc: string;
  image: string ;
  seller?: string;
};

export type CartProductType = {
  name: string;
  image: string;
  price: number;
  id: number;
  seller: string;
  onClick?: () => void;
};
