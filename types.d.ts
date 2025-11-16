declare module '@/types' {
  export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    bio?: string;
    createdAt: string;
  }

  export interface UserWithPassword extends User {
    password: string;
  }

  export interface AuthUser extends User {
    token?: string;
  }

  export interface Post {
    id: string;
    title: string;
    content: string;
    excerpt?: string;
    coverImage?: string;
    authorId: string;
    author?: User;
    published: boolean;
    createdAt: string;
    updatedAt: string;
  }

  export interface LoginCredentials {
    email: string;
    password: string;
  }

  export interface SignupCredentials extends LoginCredentials {
    name: string;
  }
}