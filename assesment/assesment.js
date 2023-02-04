'use strict';
const answers = [
    '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
    '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
    '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
    '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
    '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
    '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
    '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
    '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
    '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
    '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
    '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
    '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
    '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
    '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
    '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
];



/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
    // 全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharCode = 0;
    for (let i = 0; i < userName.length; i++) {
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }

    // 文字のコード番号の合計を回答の数で割って添字の数値を求める
    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    // TODO {userName} をユーザの名前に置き換える
    result = result.replaceAll('{userName}', userName);

    return result;
}

// console.log(assessment('太郎'));
// console.log(assessment('次郎'));
// console.log(assessment('太郎'));

// console.assert(assessment('太郎') ===
//     '太郎のいいところは決断力です。次郎がする決断にいつも助けられる人がいます。',
//     '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
// );

console.assert(
    assessment('太郎') === assessment('太郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
);

// ボタンを使いやすくするために定義してしまう
// const $button = document.getElementsByTagName('button');

// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];


// while文のおさらい
// 上記で宣言したkinpenと比較するためのindexを宣言する


// let index = 0;　//indexは0と仮定
// while (index < 4) {  //0〜2回まで繰り返す
//     console.log(kinpen[index]);
//     index++;
//     //一つずつ増やす式
// }
// for (let index = 0; index < kinpen.length; index++) {
//     const element = kinpen[index];
//     console.log(element);
// }
// if else文のおさらい

// let waseda = ['早稲田', '西新宿', '新大久保', '信濃町',]

// for (let index = 0; index < waseda.length; index++) {
//     const element = waseda[index];
//     console.log(element)

// }

let kinpen = ['池袋', '新宿', '高田馬場', '大久保', '目白', '早稲田'];


// 関数のおさらい
// 好きなプログラム(ループなど)をまとめて定義する
// const ??? =() =>/* ←アロー関数 */

let kinpen2 = ['池袋', '新宿', '高田馬場', '大久保', '目白', '早稲田'];

// argment「arg」は引数
// 関数「testfunction」を立てる
// 関数の中身はif文の3以上かそれ以外かのプログラム
// 実行する際に関数名と()の中の引数で結果を変える

// const testfunction = (arg) => {
//     if (kinpen2.length > arg) {
//         console.log('近辺の配列数は3以上です。');
//     } else if (kinpen.length == 2) {
//         console.log('結果は2です。');
//     } else {
//         console.log('それ以外の結果です。');
//     }
// };
// testfunction(2);

// if文を内包した関数を定義する
// const testfunction = (arg) => {
//     let kinpen3 = ['池袋', '新宿', /* '高田馬場', '大久保', '目白', '早稲田' */];

//     if (kinpen3.length > arg) {
//         console.log('3以上');
//     } else if (kinpen3.length === 2) {
//         console.log('2ジャスト');
//     } else {
//         console.log('それ以外');
//     }
// };
// testfunction(2);

// 新関数2　オブジェクトとして要素を持つタイプ

const hype2 = {
    color: 'red',
    size: 'small',
    smell: 'zombie',
    thisAwesome: () => {
        console.log('wow Awsome');
    }
};
console.log(hype2.thisAwesome);

console.log(window.document)

console.log(document.getElementsByTagName('button')[3]);

/* id「testdayo」をgetElementsByidで取得してhtml側に
if文の文言を表示する */

const result5 = 41;
if (result5 === 10) {
    document.getElementById('testdayo').textContent = '10just';

} else if (result5 === 20) {
    document.getElementById('testdayo').textContent = '20just';


} else if (result5 === 30) {
    document.getElementById('testdayo').textContent = '30just';


} else if (result5 === 40) {

    document.getElementById('testdayo').textContent = '40just';

} else if (result5 > 49) {

    document.getElementById('testdayo').textContent = 'Over50';

} else if (result5 <= 9) {
    document.getElementById('testdayo').textContent = '9less';
} else {
    document.getElementById('testdayo').textContent = 'Otherw ise';

}

// ゲットエレメントシリーズ(htmlでタグ付けしたものをjsで操作する)
// getElementById
// getElementsByTagName



