export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issuedDate: string;
  badgeImageUrl: string;
  verificationUrl: string;
  skills: string[];
}
