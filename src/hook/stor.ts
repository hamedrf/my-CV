import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./users";
import { shop } from "./shop";

export const stor = configureStore({reducer  : {user : userSlice.reducer, shop : shop.reducer}})