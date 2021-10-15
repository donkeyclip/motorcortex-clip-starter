export const addToObject = function (
  currentObject,
  path,
  value,
  replace = false
) {
  const arrayPath = path.split(".");

  for (let i = 0; i < arrayPath.length - 1; i++) {
    if (!Object.prototype.hasOwnProperty.call(currentObject, arrayPath[i])) {
      currentObject[arrayPath[i]] = {};
    }
    currentObject = currentObject[arrayPath[i]];
  }

  if (
    replace === false &&
    Object.prototype.hasOwnProperty.call(
      currentObject,
      arrayPath[arrayPath.length - 1]
    )
  ) {
    return false;
  }

  currentObject[arrayPath[arrayPath.length - 1]] = value;
  return true;
};

export const getFromObject = function (currentObject, path) {
  const arrayPath = path.split(".");
  let lastValue;

  for (let i = 0; i < arrayPath.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(currentObject, arrayPath[i])) {
      return undefined;
    }
    lastValue = currentObject[arrayPath[i]];
    currentObject = currentObject[arrayPath[i]];
  }
  return lastValue;
};
