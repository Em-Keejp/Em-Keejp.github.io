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
          <td><a href="./lyrics/${filenumber}.txt" download="${music} 歌詞.txt"><button>歌詞をダウンロード(txt)</button></td>
          <td><a href="./lyrics/${filenumber}.txt" target="_blank" rel="noopener noreferrer"><button>見る</button></td>
          <td>${musictitle}</td>
          </tr>`;
}

//表を自動で作る関数(通常版)
function createTopics(topicType , topicName , fileName){

    let refferFolderName="";
    let refferFilePath="";
    if(fileName=="auto"){
            if(topicType=="tool"){
            refferFolderName="-Tool";
        }else if(topicType=="game"){
            refferFolderName="-Game";
        }else if(topicType=="tale"){
            refferFolderName="-Tale";
        }else if(topicType=="article"){
            refferFolderName="-Article";
        }else if(topicType=="links"){
            refferFolderName="-Links";
        }else if(topicType=="storagegame"){
            refferFolderName="-Storage Games";
        }
        refferFilePath=`./${refferFolderName}/${topicName}/index.html`;
    }else{
        refferFilePath=fileName;
    }

    let label=`<td><span class="${topicType}">${topicName}</span></td>`;
    if(refferFilePath){
        label=`<td><span class="${topicType}"><a href="${refferFilePath}" style="text-decoration:none; color:inherit;">${topicName}</a></span></td>`;
    }
    return `<tr>`+`${label}`+`
            <td>`+topicButton(topicType , topicName , refferFilePath)+`</td>
            </tr>`;
}

function topicButton(topicType , topicName , fileName){ //トピックボタンを作る関数
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
    createMusic( "柊マグネタイト" , "テトリス" , "重音テトSV" , "A21" ),
    createMusic( "すりぃ" , "テレキャスタービーボーイ" , "鏡音レン" , "A6" ),
    createMusic( "いよわ" , "熱異常" , "足立レイ" , "A7" ),
    createMusic( "Atena" , "踊っチャイナ" , "初音ミク・重音テトSV" , "A8" ),
    createMusic( "Atena" , "クローンクローン" , "GUMI・鏡音リン" , "A9" ),
    createMusic( "Atena" , "どりーむもーど" , "音街ウナ・歌愛ユキ" , "A26" ),
    createMusic( "Atena" , "キャラクターT" , "重音テトUTAU・重音テトSV" , "A27" ),
    createMusic( "原口沙輔" , "人マニア" , "重音テト" , "A10" ),
    createMusic( "原口沙輔" , "イガク" , "重音テト" , "A11" ),
    createMusic( "Shu" , "シルバーコレクター" , "巡音ルカ" , "A12" ),
    createMusic( "かいりきベア" , "バグ" , "初音ミク" , "A13" ),
    createMusic( "かいりきベア" , "ネクラチューンサーカス" , "初音ミク" , "A14" ),
    createMusic( "40mP" , "ドリーマーズビート" , "初音ミク" , "A15" ),
    createMusic( "よみぃ" , "初音狂奏曲第01番「彗惺」" , "初音ミク" , "A16" ),
    createMusic( "Capchii" , "What's up? Pop!" , "初音ミク" , "A17" ),
    createMusic( "ぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬ" , `<br>`+"モ ミ ア ゲ ヲ シ ャ カ ア ゲ ヲ"+`<br>` , "ずんだもん・東北きりたん・初音ミク・歌愛ユキ・栗田まろん・可不・WhiteCUL・松嘩りすく" , "A18" ),
    createMusic( "せきこみごはん" , "征け" , "鏡音リン・鏡音レン" , "A19" ),
    createMusic( "TAK" , "PPPP" , "初音ミク・重音テトSV" , "A20" ),
    createMusic( "TAK" , "LEMON MELON COOKIE" , "初音ミク" , "A23" ),
    createMusic( "はろける" , "キャンディークッキーチョコレート" , "初音ミク・重音テトSV" , "A22" ),
    createMusic( "むさぬりゆ","0.0000034","初音ミク","A24"),
    createMusic( "sasakure.UK","トンデモワンダーズ","初音ミク・KAITO","A25"),
    createMusic( "佐藤ちなみに" , "最しゅう演目" , "初音ミク・可不" , "A28" ),
    createMusic( "佐藤ちなみに" , "血泥のダンスホール" , "初音ミク" , "A29" ),
    createMusic( "佐藤ちなみに" , "惨たらしいアソビ" , "初音ミク" , "A30" ),
    createMusic( "佐藤ちなみに" , "骸の園" , "初音ミク" , "A31" ),
    createMusic( "佐藤ちなみに" , "博士" , "重音テトSV" , "A32" ),
    createMusic( "佐藤ちなみに" , "リベル" , "初音ミク・重音テトSV" , "A33" ),
    createMusic( "佐藤ちなみに" , "押ス" , "重音テトSV" , "A34" ),
    createMusic( "佐藤ちなみに" , "マリ" , "初音ミク・重音テトSV" , "A35" ),
    createMusic( "佐藤ちなみに" , "キマツテスト" , "重音テトSV" , "A36" ),
    createMusic( "佐藤ちなみに" , "はやくにげなきゃ" , "初音ミク・雨衣" , "A37" ),
    createMusic( "佐藤ちなみに" , "アダチ・レイ" , "足立レイ・重音テト" , "A38" ),
    createMusic( "ピノキオピー" , "ノンブレス・オブリージュ" , "初音ミク" , "A39" ),

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
    createMusic( "YOASOBI" , "夜に駆ける" , "" , "B14"),
    createMusic( "米津玄師" , "Lemon" , "" , "B15"),
    createMusic( "sasakure.UK" , "The EmpError" , "" , "B16"),
];

//表データ(ツール)
const li_tool=[
    createTopics("tool","TurboWarpリンクコンバータ","./-Tool/TW_Converter/index.html"),
    createTopics("tool","MKボールころころ　アクセス帳","./-Tool/Acces_Center/index.html"),
    createTopics("tool","IMS便利ツール集","./-Tool/IMS_Tools/index.html"),
    createTopics("tool","その他",""),
];

//表データ(ゲーム)
const li_game=[
    createTopics("game","MKボールころころ一覧","auto"),
    createTopics("game","その他のMKのボールころころ一覧","auto"),
    createTopics("game","合作ころころ一覧","auto"),
    createTopics("game","クリッカーRPG","auto"),
    createTopics("game","LINES CONNECTION一覧","auto"),
    createTopics("game","猫の帰宅物語一覧",""),
    createTopics("game","猫退治ゲーム一覧",""),
    createTopics("game","Scratchシューティング一覧",""),
    createTopics("game","その他",""),
];

//表データ(物語_情報)
const tale_info=[
    createTopics("article","登場人物","./-Article/Characters/index.html"),
    createTopics("article","物語の時系列","./-Article/Timeline/index.html"),
    createTopics("article","物語の実装順","./-Article/Implementation_Order/index.html"),
];

//表データ(物語_公開済み)
const li_tale_public=[
    createTopics("tale","BA5の隠し要素","auto"),
    createTopics("tale","10周年企画第一弾の隠し要素",""),
    createTopics("tale","10周年企画第二弾　質問コーナー",""),
    createTopics("links","ショートムービー","auto"),
];

//表データ(物語_限定)
const li_tale_private=[
    createTopics("tale","MKは2026年に初めてエイプリルフールを謳歌するようです。","auto"),
    createTopics("tale","[sub story] 東方共喰譚","auto"),
    createTopics("tale","MKボールころころ一斉消失事件、そしてIMSの誕生まで",""),
];

//表データ(マニュアル)
const li_manual=[
    createTopics("article","この保管庫を編集したい方向けマニュアル","./-Article/Storage_Manual/index.html"),
    createTopics("article","MKボールころころコース作りマニュアル-IMS編","./-Article/IMS_Manual/index.html"),
    createTopics("article","マークダウン記法のマニュアル","./-Article/Markdown_Manual/index.html"),
];

//表データ(記事)
const li_article=[
    createTopics("article","自己紹介","./-Article/自己紹介/index.html"),
    createTopics("article","Scratchで仲がいい人たち","./-Article/仲良し/index.html"),
    createTopics("article","プロフィールコメント欄で行われているしりとりに関する情報","./-Article/しりとり情報/index.html"),
    //以上、お知らせの方でも同じ内容を掲載
    createTopics("article","プロフィールの独り言、ギャグ一覧","./-Article/profile/index.html"),
    createTopics("article","合作er達の最高傑作のボールころころ","auto"),
    createTopics("article","クリア困難なボールころころ","auto"),
];

//表データ(テンプレート)
const li_template=[
    createTopics("tool","ツールのテンプレート","./テンプレート_ツールトピック/index.html"),
    createTopics("game","ゲームのテンプレート","./テンプレート_ゲームトピック/index.html"),
    createTopics("tale","物語のテンプレート","./テンプレート_物語トピック/index.html"),
    createTopics("article","記事のテンプレート","./テンプレート_記事トピック/index.html"),
    createTopics("links","リンク集のテンプレート","./テンプレート_リンク集トピック/index.html"),
];

//表データ(お知らせ)
const li_notification=[
    li_article[0],
    createTopics("article","このサイトを作るのに参考にしたもの","./-Article/参考/index.html"),
    createTopics("article","このサイトの執筆協力者","./-Article/staff_members/index.html"),
    li_article[1],
    createTopics("article","よくMKに寄せられる質問","./-Article/よくある質問/index.html"),
    li_article[2],
    createTopics("article","関連リンク","./-Article/関連リンク/index.html"),
];

//表データ(保管庫Games)
const li_storagegames=[
    createTopics("storagegame","保管庫MiniGames","-Storage Games/MiniGames/index.html"),
    createTopics("storagegame","保管庫BigGames","-Storage Games/BigGames/index.html"),
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
            topicTable("関連情報",tale_info,` <p>
             自分が書いた物語をまとめてみました。基本は文章のみです。<br>
            ※一部ホラー注意<br>
            ※東方、
            <a href="https://pjsekai.sega.jp/" target="_blank" rel="noopener noreferrer">
            プロセカ</a>、広義ボーカロイドの二次創作要素が時々入ってきます。<br>
            時系列とかは一旦置いておいて、その場のノリとギャグを楽しむのが俺流の読み方かな。<br>
            ここに書いてあるストーリーはそんな感じに頭空っぽにして読んだ方が楽しめます。<br>
             </p>` )+
             topicTable("Scratchで作品として公開済み",li_tale_public,` <p>
            </p>` )+
             topicTable("保管庫のみで公開",li_tale_private,` <p>
            </p>` );
        }



//記事 article
const article = document.getElementById("article");
        if(article){
            article.innerHTML=
            topicTable("マニュアル",li_manual,` <p>
            マニュアルの方は保管庫の拡充のしかたやIMSの使い方とかをまとめた記事が今あります。ただしまだろくな内容になってないので執筆協力者募集中です。<br>
            記事の方は気ままに更新します。主に自分の体験談とか好きなこととか
            <a href="https://www.youtube.com/watch?v=OnCFEo_pXaY" target="_blank" rel="noopener noreferrer">
            好きな総菜発表ドラゴン</a>とか((殴<br>
            あとScratchで頻繁に更新されてるほぼギャグな「私について」とか。まあ結論、<hi>有用な情報はほぼ皆無</hi>に等しいのでよろしくお願いします。<br>
            </p>` )
            +
            topicTable("記事",li_article,``);
        }
        



//テンプレート template
const template = document.getElementById("template");
        if(template){
            template.innerHTML=
            topicTable("テンプレート",li_template,` <p>
            ツール、ゲーム、物語、記事の4種別のトピックのテンプレートです。<br>
            ほぼ作者用。<br>
            </p>` );
        }

//保管庫Games
const storagegames = document.getElementById("storagegames");
        if(storagegames){
            storagegames.innerHTML=
            topicTable("保管庫Games",li_storagegames,` <p>
            保管庫Gamesは、保管庫の愉快な(?)仲間たちがhtmlで作ったゲームをまとめたページです。(今はtaki567だけだけど...)<br>
            ぜひ遊んでください。<br>
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
        let other=``;
        if(parent=="-Tool"){
            category.class = "tool";
            category.backgroudClass = "b_tool";
            category.name = "ツール";
        }else if(parent=="-Game"){
            category.class = "game";
            category.backgroudClass = "b_game";
            category.name = "ゲーム";
        }else if(parent=="-Tale"){
            category.class = "tale";
            category.backgroudClass = "b_tale";
            category.name = "物語";
            other=`
                ■<a href="/-Article/Characters/index.html">登場人物</a>　　
                ■<a href="/-Article/Timeline/index.html">物語の時系列</a>　　
                ■<a href="/-Article/Implementation_Order/index.html">物語の実装順</a>
            `;
        }else if(parent=="-Article"){
            category.class = "article";
            category.backgroudClass = "b_article";
            category.name = "記事、お知らせ、その他";
        }else if(parent=="-Links"){
            category.class = "links";
            category.backgroudClass = "b_links";
            category.name = "リンク集";
        }else if(parent=="-Storage%20Games"){
            category.class = "storagegame";
            category.backgroudClass = "b_storagegame";
            category.name = "保管庫ゲームス";
        }else{
            category.class = "other";
            category.backgroudClass = "b_other";
            category.name = "特別なページ";
        }

        const head = document.getElementById("allArea");
        if(head){
            head.classList.add(category.backgroudClass);
        }

            topicHeader.innerHTML=`
            <h1>　${document.title}</h1>

            <p>　　分類 : <span class=${category.class}>${category.name}</span></p>
            
            <a href="/index.html" style="position:relative; left:24px;"><button>
                ホームへ戻る
            </button></a>

            <a href="javascript:history.back();" style="position:relative; left:36px;"><button>
                    前のページへ
            </button></a>
        
            <button style="position:relative; left:72px;" class="copyButton" id="linkCopy">
                サイト内のhtmlで使えるリンクをコピー
            </button>
            
            <p>　　${other}</p>
            `;
    }

    //フッター部-----------------------------------------------------------------------------
    //開発の関係でフッターが存在しないページもある。ここには他にも情報を追加していく予定
    const topicFooter = document.getElementById("topicFooter");
    if(topicFooter){

        let writers=``;

        if (typeof li_WrittenBy != "undefined"){//対象の配列が存在する?
            if(li_WrittenBy.length>0){//執筆協力者が一人でも記されていたら、「この記事を書いた人」表示する。
            writers=`
            <div class="episode"><h3 class="toggle close">この記事を書いた人 (<span class="hi">${li_WrittenBy.length}</span>人)</h3><div class="main">
                ${li_WrittenBy.join("")}
            </div></div>`
            }
        }

        topicFooter.innerHTML=`
            <br><br><br><br><br>${writers}<br><br><br><br><br>
        `;

    }
    

    //リンクコピー linkCopy---------------------------------------------------------------------------
    const linkCopy = document.getElementById("linkCopy");
        if(linkCopy){
            linkCopy.addEventListener("click",async() =>{
                //console.log("リンクコピーボタンが押されました。");
                try{
                    await navigator.clipboard.writeText('<a href="'+window.location.pathname+'">■名前■</a>'); //現在のパスをコピー
                }catch(err){
                     alert('コピーに失敗しました: ' + err);
                }
            });
        }


    //トグル機構----------------------------------------------------------------------------------------
    //chapterクラス
    function setupToggle(chapter){
    const toggle = chapter.querySelector(".toggle");
    const main = chapter.querySelector(".main");
        //console.log(chapter.innerHTML);
        //console.log(toggle);
        //console.log(main);
    if(toggle.classList.contains("close")){ //closeというクラス名を含んでる?
        main.classList.add("main_close"); //YES!!!! ならmainもそれに合わせよう。
    }

    toggle.addEventListener("click",()=>{
            console.log("トグルが押された。");
            main.classList.toggle("main_close");
            toggle.classList.toggle("close");
            toggle.classList.toggle("open");
            console.log(main);
            console.log(toggle);
    });
    }

    const chapters = document.querySelectorAll(".chapter");
    chapters.forEach(c => {setupToggle(c);});

    //querySelectorおよびそれのAll版
    //前者は一番最初に該当するものを選択、後者は全部引っ張り上げて配列化する。
    //引数に「.」をつけるとhtmlのクラス、「#」をつけるとhtmlのidから探す。

    //episodeクラス　関数は使い回し
    const episodes = document.querySelectorAll(".episode");
    episodes.forEach(e => {setupToggle(e);});




    //ゲームトグル機構---------------------------------------------------------------------------------------- 
    function setupGameToggle(gameChapter){
        const gtoggle = gameChapter.querySelector(".gtoggle");
        const main = gameChapter.querySelector(".main");
            console.log(gameChapter.innerHTML);
            console.log(gtoggle);
            console.log(main);
        if(gtoggle.classList.contains("gclose")){ //closeというクラス名を含んでる?
            main.classList.add("main_close"); //YES!!!! ならmainもそれに合わせよう。
        }

        gtoggle.addEventListener("click",()=>{
            main.classList.toggle("main_close");
            gtoggle.classList.toggle("gclose");
            gtoggle.classList.toggle("gopen");
        });
    }

    const gameToggeles = document.querySelectorAll(".gameChapter");
    gameToggeles.forEach(g => {setupGameToggle(g);});


    //キャラクター機構----------------------------------------------------------------------------------------
    document.querySelectorAll(".teller").forEach(c=>{
        const characterClass = [...c.classList].slice(1,2).join(""); //キャラクラス
        const characterName = [...c.classList].slice(-1).join(""); //キャラ名(3個目のクラスを指定するとサブネーム指定となる。)
        //.classListは厳密には配列ではないので、Array.from()や
        // [...](スプレッド構文)で配列化してからsliceしないとエラーになる。
        if(characterName=="n"){
            c.insertAdjacentHTML("beforebegin" , `<br>`);
            c.insertAdjacentHTML("afterend" , `<br>`);
        }else if(characterName=="NEWS"){
            c.insertAdjacentHTML("beforebegin" , `<div class="NEWS" teller" style="font-weight:600;"> NEWS : <br> </div>`);
        }else{
            c.insertAdjacentHTML("beforebegin" , `<div class="teller ${characterClass}"><a href="/-Article/Characters/index.html" style="text-decoration:none; font-weight:400; color:inherit;"> ${characterName} </a>: <br></div>`);                
        }
        c.insertAdjacentHTML("afterend" , `<br>`);
    });
    
    //markdownクラス自動変換機構
    document.querySelectorAll(".markdown").forEach(markdown=>{
        const div = document.createElement("div");
        div.innerHTML = marked.parse( //&lt;と&gt;は自動変換する。
            markdown.textContent.replaceAll("&lt;","<").replaceAll("&gt;",">")
        );
        markdown.replaceWith(div);
    });

    //markdownのコード自動変換機構
    document.querySelectorAll("code").forEach(block => {
        hljs.highlightElement(block);
        block.style=`
            background :linear-gradient(rgba(127, 127, 127, 0.15));
            padding: 3px;
            border-radius: 10px;
            overflow-x: auto;
            font-family: Consolas, monospace;
            max-width: 80%;
        `
    });

    //markdownのstrongタグ自動変換機構
    document.querySelectorAll("strong").forEach(strong => {
        strong.innerHTML=`<hi>${strong.textContent}</hi>`;
    });

    //userタグ自動変換機構
    document.querySelectorAll("user").forEach(user=>{
        const userName = user.textContent;
        let preName = `@`+userName;
        if(user.getAttribute("name")){
            preName = user.getAttribute("name");
        }
        user.innerHTML=`<a href="https://scratch.mit.edu/users/${userName}/" target="_blank" rel="noopener noreferrer">${preName}</a>`
    });

    //リンク自動生成機構
    document.querySelectorAll("url").forEach(url=>{
        let preName = url.textContent;
        if(url.getAttribute("name")){
            preName = url.getAttribute("name");
        }
        url.innerHTML=`<a href="${url.textContent}" target="_blank" rel="noopener noreferrer">${preName}</a>`
    });

    







































//JSを読み込んだ後にページを表示させる部-----------------------------------------------------------------------------------------------------
const allArea = document.getElementById("allArea");
    if(allArea){
        allArea.classList.remove("reloadWait"); //hiddenタグが解除されるとページが表示
    }

    /*
    MEMO リンクの書式

        <a href="" target="_blank" rel="noopener noreferrer">
      リンク</a>

    一応<url>タグでも代用可能

    */
