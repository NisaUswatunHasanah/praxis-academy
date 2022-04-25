            class Car {
                name = "Avanza"
                color = "black"
            }

            const car = new Car();
            console.log(car);\

            //maka outputnya

            Object { name: "Avanza", color: "black" }

Perbedaan object biasa dengan menggunakan class, object class dapat menggunakan new. Jika membuat 2 object dan ingin mengganti salah satu colornya misal, maka yang akan berubah sesuai perintah. jika menngunakan object biasa maka yang berubah mengikuti perubahan akhir dan jadi sama semua. Contohnya syntaks dibawah:

            class Car {
                name = "Avanza"
                color = "black"
            }

            const car = new Car();
            const car2 = new Car();

            car2.color = "blue";

            console.log(car);
            console.log(car2);
            
            //outputnya
            
            Object { name: "Avanza", color: "black" }

            Object { name: "Avanza", color: "blue" }

jika ingin menggunakan methode

            class Car {
                name = "Avanza"
                color = "black"
                melaju() {
            return `Jalaan ${this.name}`;
                }
            }

            const car = new Car();

            console.log(car.melaju());

            //outputnya

            Jalaan Avanza

jika ingin parsing atau mengoper nilai yang ada di () sebelah new car keatas dengan menggunakan constructor

            class Car {
                name = "Avanza"
                color = "black"
                constructor(merkMobil){
            this.name = merkMobil;
                }
                melaju() {
            return `Jalaan ${this.name}`;
                }
            }

            const Avanza = new Car("Avanza");
            const Daihatsu = new Car("Suzuki")

            console.log(Avanza.name);
            console.log(Daihatsu.name);

            //outputnya
            Avanza
            Suzuki


            
