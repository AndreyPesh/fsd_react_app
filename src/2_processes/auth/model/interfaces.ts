export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  photo: string;
  cart: { id: string };
}
