// function dengan parameter dan Argument


function tambah(a,b) {
    return a + b;
  }
  
  var a = 15;
  var b = 5;
  var hasil = tambah(a,b);
  console.log(hasil);

atau

<html>
<head>
	<script type="text/javascript">
		function hitung(param1, param2) {
			return param1+param2;
		}

		console.log(hitung(5,5));
	</script>
</head>
</html>


//Function untuk mencetak array dalam String
//run this code using jscompiler

function namaMinuman() {
    let a = ["Teh ", "Kopi ", "Boba ", "Sprite ", "Fanta "];
    let txt = "";
    for (let i = 0; i < a.length; i++) {
      txt += a[i];
    }
    return txt.toString();
  }
  console.log(namaMinuman());
