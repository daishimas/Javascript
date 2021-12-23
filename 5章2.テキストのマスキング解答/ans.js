function maskCardNumber(cardNumber){
  let lastFourDigits = cardNumber.slice(-4);
  let maskedCardNumber = "*".repeat(cardNumber.length - 4) + lastFourDigits;
  container.insertAdjacentHTML('beforeend',`<p>お客様のクレジットカード番号：${maskedCardNumber}</p>`);
}

function maskEmail(emailAddress){
 let emailParts = emailAddress.split("@");
 let maskedEmail = emailParts[0].slice(0,2) + "*".repeat(emailParts[0].length - 2) + "@" + emailParts[1];
  container.insertAdjacentHTML('beforeend',`<p>お客様のEメールアドレス：${maskedEmail}</p>`);
}

maskCardNumber("1234567890123456");
maskEmail("abcdefg@example.co.jp");

maskCardNumber("9999999999999999");
maskEmail("nv@g~mail.com");

maskCardNumber("2983112934104649");
maskEmail("konnnani_nagai_address_demo_mask_dekimasuyo@example.com");

maskCardNumber("192168255254");
maskEmail("0o.l-_-lzzz@exa.jp");
