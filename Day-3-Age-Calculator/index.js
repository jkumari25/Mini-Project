
function calculateAge(){
    let date= document.getElementById("date").value;
    let month= document.getElementById("month").value;
    let year= document.getElementById("year").value;

    let newDate= new Date();
    let d1= newDate.getDate();
    let m1= 1 + newDate.getMonth()
    let y1= newDate.getFullYear();
    let months= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(date > d1){
        d1= d1+ months[m1 -1];
        m1= m1 -1;
    }
    if(month > m1){
        m1 = m1 + 12;
        y1 = y1 - 1;
    }

  var d = d1 - date;
  var m = m1 - month;
  var y = y1 - year;

  document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';
}