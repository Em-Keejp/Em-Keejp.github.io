//表を自動で作る関数(通常版)
function createLinks(topicType , topicName , fileName){
    return `
            <p style="font-size:2rem";><span class="b_${topicType}"><span class="${topicType}">● </span><a href="../../${fileName}">${topicName}</a></span></p>
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