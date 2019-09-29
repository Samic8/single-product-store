type VariationOptions = 1 | 2 | 3 | null;

export type VariationKeys =
  | "header"
  | "background"
  | "productContainer"
  | "decoration";

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
  { name: "Header", key: "header", variations: [1, 2, null] },
  { name: "Background", key: "background", variations: [1, 2, null] },
  { name: "Product", key: "productContainer", variations: [1, 2, null] },
  { name: "Decoration", key: "decoration", variations: [1, 2, null] }
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
