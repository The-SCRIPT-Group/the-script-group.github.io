$('#country').on('change',function(event){
  var e = document.getElementById("country");
  var name = e.options[e.selectedIndex].value;
  document.getElementById("phoneNum").value = '+'+name;
})
