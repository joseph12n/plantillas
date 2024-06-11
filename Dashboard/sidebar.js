document.addEventListener('DOMContentLoaded', () => {
    const sidebarHtml = `
    <div class="sidebar">
        <div class="sidebar-section">
            <div class="sidebar-section-title">Roles <span class="arrow">▶</span></div>
            <div class="sidebar-section-content">
                <a href="rol.view.html">Agregar Rol</a>
                <a href="rol.search.view.html">Buscar Rol</a>
                <a href="rol.update.view.html">Actualizar Rol</a>
            </div>
        </div>
        <div class="sidebar-section">
            <div class="sidebar-section-title">Usuarios <span class="arrow">▶</span></div>
            <div class="sidebar-section-content">
                <a href="user.view.html">Agregar Usuario</a>
                <a href="user.search.view.html">Buscar Usuario</a>
                <a href="user.update.view.html">Actualizar Usuario</a>
            </div>
        </div>
        <div class="sidebar-section">
            <div class="sidebar-section-title">Reservas <span class="arrow">▶</span></div>
            <div class="sidebar-section-content">
                <a href="reserva.view.html">Reservar</a>
                <a href="consultar_fechas_reserva.html">Consultar Fechas de Reserva</a>
            </div>
        </div>
        <div class="sidebar-section">
            <div class="sidebar-section-title">Parqueadero <span class="arrow">▶</span></div>
            <div class="sidebar-section-content">
                <a href="parqueadero.view.html">Reservar Parqueadero</a>
                <a href="consultar_fechas_parqueadero.html">Consultar Fechas de Reserva Parqueadero</a>
            </div>
        </div>
    </div>
    `;
  
    const body = document.body;
    const sidebarContainer = document.createElement('div');
    sidebarContainer.innerHTML = sidebarHtml;
    body.insertBefore(sidebarContainer, body.firstChild);
  
    // Lógica para el despliegue (CORREGIDA)
    const sidebarSections = document.querySelectorAll('.sidebar-section');
    sidebarSections.forEach(section => {
      const title = section.querySelector('.sidebar-section-title');
      const content = section.querySelector('.sidebar-section-content');
      const arrow = section.querySelector('.arrow');
  
      title.addEventListener('click', () => {
        content.classList.toggle('active');
        arrow.textContent = content.classList.contains('active') ? '▼' : '▶';
  
        // Ajustar la altura máxima dinámicamente
        if (content.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + "px"; // Calcular la altura real
        } else {
          content.style.maxHeight = "0";
        }
      });
    });
  });
  