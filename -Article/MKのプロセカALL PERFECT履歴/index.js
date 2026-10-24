function createWriterList(name , memo){
    return `
            ・<a href="https://scratch.mit.edu/users/${name}/" target="_blank" rel="noopener noreferrer">@${name}</a><br>
            　${memo}<br>
            `;
}


const li_WrittenBy=[createWriterList("mahirokkk",``),
                    ];






function createAllPerfectHistoryList(date , difficulty , level , name , memo ){
    if(date=="0"||date=="不明"){
        date="不明";
    }else{
        date=String(date).slice(0,4)+"/"+
             String(date).slice(4,6)+"/"+
             String(date).slice(6,8);
    }

    let info=``;
    if(memo){
        info = `<span style="font-weight: 600;" title="${memo}">[ i ]</span>`;
    }

    return `<tr>
                <td>${date}</td>
                <td><span class="pjsekai_difficulty_${difficulty}">(${level})</span> ${name}　　　${info}</td>
            </tr>`;
    //dateについて
    //不明なら 0 、判明しているなら20260920 (2026年9月20日) みたいな8桁で入れる。
    //difficultyについて
    //1...EASY
    //2...NORMAL
    //3...HARD
    //4...EXPERT
    //5...MASTER
    //6...APPEND
}



const li_allPerfectHistory=[
    createAllPerfectHistoryList(0       ,"Hard"  ,18,"惑星ループ","MKがHardで初めてAPを達成した譜面。"),
    createAllPerfectHistoryList(0       ,"Expert",23,"あいしていたのに","MKがExpertで初めてAPを達成した譜面。"),
    createAllPerfectHistoryList(20260919,"Expert",23,"Highlight"),
    createAllPerfectHistoryList(20260920,"Easy"  ,7 ,"カレシのジュード"),
    createAllPerfectHistoryList(20260920,"Normal",14,"このふざけた素晴らしき世界は、僕の為にある"),
    createAllPerfectHistoryList(20260921,"Easy"  ,5, "オーバーコード"),
    createAllPerfectHistoryList(20260921,"Easy"  ,7, "ヘッジホッグ"),
    createAllPerfectHistoryList(20260922,"Easy"  ,9, "フロイライン=オジョウサマ"),
    createAllPerfectHistoryList(20260922,"Easy"  ,9, "電光刹歌"),
    createAllPerfectHistoryList(20260923,"Easy"  ,9, "What's up? Pop!"),
    createAllPerfectHistoryList(20260923,"Normal",14,"What's up? Pop!"),
    createAllPerfectHistoryList(20260923,"Easy"  ,9, "こわれちゃった！！"),
    createAllPerfectHistoryList(20260923,"Normal",15,"こわれちゃった！！","この日は音楽ショップの楽曲全購入記念で未回収の高難度曲を下埋めしてた。そしたらAPが4つも出た。"),
    createAllPerfectHistoryList(20260923,"Hard  ",17,"夏に透明"),
    createAllPerfectHistoryList(20260924,"Easy  ",9 ,"一億年恋してる"),
    createAllPerfectHistoryList(20260924,"Hard  ",17,"コスモスパイス"),
    createAllPerfectHistoryList(20260924,"Easy  ",9 ,"アンチサイノウ"),
    createAllPerfectHistoryList(20260926,"Hard  ",18,"正解"),
    createAllPerfectHistoryList(20260927,"Hard  ",17,"モザイクロール (Reloaded)"),
    createAllPerfectHistoryList(20260927,"Hard  ",18,"マリオネットダンサー"),
    createAllPerfectHistoryList(20260928,"Normal",12,"Blue Star"),
    createAllPerfectHistoryList(20260928,"Expert",23,"クリスタルスノウ","3曲目のExpertAP、やったぜ。"),
    createAllPerfectHistoryList(20260929,"Normal",12,"告白"),
    createAllPerfectHistoryList(20260930,"Easy  ",7 ,"エメラルド","初手4連トレースとかいうEasyにしては特異点すぎる譜面を飛ばしてきてて笑った。その他、途中にフリック終点が1か所あったりと、他のEasyとは雰囲気の違う譜面となっている。楽曲レベルが6だったら周年の数字と重なってさらに良かったのに..."),
    createAllPerfectHistoryList(20260930,"Normal",13,"エメラルド","この日はエメラルドの下埋めをした。ついでにこの曲のアナザーボーカルは追加当日に全部解放しておいた。(つまり主人公組のキャラランクだけその分上がり方向に偏るのである。)"),
    createAllPerfectHistoryList(20260930,"Hard  ",18,"エメラルド","無事Easy~Hardを全て初見AP、短め(意外にも1分50秒あった。)なのもあってやりやすかったぜ。しかし最近のHardはこの曲もそうだけど本当に混フレが多い気がする。"),
    createAllPerfectHistoryList(20260930,"Easy  ",9 ,"星界ちゃんと可不ちゃんのおつかい合騒曲"),
    createAllPerfectHistoryList(20261001,"Expert",24,"マインドブランド","ExpertAPの4曲目かつ、Lv24以上の初AP！　やったー！"),
    createAllPerfectHistoryList(20261002,"Easy  ",6 ,"い～やい～やい～や"),
    createAllPerfectHistoryList(20261002,"Normal",12,"とても素敵な六月でした"),
    createAllPerfectHistoryList(20261002,"Normal",13,"天秤、指先で触れて"),
    createAllPerfectHistoryList(20261004,"Easy  ",8 ,"オツキミリサイタル","完全な偶然ではあるがこの曲とLEMON MELON COOKIEは全難易度でLvが同じらしい。"),
    createAllPerfectHistoryList(20261006,"Easy  ",7 ,"ボッカデラベリタ"),
    createAllPerfectHistoryList(20261006,"Normal",13,"ハウトゥー世界征服"),
    createAllPerfectHistoryList(20261006,"Easy  ",5 ,"あいしていたのに","コンボ数は112と少なめだがEasyにしてはサビ前に小粒が多かった印象。Easy譜面ってそんなもん？"),
    createAllPerfectHistoryList(20261006,"Normal",12,"D/N/A","わーい今日はAP日和だ～"),
    createAllPerfectHistoryList(20261006,"Easy  ",7 ,"卑怯戦隊うろたんだー","喰らえ最終卑怯必殺奥義、『バレット・オブ・ウロタンダー！！』"),
    createAllPerfectHistoryList(20261007,"Hard  ",16,"すれすれ","朝イチに時間スレスレでやるプロセカは気持ちいZOY！"),
    createAllPerfectHistoryList(20261008,"Hard  ",17,"推定ラブソング","追加されて多分わずか1日後、みんライで初見APした。"),
    createAllPerfectHistoryList(20261009,"Hard  ",17,"ダーリン","追加当日、みんライで初見AP！　やったー！ (しかしスコアは最下位であった。)"),
    createAllPerfectHistoryList(20261010,"Easy  ",5 ,"導火愛"),
    createAllPerfectHistoryList(20261010,"Easy  ",5 ,"夜明けと蛍"),
    createAllPerfectHistoryList(20261013,"Normal",12,"drop pop candy"),
    createAllPerfectHistoryList(20261013,"Normal",12,"ドラマツルギー"),
    createAllPerfectHistoryList(20261014,"Easy  ",7 ,"難聴系男子が倒せない"),
    createAllPerfectHistoryList(20261014,"Easy  ",5 ,"きのせい","最後だんだんノーツがでっかくなる..."),
    createAllPerfectHistoryList(20261015,"Normal",13,"ヘッジホッグ"),
    createAllPerfectHistoryList(20261018,"Normal",14,"混沌ブギ"),
    createAllPerfectHistoryList(20261018,"Easy  ",6, "ジェヘナ"),
    createAllPerfectHistoryList(20261018,"Normal",13,"一億年恋してる" ,"最後だけ音が治安悪すぎる..."),
    createAllPerfectHistoryList(20261018,"Normal",13,"電光刹歌" ,"昨日までのブランクがなかったかのように今日は4つもAPが出た♪"),
    createAllPerfectHistoryList(20261020,"Easy  ",9, "バカ通信","密度が高くてまるでNormalのLv10を相手してるかのような感覚だった。しかも最後にフリックがあるという..."),
    createAllPerfectHistoryList(20261020,"Easy  ",5, "アヤノの幸福理論"),
    createAllPerfectHistoryList(20261021,"Easy  ",9, "天樂"),
    createAllPerfectHistoryList(20261021,"Easy  ",6, "ハイドレンジア"),
    createAllPerfectHistoryList(20261022,"Expert",24,"ロキ","朝イチでやったらいきなり出た。Expert5曲目のAP!　よっしゃー!"),
    createAllPerfectHistoryList(20261023,"Easy  ",7, "永遠甚だしい"),
    createAllPerfectHistoryList(20261023,"Normal",13,"太陽系デスコ"),
    createAllPerfectHistoryList(20261023,"Normal",12,"DAYBREAK FRONTLINE"),
    createAllPerfectHistoryList(20261023,"Easy  ",6, "DREAM PLACE"),
    createAllPerfectHistoryList(20261023,"Easy  ",7, "*ハロー、プラネット。","今日は絶好調、APが5つも出た♪"),
    createAllPerfectHistoryList(20261024,"Easy  ",6, "タイムマシン"),
                    ];



const allPerfectHistory = document.getElementById("allPerfectHistory");
      allPerfectHistory.innerHTML=`<table border="1">${li_allPerfectHistory.join("")}</table>`;

        