const lines = document.querySelectorAll(".line");
const values = document.querySelectorAll(".value");
const valueJs = document.querySelectorAll(".valueJs");
const keyJs = document.querySelector(".keyJs");
const valueJava = document.querySelectorAll(".valueJava");
const keyJava = document.querySelector(".keyJava");
const valuePy = document.querySelectorAll(".valuePy");
const keyPy = document.querySelector(".keyPy");
const valueCpp = document.querySelectorAll(".valueCpp");
const keyCpp = document.querySelector(".keyCpp");
const valueCsharp = document.querySelectorAll(".valueCsharp");
const keyCsharp = document.querySelector(".keyCsharp");
const valueSwift = document.querySelectorAll(".valueSwift");
const keySwift = document.querySelector(".keySwift");
const valueRuby = document.querySelectorAll(".valueRuby");
const keyRuby = document.querySelector(".keyRuby");

lines.forEach((e) => {
    e.classList.add("disabled");
});

keyJs.addEventListener("click", () => {
    keyJs.classList.toggle("keyJsActive");
    document.querySelectorAll(".lineJs").forEach((e) => {
        e.classList.toggle("abled");
    });

    valueJs.forEach((e) => {
        e.classList.toggle("keyJsActive");
    });
});

keyJava.addEventListener("click", () => {
    keyJava.classList.toggle("keyJavaActive");
    document.querySelectorAll(".lineJava").forEach((e) => {
        e.classList.toggle("abled");
    });

    valueJava.forEach((e) => {
        e.classList.toggle("keyJavaActive");
    });
});

keyPy.addEventListener("click", () => {
    keyPy.classList.toggle("keyPyActive");
    document.querySelectorAll(".linePy").forEach((e) => {
        e.classList.toggle("abled");
    });

    valuePy.forEach((e) => {
        e.classList.toggle("keyPyActive");
    });
});

keyCpp.addEventListener("click", () => {
    keyCpp.classList.toggle("keyCppActive");
    document.querySelectorAll(".lineCpp").forEach((e) => {
        e.classList.toggle("abled");
    });

    valueCpp.forEach((e) => {
        e.classList.toggle("keyCppActive");
    });
});

keyCsharp.addEventListener("click", () => {
    keyCsharp.classList.toggle("keyCsharpActive");
    document.querySelectorAll(".lineCsharp").forEach((e) => {
        e.classList.toggle("abled");
    });

    valueCsharp.forEach((e) => {
        e.classList.toggle("keyCsharpActive");
    });
});

keySwift.addEventListener("click", () => {
    keySwift.classList.toggle("keySwiftActive");
    document.querySelectorAll(".lineSwift").forEach((e) => {
        e.classList.toggle("abled");
    });

    valueSwift.forEach((e) => {
        e.classList.toggle("keySwiftActive");
    });
});

keyRuby.addEventListener("click", () => {
    keyRuby.classList.toggle("keyRubyActive");
    document.querySelectorAll(".lineRuby").forEach((e) => {
        e.classList.toggle("abled");
    });

    valueRuby.forEach((e) => {
        e.classList.toggle("keyRubyActive");
    });
});

