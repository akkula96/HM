const title = document.getElementById('title');
const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green')
const msg = document.getElementById('msg')


function changeBg() {
    let color = prompt("Введите цвет: red, blue, green, yellow, purple");
    
    if (color === "red") {
        document.body.style.background = "red";
        title.innerText = "Фон красный";
    }
    else if (color === "blue") {
        document.body.style.background = "blue";
        title.innerText = "Фон синий";
    }
    else if (color === "green") {
        document.body.style.background = "green";
        title.innerText = "Фон зелёный";
    }
    else if (color === "yellow") {
        document.body.style.background = "yellow";
        title.innerText = "Фон жёлтый";
    }
    else if (color === "purple") {
        document.body.style.background = "purple";
        title.innerText = "Фон фиолетовый";
    }
    else {
        alert("Ошибка! Введите red, blue, green, yellow, purple");
    }
}
function trafficLight() {
    let color = prompt("Введите цвет: red, yellow или green");
    
    redLight.classList.remove("active");
    yellowLight.classList.remove("active");
    greenLight.classList.remove("active");

    if (color === "red") {
        redLight.classList.add("active");
        msg.innerText = "STOP";
    }
    else if (color === "yellow") {
        yellowLight.classList.add("active");
        msg.innerText = "WAIT";
    }
    else if (color === "green") {
       greenLight.classList.add("active");
       msg.innerText = "GO";
    }
    else {
        alert("Ошибка! Введите: red, yellow или green");
    }
}