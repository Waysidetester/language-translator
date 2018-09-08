// Prints input to DOM
const printToDOM = (divId, infoToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = infoToPrint;
};

const language = {
        merry: ['merry','gaja','fröhlich','メリー'],
        christmas: ['christmas','Kristnasko','Weihnachten','クリスマス'],
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
// end buttons

// function to pull info from textarea and check values in languages object
const getTextValue = () => {
  let toTranslate = document.getElementById('toTranslate');
  let translateText = toTranslate.value;
  console.log(translateText);
};




espirantobutt.addEventListener('click',getTextValue);

printToDOM ('printHere', keyArray);