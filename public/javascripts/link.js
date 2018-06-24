function updatelist()
{
   var mydata = db.photouser.disticnt("username");
   for(int i=0;i<mydata.length;i++)
   {
     var local= db.photouser.find({ username: mydata[i]});
     document.getElementById('d1').innerhtml
     
   }

}
var parent = document.getElementById('d1');
var customElement = createCustomElement("");
parent.appendChild(customElement);