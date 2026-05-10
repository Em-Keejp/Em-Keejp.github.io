//関数部-------------------------------------------------------------------------------
//表を自動で作る関数(音楽版)
function createMusic(composer,music,vocal,filenumber){
  let musictitle;
  if(vocal==""){
    musictitle=`[${composer}] ${music}`;
  }else{
    musictitle=`[${composer}] ${music} feat. ${vocal}`;
  }

  return `<tr>
          <td>${musictitle}</td>
          <td><a href="./lyrics/${filenumber}.txt"><button>見る</button></td>
          <td><a href="./lyrics/${filenumber}.txt" download="${music} 歌詞.txt"><button>歌詞をダウンロード(txt)</button></td>
          </tr>`;
}

//表を自動で作る関数(通常版)
function createTopics(topicType , topicName , fileName){
    return `<tr>
            <td><span class=${topicType}>${topicName}</span></td>
            <td>`+topicButton(fileName)+`</td>
            </tr>`;
}

function topicButton(fileName){ //トピックボタンを作る関数
    if(fileName){
        return`
        <a href="${fileName}"><button class="topic">詳細を見る</button></a>
        `;
    }else{
        return`
        <button disabled class="topic">[!]未実装</button>
        `;
    }
}

//表の題名と表データを入れる関数(音楽版)
function MusicTable(title,table){ 
  return `<h3>${title}　　(収録<span class="hi">${table.length}</span>曲)</h3>
          <table border="1">
            ${table.join("")}
           </table>`;
}

//表の題名と表データを入れる関数(通常版)
function topicTable(title,table,comment){ 
    return ` ${comment} <h3>${title}　　(<span class="hi">${table.length}</span>件のトピック)</h3>
            <table border="1">
            ${table.join("")}
            </table>`;
}




//表データ部--------------------------------------------------------------------------------
//表データ(ボカロ系)
const li_vocaloid=[ 
  createMusic( "Sakuzyo" , "怪獣になりたい" , "初音ミク" , "A1" ),
  createMusic( "サツキ" , "メズマライザー" , "初音ミク・重音テトSV" , "A2" ),
  createMusic( "椎名もた(ぽわぽわP)" , "少女A" , "鏡音リン" , "A3" ),
  createMusic( "吉田夜世" , "オーバーライド" , "重音テトSV" , "A4" ),
  createMusic( "柊マグネタイト" , "マーシャル・マキシマイザー" , "可不" , "A5" ),
  createMusic( "すりぃ" , "テレキャスタービーボーイ" , "鏡音レン" , "A6" ),
  createMusic( "いよわ" , "熱異常" , "足立レイ" , "A7" ),
  createMusic( "Atena" , "踊っチャイナ" , "初音ミク・重音テトSV" , "A8" ),
  createMusic( "Atena" , "クローンクローン" , "GUMI・鏡音リン" , "A9" ),
  createMusic( "原口沙輔" , "人マニア" , "重音テト" , "A10" ),
  createMusic( "原口沙輔" , "イガク" , "重音テト" , "A11" ),

];

//表データ(その他の音楽)
const li_others=[ 
  createMusic( "Masayoshi Minoshima" , "Bad Apple!!" , "nomico" , "B1" ),
  createMusic( "back number" , "高嶺の花子さん" , "" , "B2" ),
  createMusic( "Mrs.GREEN APPLE" , "ダンスホール" , "" , "B3" ),
  createMusic( "Mrs.GREEN APPLE" , "ライラック" , "" , "B4" ),
  createMusic( "Mrs.GREEN APPLE" , "familie" , "" , "B5" ),
  createMusic( "Mrs.GREEN APPLE" , "クスシキ" , "" , "B6" ),
  createMusic( "Mrs.GREEN APPLE" , "lulu" , "" , "B7" ),
  createMusic( "Alexandros" , "閃光　(「閃光のハサウェイ」として流行った。)" , "" , "B8" ),
  createMusic( "M!LK" , "好きすぎて滅！" , "" , "B9" ),
  createMusic( "M!LK" , "イイじゃん" , "" , "B10" ),
  createMusic( "CANDY TUNE" , "倍倍FIGHT!" , "" , "B11"),
  createMusic( "RADWIMPS" , "正解" , "" , "B12"),
  createMusic( "LindaAI-CUE" , "さいたま2000" , "山田ふしぎ" , "B13"),

];

//表データ(ツール)
const li_tool=[
  createTopics("tool","MKボールころころ　アクセス帳","/_Tool/Acces Center/index.html"),
  createTopics("tool","IMS便利ツール集","./_Tool/IMS Tools/index.html"),
  createTopics("tool","その他","")
];

//表データ(ゲーム)
const li_game=[
  createTopics("game","MKボールころころ一覧",""),
  createTopics("game","MK?????ころころ一覧(保管庫限定)",""),
  createTopics("game","合作ころころ一覧",""),
  createTopics("game","クリッカーRPG",""),
  createTopics("game","LINES CONNECTION一覧",""),
  createTopics("game","その他","")
];

