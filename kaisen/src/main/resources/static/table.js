function func() {
    var ex=Math.floor(Math.random()*5);
    var ey=Math.floor(Math.random()*5);
    var x = document.getElementById('num1').value;
    numx = parseInt(x);
    var y = document.getElementById('num2').value;
    numy = parseInt(y);
    document.getElementById('answer').innerHTML = numx,numy;

    document.write("<p>攻撃座標</p>");
    document.write("    <div>\n" +
        "        <label>縦（０〜４）：<input type='number' name='atack1' min='0' max='4' required></label>\n" +
        "        <label>横（０〜４）：<input type='number' name='atack2' min='0' max='4'required></label>\n" +
        "        <input type='submit' value='送信' onclick='func()'></button>\n" +
        "\n" +
        "    </div>")

    document.write("<div id='answer'>","</div>");

    document.write("<table border>")
    document.write("<p>","プレイヤー座標","</p>");
    document.write("<thead>");
    document.write("<tr><th>　</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr>");
    document.write("</thead>");
    for(x=0;x<=4;x++){
        document.write("<tr>");
        for(y=0;y<=4;y++){
            if(y===0){
                document.write("<td>",x,"</td>");
            }
            if(numx===x&&numy===y){
                document.write("<td>","w","</td>");
            }else{
                document.write("<td>"," ","</td>");
            }
        }
        document.write("</tr>");
    }
    document.write("<table>");


document.write("<table border>")
document.write("<p>座標</p>");
document.write("<thead>");
document.write("<tr><th>　</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr>");
document.write("</thead>");
for(x=0;x<=4;x++){
    document.write("<tr>");
    for(y=0;y<=4;y++){
        if(y===0){
            document.write("<td>",x,"</td>");
        }
        if(ex===x&&ey===y){
            document.write("<td>","e","</td>");
        }else{
            document.write("<td>"," ","</td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>");
}