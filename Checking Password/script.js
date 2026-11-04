function cek(sandi) {
  let score = 0;
  let keluaran = [];
  let salah = false;
  let kekuatan;

  if (sandi.length > 8) {
    score++;
  }
  if (/[a-z]/.test(sandi)) {
    if (/[A-Z]/.test(sandi)) {
      if (/[0-9]/.test(sandi)) {
        if (!/[a-zA-Z0-9]/.test(sandi)) {
          salah = true;
        } else {
          score++;
        }
      } else salah = true;
    } else salah = true;
  } else salah = true;

  if (salah) {
    keluaran.push(
      "Password minimal mengandung huruf kecil, kapital, dan salah satu dari *, _, #",
    );
  }
  if (score === 1) {
    kekuatan = "Kurang kuat";
  } else if (score === 2) {
    kekuatan = "Kuat sekali";
    keluaran.push("Wow, Password kamu kuat, hebat!");
  } else {
    kekuatan = "Lemah sekali";
  }
  return { kekuatan, keluaran };
}

const tombol = document.querySelector(".button");
const input = document.querySelector(".pass");
const hasil = document.querySelector("#hasil");

tombol.addEventListener("click", function () {
  const sandi = input.value;
  const { keluaran, kekuatan } = cek(sandi);
  hasil.textContent =
    "Status password: " + kekuatan + "\n" + keluaran.join("\n");
});
