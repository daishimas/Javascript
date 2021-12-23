
const chahanCookProcedures = ["1.ねぎはみじん切りにする。焼豚は１ｃｍ角に切る。卵は溶きほぐしておく。",
                              "2.ボウルにご飯、油大さじ１を入れ、しゃもじなどでご飯をほぐす。",
                              "3.ご飯にの卵を入れ、菜箸でしっかりほぐしながら混ぜる。",
                              "4.フライパンに油大さじ１を強火で熱し、十分に温まったら中火にし、ご飯を入れ木べらなどでご飯を全体に広げる。ご飯をつぶさないよう、木べらを寝かせて小刻みに動かすようにして炒める。途中、木べらでご飯の上下を返す（あおらずに、木べらで上下を返すようにするとよい）。",
                              "5.４～５分炒め、ご飯がパラパラしてきたら、ねぎ、チャーシューを加えて炒め合わせる。全体が混ざったらいったん火を止め、フライパンの真ん中を空け、しょうゆを加える。",
                              "6.再び中火にかけ、しょうゆがジュッと香り立ったら全体を炒め合わせて塩、こしょうで味を調える。"
                             ];
                          

let CCP=chahanCookProcedures;
let num=1;

for(let CCP2 of CCP){
    // setTimeout(function (){document.getElementById('container').insertAdjacentHTML('beforeend',CCP2)},num*1000);
    // num++;
}
let i=0;

function kari(){
    document.getElementById('container').insertAdjacentHTML('beforeend', CCP[i]);
    let gari=setTimeout(kari,1000)
    
    i++;
    if(i>=6) clearTimeout(gari)
}

kari()


// setTimeout(function () {
//     document.getElementById('container').insertAdjacentHTML('beforeend', CCP[0]);
//     setTimeout(function () {
//         document.getElementById('container').insertAdjacentHTML('beforeend', CCP[1])
//         setTimeout(function () {
//             document.getElementById('container').insertAdjacentHTML('beforeend', CCP[2])
//             setTimeout(function () {
//                 document.getElementById('container').insertAdjacentHTML('beforeend', CCP[3])
//                 setTimeout(function () {
//                     document.getElementById('container').insertAdjacentHTML('beforeend', CCP[4])
//                     setTimeout(function () {
//                         document.getElementById('container').insertAdjacentHTML('beforeend', CCP[5])

//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000);
// function hyouji(n){
//     document.getElementById('container').insertAdjacentHTML('beforeend',CCP[n])
// }

//function nibyou(){
    
    // setTimeout(function (){document.getElementById('container').insertAdjacentHTML('beforeend',CCP[0])},1000);
    // setTimeout(function (){document.getElementById('container').insertAdjacentHTML('beforeend',CCP[1])},2000);
    // setTimeout(function (){document.getElementById('container').insertAdjacentHTML('beforeend',CCP[2])},3000);

//}

//nibyou();



//printRecipe(chahanCookProcedures);
//for文を使う



// fact(5) -> 5*4*3*2*1 = 120 -> コンソールで120が出る

// function fact(num){
// for(i=num;1<i;i--){
//     num=num*(i-1)
// }
// console.log(num)
// }

// 再起関数
function fact2(val){
    if(val<2) return 1;
    // if(val<2){
    //     return 1;
    // }
    return val * fact2(val-1)
}
console.log(fact2(5))
