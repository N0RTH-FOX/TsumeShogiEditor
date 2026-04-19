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
let piece_pos = [
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["Untitled","No name",1,"?"],
    ["hu","king","kin","gin","kei","kyou","hi","kaku"]
]
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
function piece_pos_update(piece_name = ""){
    console.log(event.target.closest(".tate").id +" "+ event.target.classList)
    let pos_local = piece_pos;
    if(event.target.closest(".tate").id == "tate1"){
        if(event.target.classList.contains("yoko9")){pos_local[0][0] = piece_name;}
        else if(event.target.classList.contains("yoko8")){pos_local[0][1] = piece_name;}
        else if(event.target.classList.contains("yoko7")){pos_local[0][2] = piece_name;}
        else if(event.target.classList.contains("yoko6")){pos_local[0][3] = piece_name;}
        else if(event.target.classList.contains("yoko5")){pos_local[0][4] = piece_name;}
        else if(event.target.classList.contains("yoko4")){pos_local[0][5] = piece_name;}
        else if(event.target.classList.contains("yoko3")){pos_local[0][6] = piece_name;}
        else if(event.target.classList.contains("yoko2")){pos_local[0][7] = piece_name;}
        else if(event.target.classList.contains("yoko1")){pos_local[0][8] = piece_name;}
    }
    else if(event.target.closest(".tate").id == "tate2"){
        if(event.target.classList.contains("yoko9")){pos_local[1][0] = piece_name;}
        else if(event.target.classList.contains("yoko8")){pos_local[1][1] = piece_name;}
        else if(event.target.classList.contains("yoko7")){pos_local[1][2] = piece_name;}
        else if(event.target.classList.contains("yoko6")){pos_local[1][3] = piece_name;}
        else if(event.target.classList.contains("yoko5")){pos_local[1][4] = piece_name;}
        else if(event.target.classList.contains("yoko4")){pos_local[1][5] = piece_name;}
        else if(event.target.classList.contains("yoko3")){pos_local[1][6] = piece_name;}
        else if(event.target.classList.contains("yoko2")){pos_local[1][7] = piece_name;}
        else if(event.target.classList.contains("yoko1")){pos_local[1][8] = piece_name;}
    }
    else if(event.target.closest(".tate").id == "tate3"){
        if(event.target.classList.contains("yoko9")){pos_local[2][0] = piece_name;}
        else if(event.target.classList.contains("yoko8")){pos_local[2][1] = piece_name;}
        else if(event.target.classList.contains("yoko7")){pos_local[2][2] = piece_name;}
        else if(event.target.classList.contains("yoko6")){pos_local[2][3] = piece_name;}
        else if(event.target.classList.contains("yoko5")){pos_local[2][4] = piece_name;}
        else if(event.target.classList.contains("yoko4")){pos_local[2][5] = piece_name;}
        else if(event.target.classList.contains("yoko3")){pos_local[2][6] = piece_name;}
        else if(event.target.classList.contains("yoko2")){pos_local[2][7] = piece_name;}
        else if(event.target.classList.contains("yoko1")){pos_local[2][8] = piece_name;}
    }
    else if(event.target.closest(".tate").id == "tate4"){
        if(event.target.classList.contains("yoko9")){pos_local[3][0] = piece_name;}
        else if(event.target.classList.contains("yoko8")){pos_local[3][1] = piece_name;}
        else if(event.target.classList.contains("yoko7")){pos_local[3][2] = piece_name;}
        else if(event.target.classList.contains("yoko6")){pos_local[3][3] = piece_name;}
        else if(event.target.classList.contains("yoko5")){pos_local[3][4] = piece_name;}
        else if(event.target.classList.contains("yoko4")){pos_local[3][5] = piece_name;}
        else if(event.target.classList.contains("yoko3")){pos_local[3][6] = piece_name;}
        else if(event.target.classList.contains("yoko2")){pos_local[3][7] = piece_name;}
        else if(event.target.classList.contains("yoko1")){pos_local[3][8] = piece_name;}
    }
    else if(event.target.closest(".tate").id == "tate5"){
        if(event.target.classList.contains("yoko9")){pos_local[4][0] = piece_name;}
        else if(event.target.classList.contains("yoko8")){pos_local[4][1] = piece_name;}
        else if(event.target.classList.contains("yoko7")){pos_local[4][2] = piece_name;}
        else if(event.target.classList.contains("yoko6")){pos_local[4][3] = piece_name;}
        else if(event.target.classList.contains("yoko5")){pos_local[4][4] = piece_name;}
        else if(event.target.classList.contains("yoko4")){pos_local[4][5] = piece_name;}
        else if(event.target.classList.contains("yoko3")){pos_local[4][6] = piece_name;}
        else if(event.target.classList.contains("yoko2")){pos_local[4][7] = piece_name;}
        else if(event.target.classList.contains("yoko1")){pos_local[4][8] = piece_name;}
    }
    else if(event.target.closest(".tate").id == "tate6"){
        if(event.target.classList.contains("yoko9")){pos_local[5][0] = piece_name;}
        else if(event.target.classList.contains("yoko8")){pos_local[5][1] = piece_name;}
        else if(event.target.classList.contains("yoko7")){pos_local[5][2] = piece_name;}
        else if(event.target.classList.contains("yoko6")){pos_local[5][3] = piece_name;}
        else if(event.target.classList.contains("yoko5")){pos_local[5][4] = piece_name;}
        else if(event.target.classList.contains("yoko4")){pos_local[5][5] = piece_name;}
        else if(event.target.classList.contains("yoko3")){pos_local[5][6] = piece_name;}
        else if(event.target.classList.contains("yoko2")){pos_local[5][7] = piece_name;}
        else if(event.target.classList.contains("yoko1")){pos_local[5][8] = piece_name;}
    }
    else if(event.target.closest(".tate").id == "tate7"){
        if(event.target.classList.contains("yoko9")){pos_local[6][0] = piece_name;}
        else if(event.target.classList.contains("yoko8")){pos_local[6][1] = piece_name;}
        else if(event.target.classList.contains("yoko7")){pos_local[6][2] = piece_name;}
        else if(event.target.classList.contains("yoko6")){pos_local[6][3] = piece_name;}
        else if(event.target.classList.contains("yoko5")){pos_local[6][4] = piece_name;}
        else if(event.target.classList.contains("yoko4")){pos_local[6][5] = piece_name;}
        else if(event.target.classList.contains("yoko3")){pos_local[6][6] = piece_name;}
        else if(event.target.classList.contains("yoko2")){pos_local[6][7] = piece_name;}
        else if(event.target.classList.contains("yoko1")){pos_local[6][8] = piece_name;}
    }
    else if(event.target.closest(".tate").id == "tate8"){
        if(event.target.classList.contains("yoko9")){pos_local[7][0] = piece_name;}
        else if(event.target.classList.contains("yoko8")){pos_local[7][1] = piece_name;}
        else if(event.target.classList.contains("yoko7")){pos_local[7][2] = piece_name;}
        else if(event.target.classList.contains("yoko6")){pos_local[7][3] = piece_name;}
        else if(event.target.classList.contains("yoko5")){pos_local[7][4] = piece_name;}
        else if(event.target.classList.contains("yoko4")){pos_local[7][5] = piece_name;}
        else if(event.target.classList.contains("yoko3")){pos_local[7][6] = piece_name;}
        else if(event.target.classList.contains("yoko2")){pos_local[7][7] = piece_name;}
        else if(event.target.classList.contains("yoko1")){pos_local[7][8] = piece_name;}
    }
    else if(event.target.closest(".tate").id == "tate9"){
        if(event.target.classList.contains("yoko9")){pos_local[8][0] = piece_name;}
        else if(event.target.classList.contains("yoko8")){pos_local[8][1] = piece_name;}
        else if(event.target.classList.contains("yoko7")){pos_local[8][2] = piece_name;}
        else if(event.target.classList.contains("yoko6")){pos_local[8][3] = piece_name;}
        else if(event.target.classList.contains("yoko5")){pos_local[8][4] = piece_name;}
        else if(event.target.classList.contains("yoko4")){pos_local[8][5] = piece_name;}
        else if(event.target.classList.contains("yoko3")){pos_local[8][6] = piece_name;}
        else if(event.target.classList.contains("yoko2")){pos_local[8][7] = piece_name;}
        else if(event.target.classList.contains("yoko1")){pos_local[8][8] = piece_name;}
    }
    piece_pos = pos_local;
}
function save_file(){
    piece_pos[9][0] = document.getElementById("in_title").value;
    piece_pos[9][1] = document.getElementById("in_author").value;
    piece_pos[9][2] = document.getElementById("in_level").value;
    piece_pos[10][0] = piece_hu_stok;
    piece_pos[10][1] = piece_king_stok;
    piece_pos[10][2] = piece_kin_stok;
    piece_pos[10][3] = piece_gin_stok;
    piece_pos[10][4] = piece_kei_stok;
    piece_pos[10][5] = piece_kyou_stok;
    piece_pos[10][6] = piece_hi_stok;
    piece_pos[10][7] = piece_kaku_stok;
    const blob = new Blob([piece_pos],{type:'text/tse'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = piece_pos[9][0]+".tse";
    a.click();
};

stok_update()
document.addEventListener("click",(event)=>{
    if(event.target.id == "in_file_button"){document.getElementById("in_file").click();}

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
                    piece_pos_update();
                }
                else if(!event.target.classList.contains("piece-hu") && piece_hu_stok > 0){
                    piece_override();
                    event.target.classList.add("piece-hu");
                    piece_hu_stok--;
                    sound_effect.currentTime = 0;
                    sound_effect.play();
                    piece_pos_update("hu");
                }
            }
            else if(select_status == "king"){
                if(event.target.classList.contains("piece-king")){
                    event.target.classList.remove("piece-king");
                    piece_king_stok++;
                    piece_pos_update();
                }
                else if(!event.target.classList.contains("piece-king") && piece_king_stok > 0){
                    piece_override();
                    event.target.classList.add("piece-king");
                    piece_king_stok--;
                    sound_effect.currentTime = 0;
                    sound_effect.play();
                    piece_pos_update("king");
                }
            }
            else if(select_status == "kin"){
                if(event.target.classList.contains("piece-kin")){
                    event.target.classList.remove("piece-kin");
                    piece_kin_stok++;
                    piece_pos_update();
                }
                else if(!event.target.classList.contains("piece-kin") && piece_kin_stok > 0){
                    piece_override();
                    event.target.classList.add("piece-kin");
                    piece_kin_stok--;
                    sound_effect.currentTime = 0;
                    sound_effect.play();
                    piece_pos_update("kin");
                }
            }
            else if(select_status == "gin"){
                if(event.target.classList.contains("piece-gin")){
                    event.target.classList.remove("piece-gin");
                    piece_gin_stok++;
                    piece_pos_update();
                }
                else if(!event.target.classList.contains("piece-gin") && piece_gin_stok > 0){
                    piece_override();
                    event.target.classList.add("piece-gin");
                    piece_gin_stok--;
                    sound_effect.currentTime = 0;
                    sound_effect.play();
                    piece_pos_update("gin");
                }
            }
            else if(select_status == "kei"){
                if(event.target.classList.contains("piece-kei")){
                    event.target.classList.remove("piece-kei");
                    piece_kei_stok++;
                    piece_pos_update();
                }
                else if(!event.target.classList.contains("piece-kei") && piece_kei_stok > 0){
                    piece_override();
                    event.target.classList.add("piece-kei");
                    piece_kei_stok--;
                    sound_effect.currentTime = 0;
                    sound_effect.play();
                    piece_pos_update("kei");
                }
            }
            else if(select_status == "kyou"){
                if(event.target.classList.contains("piece-kyou")){
                    event.target.classList.remove("piece-kyou");
                    piece_kyou_stok++;
                    piece_pos_update();
                }
                else if(!event.target.classList.contains("piece-kyou") && piece_kyou_stok > 0){
                    piece_override();
                    event.target.classList.add("piece-kyou");
                    piece_kyou_stok--;
                    sound_effect.currentTime = 0;
                    sound_effect.play();
                    piece_pos_update("kyou");
                }
            }
            else if(select_status == "hi"){
                if(event.target.classList.contains("piece-hi")){
                    event.target.classList.remove("piece-hi");
                    piece_hi_stok++;
                    piece_pos_update();
                }
                else if(!event.target.classList.contains("piece-hi") && piece_hi_stok > 0){
                    piece_override();
                    event.target.classList.add("piece-hi");
                    piece_hi_stok--;
                    sound_effect.currentTime = 0;
                    sound_effect.play();
                    piece_pos_update("hi");
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
                    piece_pos_update("kaku");
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

document.getElementById("in_file").addEventListener("change",(event)=>{
    let reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.onload = ()=>{
        document.querySelectorAll(".piece-hu").forEach(element => {element.classList.remove('piece-hu');});
        document.querySelectorAll(".piece-king").forEach(element => {element.classList.remove('piece-king');});
        document.querySelectorAll(".piece-kin").forEach(element => {element.classList.remove('piece-kin');});
        document.querySelectorAll(".piece-gin").forEach(element => {element.classList.remove('piece-gin');});
        document.querySelectorAll(".piece-kei").forEach(element => {element.classList.remove('piece-kei');});
        document.querySelectorAll(".piece-kyou").forEach(element => {element.classList.remove('piece-kyou');});
        document.querySelectorAll(".piece-hi").forEach(element => {element.classList.remove('piece-hi');});
        document.querySelectorAll(".piece-kaku").forEach(element => {element.classList.remove('piece-kaku');});

        for (let i = 0; i < 9; i++) {piece_pos[i] = reader.result.split(",").slice(i*9,(i+1)*9)}
        piece_pos[9] = reader.result.split(",").slice(81,85)
        piece_pos[10] = reader.result.split(",").slice(85,93)
        for (let i = 0; i < 10; i++) {
            document.getElementById("tate1").children[i]?.classList.add("piece-"+piece_pos[0][i])
            document.getElementById("tate2").children[i]?.classList.add("piece-"+piece_pos[1][i])
            document.getElementById("tate3").children[i]?.classList.add("piece-"+piece_pos[2][i])
            document.getElementById("tate4").children[i]?.classList.add("piece-"+piece_pos[3][i])
            document.getElementById("tate5").children[i]?.classList.add("piece-"+piece_pos[4][i])
            document.getElementById("tate6").children[i]?.classList.add("piece-"+piece_pos[5][i])
            document.getElementById("tate7").children[i]?.classList.add("piece-"+piece_pos[6][i])
            document.getElementById("tate8").children[i]?.classList.add("piece-"+piece_pos[7][i])
            document.getElementById("tate9").children[i]?.classList.add("piece-"+piece_pos[8][i])
        }
        piece_hu_stok = piece_pos[10][0];
        piece_king_stok = piece_pos[10][1];
        piece_kin_stok = piece_pos[10][2];
        piece_gin_stok = piece_pos[10][3];
        piece_kei_stok = piece_pos[10][4];
        piece_kyou_stok = piece_pos[10][5];
        piece_hi_stok = piece_pos[10][6];
        piece_kaku_stok = piece_pos[10][7];
        stok_update()

        document.getElementById("in_title").value = piece_pos[9][0];
        document.getElementById("in_author").value = piece_pos[9][1];
        document.getElementById("in_level").value = piece_pos[9][2];
    }
})