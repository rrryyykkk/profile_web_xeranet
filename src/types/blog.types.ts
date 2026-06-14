export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  color: string; // accent color per post (hex or css class)
  bg: string; // background thumbnail gradient or image
  tag?: string; // optional badge (e.g. "Trending", "Popular")
  content: ContentBlock[];
}

export type ContentBlock =
  | { type: "intro"; text: string }
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };
