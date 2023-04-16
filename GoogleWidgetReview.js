//The labels will print when the page has finished loading
window.onload = function(){
    //Anonymous function
    (function() {
        //Captures all instances with the tag name
        var tagInstances = document.getElementsByTagName("google-review");

        //If there are tags with that value, grab the first one, and specify the parent tag's styles
        if(tagInstances.length > 0) tagInstances[0].parentElement.style.cssText = "display:flex;font-family:Segoe UI";

        //For each existing tag
        for(let tag of tagInstances) {
            //Style of the tag that hosts the comment data
            tag.style.cssText = "background-color:#f3f3f3;flex:1 1 auto;border-radius:10px;margin:10px;padding:24px;border-radius:8px;";
            

            let comentario = tag.innerHTML;
            let resultado = "";

            //Creación de la foto de perfil
            resultado += "<div>";
            resultado += `<img style=\"vertical-align:middle;margin-right:10px;width:40px;height:40px;border-radius:100%\" src=\"${tag.attributes.avatar.value}\">`;
            resultado += `<span><b>${tag.attributes.nombre.value}</b></span>`;
            resultado += "</div>";

            //ESTRELLAS
            resultado += "<div style='margin-top:20px'>";
            let cantidadPuntos = Number(tag.attributes.puntos.value);
            let estrellaPath = tag.attributes.estrella.value;
            for(let i=0; i<5; i++){
                resultado += "<img width=20 ";
                if(i >= cantidadPuntos) resultado += " style='filter:grayscale(100%)' "; 
                resultado += ` src=\"${estrellaPath}\">`;
            }

            resultado += "</div>"
            

            

            tag.innerHTML = resultado;
            tag.style.userSelect = "none";
            let texto = document.createElement("p");
            
            texto.innerText = comentario.replace(/(\r\n|\n|\r)/gm, "");
            texto.style.fontFamily = "Segoe UI";
            tag.appendChild(texto);
        }
    })();
}