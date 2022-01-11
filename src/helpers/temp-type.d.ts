export interface Style {
  name: string;
  theme: string;
  order: number;
  code: string;
  price: number;
}
export interface UserSimulation {
  type: string;
  design: string;
  customerName: string;
  totalPrice: number;
  status: boolean;
  detail?: Detail[];
}

export interface Detail {
  material: string;
  price: number;
}
