function createNakayoshiList(name , memo){
    return `
            <a href="https://scratch.mit.edu/users/${name}/" target="_blank" rel="noopener noreferrer">@${name}</a><br>
            ${memo}<br>
            <br>
            <br>
            `;
}


const staff=[
    createNakayoshiList("mahirokkk","MKの保管庫を作った人"),
    createNakayoshiList("taru-ru","時々執筆に協力してくれている。まだ明確な役割という役割は決まっていない。"),
];

document.getElementById("staff").innerHTML=`
                合計<span class="hi">${staff.length}</span>人<br><br>
                ${staff.join("")}
            `