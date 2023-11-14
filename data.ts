import { Billboard, Category, Color, Image, Product, Size } from "./types";
import { NextApiRequest, NextApiResponse } from "next";

export const billboardData: Billboard = {
  id: "Iy codes",
  label: "iy codes billboard",
  imageUrl:
    "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_922,c_limit/882bb3b8-7a58-4dd3-9fe3-f36f89e37c18/nike-just-do-it.jpg",
};

export const categoryData: Category = {
  id: "shoes",
  name: "shoes",
  billboard: billboardData,
};
export const categoryData2: Category = {
  id: "tops",
  name: "tops",
  billboard: billboardData,
};

export const sizeData: Size = {
  id: "randomSize",
  name: "XLL",
  value: "38-46",
};
export const sizeData2: Size = {
  id: "randomSize",
  name: "XLL",
  value: "40-43",
};
export const colorData: Color = {
  id: "color1",
  name: "color1",
  value: "#808080",
};

export const imageData1: Image = {
  id: "img1",
  url: "https://image.shutterstock.com/image-photo/stack-colorful-clothes-pile-clothing-260nw-2203081765.jpg",
};
export const imageData2: Image = {
  id: "img2",
  url: "https://image.shutterstock.com/image-photo/fashion-stylish-luxury-clothes-display-260nw-1360347566.jpg",
};
export const productData: Product = {
  id: "product1",
  category: categoryData,
  description: "something...",
  name: "iycodes product",
  price: "N24000",
  size: sizeData,
  color: colorData,
  images: [imageData1, imageData2],
};

export const productData1: Product = {
  id: "product0",
  category: categoryData,
  description: "something...",

  name: "iycodes product",
  price: "N24000",
  // isFeatured: true,
  size: sizeData,
  color: colorData,
  images: [imageData1, imageData2],
};
export const productData2: Product = {
  id: "product2",
  category: categoryData,
  description: "something...",

  name: "iycodes product",
  price: "N24000",
  // isFeatured: true,
  size: sizeData,
  color: colorData,
  images: [imageData1, imageData2],
};
export const productData3: Product = {
  id: "product3",
  category: categoryData,
  description: "something...",

  name: "iycodes product",
  price: "N24000",
  // isFeatured: true,
  size: sizeData,
  color: colorData,
  images: [imageData1, imageData2],
};
export const productData4: Product = {
  id: "product4",
  category: categoryData,
  description: "something...",

  name: "iycodes product",
  price: "N24000",
  // isFeatured: true,
  size: sizeData,
  color: colorData,
  images: [imageData1, imageData2],
};
export const productData5: Product = {
  id: "product5",
  category: categoryData,
  description: "something...",

  name: "iycodes product",
  price: "N24000",
  // isFeatured: true,
  size: sizeData,
  color: colorData,
  images: [imageData1, imageData2],
};
