// Prints input to DOM
const printToDOM = (divId, infoToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = infoToPrint;
};

printToDOM('inputField', '<textarea name="words" id="toTranslate" class="valid input" cols="30" rows="1"></textarea>');

const english = {
  merry: 'merry',
  christmas: 'christmas',
  and: 'and',
  happy: 'happy',
  news: 'new',
  year:'year'
};

const esperanto = {
  merry:'gaja',
  christmas:'kristnasko',
  and:'kaj',
  happy:'feliĉa',
  news:'nova',
  year:'jaro'
};

const german = {
  merry:'fröhlich',
  christmas:'Weihnachten',
  and:'und',
  happy:'glücklich',
  news:'Neu',
  year:'Jahr'
};

const japanese = {
  merry:'メリー',
  christmas:'クリスマス',
  and:'そして',
  happy:'ハッピー',
  news:'新しい',
  year:'年'
};

// turn languagne object keys into an array
const keyArray = Object.keys(english);

// buttons
const espirantobutt = document.getElementById('Esperanto');
const germanbutt = document.getElementById('German');
const japanesebutt = document.getElementById('Japanese');


let newInputField

// Takes value from textarea and makes it lower case and turns it into an array
const getTextValue = () => {
  let toTranslate = document.getElementById('toTranslate');
  let translateText = toTranslate.value;
  let lowerCaseInput = translateText.toLowerCase();
  let arrayOfText = lowerCaseInput.split(' ');
  return arrayOfText;
};

const translateEspiranto = () => {
  printToDOM('printHere', '');
  let needsTranslation = getTextValue();
  let engVersion = `<strong>English:</strong> `;
  let translation = `<strong>Translation:</strong> `;
  let printed = false;
  // loop through input from user
  for (i = 0; i < needsTranslation.length; i++) {
    let validator = needsTranslation[i];
    // loop through keys in language object
    for (j = 0; j < keyArray.length; j++) {
      let langChecker = keyArray[j];
      // checks if user input array index value matches value in key array
      if (english[langChecker] === validator) {
        engVersion += `${english[langChecker]} `;
        translation += `${esperanto[langChecker]} `;
        printed = true;
      }
    }
  }
  engVersion += translation;
  if (printed) {
    printToDOM('printHere', engVersion);
    newInputField = '<textarea name="words" id="toTranslate" class="valid input" cols="30" rows="1"></textarea>';
    printToDOM('inputField', newInputField)

  } else {
    newInputField = '<textarea placeholder="Invalid Entry" name="words" id="toTranslate" class="invalid input" cols="30" rows="1"></textarea>';
    printToDOM('inputField', newInputField);
  }
};

const translateGerman = () => {
  printToDOM('printHere', '');
  let needsTranslation = getTextValue();
  let engVersion = `<strong>English:</strong> `;
  let translation = `<strong>Translation:</strong> `;
  let printed = false;
  // loop through input from user
  for (i = 0; i < needsTranslation.length; i++) {
    let validator = needsTranslation[i];
    // loop through keys in language object
    for (j = 0; j < keyArray.length; j++) {
      let langChecker = keyArray[j];
      // checks if user input array index value matches value in key array
      if (english[langChecker] === validator) {
        engVersion += `${english[langChecker]} `;
        translation += `${german[langChecker]} `;
        printed = true;
      }
    }
  }
  engVersion += translation;
  if (printed) {
    printToDOM('printHere', engVersion);
    newInputField = '<textarea name="words" id="toTranslate" class="valid input" cols="30" rows="1"></textarea>';
    printToDOM('inputField', newInputField)

  } else {
    newInputField = '<textarea placeholder="Invalid Entry" name="words" id="toTranslate" class="invalid input" cols="30" rows="1"></textarea>';
    printToDOM('inputField', newInputField);
  }
};

const translateJapanese = () => {
  printToDOM('printHere', '');
  let needsTranslation = getTextValue();
  let engVersion = `<strong>English:</strong> `;
  let translation = `<strong>Translation:</strong> `;
  let printed = false;
  // loop through input from user
  for (i = 0; i < needsTranslation.length; i++) {
    let validator = needsTranslation[i];
    // loop through keys in language object
    for (j = 0; j < keyArray.length; j++) {
      let langChecker = keyArray[j];
      // checks if user input array index value matches value in key array
      if (english[langChecker] === validator) {
        engVersion += `${english[langChecker]} `;
        translation += `${japanese[langChecker]} `;
        printed = true;
      } 
    }
  }
  engVersion += translation;
  if (printed) {
    printToDOM('printHere', engVersion);
    newInputField = '<textarea name="words" id="toTranslate" class="valid input" cols="30" rows="1"></textarea>';
    printToDOM('inputField', newInputField)

  } else {
    newInputField = '<textarea placeholder="Invalid Entry" name="words" id="toTranslate" class="invalid input" cols="30" rows="1"></textarea>';
    printToDOM('inputField', newInputField);
  }
};

espirantobutt.addEventListener('click',translateEspiranto);
germanbutt.addEventListener('click', translateGerman);
japanesebutt.addEventListener('click', translateJapanese);