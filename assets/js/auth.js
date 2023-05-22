/* CONNECT  */
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz5LmmsELzbtxew2_KwsLAJTOSIaKclW4o35qhBnvKrjeTzJOOY6kOBPUzxcVPOevp-3g/exec'
  const form = document.forms['topupnow']
  const btnTopup = document.getElementById("topup-button")
    const btnSecond = document.getElementById("second-button")
  const alertSuccess = document.getElementById("success")
  const alertError = document.getElementById("error")

  form.addEventListener('submit', e => {
    e.preventDefault();
    
    btnTopup.style.display = "none";
    btnSecond.style.display = "block";
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
 btnTopup.style.display = "block";
    btnSecond.style.display = "none";
    
alertSuccess.style.display = "block";
alertError.style.display = "none";
form.reset();
window.location.href = "#btnarea";
console.log('DATA PEMBELIAN BERHASIL TERKIRIM KE DATABASE', response);
})
      .catch(error => {
alertError.style.display = "block";
alertSuccess.style.display = "none";
console.error('DATA PEMBELIAN GAGAL TERKIRIM KE DATABASE', error.message);
})
})