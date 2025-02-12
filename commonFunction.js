function getInput(id) {
  const inputValue =(document.getElementById(id).value);
  const nmbrInput = parseInt(inputValue);
  return nmbrInput;
}

function getInnerText(id) {
  const getInerText = (document.getElementById(id).innerText);
  const nmbrText = parseInt(getInerText);
  return nmbrText;
}


