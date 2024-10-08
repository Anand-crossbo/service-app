import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dish, Category, DishesState } from './types';

const initialState: DishesState = {
  dishes: [],
  categories: []
};

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    setDishes(state, action: PayloadAction<Dish[]>) {
      state.dishes = action.payload;
    },
    setCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    }
  }
});

export const { setDishes, setCategories } = dishesSlice.actions;
export default dishesSlice.reducer;