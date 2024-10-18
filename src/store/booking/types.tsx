export interface Media {
  url: string;
  type: string;
  isHero: boolean;
}

export interface Ingredient {
  name: string;
  qty: string;
  icon: string;
}

export interface DietaryTag {
  name: string;
  icon: string;
}

export interface Origin {
  name: string;
}

export interface Review {
  title: string;
  review: string;
  date: number;
  postedBy: {
    name: string;
    country: string;
    persona: string[];
  };
}

export interface Feedback {
  rating: number;
  totalRatings: number;
  topReviews: Review[];
}

export interface Nutrients {
  calories: number;
  protein: string;
  carbs: string;
  sugar: string;
  fat: string;
}

export interface Dish {
  _id: number;
  name: string;
  description: string;
  media: Media[];
  price: {
    base: number;
    afterDiscount: number;
  };
  currency: string;
  ingredients: Ingredient[];
  dietaryTags: DietaryTag[];
  addons: number[];
  origin: Origin;
  preparationTime: number;
  feedback: Feedback;
  nutreints: Nutrients;
  servingQty: number;
  tags: string[];
}

export interface Category {
  name: string;
  icon: string;
  tag: string[];
}

export interface DishesState {
  dishes: Dish[];
  categories: Category[];
}
