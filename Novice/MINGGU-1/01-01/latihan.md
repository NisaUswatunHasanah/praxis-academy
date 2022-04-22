MENAMBAHKAN PESAN SELAMAT DATANG YANG DIPERSONALISASI

# tulis sintaks dalam indeks.html

            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Pengulangan</title>
            </head>

            <button>Change user</button>

            <body>
               <script src="main.js";></script> 
            </body>
            </html>

# tulis sintaks dalam main.js

            let myButton = document.querySelector('button');
            let myHeading = document.querySelector('h1');

            function setUserName() {
              let myName = prompt('Please enter your name.');
              localStorage.setItem('name', myName);
              myHeading.textContent = 'Mozilla is cool, ' + myName;
            }

            if(!localStorage.getItem('name')) {
              setUserName();
            } else {
              let storedName = localStorage.getItem('name');
              myHeading.textContent = 'Mozilla is cool, ' + storedName;
            }
            myButton.onclick = function() {
              setUserName();
            }
