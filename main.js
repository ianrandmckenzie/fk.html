import './style.css'

// Security enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Prevent right-click context menu on images (basic protection)
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('contextmenu', e => e.preventDefault());
    img.addEventListener('dragstart', e => e.preventDefault());
  });

  // Basic XSS protection for any dynamic content
  if (window.location.hash) {
    // Remove any potentially dangerous characters from hash
    const sanitizedHash = window.location.hash.replace(/[<>\"']/g, '');
    if (sanitizedHash !== window.location.hash) {
      window.location.hash = sanitizedHash;
    }
  }

  // Disable console access in production
  if (window.location.hostname === 'featherkin.com') {
    console.log = function() {};
    console.warn = function() {};
    console.error = function() {};
  }
});

// Disable debugging
(() => {
  const devtools = {
    open: false,
    orientation: null
  };

  const threshold = 160;

  setInterval(() => {
    if (window.outerHeight - window.innerHeight > threshold ||
        window.outerWidth - window.innerWidth > threshold) {
      if (!devtools.open) {
        devtools.open = true;
        if (window.location.hostname === 'featherkin.com') {
          window.location.reload();
        }
      }
    } else {
      devtools.open = false;
    }
  }, 500);
})();
