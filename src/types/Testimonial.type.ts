type Person = {
  name: string;
  handle?: string;
  imageUrl?: string;
};

export type Testimonial = {
  body: string;
  person: Person;
};
