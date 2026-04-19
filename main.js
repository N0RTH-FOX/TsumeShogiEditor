let element_hu_stok = document.getElementById("piece_hu_stok");
let element_king_stok = document.getElementById("piece_king_stok");
let element_kin_stok = document.getElementById("piece_kin_stok");
let element_gin_stok = document.getElementById("piece_gin_stok");
let element_kei_stok = document.getElementById("piece_kei_stok");
let element_kyou_stok = document.getElementById("piece_kyou_stok");
let element_hi_stok = document.getElementById("piece_hi_stok");
let element_kaku_stok = document.getElementById("piece_kaku_stok");

let element_hu2_stok = document.getElementById("piece_hu2_stok");
let element_king2_stok = document.getElementById("piece_king2_stok");
let element_kin2_stok = document.getElementById("piece_kin2_stok");
let element_gin2_stok = document.getElementById("piece_gin2_stok");
let element_kei2_stok = document.getElementById("piece_kei2_stok");
let element_kyou2_stok = document.getElementById("piece_kyou2_stok");
let element_hi2_stok = document.getElementById("piece_hi2_stok");
let element_kaku2_stok = document.getElementById("piece_kaku2_stok");

let piece_hu_stok = 9;
let piece_king_stok = 1;
let piece_kin_stok = 2;
let piece_gin_stok = 2;
let piece_kei_stok = 2;
let piece_kyou_stok = 2;
let piece_hi_stok = 1;
let piece_kaku_stok = 1;

let piece_hu2_stok = 9;
let piece_king2_stok = 1;
let piece_kin2_stok = 2;
let piece_gin2_stok = 2;
let piece_kei2_stok = 2;
let piece_kyou2_stok = 2;
let piece_hi2_stok = 1;
let piece_kaku2_stok = 1;

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
    ["hu","king","kin","gin","kei","kyou","hi","kaku"],
    ["hu2","king2","kin2","gin2","kei2","kyou2","hi2","kaku2"]
]
const pieces = ["hu", "king", "kin", "gin", "kei", "kyou", "hi", "kaku", "hu2", "king2", "kin2", "gin2", "kei2", "kyou2", "hi2", "kaku2"];

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
    element_hu2_stok.textContent = piece_hu2_stok;
    element_king2_stok.textContent = piece_king2_stok;
    element_kin2_stok.textContent = piece_kin2_stok;
    element_gin2_stok.textContent = piece_gin2_stok;
    element_kei2_stok.textContent = piece_kei2_stok;
    element_kyou2_stok.textContent = piece_kyou2_stok;
    element_hi2_stok.textContent = piece_hi2_stok;
    element_kaku2_stok.textContent = piece_kaku2_stok;
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
    piece_pos[11][0] = piece_hu2_stok;
    piece_pos[11][1] = piece_king2_stok;
    piece_pos[11][2] = piece_kin2_stok;
    piece_pos[11][3] = piece_gin2_stok;
    piece_pos[11][4] = piece_kei2_stok;
    piece_pos[11][5] = piece_kyou2_stok;
    piece_pos[11][6] = piece_hi2_stok;
    piece_pos[11][7] = piece_kaku2_stok;
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
        pieces.forEach(piece => {
            if(event.target.id == piece){
                if(select_status != piece){
                    select_status = piece
                }
                else{
                    select_status = ""
                }
            }
        });
        if(event.target.classList.contains("yoko") && select_status != ""){
            (function (piece){
                let stok
                if(piece == "hu"){stok = piece_hu_stok}
                else if(piece == "king"){stok = piece_king_stok}
                else if(piece == "kin"){stok = piece_kin_stok}
                else if(piece == "gin"){stok = piece_gin_stok}
                else if(piece == "kei"){stok = piece_kei_stok}
                else if(piece == "kyou"){stok = piece_kyou_stok}
                else if(piece == "hi"){stok = piece_hi_stok}
                else if(piece == "kaku"){stok = piece_kaku_stok}
                else if(piece == "hu2"){stok = piece_hu2_stok}
                else if(piece == "king2"){stok = piece_king2_stok}
                else if(piece == "kin2"){stok = piece_kin2_stok}
                else if(piece == "gin2"){stok = piece_gin2_stok}
                else if(piece == "kei2"){stok = piece_kei2_stok}
                else if(piece == "kyou2"){stok = piece_kyou2_stok}
                else if(piece == "hi2"){stok = piece_hi2_stok}
                else if(piece == "kaku2"){stok = piece_kaku2_stok}
            
                if(select_status == piece){
                    if(event.target.classList.contains("piece-"+piece)){
                        event.target.classList.remove("piece-"+piece);
                        stok++;
                        piece_pos_update();
                    }
                    else if(!event.target.classList.contains("piece-"+piece) && stok > 0){
                        piece_override();
                        event.target.classList.add("piece-"+piece);
                        stok--;
                        sound_effect.currentTime = 0;
                        sound_effect.play();
                        piece_pos_update(piece);
                    }
                }

                if(piece == "hu"){piece_hu_stok = stok}
                else if(piece == "king"){piece_king_stok = stok}
                else if(piece == "kin"){piece_kin_stok = stok}
                else if(piece == "gin"){piece_gin_stok = stok}
                else if(piece == "kei"){piece_kei_stok = stok}
                else if(piece == "kyou"){piece_kyou_stok = stok}
                else if(piece == "hi"){piece_hi_stok = stok}
                else if(piece == "kaku"){piece_kaku_stok = stok}
                else if(piece == "hu2"){piece_hu2_stok = stok}
                else if(piece == "king2"){piece_king2_stok = stok}
                else if(piece == "kin2"){piece_kin2_stok = stok}
                else if(piece == "gin2"){piece_gin2_stok = stok}
                else if(piece == "kei2"){piece_kei2_stok = stok}
                else if(piece == "kyou2"){piece_kyou2_stok = stok}
                else if(piece == "hi2"){piece_hi2_stok = stok}
                else if(piece == "kaku2"){piece_kaku2_stok = stok}
            })(select_status)
        }
        pieces.forEach(piece => {
            document.getElementById(piece).style.background = (select_status === piece) ? "#fffb" : "";
        });
    }
    stok_update()
})

document.getElementById("in_file").addEventListener("change",(event)=>{
    let reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.onload = ()=>{
        pieces.forEach(piece => {
            document.querySelectorAll(".piece-"+piece).forEach(element => {element.classList.remove('piece-'+piece);});
        });
        for (let i = 0; i < 9; i++) {piece_pos[i] = reader.result.split(",").slice(i*9,(i+1)*9)}
        piece_pos[9] = reader.result.split(",").slice(81,85)
        piece_pos[10] = reader.result.split(",").slice(85,93)
        piece_pos[11] = reader.result.split(",").slice(93,101)
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
        piece_hu2_stok = piece_pos[11][0];
        piece_king2_stok = piece_pos[11][1];
        piece_kin2_stok = piece_pos[11][2];
        piece_gin2_stok = piece_pos[11][3];
        piece_kei2_stok = piece_pos[11][4];
        piece_kyou2_stok = piece_pos[11][5];
        piece_hi2_stok = piece_pos[11][6];
        piece_kaku2_stok = piece_pos[11][7];
        stok_update()

        document.getElementById("in_title").value = piece_pos[9][0];
        document.getElementById("in_author").value = piece_pos[9][1];
        document.getElementById("in_level").value = piece_pos[9][2];
    }
})