function updateCountdown() {
  const startDate = new Date('February 28, 2025 18:00:00').getTime();
  const endDate = new Date('March 30, 2025 18:00:00').getTime();
  const now = new Date().getTime();

  let distance;
  let message;

  if (now < startDate) {
      distance = startDate - now;
      message = "Hari menuju Ramadan";
  } else if (now >= startDate && now <= endDate) {
      distance = now - startDate;
      message = "Ramadan";
  } else {
      distance = now - endDate;
      message = "hari setelah Ramadan";
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `${days} ${message}`;
  document.getElementById('countdown2').innerHTML = `Lewat ${hours} jam ${minutes} menit ${seconds} detik`;
}

function updateQuote() {
  const quotes = [
      "Bulan Ramadan telah tiba menemui kalian, bulan (penuh) barokah, Allah wajibkan kepada kalian berpuasa. Pada bulan itu pintu-pintu langit dibuka, pintu-pintu (neraka) jahim ditutup, setan-setan durhaka dibelenggu. Padanya Allah memiliki malam yang lebih baik dari seribu bulan, siapa yang terhalang mendapatkan kebaikannya, maka sungguh dia terhalang (mendapatkan kebaikan yang banyak).",
      "(Beberapa hari yang ditentukan itu ialah) bulan Ramadan, bulan yang di dalamnya diturunkan (permulaan) Al Quran sebagai petunjuk bagi manusia dan penjelasan-penjelasan mengenai petunjuk itu dan pembeda (antara yang hak dan yang bathil).",
      "Barangsiapa yang berdiri (menunaikan shalat) pada malam Lailatul Qadar dengan (penuh) keimanan dan pengharapan (pahala), maka dosa-dosanya yang telah lalu akan diampuni.",
      "Barangsiapa yang berpuasa (di Bulan) Ramadan (dalam kondisi) keimanan dan mengharapkan (pahala), maka dia akan diampuni dosa-dosa yang telah lalu. ",
      "Barangsiapa yang berdiri (menunaikan shalat) di bulan Ramadan dengan iman dan mengharap (pahala), maka dosa-dosanya yang telah lalu akan diampuni.",
      "Ketika datang (bulan) Ramadan, pintu-pintu surga dibuka, pintu-pintu neraka ditutup dan setan-setan dibelenggu.",
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];
}

updateCountdown();
updateQuote();
setInterval(updateCountdown, 1000);
setInterval(updateQuote, 5000);