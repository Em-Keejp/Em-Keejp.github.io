const li_links_template=[
    createLinks("tale","[ShortMovie] カンニング猫を成敗","-Tale/[ShortMovie] カンニング猫を成敗/index.html"),
    createLinks("tale","[ShortMovie] 猫田の日常",""),
    createLinks("tale","[ShortMovie] マラソン大会",""),
    createLinks("tale","[ShortMovie] 町探検",""),
    createLinks("tale","[ShortMovie] もしドラえもんがいれば",""),
    createLinks("tale","[ShortMovie] 洞窟探検",""),
    createLinks("tale","[ShortMovie] 偽物は誰だ!",""),
    createLinks("tale","[ShortMovie] 猫田の旅行",""),
    createLinks("tale","[ShortMovie] 猫山の辛い思い出",""),
];

document.getElementById("linksHeader").innerHTML=
    linksTable("テンプレート",li_links_template,`
        ショートムービーを集めたリンク集です。
    `);