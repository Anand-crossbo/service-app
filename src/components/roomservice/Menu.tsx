import {
  Box,

} from "@mui/material";
import React, { useState } from "react";
import { Dish } from "../../store/booking/types";
import GridMenu from "./menudesigns/GridMenu";
import SliderMenu from "./menudesigns/SliderMenu";

interface MenuProps {
  dishes: Dish[];
  onCardClick: (dishId: number) => void;
  onAddToCard: (dish: Dish) => void;
  onRemoveFromCard: (dish: Dish) => void;
  counts: { [key: number]: number };
}

const Menu: React.FC<MenuProps> = ({ dishes, onCardClick, onAddToCard, onRemoveFromCard, counts }) => {


  const filteredDishes = dishes; // Define filteredDishes, you can add your filtering logic here

  return (
    <>
      <GridMenu
        dishes={filteredDishes}
        counts={counts}
        onCardClick={onCardClick}
        onAddToCard={onAddToCard}
        onRemoveFromCard={onRemoveFromCard} />
    </>
   
  );
};

export default Menu;