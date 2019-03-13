if (!("a" in window)) { // undefined // строка в глобальную переменную
    var a = 1;
}
alert(a);


var b = function a(x) { // undefined // "a" это название функции
    x && a(--x);
};
alert(a);


function a(x) { // перечисление функции // так как var после функции
    return x * 2;
}
var a;
alert(a);


function b(x, y, a) { // 10 // отчет 0 1 2 соответственно x y a
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);


function a() { // [object Window] // возвращаем объект
    alert(this);
}
a.call(null);