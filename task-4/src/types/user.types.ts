@"
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
}

export interface SafeUser {
  id: number;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
}
"@ | Set-Content src\types\user.types.ts -Encoding UTF8