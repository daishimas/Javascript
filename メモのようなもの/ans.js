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

// dairyProductLists

// 昇順に並べたが日付がおかしい。
dairyProductLists.sort((a,b) =>{
  if(a.expiryDate > b.expiryDate) return 1;
  if(a.expiryDate < b.expiryDate) return -1;
});
console.log(dairyProductLists);

// 連想配列でexpiryDateを書き換えて戻してみようか？
//kokonso-rurururureuru are?areare?