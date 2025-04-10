import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    address: string;
    name: string;
    avatar: string;
  }

  interface Session {
    user: User;
  }
} 