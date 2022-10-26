window.onload=function(){
    document.getElementById("btnajax").addEventListener("click", pedirHeader);
    document.getElementById("btnreset").addEventListener("click", iniciarHeader);

    function pedirHeader(){
        var solicitud = new XMLHttpRequest();
        
        solicitud.onreadystatechange = function(){

            if(solicitud.readyState == 4 && solicitud.status == 200){
                document.getElementById("MyDiv").innerHTML = solicitud.responseText;
            }   
        };

        solicitud.open("GET","XMLHttp.txt", true);
        solicitud.send();
    }

    function iniciarHeader(){
        document.getElementById("MyDiv").innerHTML = "<h2>Graffiti</h2> <p>Este es uno de los tipos de dibujo que se hace con pinturas de aerosol y, por lo general, en espacios públicos para que llamen la atención. En estos dibujos se expresan todo tipo de sentimientos, aunque debido a la manera en que están expuestos, suelen reflejar las actitudes de los artistas en la sociedad en la que viven.</p>";
    }
}