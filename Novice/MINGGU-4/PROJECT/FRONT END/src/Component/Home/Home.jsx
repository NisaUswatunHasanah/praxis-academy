import React from "react";
import { useState } from "react";
// import { Form } from "react-bootstrap";

function Home (){
    const [Judul,setJudul = useState("");
    const [Pengarang,setPengarang] =useState("");
    const [tahunTerbit, settahunTerbit] = useState ("");
    const [jenisBuku, setjenisBuku] = useState ("");
    const [Ketebalan, setKetebalan] = useState ("");
    const [pesan, setPesan] = useState ("");

    let handleSubmit = async (e) => {
        e.preventDefault ();
        try {
            let res = await fetch("",{
                method: "POST",
                body:JSON.stringify({

                'Judul': Judul,
                'Pengarang': Pengarang,
                'TahunTerbit': tahunTerbit,
                'JenisBuku': jenisBuku,
                'Ketebalan': Ketebalan,
                }),
            });

             await res.json();
            if (res.status === 200){
                setJudul("");
                setPengarang("");
                settahunTerbit("");
                setjenisBuku("");
                setKetebalan("");
                setPesan ("Sukses");
            }else{
                setPesan (" Gagal");
            }
        }catch(err){
            console.log(err);
        }
    };
    return(
        <div className="Home">
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                value={Judul}
                placeholder="Judul Buku"
                onChange={(e) => setJudul (e.target.value)}
            />
                    <input
                type="text"
                value={Pengarang}
                placeholder="setPengarang"
                onChange={(e) => setPengarang (e.target.value)}
            />


                    <input
                type="text"
                value={tahunTerbit}
                placeholder="Tahun Terbit"
                onChange={(e) => settahunTerbit (e.target.value)}
            />

                    <input
                type="text"
                value={jenisBuku}
                placeholder="Jenis Buku"
                onChange={(e) => setjenisBuku (e.target.value)}
            />

                    <input
                type="text"
                value={Ketebalan}
                placeholder="No.Hp"
                onChange={(e) => setKetebalan (e.target.value)}
            />

            <button type="submit">Masukan</button>
            <div className="pesan">{pesan ? <p>{pesan}</p> : null}</div>
            </form>

        </div>
    );
}
export default Home;