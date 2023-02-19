function markAllRead(){
    document.querySelectorAll(".notification").forEach(noti =>{
        noti.classList.add('read');

    })
    document.getElementById('notificationNum').innerText=0;
}
function markasRead(){
    let counter = 0;
    document.querySelectorAll(".notification").forEach(noti =>{
        counter++;
        noti.querySelector('a[class="closeX"]').addEventListener("click",function(){
            noti.classList.add('read');
            counter--;
            document.getElementById('notificationNum').innerText=counter; 
        })
    })
    document.getElementById('notificationNum').innerText=counter; 
}
markasRead();