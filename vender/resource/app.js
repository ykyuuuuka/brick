$(".code").exCodePrettify({
	showDemo:true,
	behaveJS : true
});

//ドラッグ&ドロップの実行
$(function() {
	$( "#sortable" ).sortable({
		revert: true
	});
	$( "div" ).disableSelection();
});

//code整形の関数宣言
function exCode() {
	$('.code').exCodePrettify({
		showDemo:true,
		behaveJS : true
	});
}


//実体参照への変換
function encode(code) {
	var encode_code = code;
	encode_code = encode_code.replace(/\t/g,'');
	//htmlの予約語を表示するための苦肉の策
	encode_code = encode_code.replace(/[[:space:]]/g,'&amp;nbsp;');
	encode_code = encode_code.replace(/&/g,'&amp;');
	encode_code = encode_code.replace(/&amp;lt;/g,'<');
	encode_code = encode_code.replace(/&amp;gt;/g,'>');
	encode_code = encode_code.replace(/<style/g,'&lt;style');
	encode_code = encode_code.replace(/style>/g,'style&gt;');
	return encode_code;
}

//コードエリアをクリックした時の処理
$(".js-panel").click(function() {
	var target = $(this).find(".js-panel-code").html();
	var p = "{codeType:'html'}";
	target = encode(target);
	console.log(target);
	var prettify_code = '<textarea class="code" data-ex-code-prettify-param="'+ p +'">'+ target +'</textarea>';
	$('.js-prettify-wrapper').append(prettify_code);
	exCode();
	return false;
});


//exCodePrettifyAPIを使って全textareaのコードを取得
$('#js-btn-copy').click(function() {
	console.log('click');

	var copyText = '';
	var num = 0;

	$('.ui-state-default').each(function() {
		var api = $('textarea').eq(num).exCodePrettify({api:true});
		var code = api.getCode();
		copyText = copyText + code + '\r\n';
		num++;
	});

	copyText = encode(copyText);

	$('#js-copy-code').html(copyText);
	var target = $('#js-copy-code');
	target.select();
	document.execCommand("copy");

	$('.notice-copy').fadeIn('slow');
	setTimeout(function(){
		$('.notice-copy').fadeOut('slow');
	},2000);

	return false;
});
