import { VariationOptions, VariationKeys } from "../../containers/store";

type AllVariations = {
  name: string;
  key: VariationKeys;
  // TODO how to type each object with different variations? Maybe generics
  variations: VariationOptions[];
};

export type Variations = {
  [key in VariationKeys]: VariationOptions;
};

export const allVariations: AllVariations[] = [
  { name: "Header", key: "header", variations: [1, 2, 3] },
  { name: "Background", key: "background", variations: [1, 3] },
  {
    name: "Color",
    key: "backgroundColor",
    variations: [1, 2, 3]
  },
  { name: "Product", key: "productContainer", variations: [1, 2] },
  { name: "Decoration", key: "decoration", variations: [1, 2] }
];

export enum PreConfiguredThemes {
  one = 1,
  two
}

export const preConfiguredThemes: {
  [key in PreConfiguredThemes]: Variations;
} = {
  1: {
    header: 1,
    background: 1,
    backgroundColor: 1,
    productContainer: 1,
    decoration: 1
  },
  2: {
    header: 3,
    background: 3,
    backgroundColor: 1,
    productContainer: 2,
    decoration: 2
  }
};
