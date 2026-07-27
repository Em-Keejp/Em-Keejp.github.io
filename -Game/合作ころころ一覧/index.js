function createWriterList(name , memo){
    return `
            ・<a href="https://scratch.mit.edu/users/${name}/" target="_blank" rel="noopener noreferrer">@${name}</a><br>
            　${memo}<br>
            `;
}


const li_WrittenBy=[createWriterList("mahirokkk",``),
                    ];




const li_CCI=[
    createGames("CCI1　合作ころころI - 区間1" , gameURL("1190895845","","","ScDeprecated")+gameDesCCRS(`<user>take_take_take</user>`,`583`,`583`,`縦レーザー(語彙力)、下が通行可能・不可ボール(語彙力)、ライブレーザー (親作品不明)`,
            difficulty("　通常","MKRSstar",8)+
            difficulty("全回収","MKRSstar",8)
        ,`
            合作ころころIの記念すべき1区間目。速いうえに狭い場所や認識難があったりで結構侮れない。<br>
            サイバー風のテーマを基調としており本家LIMBOにあったような特殊演出も入る。カッコよさは合作Iの中では随一。<br>
            全回収難易度が示されているが、区間1~4には<user name="後のクリエイター">karikarium</user>によって星が置かれている。元々はなかった。
        `,``
        ,`[NightHawk22] Isolation`)
    ),
    createGames("CCI2　合作ころころI - 区間2" , gameURL("1191440671","","","ScDeprecated")+gameDesCCRS(`<user>seisakusha-3978</user>`,`583`,`1166`,`なし (CCI1比較)`,
            difficulty("　通常","free","多分IMS基準で★10以上は余裕である。")+
            difficulty("全回収","free","通常ルートとほぼ同じ。まあその通常ルートがゲキムズなんだけどな!")
        ,`
            合作ころころIの2区間目。他の区間とは全回収を込みにしても比べ物にならないほどの難易度を誇る。
            足場は基本的に1マス幅であり、しかもウェーブしていることも多い。おまけにそんな譜面を高速でやらせるうえに1-3、1-4配置も平気で出してくるまさしく鬼畜の所業。<br>
            他の区間を突破したことのある僕でもこの区間だけは歯が立たなかった。区間の最後の方はその分動かさなくてもいい虚無時間になっており、合作ころころIに参加する全クリエイターの名前が表示される。<br>
            次に来たるは...<user name="俺">mahirokkk</user>のターンだ!!!! <lo>(活動停止と重なって大遅刻したけどね...)</lo>
        `,``
        ,`[NightHawk22] Isolation`)
    ),
    createGames("CCI3　合作ころころI - 区間3" , gameURL("1239443452","","","ScDeprecated")+gameDesCCRS(`<user>mahirokkk</user>`,`591`,`1757`,`正方回転模様、菱形出現模様、高い菱形出現模様、ボール状態変化・透明 (CCI4比較)`,
            difficulty("　通常","MKRSstar",6)+
            difficulty("全回収","MKRSstar",9)
        ,`
            合作ころころIの3区間目。なお、この直前まで僕は4ヵ月くらいの活動休止をしていたので、先に他の人が区間を完成させようということで、共有時系列的には先に<user>taru-ru</user>さんの区間4ができて、これを親作品にして区間3を共有した形となる。
            本家ローリングスカイのテーマで構成されており、前半は洞窟、後半は曙のテーマが採用される。また新ギミックは全部後半で登場する。<br>
            なおこの区間には1つ本家曙の配置を強化したような王冠が登場する。配置を作ったのは僕だが王冠の実装はめんどくさかったため<user name="後のクリエイター">karikarium</user>が置いた。
        `,``
        ,`[NightHawk22] Isolation`)
    ),
    createGames("CCI4　合作ころころI - 区間4" , gameURL("1195123653","","","ScDeprecated")+gameDesCCRS(`<user>taru-ru</user>`,`561`,`2318`,`降りてくる床、昇っていく床、上記と落ちる床、上がる床、矢印床のジャンプver、飛行アイテム、障害物ブレイカー、ガラス床、多分かっこいいオブジェクト(3*8種)、特殊ウェーブ、レレレウェーブ、床と立体の独立、チェックポイント、状態編集、床の連結、緩い判定(床のみ) (CCI2比較)`,
            difficulty("　通常","MKRSstar",3)+
            difficulty("全回収","MKRSstar",5)
        ,`
            合作ころころIの4区間目。難易度は合作ころころIの中ではトップクラスに簡単でひたすらにギミックと高速が爽快なものになっている。(頑張ったんだよ〜by<user name="taru-ru">taru-ru</user>)<br>
            やや初見殺しはあるけど。どこぞの<user name="制作者">seisakusha-3978</user>とは雲泥の差である。
        `,``
        ,`[NightHawk22] Isolation`)
    ),
    createGames("CCI5　合作ころころI - 区間5" , gameURL("1297757138","","","ScDeprecated")+gameDesCCRS(`<user>karikarium</user>`,`594`,`2912`,`ぴっかりボール、ウェーブボールっぽい障害物、星、王冠、T字の障害物 (CCI3比較)`,
            difficulty("　通常","MKRSstar",7)+
            difficulty("全回収","MKRSstar",10)
        ,`
            合作ころころIファイナルの5区間目。なかなかに独特な、宇宙を感じさせるようなテーマが特徴の区間。認識の難しさは合作I全区間の中でトップクラスであり、<br>
            この作品から追加された星と王冠もこの区間に結構あるのだが、元の技術難も相まって取るのはかなり難しい。
        `,``
        ,`[NightHawk22] Isolation`)
    ),
    
    createGames("CCI　合作ころころI - 総合" , gameURL("1297757138","","","ScDeprecated")+gameDesCCRSOverAll(`<user>take_take_take</user>`,`
        区間1 <user>take_take_take</user><br>
        区間2 <user>seisakusha-3978</user><br>
        区間3 <user>mahirokkk</user><br>
        区間4 <user>taru-ru</user><br>
        区間5 <user>karikarium</user><br>
        `,
        `旧TK RS ENGINE`,`2912`,
            difficulty("　通常","MKRSstar",12)+
            difficulty("全回収","MKRSstar",16)
        ,`
            実は結構z長が長かった合作ころころI　区画ごとに独自のテーマがあり、難易度の傾向も変わってくる。全体的に高速であり難しい場所が多い。<br>
            正直これをクリアできる人はやばいと思う。CPは一応あるけどそれを込みにしてもね。だって明らかに難しすぎる区間が1つあるんだもん。<br>
            BGMは、Geometry Dashの超激ムズステージ"LIMBO"に使われてる曲「[NightHawk22] Isolation」のリミックスです。初めて聴いたときは元ネタが全く分からなかったが...　
            その後、LIMBOの攻略動画を見てみたら絶句した。なんだこれヤバすぎだろ...<br>
            というわけで、流石に本家LIMBOと比較されたらこれは大分ぬるいと思う。それでもムズイことに変わりはない。　<lo>(なお、MKはGeometry Dashをやったことがありません。)</lo>
        `,``
        ,`[NightHawk22] Isolation`)
    ),

]

