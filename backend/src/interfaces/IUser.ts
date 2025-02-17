export interface IUser {
  id: number;
  googleId: string;
  email: string;
  displayName: string;
  role: 'renter' | 'host';
  createdAt: Date | null;
}