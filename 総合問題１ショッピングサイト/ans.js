const dairyProductLists =[{
    productId: 1, productCategory: "牛乳", productName: "みつ葉牛乳", productPrice: 200, stockQuantity: 30, expiryDate: "2021/10/1", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 2, productCategory: "牛乳", productName: "がっつり濃厚5.2", productPrice: 420, stockQuantity: 15, expiryDate: "2021/10/8", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 3, productCategory: "バター", productName: "みつ葉バター", productPrice: 1150, stockQuantity: 10, expiryDate: "2021/11/1", src:"./images/butter.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 4, productCategory: "バター", productName: "サルピス発酵バター", productPrice: 1200, stockQuantity: 8, expiryDate: "2021/12/15", src:"./images/butter.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 5, productCategory: "牛乳", productName: "花印マグミルク牛乳", productPrice: 190, stockQuantity: 5, expiryDate: "2021/10/4", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 6, productCategory: "バター", productName: "花印無塩北海道バター", productPrice: 200, stockQuantity: 5, expiryDate: "2021/10/28", src:"./images/butter.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 7, productCategory: "バター", productName: "大正チューブバター", productPrice: 320, stockQuantity: 10, expiryDate: "2021/10/30", src:"./images/butter.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 8, productCategory: "牛乳", productName: "田中牛乳", productPrice: 275, stockQuantity: 25, expiryDate: "2021/10/3", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 9, productCategory: "牛乳", productName: "大正おいしい牛乳", productPrice: 330, stockQuantity: 25, expiryDate: "2021/10/9", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 10, productCategory: "ヨーグルト", productName: "大正ブルガリアヨーグルト", productPrice: 200, stockQuantity: 25, expiryDate: "2021/10/5", src:"./images/yorgurt.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 11, productCategory: "ヨーグルト", productName: "大正P-1ヨーグルト", productPrice: 140, stockQuantity: 35, expiryDate: "2021/10/15", src:"./images/yorgurt.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 12, productCategory: "ヨーグルト", productName: "山梨生乳100%ヨーグルト", productPrice: 250, stockQuantity: 25, expiryDate: "2021/10/11", src:"./images/yorgurt.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 13, productCategory: "牛乳", productName: "山梨低温殺菌牛乳", productPrice: 340, stockQuantity: 25, expiryDate: "2021/10/4", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 14, productCategory: "バター", productName: "ホタテバター", productPrice: 1500, stockQuantity: 5, expiryDate: "2021/12/8", src:"./images/butter.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 15, productCategory: "ヨーグルト", productName: "10日分の鉄分飲むヨーグルト", productPrice: 90, stockQuantity: 35, expiryDate: "2021/10/20", src:"./images/yorgurt.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 16, productCategory: "ヨーグルト", productName: "大山田イミューンヨーグルト", productPrice: 200, stockQuantity: 25, expiryDate: "2021/10/19", src:"./images/yorgurt.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 17, productCategory: "牛乳", productName: "大山田農場3.8牛乳", productPrice: 200, stockQuantity: 15, expiryDate: "2021/10/3", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 18, productCategory: "バター", productName: "大山田極上バター", productPrice: 750, stockQuantity: 10, expiryDate: "2021/11/19", src:"./images/butter.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 19, productCategory: "牛乳", productName: "大山田あきば", productPrice: 200, stockQuantity: 30, expiryDate: "2021/10/6", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}, {
    productId: 20, productCategory: "牛乳", productName: "大山田いちご", productPrice: 200, stockQuantity: 25, expiryDate: "2021/10/2", src:"./images/milk.png", comment: "「おいしさ」も「栄養」も両方あきらめない。ワンランク上のカルシウム強化乳飲料。コップ2杯で1日分のカルシウムとビタミンD、牛乳の約2倍のMBP®をおいしく摂取できます。"}
];
const NOWDATE = "2021/10/1";

function printSalePage(){
    dairyProductLists.forEach(ele => container.insertAdjacentHTML('beforeend',`
    <div class="itembox">
    <div class="box-left">
    <p>${ele.productCategory}</p>
    <img src="${ele.src}">
    </div>
    <div class="box-right">
    <h2>${ele.productName}</h2>
    <span>価格：${ele.productPrice}円　在庫${ele.stockQuantity}個</span>
    <form>
        <label for="Purchase-number">個数</label>
        <input type="text" class="Purchase-number" id="Purchase-number${ele.productId}" name="Purchase-number">
        <input class="btn" type="submit"  onclick="buttonClick(${ele.productId})" value="購入する">
    </form>
    <p>${ele.comment}</p>
    </div>
    </div>`));
}

printSalePage()




//問題１
//消費期限(expiryDate)が近いものから順番に並べ替えて表示する関数printExpirySale()を作成してください。
//HTMLのボタンに割り当ててあるので、実際に動作するか確認すること。


let expiryDateshoujun = JSON.parse(JSON.stringify(dairyProductLists));//配列データを複製

expiryDateshoujun.sort((x,y) => new Date(x.expiryDate) - new Date(y.expiryDate));//new Dateで型の変形、並び替え

