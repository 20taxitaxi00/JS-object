function myalert(){
	// alert('こんちゃっす');
	// アラートを表示した後も自由に処理を追加できる（自作アラートの長所）
	let hantei = confirm('このボタン押してもいいですか？');
	// console.log(hantei);
	if (hantei === true){
		console.log('大丈夫');
	}　else {
		console.log('やり直し');
	}

	// 文字の変え方
	let messageSpan = document.getElementById('message');
	// messageSpan.textContent = '変わりました';
	// messageSpan.style.color = 'blue';

	// 今日の宿題
	// OKボタンが押されたら「大丈夫」、
	// キャンセルが押されたら「やり直し」
	// とid="message"のspanタグの部分に表示しましょう
	if (hantei === true){
		messageSpan.textContent = "大丈夫";
		messageSpan.style.color = 'blue';
		messageSpan.style.fontSize ="40px";
	} else {
		messageSpan.textContent = "やり直し";
		messageSpan.style.color = 'red';
		messageSpan.style.fontSize = "30px";
	}	
}


console.log("------関数（引数付き）------");

// 引数とは関数の処理を行うために必要な情報
// 関数の書き方
// function 関数名（引数1、引数2、・・・）{
// 	処理
// }？
// alert(表示したい文字) この場合、表示したい文字の部分が引数

function myalert2(displayMessage){
	alert(displayMessage);
}


// 以下の関数を作成して、作成した関数を実行してください。
// 関数名：printHoge
// 処理内容：「Hoge」とコンソールに表示する
function printHoge(){
	console.log('Hoge');
}
// 作った関数を実行
printHoge();
printHoge();
// 引数バージョン
// function printHoge(comment){
// 	console.log(comment);
// }
// printHoge('Hoge');


// 以下の関数を作成して、作成した関数を実行してください。
// 引数：1つの数値
// 処理内容：引数で受け取った数値をコンソールに表示する
function printNum(number){
	console.log(number);
}
printNum(555);
printNum(2000);


// 引数：1つの数値
// 処理内容：引数で受け取った数の段の九九をコンソールに表示
function printKuKu(kuku){
	for (let i = 1; i <= 9; i++) {
	  console.log(kuku*i);
	}
}
printKuKu(1);
printKuKu(2);


// 引数：2つの数値
// 処理内容：引数で受け取った2つの数値の掛け算の答えをコンソールに表示
function printKakezan(kake,zan){
	console.log(kake*zan);
}
printKakezan(8,9);
printKakezan(2,9);


// 引数：1つの数値
// 処理内容：引数で受け取った数値の偶数or奇数判定
function printIsEven(num){
	if(num % 2 === 0){
		console.log(`${num}は偶数です。`);
	} else {
		console.log(`${num}は奇数です。`);
	}
}
printIsEven(6);


// 引数1：1つの文字列
// 引数2：1つの数字
// 処理内容：受け取った文字列を、受け取った数値分繰り返す
function printMessage(text,num){
	for (let i = 0; i < num; i++){
		console.log(text);
	}
}
printMessage("あいうえお",5);





