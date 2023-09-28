function validateForm() {
const name = document.forms["message-form"]["full-name"].value;
const birthDate = document.forms["message-form"]["birth-date"].value;
const messages = document.forms["message-form"]["messages"].value;

if (name == "" || birthDate == "" || messages == ""){
    alert("Tidak boleh ada yang kosong");
    return false;
}
setSenderUI(name, birthDate, messages);
}
function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML= name;
    document.getElementById("sender-birth-date").innerHTML= birthDate;
    document.getElementById("sender-messages").innerHTML= messages;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img");
    
    if (n > imgList.length) { 
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = imgList.length;
    }
    
    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    
    imgList[slideIndex - 1].style.display = "block";
}

var form = document.forms["message-form"];

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    var fullName = form.elements["full-name"].value;
    var birthDate = new Date(form.elements["birth-date"].value);
    var hobby = form.elements["hobby"].value;

    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();

    // Menampilkan data pada elemen HTML yang sesuai
    document.querySelector(".nama").textContent = "Nama: " + fullName;
    document.querySelector(".address").textContent = "Umur: " + age + " tahun";
    document.querySelector(".hobi").textContent = "Hobi: " + hobby;


    form.reset();
});

