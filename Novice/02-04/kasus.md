2.
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous" />
    
        <title>Kasus Form e-mail</title>
      </head>
      <body>
        <div class="container mt-5 d-flex">
          
          <div class="ur-domain-wrapper">
            <h2>Menebak Username dan Domain</h2>
            <form id="form-puppy">
              <div class="form-group mb-3">
                <input type="text" class="form-control" id="name" placeholder="masukan username" pattern="^[a-z0-9_-]{3,15}$" />
              </div>
              <div class="form-group mb-3">
                <input type="text" class="form-control" id="email" placeholder="masukan email" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,10}$" />
              </div>
              <button onclick="myalert()"> 
                check
              </button>
            </div>
              
            </form>
          </div>
         
         
        <script> 
            function myalert() { 
                alert("Halo, username anda adalah namaku, domain anda adalah praxisacademy.id"); 
            } 
        </script> 
    
      </body>
    </html>