function printExpirySale(){

    function deleteSalePage(){
        let ele = document.getElementById("container")
        while( ele.firstChild ){
            ele.removeChild( ele.firstChild );
          }
    }//子要素を削除する関数
    
    deleteSalePage()   

    expiryDateshoujun.forEach(ele => container.insertAdjacentHTML('beforeend',`
    <div class="itembox">
    <div class="box-left">
    <p>${ele.productCategory}</p>
    <img src="${ele.src}">
    </div>
    <div class="box-right">
    <h2>${ele.productName}</h2>
    <span id="waribiki${ele.productId}">価格：${ele.productPrice}円</span>
    <form>
        <label for="Purchase-number">個数</label>
        <input type="text" class="Purchase-number" id="Purchase-number${ele.productId}" name="Purchase-number">
        <input class="btn" type="submit" onclick="buttonClick2(${ele.productId})" value="購入する">
    </form>
    <p>${ele.comment}</p>
    </div>
    </div>`));

for(dairyProduct of expiryDateshoujun){
    let aaa = (Date.parse(dairyProduct.expiryDate) - Date.parse(NOWDATE))/86400000;
    console.log(aaa )
    if(aaa<=3){         
        document.getElementById(`waribiki${dairyProduct.productId}`).innerHTML = `価格：${dairyProduct.productPrice}円　半額！　在庫${dairyProduct.stockQuantity}個`
}else if(aaa<=7){     
         document.getElementById(`waribiki${dairyProduct.productId}`).innerHTML = `価格：${dairyProduct.productPrice}円　２割引き！　在庫${dairyProduct.stockQuantity}個`
 }
}
}
for(dairyProduct of expiryDateshoujun){//forで配列を回す
    let aaa = (Date.parse(dairyProduct.expiryDate) - Date.parse(NOWDATE))/86400000;//日付の計算
    console.log(aaa )
    if(aaa<=3){//賞味期限値引きの条件
        dairyProduct.productPrice=dairyProduct.productPrice/2;//値引きの価格に置き換え
        
}else if(aaa<=7){
        dairyProduct.productPrice=dairyProduct.productPrice*0.8;
        
}
}

//問題2
//順番を並び替えた状態から元に戻せるようにしてください。
//HTMLのボタンに割り当てること。

function motonimodosu(){

    //子要素を削除する関数を作る
    function deleteSalePage(){
        let ele = document.getElementById("container")
        while( ele.firstChild ){
            ele.removeChild( ele.firstChild );
          }
    }
    
    deleteSalePage();

    dairyProductLists.forEach(ele => container.insertAdjacentHTML('beforeend',`
    <div class="itembox">
    <div class="box-left">
    <p>${ele.productCategory}</p>
    <img src="${ele.src}">
    </div>
    <div class="box-right">
    <h2>${ele.productName}</h2>
    <span>価格：${ele.productPrice}円</span>
    <form>
        <label for="Purchase-number">個数</label>
        <input type="text" class="Purchase-number" id="Purchase-number${ele.productId}" name="Purchase-number">
        <input class="btn" type="submit" onclick="buttonClick(${ele.productId})" value="購入する">
    </form>
    <p>${ele.comment}</p>
    </div>
    </div>`));  
}


//ボタンクリック（平時）会計
function buttonClick(productId){
    let kosuu = document.getElementById(`Purchase-number${productId}`).value;
    
    for(let i=0 ; i<=dairyProductLists.length;i=i+1){
            if(dairyProductLists[i].productId===productId && kosuu<=dairyProductLists[i].stockQuantity){ 
            let calc=kosuu*dairyProductLists[i].productPrice;
            if(window.confirm(`${dairyProductLists[i].productName}が${kosuu}個ですね。合計${calc}円です。ご購入されますか？`)){
                window.alert(`購入しました！`)
            }else{
                window.alert(`キャンセルしました・・・。`)
            }
        }else if(dairyProductLists[i].productId===productId && kosuu>=dairyProductLists[i].stockQuantity){
        window.alert(`在庫以上の注文です。`)}
        }
    } 

//ボタンクリック（値引き時）会計
function buttonClick2(productId){
        let kosuu = document.getElementById(`Purchase-number${productId}`).value;
        
        for(let i=0 ; i<=expiryDateshoujun.length;i=i+1){
                if(expiryDateshoujun[i].productId===productId && kosuu<=expiryDateshoujun[i].stockQuantity){ 
                let calc=kosuu*expiryDateshoujun[i].productPrice;
                if(window.confirm(`${expiryDateshoujun[i].productName}が${kosuu}個ですね。合計${calc}円です。購入するか？`)){
                    window.alert(`購入しました！`)
                }else{
                    window.alert(`キャンセルしました・・・。`)
                }
            }else if(expiryDateshoujun[i].productId===productId && kosuu>=expiryDateshoujun[i].stockQuantity){
            window.alert(`在庫以上の注文です。`)}
            }
        } 

//問題3
//消費期限順に並び変えた上で、消費期限が3日以内の商品は半額、一週間以内のものは2割引きとして表示しなおす関数を作成してください。
//また、半額、2割引きになったことを表示するようにしてください。今日は2021年10月1日とします。
//HTMLのチェックボックスに割り当てること。      
//ヒント→賞味期限から本日の日付10/1を引いて、3日、週間を出してからifで判断

//問題4
//購入ボタンを押すことで商品を購入する関数を作成してください。Q1表示方法　
//押すとアラートメッセージが出て,
//何を何個合計いくらです購入しますか？はい　いいえ→はい→購入しました。いいえは終了。
//在庫以上の注文についてはアラートを表示し、ユーザーに注意喚起するようにしてください。q2数値のみ入力で、在庫以上の数字だったらアラート出るようにする
//また、価格の横に在庫数の欄を新しく設けてください。q3在庫と入力数は連動するか

//問題5
//それぞれの商品で入力した個数を基に合計金額を算出する関数を作成してください。
//在庫以上の注文についてはアラートを表示し、ユーザーに注意喚起するようにしてください。
//HTMLのボタンに割り当てること。