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
	} else {
		messageSpan.textContent = "やり直し";
		messageSpan.style.color = 'red';
		messageSpan.style.fontSize = "30px";
	}	
}

