function createWriterList(name , memo){
    return `
            ・<a href="https://scratch.mit.edu/users/${name}/" target="_blank" rel="noopener noreferrer">@${name}</a><br>
            　${memo}<br><br>
            `;
}


const li_WrittenBy=[]; //このページには書いた人を表示しない。











const li_links_template=[
    createLinks("tool","ツールのテンプレート","テンプレート_ツールトピック/index.html"),
    createLinks("game","ゲームのテンプレート","テンプレート_ゲームトピック/index.html"),
    createLinks("tale","物語のテンプレート","テンプレート_物語トピック/index.html"),
    createLinks("article","記事のテンプレート","テンプレート_記事トピック/index.html"),
    createLinks("links","リンク集のテンプレート","テンプレート_リンク集トピック/index.html"),
];

document.getElementById("linksHeader").innerHTML=
    linksTable("テンプレート",li_links_template,`
        トップページにあるテンプレートの表と全く同じです。<br>
        この色の並び、緑と青を入れ替えれば...完全にプロセカのアレなんだよな...まあいっか!
    `);