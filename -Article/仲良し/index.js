function createWriterList(name , memo){
    return `
            ・<a href="https://scratch.mit.edu/users/${name}/" target="_blank" rel="noopener noreferrer">@${name}</a><br>
            　${memo}<br>
            `;
}


const li_WrittenBy=[createWriterList("mahirokkk",``),
                    ];





function createNakayoshiList(name , memo){
    return `
            <a href="https://scratch.mit.edu/users/${name}/" target="_blank" rel="noopener noreferrer">@${name}</a><br>
            ${memo}<br>
            <br>
            <br>
            `;
}


const nakayoshi=[
    createNakayoshiList("kirameku26","BA5でマシンガンのような勢いでコメントをぶつけてきて以降知り合った。なお最近はコメントで暴走することはほとんどなくなった。"),
    createNakayoshiList("o_sushi","MKが初めて作ったスク友　アイコンがお寿司"),
    createNakayoshiList("hirokin2011","プレイスキル化け物　MKが挑んで全く歯が立たないようなレベルをクリアしたりしてる。"),
    createNakayoshiList("take_take_take","今後の進展が楽しみ。合作ころころ企画生みの親"),
    createNakayoshiList("take_sub","↑の人のサブ垢らしい。"),
    createNakayoshiList("taru-ru","またまたプレイスキル化け物　おまけにプロセカも上手い。"),
    createNakayoshiList("seisakusha-3978","難化大好き人間"),    
    createNakayoshiList("karikarium","譜面も作品数もスーパー物量センター(ナンバリング130までいってる。)"),    
    createNakayoshiList("KOGYOKUSHA2022076","高密度ながら簡単で楽しいコース作りが得意　僕も見習いたーい!"),    
    createNakayoshiList("wakannai123","「ネコ育て」Lover"), 
    createNakayoshiList("waka_sub","↑の人のサブ垢。かなり不定期気味だがボールころころ作品がある。"), 
    createNakayoshiList("k2123456","マイペース活動家"),    
    createNakayoshiList("Mkants","プレイスキル化け物三人衆の3人目"),    
    createNakayoshiList("zyutazyudasu","The BackRoomsが好きらしい。なんだと実は僕もそうなのだ!"),    
    createNakayoshiList("wanda8gd","普通に良き話し相手"),
    createNakayoshiList("sanaeosi378","UTころころ新作楽しみ　毎回すごいギミックが来るんだもん。"),
    createNakayoshiList("aoto7","7年ってすごいな。謎解きイベントをやっていたりシルバーコレクターMASTERをAPしていたりとボールころころ以外で強さを見せつけている。"),  
    createNakayoshiList("gyakuhonyakusss2","新作楽しみにしてくれてて嬉しい"),
    createNakayoshiList("Aruto719","唯一3Dくまころころを改造できる技量の持ち主"),
    createNakayoshiList("haru_1129","活休まじかー　ｳｿﾀﾞﾄﾞﾝﾄﾞｺﾄﾞｰﾝ!"),
    createNakayoshiList("BOYKOTAROU","BKRころころというシリーズを作っている。是非一度やってみて! (なお現在Scratchのバグによりプレイできない作品が存在する。)"),
    createNakayoshiList("huz345","凄いポテンシャルを感じるクリエイター　いつの間にか音沙汰がなくなっていた。生きてるかな...<br>前言撤回、ちゃんと生きてた。ひとまず安心。"),
    createNakayoshiList("taki567","複雑なIMSを使いこなすすげぇ奴"),
    createNakayoshiList("05hyuuu","「おまけころころ 鬼畜 remix」というシリーズ名かどうかも怪しいシリーズを作っていたが、すっかりシリーズ名として定着した、そんなシリーズを作ってる人"),
    createNakayoshiList("06jyuuu","この人の作品すごいから見て!　ちなみに↑の人のサブ垢だがほぼメイン垢になりつつある。"),
    createNakayoshiList("rollinghuman","この人、ひょっとして...　いろんなボールころころエンジンに挑戦している。"),
    createNakayoshiList("Nekocha-2357","4人目となる新たなるPSバケモノ　まもなく活動停止か...　その間に残した成績は「★7のおまけ26を倒した」などとんでもない。"),
    createNakayoshiList("ayukki-01","いろんな場所に居るイメージ　フクオカトリップ奇騒曲知ってるのは驚いた。"),
    createNakayoshiList("nekoneko_catdesu","最近よくコメントしてくれる。"),
    createNakayoshiList("wanpakubouzu","もうちょっとは謙虚さというものを身に着けてほしい...!!!"),
    createNakayoshiList("5-4-ON","ついに芯だけになったトイレットペーパー...のようだ。"),
    createNakayoshiList("tyottogan","BΕ15を1バリア全回収、BE12をノーダメ全回収するなど実力はかなり高い。ボールころころシリーズも作っている。"),
    createNakayoshiList("SANti-36","同じプロセカ好きということで、波長が合いそう。名前の元ネタはAPPEND36のSAN値直葬って曲から。"),

    










    



];

document.getElementById("nakayoshi").innerHTML=`
                合計<span class="hi">${nakayoshi.length}</span>人<br><br>
                ${nakayoshi.join("")}
            `