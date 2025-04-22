let phone = document.getElementById("phone");
const getStringWithNumbersOnly = (str) =>[...str].filter((v)=>Number.isInteger(+v) && v!==" ").join("")
const formatString = (val) => {
const numStr = getStringWithNumbersOnly(val);

  return ""+val.length > 3
    ? "+(" + numStr.substring(0, 3) + ") - " + numStr.substring(3)
    : numStr;
return val
};
phone.addEventListener(
  "input",
  () => (phone.value = formatString(phone.value))
);
