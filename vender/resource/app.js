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