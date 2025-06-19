export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive', 
  PENDING = 'pending',
  SUSPENDED = 'suspended',
  BANNED = 'banned'
}

export interface User {
  id: string;
  name: string;
  email: string;
  status?: UserStatus;
}

export default User;
