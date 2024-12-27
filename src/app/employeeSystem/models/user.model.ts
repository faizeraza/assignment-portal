export class User {
  username: string;
  password: string;
  email?: string;
  roles?: string;

  // Multiple constructor signatures
  constructor(username: string, password: string);
  constructor(username: string, password: string, email: string, roles: string);
  
  // Single implementation
  constructor(username: string, password: string, email?: string, roles?: string) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.roles = roles;
  }
}
