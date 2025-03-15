const home = document.getElementById('home')
const level = document.getElementById('level')
const play = document.getElementById('play')
const play6x6 = document.getElementById('play6x6')
level.style.display = 'none';
play.style.display = 'none';
play6x6.style.display = 'none';
var gtchung;
function thaygt(gt) {
    gtchung = gt;
    erasemode = false;
}
var erasemode=false;

var d = "i1";
var stt;
var x;
var dem;
var kt = new Array();
var demb = new Array();
var a = [
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"]
    ];
var b = [
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ];
var c = [
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
       ["0", "0", "0", "0", "0", "0", "0", "0", "0"]
    ];
function check(x, i, j){
    for (let m = 0; m <= 8; m++){
        if (m != j) {
            if (a[i][m] == x) {
                return(false);
            }
        }
    }
    for (let n = 0; n <= 8; n++){
        if (n != i) { 
            if (a[n][j] == x) {
                return(false);
            }
        }
    }
    var l = Math.floor(i/3); 
    var q = Math.floor(j/3);
    for(let w = 3*l; w < 3*l+3; w++){
        for(let r = 3*q; r < 3*q+3; r++){
            if (w != i && r != j) if (a[w][r] == x) return (false);
        }
    }
    return(true);
}
function check6x6(x, i, j){
    for (let m = 0; m <= 5; m++){
        if (m != j) {
            if (a[i][m] == x) {
                return(false);
            }
        }
    }
    for (let n = 0; n <= 5; n++){
        if (n != i) { 
            if (a[n][j] == x) {
                return(false);
            }
        }
    }
    var l = Math.floor(i/2); 
    var q = Math.floor(j/3);
    for(let w = 2*l; w < 2*l+2; w++){
        for(let r = 3*q; r < 3*q+3; r++){
            if (w != i && r != j) if (a[w][r] == x) return (false);
        }
    }
    return(true);
}
function checkc(x, i, j){
    for (let m = 0; m <= 8; m++){
        if (m != j) {
            if (b[i][m] == x) {
                return(false);
            }
        }
    }
    for (let n = 0; n <= 8; n++){
        if (n != i) { 
            if (b[n][j] == x) {
                return(false);
            }
        }
    }
    var l = Math.floor(i/3); 
    var q = Math.floor(j/3);
    for(let w = 3*l; w < 3*l+3; w++){
        for(let r = 3*q; r < 3*q+3; r++){
            if (w != i && r != j) if (b[w][r] == x) return (false);
        }
    }
    return(true);
}

