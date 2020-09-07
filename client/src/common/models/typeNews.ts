export type TypeNews = {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TypeAddNews = {
  title: string;
  content: string;
  image?: string;
};
