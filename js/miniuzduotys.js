console.clear();

// Kintamuju iniciajimas:
// 1. Sukurti 3 kintamuosius su skaiciaus tipo reiksmemis

const a = [1];
const b = [2];
const c = [3];

console.log(a);
console.log(b);
console.log(c);

// 2. Sukurti 3 kintamuosius su teksto tipo reiksmemis

const a1 = ['labas'];
const b1 = ['rytas'];
const c1 = ['Lietuva'];

console.log(a1);
console.log(b1);
console.log(c1);

// 3. Sukurti 3 saraso tipo kintamuosius su penkiomis skaiciu tipo reiksmemis

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [-5, -2, 0, 3, 10];
const numbers3 = [-2.15, -1.00001, 0.00068, 3.14, 10.1];

console.log(numbers1);
console.log(numbers2);
console.log(numbers3);

// 4. Sukurti 3 saraso tipo kintamuosius su penkiomis teksto tipo reiksmemis

const words1 = ['velniop', 'ta', 'programavima', 'einam', 'alaus'];
const words2 = ['velniop viska', 'tikiuosi salto alaus'];
const words3 = ['neperkaiskit grupe, laukia 1 liudna vasara'];

console.log(words1);
console.log(words2);
console.log(words3);

console.clear();
//Veiksmai su kintamaisiais
// 1. Susumuoti visus skaiciaus tipo kintamuosius

function sum(a, b, c, d , e) {
    console.log(a, b, c, d, e);
    return a + b + c + d + e;
}

const sum1 = sum(1, 2, 3, 4, 5);
console.log(sum1);

const sum2 = sum(-5, -2, 0, 3, 10);
console.log(sum2);

const sum3 = sum(-2.15, -1.00001, 0.00068, 3.14, 10.1);
console.log(sum3);

// 2. Sujungti visus teksto tipo kintamuosius taip, jog tarp ju butu sudarytas tarpas

function word(a, b, c, d, e) {
    console.log(a, b, c, d, e);
    return a + b + c + d + e;
}

const word1 = word('velniop ', 'ta ', 'programavima, ', 'einam ', 'alaus');
console.log(word1);

function zodz(a, b) {
    console.log(a, b);
    return a + b;
}

const zodz1 = zodz('velniop viska, ', 'tikiuosi salto alaus');
console.log(zodz1);

function zodziai(a, b, c) {
    console.log(a, b, c);
    return a + b + c;
}

const zodziai1 = zodziai('neperkaiskit grupe', ', ', 'laukia 1 liudna vasara');
console.log(zodziai1);

// 3. Apskaiciuokite verte is sarasu kuriu verciu tipas yra skaiciai, pagal pateikta logika

function numero(a, b, c, d, e) {
    console.log(a, b, c, d, e);
    return a - b + c - d + e;
}

const numero1 = numero(1, 2, 3, 4, 5);
console.log(numero1);

const numero2 = numero(-5, -2, 0, 3, 10);
console.log(numero2);

const numero3 = numero(-2.15, -1.00001, 0.00068, 3.14, 10.1)
console.log(numero3);

// 4. Sujungti sarasu vertes, kuriu tipas yra tekstai, nuo saraso galo iki pradzios taip, jog tarp ju kablelis ir tarpas

const text1 = ['velniop', 'ta', 'programavima', 'einam', 'alaus'];
const text2 = ['velniop viska', 'tikiuosi salto alaus'];
const text3 = ['neperkaiskit grupe', 'laukia 1 liudna', 'vasara'];

function dict1(zodis) {
    console.log(zodis);
        
    result = zodis[0] + ', ' + zodis[1] + ', ' + zodis[2] + ', ' + zodis[3] + ', ' + zodis[4];
    return result;
}

function dict2(zodis) {
    console.log(zodis);
        
    result = zodis[0] + ', ' + zodis[1];
    return result;
}

function dict3(zodis) {
    console.log(zodis);
        
    result = zodis[0] + ', ' + zodis[1] + ' ' + zodis[2];
    return result;
}

console.log(dict1(text1));
console.log(dict2(text2));
console.log(dict3(text3));

console.clear();
//Kintamuju palyginimas

//Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.
//1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
//a - kuris didesnis