function checkc6x6(x, i, j){
    for (let m = 0; m <= 5; m++){
        if (m != j) {
            if (b[i][m] == x) {
                return(false);
            }
        }
    }
    for (let n = 0; n <= 5; n++){
        if (n != i) { 
            if (b[n][j] == x) {
                return(false);
            }
        }
    }
    var l = Math.floor(i/2); 
    var q = Math.floor(j/3);
    for(let w = 2*l; w < 2*l+2; w++){
        for(let r = 3*q; r < 3*q+3; r++){
            if (w != i && r != j) if (a[w][r] == x) return (false);
        }
    }
    return(true);
}
function solveans(){
    for (let i = 0; i <= 8; i++){
        for (let j = 0; j <= 8; j++){
            stt = 9*i + j + 1;
            d = "i" + stt.toString();
            document.getElementById(d).innerHTML = b[i][j];
        }
    }

}
function solveans6x6(){
    for (let i = 0; i <= 5; i++){
        for (let j = 0; j <= 5; j++){
            stt = 6*i + j + 1;
            d = "i" + stt.toString();
            document.getElementById(d).innerHTML = b[i][j];
        }
    }

}
function back(stt){
    j = (stt - 1) % 9;
    i = Math.floor((stt - 1) / 9);
    if (stt == 82){
        solveans();
    }
    if (b[i][j] != 0) back(stt + 1);
    else {
    for (let k = 1; k <= 9; k++){
        if (checkc(k, i, j)){
            b[i][j] = k;
            back(stt + 1);
            b[i][j] = 0;
        }
    }
    }
}
function back6x6(stt){
    j = (stt - 1) % 6;
    i = Math.floor((stt - 1) / 6);
    if (stt == 37){
        solveans6x6();
    }
    if (b[i][j] != 0) back6x6(stt + 1);
    else {
    for (let k = 1; k <= 6; k++){
        if (checkc6x6(k, i, j)){
            b[i][j] = k;
            back6x6(stt + 1);
            b[i][j] = 0;
        }
    }
    }
}
function istrue(){
    for (let i = 0; i <= 8; i++){
        for (let j = 0; j <= 8; j++){
            if (a[i][j] == 0) return(false);
        }
    }
    return(true);
}
function istrue6x6(){
    for (let i = 0; i <= 5; i++){
        for (let j = 0; j <= 5; j++){
            if (a[i][j] == 0) return(false);
        }
    }
    return(true);
}
var i, j;
function create(lv){
    for (let i = 0; i <= 8; i++){
        for (let j = 0; j <= 8; j++){
            a[i][j] = 0;
            b[i][j] = 0;
            c[i][j] = 0;
        }
    }
    for (let i = 0; i <= 8; i++){
        for (let j = 0; j <= 8; j++){
            stt = 9*i + j + 1;
            d = "i" + stt.toString();
            document.getElementById(d).innerHTML = "";
        }
    }
    for (let k = 1; k <= lv; k++){
            stt = Math.floor(Math.random() * 81) + 1;
            j = (stt - 1) % 9;
            i = Math.floor((stt - 1) / 9);
            d = "i" + stt.toString();
            a[i][j] = Math.floor(Math.random() * 9) + 1;
                while (check(a[i][j], i, j) == false){
                    if (dem == 9) break;
                    if (kt[a[i][j]] == 0) kt[a[i][j]] = 1; else{
                        dem++;
                    }
                    a[i][j] = Math.floor(Math.random() * 9) + 1;
                }
            if (dem == 9) a[i][j] = "";
            dem = 0;
            for (let s = 1; s <= 9; s++) kt[s] = 0;
            let div = document.getElementById(d);
            div.style.color="#2276B6";
            div.innerHTML = a[i][j];
            if (a[i][j] != 1) c[i][j] = 1;
        }
    }
