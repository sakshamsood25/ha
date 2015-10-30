$(document).ready(function() {
    var initPage = function() {
    	window.alert('haha');
    	window.alert("haha");
    	
    	JSONObject jsonObject = JSONObject.fromObject( IndexController );  
    
/*  
  jsonStr is something like below, "errors" represents the List<ObjectError>
  I don't know what's in ObjectError, errorName is just an example property.
  {
    "dataRequestName":"request1",
    "actionPassed":true,
    "errors":[{"errorName":"error"},{"errorName":"unknown error"}]
  } 
*/
String jsonStr = jsonObject.toString();
model.addAttribute("WELCOME", jsonStr);  

var data = eval('('+'${WELCOME}'+')'); 

window.alert('data');
};
});