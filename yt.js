function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebar.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        // Hide the sidebar items
        sidebarItems.forEach(item => {
            item.style.display = 'none';
        });
    } else {
        // Show the sidebar items
        sidebarItems.forEach(item => {
            item.style.display = 'flex';
        });
    }
}
