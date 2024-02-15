//DOM元素
var list = document.querySelector('.list');
var sendData = document.querySelector('.send');
var heightText = document.querySelector('.heightText');
var weightText = document.querySelector('.widthText');
var data = JSON.parse(localStorage.getItem('listData')) ||[];
//監聽與更新
list.addEventListener('click',toggleDone);
sendData.addEventListener('click',addData);
updateList(data);

//運算
function BMIcaic(){
var height = heightText.value;
var weight = weightText.value / 100;
var bmi = Math.round(weight / Math.pow(height,2) * 100) /100;

//加入表單，更新localStorage
function addData(e){
    e.preventDefault();
    var txt = document.querySelector('.Text').value;
    var bmi = {
        idex : txt
    }
    data.push(bmi);
    updateList(data);
    localStorage.setItem('listData',JSON.stringify(data));
}
//
function updateList(items){
    var str = '';
        var len = items.length;
        for(var i=0;i<len;i++){
            str+= 
        }
        list.innerHTML = str;
    }

//
function toggleDone(){

}