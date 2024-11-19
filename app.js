document.getElementById('form-Aquiler').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombreArquiler = document.getElementById('nombreArquiler').value.trim();
    const correoArquiler = document.getElementById('correoArquiler').value.trim();
    const descripcionArquiler = document.getElementById('descripcionArquiler').value.trim();
  
    if (!nombreArquiler || !correoArquiler || !descripcionArquiler) {
      alert('Por favor, completar.');
      return;
    }
  
    alert('');
    this.reset();
  });