function adinaKalkulatu() {
    const jaiotzeUrtea = document.getElementById("jaiotzeUrtea").value;
    const emaitza = document.getElementById("emaitza");
  
    const unekoUrtea = new Date().getFullYear();
  
    if (jaiotzeUrtea === "" || isNaN(jaiotzeUrtea)) {
      emaitza.textContent = "Mesedez, sartu baliozko urte bat.";
      return;
    }
  
    const adina = unekoUrtea - parseInt(jaiotzeUrtea);
  
    if (adina < 0 || adina > 120) {
      emaitza.textContent = "Ziur al zaude urte hori zuzena dela?";
    } else {
      emaitza.textContent = `Zure adina: ${adina} urte.`;
    }
  }
  