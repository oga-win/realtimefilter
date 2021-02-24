$(document).ready(function(){
    
$(function () {
    searchWord = function(){
        
        let searchText = $(this).val(); // 検索ボックスに入力された値
        let targetText;

        $('.search-box li').each(function() {
        targetText = $(this).text();

        // 検索対象となるリストに入力された文字列が存在するかどうかを判断
        if (targetText.indexOf(searchText) != -1) { //targetTextにsearchTextにない文字が存在しない場合(=何かが一致していた場合)
            $(this).removeClass('hidden'); //それにhiddenクラスを取り除く(表示)
        } else {  //一致する文字がない場合
            $(this).addClass('hidden'); //それにhiddenクラスを追加(非表示)
            }
        });
};

        // searchWordの実行
    $('#search-text').on('input', searchWord);
        
});

});