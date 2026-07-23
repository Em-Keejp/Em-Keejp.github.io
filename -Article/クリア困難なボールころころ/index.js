function createWriterList(name , memo){
    return `
            ・<a href="https://scratch.mit.edu/users/${name}/" target="_blank" rel="noopener noreferrer">@${name}</a><br>
            　${memo}<br>
            `;
}


const li_WrittenBy=[createWriterList("taru-ru",``),
                    ];



function createHardRollingSkyTopics(title , name , creator , url , description){
    return `
        <div class="episode"><h3 class="toggle close">${title}</h2><div class="main"  style="padding-left: 20px;">
            <table>
                <tr>
                    <td class="index right up">作品名</td><td>${name}</td>
                </tr>
                <tr>
                    <td class="index right up">作者</td><td><user>${creator}</user></td>
                </tr>
                <tr>
                    <td class="index right up">URL</td><td><url>${url}</url></td>
                </tr>
            </table>
            <h3>概要</h3>
            ${description}
        </div></div>
    `;
}

const li_hardRollingSky=[
    createHardRollingSkyTopics("物量認識難、おまけに高等テクニックの詰め合わせ「MK　番外編ころころ6」",
        "MK　番外編ころころ6","mahirokkk","https://turbowarp.org/1203213654?offscreen&limitless&hqpen&fps=60",
        `
            むずいよ。
        `
    ),

    createHardRollingSkyTopics("タイトル",
        "作品名","ユーザー名","URL",
        `
            ここに説明を書く。
        `
    ),
];

document.getElementById("hardRollingSky").innerHTML=`
    ${li_hardRollingSky.join("")}
`;