export interface StoreInfo {
  storeName: string;
  productName: string;
  type: "digital" | "physical";
  price: string;
  description: string;
  image: { previewUrl: string; binaryString: string };
}

export const storeInfoPlaceholder: StoreInfo = {
  storeName: "Barcardis Tea Shop",
  productName: "Handmade Tea Set",
  type: "physical",
  price: "$49",
  description:
    "A tea set both designed and made in my home studio. Every set is guaranteed to be unique with its own imperfections.",
  image: { previewUrl: "", binaryString: "" }
};

// Uses placeholder if value is falsy
export function applyPlaceholderStoreInfo(storeInfo: StoreInfo): StoreInfo {
  return Object.entries(storeInfo).reduce((acc, [key, value]) => {
    if (value) {
      return { ...acc, [key]: value };
    }

    return acc;
  }, storeInfoPlaceholder);
}
