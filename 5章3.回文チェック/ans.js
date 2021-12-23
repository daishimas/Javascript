
let kaibunshurui =['kaibun',
                    'NoLemonNoMelon',
                    'いかのだんすはすんだのかい',
                    'けだるきいちにちいきるだけ',
                    'ありえないえりあ',
                    'せかいをくずしたいならないたしずくをいかせ',
                    '回文のくせにメッセージ性が強い',
                    'かおがながおか',
                    'あるみかんのうえにあるみかん',
                    'よのなかねかおかおかねかなのよ',
                    'Borroworrob']//追加できるように配列に収めた

let kaibunsnagasa =kaibunshurui.length;//配列の長さ

function isPalindrome(bun){
    console.log(bun.toLocaleLowerCase())
    let komojihenkan = bun.toLocaleLowerCase();//小文字に変換
    let gyakubun = komojihenkan.split("").reverse().join("");//個別に配列にして、逆にして、くっつける     
    if( komojihenkan === gyakubun ){//回文判定
        container.insertAdjacentHTML('beforeend',`<p>「${bun}」は回文です。</p>`);
    }else{
    container.insertAdjacentHTML('beforeend',`<p>「${bun}」は回文ではではありません。</p>`);  
}
}

//for( i=0 ; i<kaibunsnagasa ; i++){//配列分表示
    for(bun of kaibunshurui){
    isPalindrome(bun);  
   // console.log(kaibunshurui[i].toLocaleLowerCase());
}

// isPalindrome("kaibun");
// isPalindrome("NoLemonNoMelon");
// isPalindrome("いかのだんすはすんだのかい");
// isPalindrome("けだるきいちにちいきるだけ");
// isPalindrome("ありえないえりあ");
// isPalindrome("せかいをくずしたいならないたしずくをいかせ");
// isPalindrome("回文のくせにメッセージ性が強い");

