export interface StoreInfo {
  storeName: string;
  productName: string;
}

export const storeInfoPlaceholder: StoreInfo = {
  storeName: "Barcardis Tea Shop",
  productName: "Handmade Tea Set"
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
