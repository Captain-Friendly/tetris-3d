const baseURl = "https://api-final-projects.glitch.me/api/scores";

export function GET_TOP10(sucessCallBack,errorCallBack){
  $.ajax({
    url:baseURl,
    type:'GET',
    success: data=>{sucessCallBack(data);},
    error: function(jqXHR) {errorCallBack(jqXHR.status);}
  });

}


export function Post(score,sucessCallBack,errorCallBack){
  $.ajax({
    url:baseURl,
    type:'POST',
    contentType:'application/json',
    data:JSON.stringify(score),
    success: data=>{sucessCallBack(data);},
    error: function(jqXHR) {errorCallBack(jqXHR.status);}
  });
  
}
