let element_hu_stok = document.getElementById("piece_hu_stok");
let element_king_stok = document.getElementById("piece_king_stok");
let element_kin_stok = document.getElementById("piece_kin_stok");
let element_gin_stok = document.getElementById("piece_gin_stok");
let element_kei_stok = document.getElementById("piece_kei_stok");
let element_kyou_stok = document.getElementById("piece_kyou_stok");
let element_hi_stok = document.getElementById("piece_hi_stok");
let element_kaku_stok = document.getElementById("piece_kaku_stok");
let piece_hu_stok = 9;
let piece_king_stok = 1;
let piece_kin_stok = 2;
let piece_gin_stok = 2;
let piece_kei_stok = 2;
let piece_kyou_stok = 2;
let piece_hi_stok = 1;
let piece_kaku_stok = 1;

let select_status = "";
let edit_status = Boolean(true);

const sound_effect  = new Audio("./assets/shogi.mp3");
sound_effect.currentTime = 0;

function stok_update(){
    element_hu_stok.textContent = piece_hu_stok;
    element_king_stok.textContent = piece_king_stok;
    element_kin_stok.textContent = piece_kin_stok;
    element_gin_stok.textContent = piece_gin_stok;
    element_kei_stok.textContent = piece_kei_stok;
    element_kyou_stok.textContent = piece_kyou_stok;
    element_hi_stok.textContent = piece_hi_stok;
    element_kaku_stok.textContent = piece_kaku_stok;
}
function piece_override(){
    if(event.target.classList.contains("piece-hu")){
        event.target.classList.remove("piece-hu")
        piece_hu_stok++;
    }
    else if(event.target.classList.contains("piece-king")){
        event.target.classList.remove("piece-king")
        piece_king_stok++;
    }
    else if(event.target.classList.contains("piece-kin")){
        event.target.classList.remove("piece-kin")
        piece_kin_stok++;
    }
    else if(event.target.classList.contains("piece-gin")){
        event.target.classList.remove("piece-gin")
        piece_gin_stok++;
    }
    else if(event.target.classList.contains("piece-kei")){
        event.target.classList.remove("piece-kei")
        piece_kei_stok++;
    }
    else if(event.target.classList.contains("piece-kyou")){
        event.target.classList.remove("piece-kyou")
        piece_kyou_stok++;
    }
    else if(event.target.classList.contains("piece-hi")){
        event.target.classList.remove("piece-hi")
        piece_hi_stok++;
    }
    else if(event.target.classList.contains("piece-kaku")){
        event.target.classList.remove("piece-kaku")
        piece_kaku_stok++;
    }
}

