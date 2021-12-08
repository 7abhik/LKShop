export interface AppUser {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  isAdmin?: boolean;
  profileImage?: string;
  userRole?: string;
}
