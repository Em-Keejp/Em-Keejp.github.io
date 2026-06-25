const input  = document.getElementById("input");
const output = document.getElementById("output");
const hokan  = document.getElementById("hokan");
const pen    = document.getElementById("pen");
const warp   = document.getElementById("warp");
const clone  = document.getElementById("clone");
const range  = document.getElementById("range");
const other  = document.getElementById("other");
const FPS   = document.querySelectorAll('input[name="FPS"]');
const URL   = document.getElementById("TurboWarpURL");
 let status=["fps=60","hqpen","clones=Infinity","offscreen","limitless"];

 FPS.forEach(FPS=>{
    FPS.addEventListener("change" , (FPS)=>{
            status[0]=("fps="+FPS.target.value);
        urlReload();
    })
 })

 //チェックボックスの変更は"change"で判断
hokan.addEventListener("change",()=>{
    statusCahnge(hokan , "interpolate");
}) 
pen.addEventListener("change",()=>{
    statusCahnge(pen , "hqpen");
}) 
warp.addEventListener("change",()=>{
    statusCahnge(warp , "stuck");
}) 
clone.addEventListener("change",()=>{
    statusCahnge(clone , "clones=Infinity");
}) 
range.addEventListener("change",()=>{
    statusCahnge(range , "offscreen");
}) 
other.addEventListener("change",()=>{
    statusCahnge(other , "limitless");
}) 



output.value="白いテキストボックスにScratch作品のURLを入力してください。";

input.addEventListener("input",()=>{
   urlReload(); //inputが更新されたなら、URLも更新
});



function statusCahnge(idName , element){
    if(idName.checked){
        status.push(element);
    }else{
        status.pop("element");
    }
    urlReload();
}



function urlReload(){ //URL更新を司る関数
    const urlNumber=input.value.match(/\d+/g);//URL番号を抽出
    URL.className="convertLowlight"; //CONVERTボタンを暗転
    URL.disabled=true; //disabledのような中身を持たない属性は真偽値で制御
    if(urlNumber){
        output.value="https://turbowarp.org/"+urlNumber[0]+"?"+status.join("&");
        URL.className="convertHighlight";//CONVERTボタンを明転
        URL.disabled=false;
    }else if(input.value){
        output.value="[エラー] プロジェクトIDを読み取れません。";
    }else{
        output.value="白いテキストボックスにScratch作品のURLを入力してください。";
    }
     URL.href=`${output.value}`;
}

//URL.setAttribute("class", "convertLowlight");みたいな記法でもclassは操れる。

document.getElementById("TurboWarp_Convert").innerHTML=`
    <a href="${output.value}">　<span class="convertHighlight">↓TurboWarp Convert!</span></a>
`