stok_update()
document.addEventListener("click",(event)=>{
    console.log("クリックした要素:", event.target.className);
    if(edit_status == Boolean(true)){
        if(event.target.tagName == "MAIN" || event.target.className == "editor"){
            select_status = ""
        }
        else if(event.target.id == "hu"){
            if(select_status != "hu"){
                select_status = "hu"
            }
            else{
                select_status = ""
            }
        }
        else if(event.target.id == "king"){
            if(select_status != "king"){
                select_status = "king"
            }
            else{
                select_status = ""
            }
        }
        else if(event.target.id == "kin"){
            if(select_status != "kin"){
                select_status = "kin"
            }
            else{
                select_status = ""
            }
        }
        else if(event.target.id == "gin"){
            if(select_status != "gin"){
                select_status = "gin"
            }
            else{
                select_status = ""
            }
        }
        else if(event.target.id == "kei"){
            if(select_status != "kei"){
                select_status = "kei"
            }
            else{
                select_status = ""
            }
        }
        else if(event.target.id == "kyou"){
            if(select_status != "kyou"){
                select_status = "kyou"
            }
            else{
                select_status = ""
            }
        }
        else if(event.target.id == "hi"){
            if(select_status != "hi"){
                select_status = "hi"
            }
            else{
                select_status = ""
            }
        }
        else if(event.target.id == "kaku"){
            if(select_status != "kaku"){
                select_status = "kaku"
            }
            else{
                select_status = ""
            }
        }

        if(event.target.classList.contains("yoko")){
            if(select_status == "hu"){
                if(event.target.classList.contains("piece-hu")){
                    event.target.classList.remove("piece-hu");
                    piece_hu_stok++;
                }
                else if(!event.target.classList.contains("piece-hu") && piece_hu_stok > 0){
                    piece_override();
                    event.target.classList.add("piece-hu");
                    piece_hu_stok--;
                    sound_effect.currentTime = 0;
                    sound_effect.play();
                }
            }
            else if(select_status == "king"){
                if(event.target.classList.contains("piece-king")){
                    event.target.classList.remove("piece-king");
                    piece_king_stok++;
                }
                else if(!event.target.classList.contains("piece-king") && piece_king_stok > 0){
                    piece_override();
                    event.target.classList.add("piece-king");
                    piece_king_stok--;
                    sound_effect.currentTime = 0;
                    sound_effect.play();
                }
            }
            else if(select_status == "kin"){
                if(event.target.classList.contains("piece-kin")){
                    event.target.classList.remove("piece-kin");
                    piece_kin_stok++;
                }
                else if(!event.target.classList.contains("piece-kin") && piece_kin_stok > 0){
                    piece_override();
                    event.target.classList.add("piece-kin");
                    piece_kin_stok--;
                    sound_effect.currentTime = 0;
                    sound_effect.play();
                }
            }
            else if(select_status == "gin"){
                if(event.target.classList.contains("piece-gin")){
                    event.target.classList.remove("piece-gin");
                    piece_gin_stok++;
                }
                else if(!event.target.classList.contains("piece-gin") && piece_gin_stok > 0){
                    piece_override();
                    event.target.classList.add("piece-gin");
                    piece_gin_stok--;
                    sound_effect.currentTime = 0;
                    sound_effect.play();
                }
            }
            else if(select_status == "kei"){
                if(event.target.classList.contains("piece-kei")){
                    event.target.classList.remove("piece-kei");
                    piece_kei_stok++;
                }
                else if(!event.target.classList.contains("piece-kei") && piece_kei_stok > 0){
                    piece_override();
                    event.target.classList.add("piece-kei");
                    piece_kei_stok--;
                    sound_effect.currentTime = 0;
                    sound_effect.play();
                }
            }
            else if(select_status == "kyou"){
                if(event.target.classList.contains("piece-kyou")){
                    event.target.classList.remove("piece-kyou");
                    piece_kyou_stok++;
                }
                else if(!event.target.classList.contains("piece-kyou") && piece_kyou_stok > 0){
                    piece_override();
                    event.target.classList.add("piece-kyou");
                    piece_kyou_stok--;
                    sound_effect.currentTime = 0;
                    sound_effect.play();
                }
            }
            else if(select_status == "hi"){
                if(event.target.classList.contains("piece-hi")){
                    event.target.classList.remove("piece-hi");
                    piece_hi_stok++;
                }
                else if(!event.target.classList.contains("piece-hi") && piece_hi_stok > 0){
                    piece_override();
                    event.target.classList.add("piece-hi");
                    piece_hi_stok--;
                    sound_effect.currentTime = 0;
                    sound_effect.play();
                }
            }
            else if(select_status == "kaku"){
                if(event.target.classList.contains("piece-kaku")){
                    event.target.classList.remove("piece-kaku")
                    piece_kaku_stok++;
                }
                else if(!event.target.classList.contains("piece-kaku") && piece_kaku_stok > 0){
                    piece_override();
                    event.target.classList.add("piece-kaku");
                    piece_kaku_stok--;
                    sound_effect.currentTime = 0;
                    sound_effect.play();
                }
            }
        }
        
        if(select_status == "hu"){document.getElementById("hu").style.background = "#fffb";}
        else if(select_status != "hu"){document.getElementById("hu").style.background = "";}
        if(select_status == "king"){document.getElementById("king").style.background = "#fffb";}
        else if(select_status != "king"){document.getElementById("king").style.background = "";}
        if(select_status == "kin"){document.getElementById("kin").style.background = "#fffb";}
        else if(select_status != "kin"){document.getElementById("kin").style.background = "";}
        if(select_status == "gin"){document.getElementById("gin").style.background = "#fffb";}
        else if(select_status != "gin"){document.getElementById("gin").style.background = "";}
        if(select_status == "kei"){document.getElementById("kei").style.background = "#fffb";}
        else if(select_status != "kei"){document.getElementById("kei").style.background = "";}
        if(select_status == "kyou"){document.getElementById("kyou").style.background = "#fffb";}
        else if(select_status != "kyou"){document.getElementById("kyou").style.background = "";}
        if(select_status == "hi"){document.getElementById("hi").style.background = "#fffb";}
        else if(select_status != "hi"){document.getElementById("hi").style.background = "";}
        if(select_status == "kaku"){document.getElementById("kaku").style.background = "#fffb";}
        else if(select_status != "kaku"){document.getElementById("kaku").style.background = "";}
    }
    stok_update()
})