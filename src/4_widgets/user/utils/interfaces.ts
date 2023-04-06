export interface UserUpdateData {
  name: string;
  email: string;
  role: string;
  passwordRole?: string | null;
  image?: File;
}
