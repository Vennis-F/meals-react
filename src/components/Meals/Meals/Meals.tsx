import React from "react";
import AvailableMeals from "../AvailableMeals/AvailableMeals";
import MealsSummary from "../MealsSummary/MealsSummary";

const Meals = () => {
  console.log("meal render");

  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
