const kojinnjouhou=[
    {CardNumber: "1234567890123456" ,Email: "abcdefg@example.co.jp"},
    {CardNumber: "9999999999999999" ,Email: "nv@g~mail.com"},
    {CardNumber: "2983112934104649",Email: "konnnani_nagai_address_demo_mask_dekimasuyo@example.com"},
    {CardNumber: "192168255254" ,Email: "0o.l-_-lzzz@exa.jp"},
    {CardNumber: "25864314785211236989" ,Email: "karinikorehajikkennda@example.jp"}
]

function maskCardNumber(num) {
    let kiritori = num.slice(-4);
    let numhuseji = '************' + kiritori ;
    container.insertAdjacentHTML('beforeend',`<p>お客様のクレジットカード番号：${numhuseji}</p>`);
}

function maskEmail(addr){
    
    let addrwake = addr.split('@');
    let addrwakemae = addrwake[0];

    let awmae2 = addrwakemae.slice(0,2);

    let awusiro2 = addrwakemae.slice(2);

    let kari = awusiro2.length;

    let arr = Array.from(awusiro2);
    for( i=0 ; i<=kari-1 ; i++ ){
        let huse =arr[i];
        let huse2 =huse.replace(huse,'*');
        arr.splice(i,1,huse2);
    }
    let renketu = arr.join("");
        
    let doma = addrwake[1];
    let addrhuseji = awmae2+renketu +'@'+ doma ;
        container.insertAdjacentHTML('beforeend',`<p>お客様のEメールアドレス：${addrhuseji}</p>`);
    }

    for (let i = 0 ; i < kojinnjouhou.length ; i++){
        maskCardNumber(kojinnjouhou[i].CardNumber);
        maskEmail(kojinnjouhou[i].Email);
    }