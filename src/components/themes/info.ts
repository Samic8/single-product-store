export interface StoreInfo {
  storeName: string;
  productName: string;
  type: "digital" | "physical";
  price: string;
  description: string;
  moreInfo: { icon: string; text: string }[];
}

export const storeInfoPlaceholder: StoreInfo = {
  storeName: "Barcardis Tea Shop",
  productName: "Handmade Tea Set",
  type: "physical",
  price: "$49",
  description:
    "A tea set both designed and made in my home studio. Every set is guaranteed to be unique with its own imperfections.",
  moreInfo: [
    {
      icon: "coffee",
      text: "High quality set to pair with your high quality tea."
    },
    {
      icon: "map",
      text: "Locally made with care. Every set is slightly unique."
    },
    {
      icon: "camera",
      text: "Very social media shareable look."
    }
  ]
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
