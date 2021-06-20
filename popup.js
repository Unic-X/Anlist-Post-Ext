var paadu={
    key:null,
    coverImage:null,
    titleEnglish:null,
};
const signInButton=document.getElementById("sign_in");

const removeEpWatched = document.getElementById("lastEpMinus");

const addEpWatched = document.getElementById("lastEpPlus");

addEpWatched.addEventListener("click",()=>{
    const inputEpWatched = document.getElementById("inputEpWatched");
    var c = parseInt(inputEpWatched.value);
    if(isNaN(c)){
        c=0
    }
    c++;
    inputEpWatched.value = c;
    inputEpWatched.innerHTML = c;
})

removeEpWatched.addEventListener("click",()=>{
    const inputEpWatched = document.getElementById("inputEpWatched");
    var c = parseInt(inputEpWatched.value);
    if(isNaN(c) || c===0){
        return
    }
    c--;
    inputEpWatched.value = c;
    inputEpWatched.innerHTML = c;
})



signInButton.addEventListener("click",()=>{
    chrome.tabs.create({ url: "https://anilist.co/api/v2/oauth/authorize?client_id=5474&response_type=token" })
});

function allah(a,b){
    if(a.length>14){
        document.getElementById("animeTitle").innerHTML=a.slice(0,11)+"...";
    }else{
        document.getElementById("animeTitle").innerHTML=a;
    }
    document.getElementById("animeNameFull").innerHTML=a;
    document.getElementById("coverImg").style.backgroundImage=`url(${b})`;
};
chrome.storage.sync.get(['titleEnglish','coverImage',"auth_token"], function(result) {
    if("auth_token" in result){
        signInButton.innerHTML="Log Out";
        signInButton.id="signed_in";
    }
    paadu.coverImage=result.coverImage;paadu.titleEnglish=result.titleEnglish;
    allah(result.titleEnglish,result.coverImage);
});

var acha={
    key:null,
    coverImage:null,
    titleEnglish:null,
};


`Changes the storage values when any change from content.js`
chrome.storage.onChanged.addListener(()=>{
    chrome.storage.sync.get(['titleEnglish','coverImage'], function(result) {
        acha.titleEnglish=result.titleEnglish;acha.coverImage=result.coverImage;
        allah(result.titleEnglish,result.coverImage);
    });
})




//const changeLang=document.getElementById("sign_in");


/*function toLang(){
    changeLang.innerHTML=`Current Language is (${currentLang})`;
    changeLang.addEventListener("click",()=>{
        
    })
}*/



