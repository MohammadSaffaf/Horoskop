function show() {
    let bild;
    let some=document.getElementById("some").value;
    
    switch (some){
        case "Mar":
            bild =document.getElementById("ergebnis").classList.add("div-1");
           
            break;
            
    }
    document.getElementById("ergebnis").innerHTML=bild;
}