function sayHello() {
    alert("こんにちは");
    console.log("hello");
}

window.onload = sayHello;


resultDivided.innerText = "";
const header = document.createElement('h3');
header.innerText = '診断結果';
resultDivided.appendChild(header);

const paragraph = document.createElement('p');
const result = assessment(userName);
paragraph.innerText = result;
resultDivided.appendChild(paragraph);



resultDivided.innerText = "";


// headerDivided の作成
const headerDivided = document.createElement('div');
headerDivided.setAttribute('class', 'card-header');
headerDivided.innerText = '診断結果';

// bodyDivided の作成
const bodyDivided = document.createElement('div');
bodyDivided.setAttribute('class', 'card-body');

const paragraph = document.createElement('p');
paragraph.setAttribute('class', 'card-text');
const result = assessment(userName);
paragraph.innerText = result;
bodyDivided.appendChild(paragraph);

// resultDivided に Bootstrap のスタイルを適用する
resultDivided.setAttribute('class', 'card');
resultDivided.setAttribute('style', 'max-width: 700px;')

// headerDivided と bodyDivided を resultDivided に差し込む
resultDivided.appendChild(headerDivided);
resultDivided.appendChild(bodyDivided);


// headerDivided の作成
const headerDivided = document.createElement('div');
headerDivided.setAttribute('class', 'card-header');
headerDivided.innerText = '診断結果';

// bodyDivided の作成
const bodyDivided = document.createElement('div');
bodyDivided.setAttribute('class', 'card-body');

const paragraph = document.createElement('p');
paragraph.setAttribute('class', 'card-text');
const result = assessment(userName);
paragraph.innerText = result;
bodyDivided.appendChild(paragraph);

// resultDivided に Bootstrap のスタイルを適用する
resultDivided.setAttribute('class', 'card');
resultDivided.setAttribute('style', 'max-width: 700px;')

// headerDivided と bodyDivided を resultDivided に差し込む
resultDivided.appendChild(headerDivided);
resultDivided.appendChild(bodyDivided);


// // 追記
// let trueSample = 1 < 2;           // --> true
// let falseSample = 200 < 100;      // --> false
// console.log(typeof (trueSample));  // --> 'boolean'
// console.log(!trueSample);