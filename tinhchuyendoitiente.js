function doitien()
{
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let st = document.getElementById("sotien").value;
    let x=parseFloat(st);
    let kq=(x*to)/from;
    document.getElementById("hienthiketqua").innerHTML=kq.toFixed(2);
}