function showMenu() {
    navLinks.style.right="0";
}
function hideMenu() {
    navLinks.style.right="-200px";
}
const searchInput = document.getElementById('searchInput');
const heritageList = document.getElementById('heritageList').querySelectorAll('.heritage-item');


searchInput.addEventListener('input', function(event) {
  const searchText = event.target.value.toLowerCase();
  
  heritageList.forEach(item => {
    const title = item.querySelector('h3').textContent.toLowerCase();
        const description = item.querySelector('p').textContent.toLowerCase();
        if (title.includes(searchText) || description.includes(searchText)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    
    });
  
    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });
   


