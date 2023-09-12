export interface TypeFood {
  id: number;
  category: string;
  description: string;
  image: string;
  name: string;
  topic: string[];
  intro: string;
  what: string;
  how: [
    {
      name: string;
      use: string;
    }
  ];
  rating:number
}