const kilometres = 100;
const range = 60;

if (kilometres > range) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta')
}

//b - kuris mazesnis

const kilometres1 = 100;
const range1 = 60;

if (kilometres1 < range1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta')
}

// c - ar jie lygus

const agurkas = 100;
const pomakas = 100;

if (agurkas === pomakas) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta')
}

// d - ar jie nelygus

const agurkas1 = 100;
const pomakas1 = 150;

if (agurkas1 === pomakas1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta')
}

// e - kuris didesnis arba lygus

const kanopa = 150;
const letena = 150;

if (kanopa >= letena) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta')
}

// f - kuris mazesni arba lygus

const kanopa1 = 155;
const letena1 = 150;

if (kanopa1 <= letena1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta')
}

//2. Isveskite teksto tipo kintamuju ilgius
//3. Tarpusavyje palyginti teksto tipo kintamuju ilgius:
// a - kuris didesnis

let kilometros = 'multivan';
let rango = 'highway';

if (kilometros > rango) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta')
}

// b - kuris mazesnis

let elKilometro = 'multivan';
let elRango = 'highway';

if (elKilometro < elRango) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta')
}

// c - ar jie lygus

let gurkas = 'burokas';
let smakas = 'burokas';

if (gurkas === smakas) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta')
}

// d - ar jie nelygus

let urka = 'burokas';
let omaha = 'azuolas';

if (urka === omaha) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta')
}

// e - kuris didesnis arba lygus

let gurkas1 = 'zuveckas';
let smakas1 = 'burokas';

if (gurkas1 >= smakas1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta')
}

// f - kuris mazesnis arba lygus

let urka1 = 'burokas';
let omaha1 = 'baravykas';

if (urka1 <= omaha1) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta')
}

//4. Išvesti sąrašo tipo kintamųjų ilgius
//5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
// a - kuris didesnis

let numb1 = [-4.5, -2, 3.14, 6, 10, 16];
let numb2 = [-2.5, 0, 4.56, 9, 13];

if (numb1.length > numb2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

let textas1 = ['ho', 'ho', 'ho'];
let textas2 = ['hoho'];

if (textas1.length > textas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

// b - kuris mazesnis

let numb3 = [-4.5, -2, 3.14, 6, 10, 16];
let numb4 = [-2.5, 0, 4.56, 9, 13];

if (numb3.length < numb3.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

let textas3 = ['ho', 'ho', 'ho'];
let textas4 = ['hoho'];

if (textas3.length < textas4.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

// c - ar jie lygus

let numb5 = [-4.5, -2, 3.14, 6, 10];
let numb6 = [-2.5, 0, 4.56, 9, 13];

if (numb5.length === numb6.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

let textas5 = ['ho', 'ho', 'ho'];
let textas6 = ['ho', 'ho', 'hi'];

if (textas5.length === textas6.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

// d - ar jie nelygus

let numb7 = [-4.5, -2, 3.14, 6, 10, 19];
let numb8 = [-2.5, 0, 4.56, 9, 13];

if (numb7.length === numb8.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

let textas7 = ['ho', 'ho', 'ho', 'hi'];
let textas8 = ['ho', 'ho', 'hi'];

if (textas7.length === textas8.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

// e - kuris didesnis arba lygus

let numb9 = [-4.5, -2, 3.14, 6, 10, 19];
let numb10 = [-2.5, 0, 4.56, 9, 13];

if (numb9.length >= numb10.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

let textas9 = ['ho', 'ho', 'ho', 'help'];
let textas10 = ['ho', 'ho', 'hi'];

if (textas5.length >= textas6.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

// f - kuris mazesnis arba lygus

let numb11 = [-4.5, -2, 3.14, 6, 10, 19];
let numb12 = [-2.5, 0, 4.56, 9, 13];

if (numb11.length <= numb12.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

let textas13 = ['ho', 'ho', 'ho', 'help'];
let textas14 = ['ho', 'ho', 'hi'];

if (textas13.length <= textas14.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kita karta');
}

console.clear();

//Ciklo for panaudojimas
// 1. Suskaiciuoti ka gausime susumavus skaicius intervale tarp (imtinai):
// a - 0...0

