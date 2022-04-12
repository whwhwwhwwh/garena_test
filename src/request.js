export const apiGet = function(url,callback){
    var xhr = new XMLHttpRequest()
    xhr.open('get',url,true)
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304){
            callback(xhr.responseText)
        }
    }
    xhr.send()
}