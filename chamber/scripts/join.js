const joinDate = d.toDateString();
const hour = d.getHours();
const mins = d.getMinutes();
const seconds = d.getSeconds();
document.getElementById("joinDate").value = `${joinDate}, ${hour}:${mins}:${seconds}`