function create6x6(){
    for (let i = 0; i <= 5; i++){
        for (let j = 0; j <= 5; j++){
            a[i][j] = 0;
            b[i][j] = 0;
            c[i][j] = 0;
        }
    }
    for (let i = 0; i <= 5; i++){
        for (let j = 0; j <= 5; j++){
            stt = 6*i + j + 1;
            d = "i" + stt.toString() + "^";
            document.getElementById(d).innerHTML = "";
        }
    }
for (let k = 1; k <= 20; k++){
        stt = Math.floor(Math.random() * 36) + 1;
        j = (stt - 1) % 6;
        i = Math.floor((stt - 1) / 6);
        d = "i" + stt.toString() + "^";
        a[i][j] = Math.floor(Math.random() * 6) + 1;
            while (check6x6(a[i][j], i, j) == false){
                if (dem == 6) break;
                if (kt[a[i][j]] == 0) kt[a[i][j]] = 1; else{
                    dem++;
                }
                a[i][j] = Math.floor(Math.random() * 6) + 1;
            }
        if (dem == 6) a[i][j] = "";
        dem = 0;
        for (let s = 1; s <= 6; s++) kt[s] = 0;
        let div = document.getElementById(d);
        div.style.color="#2276B6";
        document.getElementById(d).innerHTML = a[i][j];
        if (a[i][j] != 1) c[i][j] = 1;
    }
}
function start() {
    home.style.display = 'none';
    level.style.display = 'block';
    play.style.display = 'none';
    play6x6.style.display ='none';
};
function returnhome() {
    home.style.display = 'block';
    level.style.display = 'none';
    play.style.display = 'none';
    play6x6.style.display ='none';
    for (let i = 0; i <= 8; i++){
        for (let j = 0; j <= 8; j++){
            var stt = i*9 + j + 1;
            d = "i" + stt.toString();
            let div = document.getElementById(d);
            div.style.color="#2276B6";
            div.style.backgroundColor="#91CFFF";
        }
        }
    for (let i = 0; i <= 5; i++){
        for (let j = 0; j <= 5; j++){
            var stt = i*9 + j + 1;
            d = "i" + stt.toString() + "^";
            let div = document.getElementById(d);
            div.style.color="#2276B6";
            div.style.backgroundColor="#91CFFF";
        }
        }
};
function createnew(lv){
    for (let i = 0; i <= 8; i++){
        for (let j = 0; j <= 8; j++){
            a[i][j] = 0;
            c[i][j] = 0;
        }
    }
    for (let i = 0; i <= 80; i++){
        demb[i] = 9;
        for (let j = 0; j <= 8; j++){
            b[i][j] = 1;
        }
    }
    var min = 10;
    for (let i = 0; i <= 8; i++){
        for (let j = 0; j <= 8; j++){
            stt = 9*i + j + 1;
            d = "i" + stt.toString();
            document.getElementById(d).innerHTML = "";
        }
    }
    var res = 0;
    var i,j;
    var dulieu;
    for (let m = 0; m <= 80; m++){
        min = 10;
        res = 0;
        for (let n = 0; n <= 80; n++){
            j = (n) % 9;
            i = Math.floor((n) / 9);
            if (demb[n] < min && a[i][j] != 0){
                res = n;
                min = demb[n];
            }
        }
        demb[res]--;
        j = (res) % 9;
        i = Math.floor((res) / 9);
        dulieu=1;
        dulieu = Math.floor(Math.random() * 9);
        while (b[res][dulieu] == 0){
            dulieu = Math.floor(Math.random() * 9) ;
        }
        b[res][dulieu] = 0;
        a[i][j] = dulieu + 1;
        d = "i" + (res + 1).toString();
        document.getElementById(d).innerHTML = a[i][j];
    }
    for (let m = 0; m <=80; m++){
        d = "i" + (m + 1).toString();
        document.getElementById(d).innerHTML = a[i][j];

    }
    document.getElementById("i1").innerHTML = 5;
    
}
function gotoplay(lv) {
    home.style.display = 'none';
    level.style.display = 'none';
    play.style.display = 'block';
    play6x6.style.display ='none';
    create(lv);
};
function goto6x6() {
    home.style.display = 'none';
    level.style.display = 'none';
    play.style.display = 'none';
    play6x6.style.display ='block';
    create6x6();
}
var bonhotam6 = 1;
function clicka(id) {
    var stt, dt, mod;
    var d = "i" + bonhotam6.toString() + "^";
    let div = document.getElementById(d);
    j = (bonhotam6 - 1) % 6;
    i = Math.floor((bonhotam6 - 1) / 6);
    for (let m = 0; m <= 5; m++){
        stt = (i * 6) + m + 1;
        dt = "i" + stt.toString() + "^";
        mod = document.getElementById(dt);
        mod.style.backgroundColor="#91CFFF";
    }
    for (let n = 0; n <= 5; n++){
        stt = (n * 6) + j + 1;
        dt = "i" + stt.toString() + "^";
        mod = document.getElementById(dt);
        mod.style.backgroundColor="#91CFFF";
        }
    var l = Math.floor(i/2); 
    var q = Math.floor(j/3);
    for(let w = 2*l; w < 2*l+2; w++){
        for(let r = 3*q; r < 3*q+3; r++){
            stt = (w * 6) + r + 1;
            dt = "i" + stt.toString() + "^";
            mod = document.getElementById(dt);
            mod.style.backgroundColor="#91CFFF";
        }
    }
    bonhotam6 = id;
    d = "i" + id.toString() + "^";
    div = document.getElementById(d);
    j = (id - 1) % 6;
    i = Math.floor((id - 1) / 6);
    if ((erasemode) && (c[i][j] == 0)) {
        a[i][j] = "";
        document.getElementById(d).innerHTML = "";
    }
    if ((c[i][j] == 0)) div.style.color="#9F3F73";
    if ((gtchung>0) && c[i][j] == 0) {
        document.getElementById(d).innerHTML = gtchung;
        a[i][j] = gtchung;
    }
    for (let m = 0; m <= 5; m++){
        stt = (i * 6) + m + 1;
        dt = "i" + stt.toString() + "^";
        mod = document.getElementById(dt);
        mod.style.backgroundColor="#91FFD1";
    }
    for (let n = 0; n <= 5; n++){
        stt = (n * 6) + j + 1;
        dt = "i" + stt.toString() + "^";
        mod = document.getElementById(dt);
        mod.style.backgroundColor="#91FFD1";
        }
    l = Math.floor(i/2); 
    q = Math.floor(j/3);
    for(let w = 2*l; w < 2*l+2; w++){
        for(let r = 3*q; r < 3*q+3; r++){
            stt = (w * 6) + r + 1;
            dt = "i" + stt.toString() + "^";
            mod = document.getElementById(dt);
            mod.style.backgroundColor="#91FFD1";
        }
    }
}
var bonhotam = 1;
function clickb(id) {
    var stt, dt, mod;
    var d = "i" + bonhotam.toString();
    let div = document.getElementById(d);
    j = (bonhotam - 1) % 9;
    i = Math.floor((bonhotam - 1) / 9);
    for (let m = 0; m <= 8; m++){
        stt = (i * 9) + m + 1;
        dt = "i" + stt.toString();
        mod = document.getElementById(dt);
        mod.style.backgroundColor="#91CFFF";
    }
    for (let n = 0; n <= 8; n++){
        stt = (n * 9) + j + 1;
        dt = "i" + stt.toString();
        mod = document.getElementById(dt);
        mod.style.backgroundColor="#91CFFF";
        }
    var l = Math.floor(i/3); 
    var q = Math.floor(j/3);
    for(let w = 3*l; w < 3*l+3; w++){
        for(let r = 3*q; r < 3*q+3; r++){
            stt = (w * 9) + r + 1;
            dt = "i" + stt.toString();
            mod = document.getElementById(dt);
            mod.style.backgroundColor="#91CFFF";
        }
    }
    bonhotam = id;
    d = "i" + id.toString();
    div = document.getElementById(d);
    j = (id - 1) % 9;
    i = Math.floor((id - 1) / 9);
    if ((erasemode) && (c[i][j] == 0)) {
        a[i][j] = "";
        document.getElementById(d).innerHTML = "";
    }
    if ((c[i][j] == 0)) div.style.color="#9F3F73";
    if ((gtchung>0) && c[i][j] == 0) {
        document.getElementById(d).innerHTML = gtchung;
        a[i][j] = gtchung;
    }
    for (let m = 0; m <= 8; m++){
        stt = (i * 9) + m + 1;
        dt = "i" + stt.toString();
        mod = document.getElementById(dt);
        mod.style.backgroundColor="#91FFD1";
    }
    for (let n = 0; n <= 8; n++){
        stt = (n * 9) + j + 1;
        dt = "i" + stt.toString();
        mod = document.getElementById(dt);
        mod.style.backgroundColor="#91FFD1";
        }
    l = Math.floor(i/3); 
    q = Math.floor(j/3);
    for(let w = 3*l; w < 3*l+3; w++){
        for(let r = 3*q; r < 3*q+3; r++){
            stt = (w * 9) + r + 1;
            dt = "i" + stt.toString();
            mod = document.getElementById(dt);
            mod.style.backgroundColor="#91FFD1";
        }
    }
}
function submit_ans(){
    if (istrue()) window.open('https://cdn.discordapp.com/attachments/1091348829875470357/1091354429577510992/image.png'); 
    alert("no");
}
function submit_ans6x6(){
    if (istrue6x6()) window.open('https://cdn.discordapp.com/attachments/1091348829875470357/1091354429577510992/image.png'); 
    alert("no");
}
function erase(){
    erasemode = true;
    gtchung = 0;
}