import { MENUS } from "./MenuStorage.js"

export const categoryFilter = (categoryNumbers) => {
  const temp = categoryNumbers.map((element) => {
    const [category, _] = MENUS.get(element);
    return category;
  })

  temp.unshift('카테고리');

  return `[ ${temp.join(' | ')} ]`;
};

export const menusFilter = (nameWithmenus) => {
  return nameWithmenus.map((element) => `[ ${element.join(' | ')} ]`)
};
