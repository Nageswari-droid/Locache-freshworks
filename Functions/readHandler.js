const { FileClass } = require("../fileOperation/FileClass");
const { GlobalData } = require("../DAO/GlobalData");
const { Validate } = require("../Validate");

var parsedData = "";

/**
 * @param {*} key
 */
const readHandler = async (key) => {
  const fileName = GlobalData.dataStoreFileName;
  let data = await FileClass.readFile(fileName);
  parsedData = data.length !== 0 ? JSON.parse(data) : " ";
  let value = await Validate.readValidate(key, parsedData);
  GlobalData.readItem(key, parsedData);
  console.log(value);
  return value;
};

exports.readHandler = readHandler;
