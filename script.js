var receptek=[];
var valasztott;

$(function() {
    $.ajax({url: "etelek.json", 
    success: function(result){
        receptek=result.receptkonyv;
        megjelenit();
      }
    }
    );
});

function megjelenit() {
    $("article").append("<table>");
    $("table").append("<tr><th>Név</th><th>Elkészítési idő</th><th>Kép</th><th>Leírás</th><th>Hozzávalók</th></tr>");
    for (var i = 0; i < receptek.length; i++) {
        $("table").append("<tr class='sorok' id='"+i+"'>"+"<td>"+receptek[i].nev+"</td>"+"<td>"+receptek[i].elkIdo+"</td>"+"<td>"+receptek[i].kep+"</td>"+"<td>"+receptek[i].leiras+"</td>"+"<td>"+receptek[i].hozzavalok+"</td>"+"</tr>");
    }
    $("article").append("</table>");
    
    $(".sorok").click(kattint);
    $(".sorok").hover(hatter);
}
function kattint() {
    valasztott=$(this).attr("id");
    $("#kep").html("<img src='"+receptek[valasztott].kep+"' alt='"+receptek[valasztott].nev+"'>");
    $("#jobb").click(jobbra);
    $("#bal").click(balra);
    if (valasztott==1){
        $(this).css("background-color", "blue");
        console.log($(this));
    }
}
function hatter() {
    $(this).css("background-color", "lightblue");
    $(".sorok").mouseleave(hattereltunt);
}
function hattereltunt() {
    $(this).css("background-color", "white");  
}
function jobbra() {
    valasztott++;
    if (valasztott>2){
        valasztott=0;
        $("#kep").html("<img src='"+receptek[valasztott].kep+"' alt='"+receptek[valasztott].nev+"'>");
    }
    else{
        $("#kep").html("<img src='"+receptek[valasztott].kep+"' alt='"+receptek[valasztott].nev+"'>");
    }
}
function balra() {
    valasztott--;
    if (valasztott<0){
        valasztott=2;
        $("#kep").html("<img src='"+receptek[valasztott].kep+"' alt='"+receptek[valasztott].nev+"'>");
    }
    else{
        $("#kep").html("<img src='"+receptek[valasztott].kep+"' alt='"+receptek[valasztott].nev+"'>");
    }
}