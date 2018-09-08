// Prints input to DOM
const printToDOM = (divId, infoToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = infoToPrint;
};

printToDOM('inputField', '<textarea name="words" id="toTranslate" class="valid" cols="30" rows="1"></textarea>');

const language = {
  merry: ['merry','gaja','fröhlich','メリー'],
  christmas: ['christmas','kristnasko','Weihnachten','クリスマス'],
  and: ['and','kaj','und','そして'],
  happy: ['happy','feliĉa','glücklich','ハッピー'],
  news: ['new','nova','Neu','新しい'],
  year:['year','jaro','Jahr','年']
};

// turn languagne object keys into an array
const keyArray = Object.keys(language);

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
  console.log(lowerCaseInput);
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
      if (language[langChecker][0] === validator) {
        engVersion += `${language[langChecker][0]} `;
        translation += `${language[langChecker][1]} `;
        printed = true;
      } else {
        console.log('moving on');
      }
    }
  }
  engVersion += translation;
  if (printed) {
    printToDOM('printHere', engVersion);
    newInputField = '<textarea name="words" id="toTranslate" class="valid" cols="30" rows="1"></textarea>';
    printToDOM('inputField', newInputField)

  } else {
    newInputField = '<textarea placeholder="Invalid Entry" name="words" id="toTranslate" class="invalid" cols="30" rows="1"></textarea>';
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
      if (language[langChecker][0] === validator) {
        engVersion += `${language[langChecker][0]} `;
        translation += `${language[langChecker][2]} `;
        printed = true;
      } else {
        console.log('moving on');
      }
    }
  }
  engVersion += translation;
  if (printed) {
    printToDOM('printHere', engVersion);
  } else {
    console.log('empty');
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
      if (language[langChecker][0] === validator) {
        engVersion += `${language[langChecker][0]} `;
        translation += `${language[langChecker][3]} `;
        printed = true;
      } else {
        console.log('moving on');
      }
    }
  }
  engVersion += translation;
  if (printed) {
    printToDOM('printHere', engVersion);
  } else {
    console.log('empty');
  }
};

espirantobutt.addEventListener('click',translateEspiranto);
germanbutt.addEventListener('click', translateGerman);
japanesebutt.addEventListener('click', translateJapanese);