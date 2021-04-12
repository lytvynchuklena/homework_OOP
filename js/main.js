// Реалізовуємо свій компютерний магазин.
// ===

// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
//


// class Computer {
//     constructor(access, processor, name) {
//         this.access = access;
//         this.processor = processor;
//         this.name = name;
//     }
//
//     powerOn() {
//         return 'powerOn';
//     }
//
//     info()
//     {
//         return this.name + ' ' + this.access + ' ' + this.processor;
//     }
// }
//
// let comp1 = new Computer('16gb', 600, 'lenovo');
// let comp2 = new Computer('18gb', 800, 'iphone');
// let comp3 = new Computer('18gb', 900, 'Dell');
// let comp4 = new Computer('14gb', 700, 'Asus');
//
// let powerOn = comp1.powerOn();
// let info = comp1.info();
// let powerOn2 = comp2.powerOn();
// let info2 = comp2.info();
// let powerOn3 = comp3.powerOn();
// let info3 = comp3.info();
// let powerOn4 = comp4.powerOn();
// let info4 = comp4.info();
//
// console.log(powerOn);
// console.log(info);
// console.log(powerOn2);
// console.log(info2);
// console.log(powerOn3);
// console.log(info3);
// console.log(powerOn4);
// console.log(info4);


//
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)


//
// class Computer {
//     constructor(access, processor, name) {
//         this.access = access;
//         this.processor = processor;
//         this.name = name;
//     }
//
//     powerOn() {
//         return 'powerOn';
//     }
//
//     info()
//     {
//         return this.name + ' ' + this.access + ' ' + this.processor;
//     }
// }
//
// class Notebook  extends Computer {
//     constructor(inch, access, processor, name) {
//         super(access, processor, name);
//         this.inch = inch;
//     }
//
//     batteryWork()
//     {
//         return (this.processor / (this.inch * this.access)).toFixed(2);
//     }
// }
//
// let notebook = new Notebook(24,18,600, 'Dell');
//
// console.log(notebook.batteryWork());


// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.


// class Computer {
//     constructor(access, processor, name) {
//         this.access = access;
//         this.processor = processor;
//         this.name = name;
//     }
//
//     powerOn() {
//         return 'powerOn';
//     }
//
//     info() {
//         return this.name + ' ' + this.access + ' ' + this.processor;
//     }
// }
//
// class Notebook extends Computer {
//     constructor(inch, access, processor, name) {
//         super(access, processor, name);
//         this.inch = inch;
//     }
//
//     batteryWork() {
//         return (this.processor / (this.inch * this.access)).toFixed(2);
//     }
// }
//
//
// class Ultrabook extends Notebook {
//     constructor(weight, inch, access, processor, name) {
//         super(inch, access, processor, name);
//         this.weight = weight;
//     }
//
//     powerOn() {
//         if (this.weight > 2 && this.batteryWork() < 4)
//             return 'error';
//     }
//
// }
//
// let ultrabook = new Ultrabook(3, 24, 18, 800, 'Lenovo');
// let ultrabook2 = new Ultrabook(1.6, 28, 14, 600, 'Dell');
// console.log(ultrabook.powerOn());
// console.log(ultrabook2.powerOn());


// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

//
// class Computer {
//     constructor(access, processor, name) {
//         this.access = access;
//         this.processor = processor;
//         this.name = name;
//     }
//
//     powerOn() {
//         return 'powerOn';
//     }
//
//     info() {
//         return this.name + ' ' + this.access + ' ' + this.processor;
//     }
// }
//
// class Notebook extends Computer {
//     constructor(inch, access, processor, name) {
//         super(access, processor, name);
//         this.inch = inch;
//     }
//
//     batteryWork() {
//         return (this.processor / (this.inch * this.access)).toFixed(2);
//     }
// }
//
//
// class Ultrabook extends Notebook {
//     constructor(weight, inch, access, processor, name) {
//         super(inch, access, processor, name);
//         this.weight = weight;
//     }
//
//     powerOn() {
//         if (this.weight > 2 && this.batteryWork() < 4)
//             return 'error';
//     }
//
// }
//
//
// class Pc extends Computer {
//     constructor(access, processor, name) {
//         super(access, processor, name);
//     }
//
//     launchGames() {
//         return `You are playing ${this.gameName()} with ${this.fps()} FSP`;
//     }
//
//     fps() {
//         return (this.processor / this.access);
//     }
//
//     gameName() {
//         return '"Very interesting game"';
//     }
//
//     increaseProcessor(percent) {
//         if (percent <= 10 && percent > 0) {
//             this.processor = this.processor +  (this.processor * (percent / 100));
//         }
//     }
//
//     increaseAccess(value) {
//         if (value <= 2 && value > 0) {
//             this.access = this.access * value;
//         }
//     }
// }
//
// let pc = new Pc(2,10,'Lenovo');
// pc.increaseProcessor(10);
// pc.increaseAccess(2);
// console.log(pc.launchGames());


// Від базового ПК необхідно зробити ігровий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.
//


class Computer {
    constructor(access, processor, name) {
        this.access = access;
        this.processor = processor;
        this.name = name;
    }

    powerOn() {
        return 'powerOn';
    }

    info() {
        return this.name + ' ' + this.access + ' ' + this.processor;
    }
}

class Notebook extends Computer {
    constructor(inch, access, processor, name) {
        super(access, processor, name);
        this.inch = inch;
    }

    batteryWork() {
        return (this.processor / (this.inch * this.access)).toFixed(2);
    }
}


class Ultrabook extends Notebook {
    constructor(weight, inch, access, processor, name) {
        super(inch, access, processor, name);
        this.weight = weight;
    }

    powerOn() {
        if (this.weight > 2 && this.batteryWork() < 4)
            return 'error';
    }

}


class Pc extends Computer {
    constructor(access, processor, name) {
        super(access, processor, name);
    }

    launchGames() {
        console.log(`You are playing ${this.gameName()} with ${this.fps()} FSP`);
    }

    fps() {
        return (this.processor / this.access);
    }

    gameName() {
        return '"Very interesting game"';
    }

    increaseProcessor(percent) {
        if (percent <= 10 && percent > 0) {
            this.processor = this.processor + (this.processor * (percent / 100));
        }
    }

    decrease(percent) {
        if (percent > 0) {
            this.processor = this.processor - (this.processor * percent);
        }
    }

    increaseAccess(value) {
        if (value <= 2 && value > 0) {
            this.access = this.access * value;
        }
    }
}


class GamesPc extends Pc {
    constructor(access, processor, name) {
        super(access, processor, name);
    }

    fps() {
        return super.fps() * 2;
    }

    launchGames() {
        if (this.processor < 500 && this.access < 8) {
            alert('на цьому відрі ігри не запускаються.');
        } else {

            this.decrease(0.1);
            return super.launchGames();

        }

    }
}


let gamePc = new GamesPc(5, 20, 30);
gamePc.launchGames();
// console.log();












