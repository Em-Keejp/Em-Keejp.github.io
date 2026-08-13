function createWriterList(name , memo){
    return `
            ・<a href="https://scratch.mit.edu/users/${name}/" target="_blank" rel="noopener noreferrer">@${name}</a><br>
            　${memo}<br>
            `;
}


const li_WrittenBy=[createWriterList("mahirokkk",``),
                    ];



function createTaleOrder(date , name){
    return `<tr>
            <td>　${date}　</td>
            <td><a href="../../-Tale/${name}/index.html">${name}</a></td>
            </tr>`;
}


const li_implementationOrder=[
    createTaleOrder("2019/02/15","[ShortMovie] カンニング猫を成敗"),
    createTaleOrder("2019/02/15","[ShortMovie] 猫田の日常"),
    createTaleOrder("2019/02/15","[ShortMovie] マラソン大会"),
    createTaleOrder("2019/02/15","[ShortMovie] 町探検"),
    createTaleOrder("2019/02/15","[ShortMovie] もしドラえもんがいれば"),
    createTaleOrder("2019/02/15","[ShortMovie] 洞窟探検"),
    createTaleOrder("2019/02/15","[ShortMovie] 偽物は誰だ!"),
    createTaleOrder("2019/02/15","[ShortMovie] 猫田の旅行"),
    createTaleOrder("2019/02/15","[ShortMovie] 猫山の辛い思い出"),
    createTaleOrder("2025/07/28","BA5の隠し要素"),
    createTaleOrder("2026/03/01","MKは2026年に初めてエイプリルフールを謳歌するようです。"),
    createTaleOrder("2026/05/17","[sub story] 東方共喰譚"),
    createTaleOrder("2026/07/19","10周年企画第二弾　質問コーナー"),
    createTaleOrder("2026/08/13","[sub story] 志歩のBackroom冒険譚"),
    createTaleOrder("2026年9月公開予定","10周年企画第一弾の隠し要素"),
];


const implementationOrder = document.getElementById("implementationOrder");
        if(implementationOrder){
            implementationOrder.innerHTML=`
                <table border="1">
                ${li_implementationOrder.join("")}
                </table>
            `
        }