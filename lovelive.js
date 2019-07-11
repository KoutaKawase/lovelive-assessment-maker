'use strict';
const members = [
    ['高坂穂乃果', './images/kosaka_honoka.jpg'],
    ['絢瀬絵里', './images/ayase_eri.jpg'],
    ['南ことり', './images/minami_kotori.jpg'],
    ['園田海未', './images/sonoda_umi.jpg'],
    ['星空凛', './images/hosizora_rin.jpg'],
    ['西木野真姫', './images/nishikino_maki.jpg'],
    ['東條希', './images/tojyo_nozomi.jpg'],
    ['小泉花陽', './images/koizumi_hanayo.jpg'],
    ['矢澤にこ', './images/yazawa_nico.jpg'],
    ['ことりの母', './images/kotori_haha.jpg'],
    ['高海千歌', './images/takami_chika.jpg'],
    ['桜内梨子', './images/sakurauchi_rico.jpg'],
    ['松浦果南', './images/matsuura_kanan.jpg'],
    ['黒澤ダイヤ', './images/kurosawa_daiya.jpg'],
    ['渡辺曜', './images/watanabe_yo.jpg'],
    ['津島善子', './images/tushima_yoshiko.jpg'],
    ['国木田花丸', './images/kunikida_hanamaru.jpg'],
    ['小原鞠莉', './images/ohara_mari.jpg'],
    ['黒澤ルビィ', './images/kurosawa_ruby.jpg'],
    ['上原歩夢', './images/uehara_ayumu.jpg'],
    ['中須かすみ', './images/nakasu_kasumi.jpg'],
    ['桜坂しずく', './images/ousaka_shizuku.jpg'],
    ['朝香 果林', './images/asaka_karin.jpg'],
    ['宮下 愛', './images/miyashita_ai.jpg'],
    ['近江 彼方', './images/oumi_kanata.jpg'],
    ['エマ・ヴェルデ', './images/ema_velde.jpg'],
    ['天王寺 璃奈', './images/tennouzi_rina.jpg'],
];

/**
 * 西暦と名前を渡すと運命のアイドルとその画像を表示する関数
 * @param {int} year 西暦
 * @param {string} userName 名前
 * @return none
 */
function assessment(year, userName) {
    //文字のコード番号合計用
    //西暦と文字のコード番号を足し合わせる
    let sumOfcharCode = year;
    for (let i = 0; i < userName.length; i++) {
        sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
    }
    //合計を回答の数で割ったあまりをリストの添字にする。
    const index = sumOfcharCode % members.length;
    const result = members[index];

    return result;
}

/**
 * 画面にアイドル名と画像を表示する関数
 */
function assertIdol() {
    //インプットデータ取得
    let year = document.getElementById('user-birthday').value;
    let userName = document.getElementById('user-name').value;
    //名前表示エリア取得
    let nameArea = document.getElementById('assessment-name');
    //イメージエリア取得
    let imgArea = document.getElementById('assessment-image');
    //シェアボタン取得
    let shareArea = document.getElementById('share');
    //診断結果取得
    const result = assessment(Number(year), userName);
    const message = 'あなたの運命のラブライブメンバーは' + result[0] + 'ちゃんです！おめでとう！';
    //名前表示
    nameArea.innerHTML = result[0];
    //画像表示
    imgArea.src = result[1];
    //シェア用の説明を動的に挿入
    shareArea.setAttribute("data-text", message);
}

console.log(assessment(1998, '川瀬康太'));