const li_CCII=[
    createGames("CCII1　合作ころころII - 区間1" , gameURL("1309036613","IMS","","ScDeprecated")+gameDesCCRS(`<user>mahirokkk</user>`,`270`,`270`,`消える床、現れる床 (BΕ15比較)`,
            difficulty("　通常","MKRSstar",3)+
            difficulty("全回収","MKRSstar",5)
        ,`
            合作ころころIIの1区間目。難易度の割には障害物がごっちゃしていて難しいかも。<br>
            ただし遅いためゲキムズではない。なお、タイトルロゴ表示中は中央に居ればやられることはないのでご安心を。<br>
            ちなみに全回収に関してはもう初見殺しと謎解きの塊である。逆に一度分かってしまえば途端にイージーゲームになる。<br>
            この区間にはクソ頑張って作った背景と最初の一瞬だけ特殊演出とどこかで見たことのある最初の配置があったりなかったり...
        `,``
        ,`<url name="[cosMo@暴走P] 初音ミクの激唱 / feat.初音ミク">https://www.youtube.com/watch?v=MFEaIgMkR_0</url>`)
    ),
    createGames("CCII2　合作ころころII - 区間2" , gameURL("1309407771","IMS","","ScDeprecated")+gameDesCCRS(`<user>o_sushi</user>`,`260`,`530`,`なし (CCII1比較)`,
            difficulty("　通常","MKRSstar",2)+
            difficulty("全回収","MKRSstar",7)
        ,`
            時間長ではここが一番長い区間でありながら、かなり簡単な区間でもある。手加減素晴らしい。<br>
            ただし回収物はダークネスなしのネオンフロアを見極めて見つけないといけないのでかなり難易度が高い。一方技術難はほぼないので区間1同様分かってしまえば途端にイージーゲームになる。
        `,``
        ,`<url name="[cosMo@暴走P] 初音ミクの激唱 / feat.初音ミク">https://www.youtube.com/watch?v=MFEaIgMkR_0</url>`)
    ),
    createGames("CCII3　合作ころころII - 区間3" , gameURL("1314594273","IMS","","ScDeprecated")+gameDesCCRS(`<user>karikarium</user>`,`256`,`786`,`なし (CCII2比較)`,
            difficulty("　通常","MKRSstar",3)+
            difficulty("全回収","MKRSstar",6)
        ,`
            区間2と比べると障害物が増えたり変なウェーブが増えたりして認識が難しくなったが、代わりに理不尽な回収物は減った。<br>
            認識難は強くなったが直感で進めるルートとなっており初見突破も比較的現実的な範囲である。一方で、これより後の区間は難関配置がずっと続く魔境となっている。<br>
            覚悟の準備をしておいてください。
        `,``
        ,`<url name="[cosMo@暴走P] 初音ミクの激唱 / feat.初音ミク">https://www.youtube.com/watch?v=MFEaIgMkR_0</url>`)
    ),
    createGames("CCII4　合作ころころII - 区間4" , gameURL("1314594332","IMS","","ScDeprecated")+gameDesCCRS(`<user>06jyuuu</user>`,`384`,`1170`,`なし (CCII3比較)`,
            difficulty("　通常","MKRSstar",9)+
            difficulty("全回収","MKRSstar",10)
        ,`
            これまでの区間とは打って変わって、ボールの速度が2倍になる。そのうえムーバーや脆い床を難解な配置で置いてくるので極めて難易度が高い。他のギミックも凶悪な配置をしており視認性も最悪である。
            ここをノーダメージで突破出来たらいよいよ上手い人を名乗れると思う。MKにはこの区間は難しすぎた。今までの区間はノーダメ余裕だったのにここは9バリアでも突破できないんですが...
        `,``
        ,`<url name="[cosMo@暴走P] 初音ミクの激唱 / feat.初音ミク">https://www.youtube.com/watch?v=MFEaIgMkR_0</url>`)
    ),
    createGames("CCII5　合作ころころII - 区間5" , gameURL("1314827800","IMS","","ScDeprecated")+gameDesCCRS(`<user>rollinghuman</user>`,`168`,`1338`,`なし (CCII4比較)`,
            difficulty("　通常","MKRSstar",3)+
            difficulty("全回収","MKRSstar",6)
        ,`
            ギミックの配置は前の区間同様複雑で、斜め配置もちょっと混じっているが、速度は再び区間1~3の時同様の低速に落ち着く。<br>
            この区間はただ通過する分にはそこまで難しくはないが、唯一置いてある金星のルートはやや複雑で、譜面研究をしないととれないような配置になっている。<br>
            <lo>なお、この作品の段階ではその金星のルートに誤りがあり、獲得不可になっていた模様。次の区間の作品でこの部分は修正されている。一応非正規ルートではあるが横TASやタブレットワープで取れる。</lo>
        `,``
        ,`<url name="[cosMo@暴走P] 初音ミクの激唱 / feat.初音ミク">https://www.youtube.com/watch?v=MFEaIgMkR_0</url>`)
    ),
    createGames("CCII6　合作ころころII - 区間6" , gameURL("1329310495","IMS","","ScDeprecated")+gameDesCCRS(`<user>wakannai123</user>`,`235`,`1573`,`なし (CCII5比較)`,
            difficulty("　通常","MKRSstar",9)+
            difficulty("全回収","MKRSstar",11)
        ,`
            今まで低速の区間は全て簡単だと思っていたが、どうやらそんな考えは浅はかだったようだ。...遅いくせにとんでもなくムズイんだが!?<br>
            ここでは、区間1以降では初となるテーマ変更が入る。しかもよりによってクリッカーRPGのテーマであり結構エモい...のだが、背景が明るかったりタイルが同化していたり、そもそもの配置がゲキムズだったりで認識難は結構ヤバい。<br>
            ちなみに要求技術も結構高い。後半に置いてある星とか取らせる気ないだろマジで。さらに驚いたのがこれを模範リプレイがノーダメ全回収できてしまうということ...　ということは人間にもこれは可能な譜面ってことか...<br>
            いや、模範リプレイは実質TASだからそれと同じにするのはどうなんだ!?
        `,``
        ,`<url name="[cosMo@暴走P] 初音ミクの激唱 / feat.初音ミク">https://www.youtube.com/watch?v=MFEaIgMkR_0</url>`)
    ),
    
]

document.getElementById("CCI").innerHTML=
    gameTable("合作ころころI　区間別",li_CCI,`` );

document.getElementById("CCII").innerHTML=
    gameTable("合作ころころII　区間別",li_CCII,`` )+`<p>coming soon...</p>`;