//表データ(物語_公開済み)
const li_tale_public=[
  createTopics("tale","BA5の隠し要素",""),
  createTopics("tale","10周年企画第一弾の隠し要素",""),
  createTopics("tale","10周年企画第二弾　質問コーナー","")
];

//表データ(物語_限定)
const li_tale_private=[
  createTopics("tale","[sub story] 東方共喰譚",""),
];

//表データ(記事)
const li_article=[
  createTopics("article","自己紹介","/_Article/自己紹介/index.html"),
];

//表データ(お知らせ)
const li_notification=[
  createTopics("article","自己紹介","/_Article/自己紹介/index.html"),
  createTopics("article","このサイトを作るのに参考にしたもの","/_Article/参考/index.html"),
  createTopics("article","Scratchで仲がいい人たち",""),
  createTopics("article","よくMKに寄せられる質問",""),
  createTopics("article","プロフィールコメント欄で行われているしりとりに関する情報","/_Article/しりとり情報/index.html"),
  createTopics("article","関連リンク","/_Article/関連リンク/index.html")
];






        
// 実行部------------------------------------------------------------------------------------
//歌詞
const lyrics = document.getElementById("lyrics");
      if(lyrics){
        lyrics.innerHTML=
        MusicTable("(広義)ボカロ系",li_vocaloid)+
        MusicTable("それ以外",li_others);
      }


//ゲーム tool
const tool = document.getElementById("tool");
        if(tool){
            tool.innerHTML=
            topicTable("ツール",li_tool,`<p>
            ScratchやTurboWarpで作った便利ツール系をここにまとめました。
            </p> ` );
        }


//ゲーム game
const game = document.getElementById("game");
        if(game){
            game.innerHTML=
            topicTable("ゲーム",li_game,`<p>
            ScratchやTurboWarpで作ったゲーム系をここにまとめました。
            </p> ` );
        }


//物語 tale
const tale = document.getElementById("tale");
        if(tale){
            tale.innerHTML=
            topicTable("Scratchで作品として公開済み",li_tale_public,` <p>
             自分が書いた物語をまとめてみました。基本は文章のみです。<br>
            ※一部ホラー注意<br>
            ※東方、
            <a href="https://pjsekai.sega.jp/" target="_blank" rel="noopener noreferrer">
            プロセカ</a>、広義ボーカロイドの二次創作要素が時々入ってきます。
             </p>` )+
             topicTable("保管庫のみで公開",li_tale_private,` <p>
            </p>` );
        }



//記事 article
const article = document.getElementById("article");
        if(article){
            article.innerHTML=
            topicTable("記事",li_article,` <p>
            気ままに更新します。主に自分の体験談とか好きなこととか
            <a href="https://www.youtube.com/watch?v=OnCFEo_pXaY" target="_blank" rel="noopener noreferrer">
            好きな総菜発表ドラゴン</a>とか((殴<br>
            あとScratchで頻繁に更新されてるほぼギャグな「私について」とか。<br>
            まあ結論、有用な情報はほぼ皆無に等しいのでよろしくお願いします。
            </p>` );
        }



//お知らせ notification
const notification = document.getElementById("notification");
        if(notification){
            notification.innerHTML=
            topicTable("その他、お知らせなど",li_notification,`<p>
            お知らせとかはここにまとめてます。
            </p> ` );
        }



//ヘッダー部-----------------------------------------------------------------------------
const topicHeader = document.getElementById("topicHeader");
    if(topicHeader){ //document.title...現在のタイトルを取得
        const parent = //split...引数単位で配列に変換　slice...配列を切り出す　join...配列を文字列に
            location.pathname.split("/").slice(1,2).join("");
            //2つ上のディレクトリ(属するカテゴリ)を取得。
        let category = { //オブジェクト　category を定義
            class:"",
            backgroudClass:"",
            name:"",
        };
        if(parent=="_Tool"){
            category.class = "tool";
            category.backgroudClass = "b_tool";
            category.name = "ツール";
        }else if(parent=="_Game"){
            category.class = "game";
            category.backgroudClass = "b_game";
            category.name = "ゲーム";
        }else if(parent=="_Tale"){
            category.class = "tale";
            category.backgroudClass = "b_tale";
            category.name = "物語";
        }else if(parent=="_Article"){
            category.class = "article";
            category.backgroudClass = "b_article";
            category.name = "記事、お知らせ、その他";
        }

        const head = document.getElementById("allArea");
        if(head){
            head.classList.add(category.backgroudClass);
        }

        topicHeader.innerHTML=
        `
        <h1>　${document.title}</h1>

        <p>　　分類 : <span class=${category.class}>${category.name}</span></p>

        <a href="/index.html">
            <button style="position:relative; left:24px;">
                ホームへ戻る
            </button>
        </a>

        <a href="javascript:history.back();">
            <button style="position:relative; left:36px;">
                前のページへ
            </button>
        </a>
        `;
    }
















































//JSを読み込んだ後にページを表示させる部-----------------------------------------------------------------------------------------------------
const allArea = document.getElementById("allArea");
    if(allArea){
        allArea.classList.remove("reloadWait"); //hiddenタグが解除されるとページが表示
    }

    /*
    */
