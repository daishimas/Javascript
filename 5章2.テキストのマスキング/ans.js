// 問題
// maskCardNumber("1234567890123456");16桁←よく見るとこれ引数が文字列になっとるやん
// maskEmail("abcdefg@example.co.jp");

// maskCardNumber("9999999999999999");16桁
// maskEmail("nv@g~mail.com");

// maskCardNumber("2983112934104649");
// maskEmail("konnnani_nagai_address_demo_mask_dekimasuyo@example.com");

// maskCardNumber("192168255254");13桁
// maskEmail("0o.l-_-lzzz@exa.jp");


//問題
function maskCardNumber(num){
    let kiritori = num.slice(-4);
        //console.log(kiritori);
    let numhuseji='************'+kiritori;
    container.insertAdjacentHTML('beforeend',`<p>お客様のクレジットカード番号：${numhuseji}</p>`);
}

maskCardNumber("1234567890123456");
maskCardNumber("9999999999999999");
maskCardNumber("2983112934104649");
maskCardNumber("192168255254");

//前二文字表示、残り伏字にしたい、されど＠以降は表示。
function maskEmail(addr){
    
    let addrwake=addr.split('@');//アドレスを＠で分ける
    let addrwakemae=addrwake[0];//ドメイン
        console.log(addrwakemae);

    let awm2 = addrwakemae.slice(0,2);//最初2文字の表示
        console.log(awm2);
        
    let awu2=addrwakemae.slice(2);//最初2文字を飛ばして表示
        console.log(awu2);

    let kari=awu2.length;//伏せるところの長さ
        console.log(kari);

    let arr=Array.from(awu2);//各文字配列に変換
    for(i=0; i<=kari-1 ;i++){//一つずつ一個一個回して変換する
        let huse=arr[i];
        console.log(huse);
        let huse2=huse.replace(huse,'*');
        console.log(huse2);
        arr.splice(i,1,huse2);
        console.log(arr);
    }
        let renketu=arr.join("");
        console.log(renketu);

    let doma=addrwake[1];//＠以降
        console.log(doma);
    
    let addrhuseji = awm2+renketu +'@'+ doma ;
        container.insertAdjacentHTML('beforeend',`<p>お客様のEメールアドレス：${addrhuseji}</p>`);
    }
    
maskEmail("abcdefg@example.co.jp");

// let koko='abcdefghij'.charAt(2);
//     console.log(koko);


////墓標 
// 入力と表示
// let num=window.prompt('数字を入力してください');//表示と入力数値を反映させる
// let numst=String(num);//反映させたものを文字列に変換するが・・・・！？どこに置く？

// 条件　進むか、進まないか
//現段階では頭に0がついてしまうと正解になてっしまう
//桁数によって伏字が対応していない
//小数点についても考える
// if(0<=num && 99999999999999999>=num){
//     window.alert('正解')
//     // 切り取りの方法と、つなぎ合わせ
//         console.log(numst);
//     let num = numst;
//         console.log(numst);
//     const huseji = "**************";
//         console.log(huseji);
//     const kiritori = numst.slice(14);
//         console.log(kiritori);
//     const numhuseji = huseji+ kiritori;
//         console.log(numhuseji);
    
//     container.insertAdjacentHTML('beforeend',`<p>お客様のクレジットカード番号：${numhuseji}</p>`);
// }else{
//     window.alert('数字を入力してください')
//     container.insertAdjacentHTML('beforeend',`<p>お客様のクレジットカード番号：</p>`);
// }

//伏字を追加する方針
//ちがう、これじゃ入力したものにたいして付け加えているだけ
// if(num>=0 && num<10){
//     let numst=String(num);
//     const numhuseji = '*********'+ '0'+numst;//1桁の場合機密性を考慮して*は9個つける
//         console.log(numhuseji);
//     container.insertAdjacentHTML('beforeend',`<p>お客様のクレジットカード番号：${numhuseji}</p>`);
// }else if(num>=10 && num<100){
//         let numst=String(num);
//     const numhuseji = '*********'+ numst;//2桁の場合機密性を考慮して*は9個つける(下二桁表示)
//         console.log(numhuseji);
//     container.insertAdjacentHTML('beforeend',`<p>お客様のクレジットカード番号：${numhuseji}</p>`);
// }else if(num>=100 && num<100){
//     let numst=String(num);
// const numhuseji = '*********'+ numst;//2桁の場合機密性を考慮して*は9個つける(下二桁表示)
//     console.log(numhuseji);
// container.insertAdjacentHTML('beforeend',`<p>お客様のクレジットカード番号：${numhuseji}</p>`);
// }


//予備
// if(num16>=1 && num16<10){
//     let num16st=String(num16);//反映させたものを文字列に変換
//         console.log(num16st);
//     let num16a = num16st;
//         console.log(num16st);
    
//     const huseji = "**************";
//         console.log(huseji);
//     const kiritori = num16st.slice(14);
//         console.log(kiritori);
//     const numhuseji = huseji+ kiritori;
//         console.log(numhuseji);

// container.insertAdjacentHTML('beforeend',`<p>お客様のクレジットカード番号：${numhuseji}</p>`);
// }else{
//     window.alert('16桁の数字を入力してください')
//     container.insertAdjacentHTML('beforeend',`<p>お客様のクレジットカード番号：</p>`);
// }

// let keta=String(num16).length
//     console.log(keta)//桁数表示してから次どうするか→桁数表示は不要？


    // let str = bangou;
    // let result1 = str.match(/[0-9]{2,4}/g);
    // console.log(result1)
    // for(let result2 of result1){
    //     console.log(result2[2])
    // }//なんとなく配列っぽいかんじがする。これをうまく加工できないか

//     //切り取りの方法と、つなぎ合わせ
//     var str = "1234567890";
//     console.log(str);
    
//     var begin = 3;
//     var replace_str = "あああ";
//     var end = replace_str.length;
//     console.log(end);//あああの長さ3
//     //var before = str.slice(4,6);切り取りの方法、ルール　この場合5から表示6まで表示
//     var before = str.slice(0, begin - 1);
//     console.log(before);
//     var after = str.slice(begin-1 + replace_str.length);
//     console.log(after);
    
// var ret = before + replace_str + after;

// console.log(ret); 

//前二文字表示、残り伏字にしたい、されど＠以降は表示。
// function maskEmail(addr){
//     let kiritorim = addr.slice(0,2);//最初2文字の表示
//         console.log(kiritorim);

//     let kiritorim2=addr.slice(2);//最初2文字を飛ばして表示
//         console.log(kiritorim2);

//     let krm2rep=kiritorim2.match(/[a-zA-Z0-9_.+-]^([a-z0-9_\.\-])/g);//メアドを抽出したい正規表現求めたし
//         console.log(krm2rep); 
    
//     let addrkari=addr.match(/@([a-z0-9_\.\-])+[^.]$/g);//ドメイン表示未完正規表現求めたし
//         console.log(addrkari);                          //iにすると最後jがつく。なぜ？
        
//     let addrhuseji=kiritorim+addrkari;
    
//     container.insertAdjacentHTML('beforeend',`<p>お客様のEメールアドレス：${krm2rep}</p>`);
//     container.insertAdjacentHTML('beforeend',`<p>お客様のEメールアドレス：${addrhuseji}</p>`);
//     }
    
// maskEmail("abcdefg@example.co.jp"); 