export const useCardLike = () => {};

interface CardData {
  name: string;
  category: string;
  _id: string;
}

export const useCardSave = (key: string, data: CardData) => {
  const getData: CardData[] = JSON.parse(localStorage.getItem(key));

  const findData = getData?.find((item) => {
    return item._id === data._id;
  });

  let saveData: CardData[] = [];

  let returnData;
  if (!findData) {
    saveData.push(data);
    returnData = true;
  } else {
    saveData = getData.filter((item) => {
      return item._id !== data._id;
    });
    returnData = false;
  }

  localStorage.setItem(key, JSON.stringify(saveData));
  return returnData;
};
