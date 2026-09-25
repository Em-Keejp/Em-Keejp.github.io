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
                    ];



const allPerfectHistory = document.getElementById("allPerfectHistory");
      allPerfectHistory.innerHTML=`<table border="1">${li_allPerfectHistory.join("")}</table>`;

        