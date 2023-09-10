export type TClass = {
      name: string;
      description: string;
      price: number;
}

export type Module = {
      moduleTitle: string;
      lessons: Lesson[];
}

export type Lesson = {
      lessonTitle: string;
      topics: string[];
}