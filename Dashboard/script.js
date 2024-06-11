// script.js
document.getElementById('toggle-sidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar-container');
    var mainContent = document.getElementById('main-content');

    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
        mainContent.style.marginLeft = '260px';
    } else {
        sidebar.style.display = 'none';
        mainContent.style.marginLeft = '0';
    }
});
