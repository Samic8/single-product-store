export type HeaderVariations = 1 | 2 | 3;
export type BackgroundVariations = 1 | 2 | 3;
type VariationValues = HeaderVariations | BackgroundVariations;
export type VariationKeys = "header" | "background";

type AllVariations = {
  name: string;
  key: VariationKeys;
  // TODO how to type each object with different variations? Maybe generics
  variations: number[];
};

export type Variations = {
  [key in VariationKeys]: VariationValues;
};

export const allVariations: AllVariations[] = [
  { name: "Header", key: "header", variations: [1, 2, 3] },
  { name: "Background", key: "background", variations: [1, 2, 3] }
];
