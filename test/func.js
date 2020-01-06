function func() {
  var x = document.getElementById('num').value;
  numx = parseInt(x);
  numx = numx + 1;
  document.getElementById('answer').innerHTML = numx;
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
    if(numx===x){
      document.write("<td>","w","</td>");
    }else{
      document.write("<td>"," ","</td>");
    }
  }
  document.write("</tr>");
  }
  document.write("<table>");
}