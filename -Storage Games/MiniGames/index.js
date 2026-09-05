function createWriterList(name , memo){
    return `
            ・<a href="https://scratch.mit.edu/users/${name}/" target="_blank" rel="noopener noreferrer">@${name}</a><br>
            　${memo}<br>
            `;
}



const li_WrittenBy=[createWriterList("taki567",`このページを作った人。jumpgameとponPONG作成。<br>`),
                    createWriterList("mahirokkk",`ページをちょっと改造した。10秒連打ゲームを今後作る予定<br>`),
                    ];