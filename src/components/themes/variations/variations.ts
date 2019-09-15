export type HeaderVariations = 1 | 2 | 3;
export type VariationKeys = "header" | "background";

type allVariations = {
  name: string;
  key: VariationKeys;
  // TODO how to type each object with different variations? Maybe generics
  variations: [];
};

export const allVariations = [
  { name: "Header", key: "header", variations: [1, 2, 3] },
  { name: "Background", key: "background", variations: [1, 2, 3] }
];
