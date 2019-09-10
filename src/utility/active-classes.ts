export function getActiveClasses(classes: { [key: string]: any }): string {
  return Object.keys(classes)
    .filter(key => {
      return classes[key];
    })
    .join(" ");
}
