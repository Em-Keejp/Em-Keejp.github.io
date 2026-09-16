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

    `<h3><user>mahirokkk</user>の作品</h3>`,

    createHardRollingSkyTopics("物量認識難、おまけに高等テクニックの詰め合わせ「MK　番外編ころころ6」",
        "MK　番外編ころころ6","mahirokkk","https://turbowarp.org/1203213654?offscreen&limitless&hqpen&fps=60",
        `
            BPMは128程度で、ボールの速度は標準的なステージよりちょっと速い程度。時間長も2分5秒程度であり、他のIMSのステージと比べると超長い訳ではない。<br>
            しかし、それを圧倒するレベルの障害物密度や足場の悪さがあり、さらに意地悪ウェーブが多数存在する。無論認識難は凄まじいうえ、判定もシビアな部分が多くかなり精密な操作を求められる。<br>
            さらにこのステージのさらに厄介な部分は、デフォルトで対障害物判定が勝手に1.0倍に設定されるところにもある。<lo>（普通は1.6倍）</lo><br>
            <br>
            これ以上の説明は本作をご覧あれ。<lo>（書くのめんどい。）</lo>
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