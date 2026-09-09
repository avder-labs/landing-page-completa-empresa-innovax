document.addEventListener('DOMContentLoaded', function () {

  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const backTop = document.getElementById('backTop');

  const year = document.getElementById('year');

  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  // Ajustado para buscar por el ID o por el name que tiene index.html
  const serviceSelect = document.getElementById('servicioSelect') || document.querySelector('select[name="servicio"]');


  /* =====================================================
     AÑO
  ===================================================== */

  if (year) {
    year.textContent = new Date().getFullYear();
  }



  /* =====================================================
     HEADER AL HACER SCROLL Y BOTÓN VOLVER ARRIBA
  ===================================================== */

  window.addEventListener(
    'scroll',
    function () {

      const y = window.scrollY;

      if (header) {
        header.classList.toggle('scrolled', y > 30);
      }

      if (backTop) {
        backTop.classList.toggle('show', y > 500);
      }

    },
    { passive: true }
  );



  /* =====================================================
     BOTÓN VOLVER ARRIBA
  ===================================================== */

  if (backTop) {

    backTop.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

  }



  /* =====================================================
     MENÚ MÓVIL
  ===================================================== */

  if (menuToggle && mainNav) {

    menuToggle.addEventListener('click', function () {

      const open = mainNav.classList.toggle('open');

      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');

    });


    mainNav.querySelectorAll('a').forEach(function (link) {

      link.addEventListener('click', function () {

        mainNav.classList.remove('open');

        menuToggle.setAttribute('aria-expanded', 'false');

      });

    });

  }



  /* =====================================================
     SELECCIONAR SERVICIO DESDE LA URL
  ===================================================== */

  if (serviceSelect) {

    const params = new URLSearchParams(window.location.search);
    const service = params.get('servicio');

    if (service) {

      const option = [...serviceSelect.options].find(function (o) {
        return o.value.toLowerCase() === service.toLowerCase();
      });

      if (option) {
        serviceSelect.value = option.value;
      }

    }

  }



  /* =====================================================
     FORMULARIO DE CONTACTO (AJAX)
  ===================================================== */

  if (form) {

    form.addEventListener('submit', async function (event) {

      event.preventDefault();

      if (status) {
        status.textContent = '';
        status.className = 'form-status';
      }

      // Honeypot anti-spam
      const honeypot = form.querySelector('[name="empresa_web"]');

      if (honeypot && honeypot.value) {
        return;
      }

      const button = form.querySelector('button[type="submit"]');
      const originalText = button ? button.innerHTML : '';

      if (button) {
        button.disabled = true;
        button.innerHTML = 'Enviando...';
      }

      try {

        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        });

        const data = await response.json();

        if (!data.success) {
          throw new Error(data.message || 'No se pudo enviar la solicitud.');
        }

        if (status) {
          status.textContent = data.message || 'Solicitud enviada correctamente.';
          status.classList.add('success');
        }

        form.reset();
      } 
      
      catch (error) {
        if (status) {
          status.textContent = error.message || 'Ocurrió un error al enviar el formulario.';
          status.classList.add('error');
        }

      } 
      
      finally {
        if (button) {
          button.disabled = false;
          button.innerHTML = originalText;
        }
      }
    });
  }
});