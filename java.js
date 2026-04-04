function changeBg() {
    let color = prompt("Введите цвет: red, blue, green, yellow, purple");
    
    if (color === "red") {
        document.body.style.background = "red";
        document.getElementById("title").innerText = "Фон красный";
    }
    else if (color === "blue") {
        document.body.style.background = "blue";
        document.getElementById("title").innerText = "Фон синий";
    }
    else if (color === "green") {
        document.body.style.background = "green";
        document.getElementById("title").innerText = "Фон зелёный";
    }
    else if (color === "yellow") {
        document.body.style.background = "yellow";
        document.getElementById("title").innerText = "Фон жёлтый";
    }
    else if (color === "purple") {
        document.body.style.background = "purple";
        document.getElementById("title").innerText = "Фон фиолетовый";
    }
    else {
        alert("Ошибка! Введите red, blue, green, yellow, purple");
    }
}

function trafficLight() {
    let color = prompt("Введите цвет: Красный, Жёлтый или Зелёный");
    
    document.getElementById("red").classList.remove("active");
    document.getElementById("yellow").classList.remove("active");
    document.getElementById("green").classList.remove("active");
    
    if (color === "Красный") {
        document.getElementById("red").classList.add("active");
        document.getElementById("msg").innerText = "STOP";
    }
    else if (color === "Жёлтый") {
        document.getElementById("yellow").classList.add("active");
        document.getElementById("msg").innerText = "WAIT";
    }
    else if (color === "Зелёный") {
        document.getElementById("green").classList.add("active");
        document.getElementById("msg").innerText = "GO";
    }
    else {
        alert("Ошибка! Введите: Красный, Жёлтый или Зелёный");
    }
}