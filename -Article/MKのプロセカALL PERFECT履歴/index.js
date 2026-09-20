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
        date=(date.slice(0,4))+"/"+(date.slice(4,6))+"/"+(date.slice(6,8));
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
    createAllPerfectHistoryList(       "0","Hard"  ,18,"惑星ループ","MKがHardで初めてAPを達成した譜面。"),
    createAllPerfectHistoryList(       "0","Expert",23,"あいしていたのに","MKがExpertで初めてAPを達成した譜面。"),
    createAllPerfectHistoryList("20260919","Expert",23,"Highlight"),
                    ];



const allPerfectHistory = document.getElementById("allPerfectHistory");
      allPerfectHistory.innerHTML=`<table border="1">${li_allPerfectHistory.join("")}</table>`;

        