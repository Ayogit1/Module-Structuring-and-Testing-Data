function getOrdinalNumber(num) {
  nonStr = num.toString();
  if (nonStr.endsWith("1") && nonStr !== "11") {
    return nonStr.concat("st");
  } else if (nonStr.endsWith("2")) {
    return nonStr.concat("nd");
  } else if (nonStr.endsWith("3")) {
    return nonStr.concat("rd");
  } else {
    return "Invalid";
  }

}

module.exports = getOrdinalNumber;


