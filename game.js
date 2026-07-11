//第1引数...URL番号
//第2引数...TurboWarpリンクフォーマット
//第3引数...ダウンロードリンク
function gameURL(url , tw , dl , other){
    let button ={
        linkSc : `href = "https://scratch.mit.edu/projects/${url}" target="_blank" rel="noopener noreferrer"`,
        textSc : `Scratchでプレイ`,
        classSc: `class="playable"`,
        linkTw : `href = "https://turbowarp.org/${url}${tw}" target="_blank" rel="noopener noreferrer"`,
        textTw : `TurboWarpでプレイ`,
        classTw: `class="playable"`,
        linkDl : `href = "../../code/${dl}" download="${dl}"`,
        textDl : `ダウンロード`,
        classDl: `class="playable"`
    };

    if(url==""){//url番号未記入なら、ScratchとTurboWarpは両方無効
        button.linkSc = ``;
        button.linkTw = ``;
    }
    if(dl==""){//ダウンロードパス未記入なら、ダウンロードは無効
        button.linkDl = ``;
    }
    if(other=="ScDeprecated"){ //Scratch非推奨なら
        button.textSc = `<span style="font-weight : bold; color : #bb0000;">[!]非推奨</span> Scratchでプレイ`;
        button.classSc= `class="deprecated"`
    }
    if(tw=="IMS"){
        button.linkTw = `href = "https://turbowarp.org/${url}?offscreen&limitless&hqpen&fps=60&clones=Infinity" target="_blank" rel="noopener noreferrer"`;
    }
    if(button.linkSc==""){
        button.classSc="disabled";
    }
    if(button.linkTw==""){
        button.classTw="disabled";
    }
    if(button.linkDl==""){
        button.classDl="disabled";
    }
    return `
        <table>
            <tr>
                <td><a ${button.linkSc}><button ${button.classSc}>${button.textSc}</button></a></td>
                <td><a ${button.linkTw}><button ${button.classTw}>${button.textTw}</button></a></td>    
                <td><a ${button.linkDl}><button ${button.classDl}>${button.textDl}</button></a></td>
            </tr>
        </table>
    `
}


//難しさを書く関数(種別 , 指標 , 定数)
function difficulty(type , index , num){

    let difficulty=`${index}${num}`; //基本形

    if(index=="star"){ //指標がstarだったら
        difficulty=`★${num}`; 
    }
    if(index=="MKRSstar"){ //MKボールころころの★形式だったら
        difficulty=`★${num}`;
    }
    if(index=="BKRDifLv1"){
        difficulty=`Lv1　${num}`;
    };
    if(index=="BKRDifLv1+"){
        difficulty=`Lv1+　${num}`;
    };
    if(index=="none"||num=="none"||index=="--"||num=="--"||index==undefined||num==undefined){ //指標または定数が指定されてなかったら
        difficulty=`--`; 
    };
    if(index=="free"){
        difficulty=`${num}`;
    };


    return`
        <tr>
            <td class="right">${type} : </td>
            <td>${difficulty}</td>
        </tr>
    `
}


//内容説明関数(MKボールころころフォーマット)
function gameDesMKRS(length , addition , difficulty , summary , image , BGM){
    return`
        <table>

            <colgroup>
                <col>
                <col style="width: 1024px;">
            </colgroup>

            <tr>
                <td class="index right up">長さ :</td>
                <td>${length}</td>
            </tr>
            <tr>
                <td class="index right up">追加物 :</td>
                <td>${addition}</td>
            </tr>
            <tr>
                <td class="index right up">難易度 :</td>
                <td><table>${difficulty}</table></td>
            </tr>
        </table>
        <br>
        ${summary}<br>
        <br>
        <table>
            <tr>
                <td span class="index right up">BGM :</td><td>${BGM}</td>
            </tr>
        </table>
    `;
}



//内容説明関数(合作ころころフォーマット)
function gameDesCCRS(creator , length , totallength , addition , difficulty , summary , image , BGM){
    return`
        <table>

            <colgroup>
                <col>
                <col style="width: 1024px;">
            </colgroup>

            <tr>
                <td span class="index right up">区間担当 :</td>
                <td>${creator}</td>
            </tr>
            <tr>
                <td span class="index right up">区間長さ :</td>
                <td>${length}</td>
            </tr>
            <tr>
                <td span class="index right up">累計長さ :</td>
                <td>${totallength}</td>
            </tr>
            <tr>
                <td span class="index right up">追加物 :</td>
                <td>${addition}</td>
            </tr>
            <tr>
                <td span class="index right up">区間難易度 :</td>
                <td><table>${difficulty}</table></td>
            </tr>
        </table>
        <br>
        ${summary}<br>
        <br>
        <table>
            <tr>
                <td span class="index right up">BGM :</td><td>${BGM}</td>
            </tr>
        </table>
    `;
}



//内容説明関数(合作ころころ総合フォーマット)
function gameDesCCRSOverAll(proposer , creator , engine , length , difficulty , summary , image , BGM){
    return`
        <table>

            <colgroup>
                <col>
                <col style="width: 1024px;">
            </colgroup>

            <tr height="80">
                <td span class="index right">提案者 :</td>
                <td>${proposer}</td>
            </tr>
            <tr>
                <td span class="index right up">合作担当者 :</td>
                <td>${creator}</td>
            </tr>
            <tr>
                <td span class="index right up">使用エンジン :</td>
                <td>${engine}</td>
            </tr>
            <tr>
                <td span class="index right up">長さ :</td>
                <td>${length}</td>
            </tr>
            <tr>
                <td span class="index right up">難易度 :</td>
                <td><table>${difficulty}</table></td>
            </tr>
        </table>
        <br>
        ${summary}<br>
        <br>
        <table>
            <tr>
                <td span class="index right up">BGM :</td><td>${BGM}</td>
            </tr>
        </table>
    `;
}





//表データを入れる関数(ゲーム版)
function createGames(name , body){
    return`
        <tbody class="gameChapter">
            <tr class="pre_gtoggle">
                <td class="gtoggle gclose">${name}　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</td>
            </tr>
            <tr class="main">
                <td class="yohaku">
                     ${body}
                </td>
            </tr>
        </tbody">
    `;
}


//表を作る関数(ゲーム版)
function gameTable(title,table,comment){
    return `<h3>${title}　　(<span class="hi">${table.length}</span>作品)</h3>
            ${comment}
            <table border="1">
            ${table.join("")}
            </table>`;
}