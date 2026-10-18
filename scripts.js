
function updateDateTime() {
  const now = new Date();
  
  const options = { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  
  const formattedDate = now.toLocaleDateString('es-ES', options);
  
  const datetimeElement = document.getElementById('header-datetime');
  if (datetimeElement) {
    datetimeElement.textContent = formattedDate;
  }
}

updateDateTime();