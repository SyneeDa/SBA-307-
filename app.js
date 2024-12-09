
document.getElementById("sidebar-btn").addEventListener("click", function(event) {
  event.preventDefault(); 
  const body = document.body;
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("hidden");  
  const arrowIcon = document.getElementById("sidebar-btn");
  arrowIcon.classList.toggle("rotated");
  body.classList.toggle("sidebar-hidden");
});
