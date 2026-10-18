function createWriterList(name , memo){
    return `
            ・<a href="https://scratch.mit.edu/users/${name}/" target="_blank" rel="noopener noreferrer">@${name}</a><br>
            　${memo}<br>
            `;
}


const li_WrittenBy=[createWriterList("mahirokkk",`テンプレートと自分の作品だけ追加<br>`),
                    createWriterList("rollinghuman",`多分執筆をさせられる`),
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
        mkさんの初IMSステージ。<br>
        配置は難しすぎるので置いといて、かなり演出が凝っていて、もはや後ろの背景とか曲に合わせて動いちゃっている。<br>
        しかも、原曲のMVに忠実に演出が作られているので、そこもまた面白い。<br>
        てか曲の展開に合わせて背景が滑らかに変化していく技術は習いたいレベル。<br>
        そんな神演出ステージを<hi>tarbowarpで！</hi>プレイしてみよう。
        `
    ),
    createBestRollingSkyTopics("taru-ru",`
            合作I　区間4 (60%~80%)<br>
            合作II　区間7
        `,
        "TRころころ13","https://turbowarp.org/1084059547?fps=30&hqpen&clones=Infinity",`
        このステージはやっぱり個人的にずっと前から好きなステージである。<br>
        まず音ハメがすごく楽しい。<br>
        そして双極的なカラーリングの背景ものすごく好きである。<br>
        中辛的な難易度で、楽しい譜面で、良い選曲で、とても楽しいステージである。<br>
        そんな楽しいステージをみんなもプレイしてみよう。
        `
    ),
     createBestRollingSkyTopics("take_take_take",`
            合作I　区間1 (0%~20%)
        `,
        "[TRE ~ V2.4] Tボールころころ Season5 8","https://scratch.mit.edu/projects/1208522444",`
        これを書き始める五分前に初めてプレイしたのは秘密で、このころころエンジンにボールの影が設定されていることに驚いた。<br>
        あと死んだ後に再プレイするときの演出が好き。<br>
        そして、ステージの雰囲気がすごく好き。<br>
        選曲、譜面、カラーリング、背景、演出、すべてが好き。<br>
        scratchでやると描画が謎にぶち壊れるので、みんなもturbowarpでプレイしてみよう。
        `
    ),
    createBestRollingSkyTopics("karikarium",`
            合作I　区間5 (80%~100%)
        `,
        "@mahirokkkさん10周年記念ころころ","https://turbowarp.org/1220741875?fps=60&hqpen&offscreen&limitless",`
        これを書き始める五分前に初めてプレイした（以下略）<br>
        ほかの人のお祝いステージをこれに選び出すのはどうかと思うがそれはそうとてなんか背景の選出センスが高くて尊敬なステージ。<br>
        このステージで個人的にすごいと思ったのは、満遍なくいろんなギミックを使ってステージが作られていて且つ、簡単な譜面のステージであることだと思う。<br>
        普通、簡単な譜面のステージを作るとき私だけかもしれないが一部のギミックのみを使ってしまう傾向にあってしまう。<br>
        でも、このステージは簡単であることと、ギミックの多様性を両立しているバランスの取れているステージである。<br>
        そんなプレイして楽しかったステージをみんなもプレイしてみよう。
        `
    ),
createBestRollingSkyTopics("seisakusha-3978",`
            合作I　区間2 (20%~40%)
        `,
        "MK　新・難化ころころ15","https://turbowarp.org/1188558981?fps=30&hqpen&clones=Infinity&offscreen",`
        これを書き始める五分前（以下略）<br>
        そもそもこのステージのリミックス元自体がなかなかに難しいのにさらに難しくなったゲテモノのようなステージである。<br>
        でもN15をクリアできるレベルのスキルさえつければすごく楽しいステージになる。<br>
        少しトロールのにおいを感じるが、それでも理不尽な配置がなくて且つ丁度良く難化できるのはこの人の持ち味である。<br>
        一応50%までプレイしたがやっぱり楽しかった。<br>
        そんな本家をクリアしている人だからこそ楽しいステージをみんなもプレイしてみよう
        `
    ),

]

document.getElementById("CoCreatorsBestRollingSky").innerHTML=`
    ${li_CoCreatorsBestRollingSky.join("")}
`;