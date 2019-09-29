// TODO add unit tests
type ClassObject = { [key: string]: any };
type ArrayOptions = ClassObject | string;
type ArrayVersion = ArrayOptions[];

export function getActiveClasses(classes: ClassObject | ArrayVersion): string {
  if (Array.isArray(classes)) {
    return classes.reduce((acc, cur) => {
      if (typeof cur === "object") {
        return acc.concat(`${acc ? " " : ""}${joinClasses(cur)}`);
      }
      if (cur) {
        return `${acc} ${cur}`;
      }
      return acc;
    }, "");
  }

  return joinClasses(classes);
}

function joinClasses(classes: ClassObject) {
  return Object.keys(classes)
    .filter(key => {
      return classes[key];
    })
    .join(" ");
}
