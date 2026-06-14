export interface TeamMember {
  id: number;
  name: string;
  roleKey: string; // key in i18n
  initials: string; // initials for avatar fallback
  gradient: string; // CSS gradient class
  linkedin?: string;
  twitter?: string;
}
