// htmlからのヘッダーに付けたidを取得してくる
let header = document.getElementById('header');
// 変形（縦に60度傾ける）
header.style.transform = 'rotateX(60deg)';

// アニメーションをつける
let degree = 0;
// 回転を加えるための関数を宣言(rotateHeader)
function rotateHeader() {
    // 6度づつ回転を加える
    degree = degree + 6;
    degree = degree % 360;
    if (degree === 90) {
        header.setAttribute('class', 'back');
    } else if (degree === 270) {
        header.setAttribute('class', 'face');
    }

    header.style.transform = 'rotateX(' + degree + 'deg)';
} //セットインターバル関数を用いてrotateHeader関数を20ミリ秒ごとに繰り返す
setInterval(rotateHeader, 10, 100, 200);
