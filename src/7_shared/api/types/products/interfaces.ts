export interface SmartphoneData {
  id: string;
  model: string;
  display: string;
  price: string;
  year: string;
  cpu: string;
  frequency: string;
  memory: string;
  nfc: boolean;
  brand: BrandData;
  images: ImageData[];
}

export interface BrandData {
  id: string;
  brand: string;
}

export interface ImageData {
  id: string;
  name: string;
}

export interface BrandData {
  id: string;
  brand: string;
}
