type VariationOptions = 1 | 2 | 3;

export type VariationKeys =
  | "header"
  | "background"
  | "productContainer"
  | "decoration";

type AllVariations = {
  name: string;
  key: VariationKeys;
  // TODO how to type each object with different variations? Maybe generics
  variations: number[];
};

export type Variations = {
  [key in VariationKeys]: VariationOptions;
};

export const allVariations: AllVariations[] = [
  { name: "Header", key: "header", variations: [1, 2, 3] },
  { name: "Background", key: "background", variations: [1, 2, 3] },
  { name: "Product", key: "productContainer", variations: [1, 2, 3] },
  { name: "Decoration", key: "decoration", variations: [1, 2, 3] }
];

export enum PreConfiguredThemes {
  one = 1,
  two,
  three
}

export const preConfiguredThemes: {
  [key in PreConfiguredThemes]: Variations;
} = {
  1: {
    header: 1,
    background: 1,
    productContainer: 1,
    decoration: 1
  },
  2: {
    header: null,
    background: 2,
    productContainer: 2,
    decoration: 1
  },
  3: {
    header: 1,
    background: 1,
    productContainer: 1,
    decoration: 1
  }
};
