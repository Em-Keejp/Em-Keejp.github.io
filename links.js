//表を自動で作る関数(通常版)
function createLinks(topicType , topicName , fileName){
    let url=`<a href="../../${fileName}">${topicName}</a>`;
    if(fileName==""){
        url=`<span style="color:#888888";>${topicName}</span>`;
    }
    return `
            <p style="font-size:2rem";><span class="b_${topicType}"><span class="${topicType}">● </span>${url}</span></p>
            `;
}

//表を作る関数(ゲーム版)
function linksTable(title,table,comment){
    return `
            <h2>${title}　　(<span style="color:#cc0000">${table.length}</span>件のトピック)</h2>
            <div style="padding-left: 20px;">
                ${comment}<br>
                ${table.join("")}
            </div>`;
}