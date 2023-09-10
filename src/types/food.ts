export interface TypeFood {
  id: number;
  category: string;
  description: string;
  image: string;
  name: string;
  topic: [];
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
