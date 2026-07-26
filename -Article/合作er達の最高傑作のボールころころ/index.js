function createWriterList(name , memo){
    return `
            ・<a href="https://scratch.mit.edu/users/${name}/" target="_blank" rel="noopener noreferrer">@${name}</a><br>
            　${memo}<br>
            `;
}


const li_WrittenBy=[createWriterList("mahirokkk",`テンプレートと自分の作品だけ追加<br>`),
                    createWriterList("rollinghuman",``),
                    ];





function createBestRollingSkyTopics(user , archievements , name , url , description){
    return `
        <div class="episode"><h3 class="toggle close">${user}</h2><div class="main"  style="padding-left: 20px;">
            <table>
                <tr>
                    <td class="index right up">ユーザーページ</td><td><user>${user}</user></td>
                </tr>
                <tr>
                    <td class="index right up">参加した合作</td><td>${archievements}</td>
                </tr>
            </table>
            <h3>${user}のベスト作品</h3>
            <table>
                <tr>
                    <td class="index right up">作品名</td><td>${name}</td>
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

const li_CoCreatorsBestRollingSky=[
    createBestRollingSkyTopics("mahirokkk",`
            合作I　区間3 (40%~60%)<br>
            合作II　区間1
        `,
        "MK　ビートころころ9","https://turbowarp.org/235811811?hqpen&offscreen&fps=60&clones=Infinity",`
        IMSの原点にして自称最高傑作!　いろんな原作リスペクトの特殊演出があるのでぜひお楽しみください!
        `
    ),
    createBestRollingSkyTopics("mahirokkk",`
            合作I　区間3 (40%~60%)<br>
            合作II　区間1
        `,
        "MK　ビートころころ9","https://turbowarp.org/235811811?hqpen&offscreen&fps=60&clones=Infinity",`
        IMSの原点にして自称最高傑作!　いろんな原作リスペクトの特殊演出があるのでぜひお楽しみください!
        `
    ),
];

document.getElementById("CoCreatorsBestRollingSky").innerHTML=`
    ${li_CoCreatorsBestRollingSky.join("")}
`;