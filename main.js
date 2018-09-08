const printToDOM = (divId, infoToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = infoToPrint;
}

const language = {
        merry: ['merry','gaja','fröhlich','メリー'],
        christmas: ['christmas','Kristnasko','Weihnachten','クリスマス'],
        and: ['and','kaj','und','そして'],
        happy: ['happy','feliĉa','glücklich','ハッピー'],
        news: ['new','nova','Neu','新しい'],
        year:['year','jaro','Jahr','年']
};

for (const prop in language) {
    console.log(`language.${prop} = ${language[prop]}`);
  }

// language.christmas.forEach(function(item, index, array) {
//     console.log(index, item, array);
// });

printToDOM ('printHere', 'I function');