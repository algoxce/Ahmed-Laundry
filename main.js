const items = [
  { en: "Abaya", ar: "عباية", services: { wash: 10, press: 8, dry: 15 } },
  { en: "Apron", ar: "مريلة", services: { wash: 3, press: 2, dry: 4 } },
  { en: "Bath Mat", ar: "بساط الحمام", services: { wash: 5, press: 0, dry: 6 } },
  { en: "Bath Towel", ar: "فوطة استحمام", services: { wash: 5, press: 0, dry: 7 } },
  { en: "Bath Towel (Large)", ar: "فوطة استحمام كبيرة", services: { wash: 8, press: 0, dry: 6 } },
  { en: "Bath Towel (Small)", ar: "فوطة استحمام صغير", services: { wash: 3, press: 0, dry: 5 } },
  { en: "Bathrobe", ar: "روب حمام", services: { wash: 10, press: 5, dry: 15 } },
  { en: "Bed Cover (Double)", ar: "عطاء سرير زوجي", services: { wash: 6, press: 5, dry: 12 } },
  { en: "Bed Cover (Single)", ar: "عطاء سرير فردي", services: { wash: 7, press: 5, dry: 10 } },
  { en: "Bedsheet (Double)", ar: "شرشف سرير مزدوج", services: { wash: 10, press: 4, dry: 10 } },
  { en: "Bedsheet (Single)", ar: "شرشف سرير مفرد", services: { wash: 10, press: 6, dry: 10 } },
  { en: "Bedspread (Double)", ar: "شرشف سريرية مزدوج", services: { wash: 9, press: 4, dry: 2 } },
  { en: "Bedspread (Single)", ar: "شرشف سرير مفرد", services: { wash: 7, press: 5, dry: 10 } },
  { en: "Besht", ar: "بشت", services: { wash: 25, press: 5, dry: 25 } },
  { en: "Besht Winter", ar: "بشت شتوي", services: { wash: 20, press: 4, dry: 20 } },
  { en: "Blanket (Children)", ar: "بطانية أطفال", services: { wash: 4, press: 5, dry: 15 } },
  { en: "Blanket (Double)", ar: "بطانية كبير", services: { wash: 25, press: 10, dry: 30 } },
  { en: "Blanket (Single)", ar: "بطانية مفرد", services: { wash: 15, press: 8, dry: 25 } },
  { en: "Blanket (Wool)", ar: "بطانية صوف", services: { wash: 15, press: 8, dry: 15 } },
  { en: "Blouses", ar: "بلوز", services: { wash: 3, press: 2, dry: 1 }},
  { en: "Kurta Pyjama (Set)", ar: "كورتي بيجامة (طقم)", services: { wash: 8, press: 3, dry: 2 } },
  { en: "Lungi/Wizar", ar: "لونجي/وزار", services: { wash: 12, press: 6, dry: 4 } },
  { en: "Napkins", ar: "مناديل", services: { wash: 4, press: 2, dry: 2 } },
  { en: "Neck Tie", ar: "ربطة عنق", services: { wash: 2, press: 2, dry: 4 } },
  { en: "Nightgown", ar: "ثوب النوم", services: { wash: 6, press: 5, dry: 3 } },
  { en: "Officer Uniform Cap", ar: "قبعة عسكرية", services: { wash: 4, press: 1, dry: 4 } },
  { en: "Officer Uniform Shirt", ar: "قميص زي رسمي", services: { wash: 4, press: 2, dry: 2 } },
  { en: "Officer Uniform Trouser/Pants", ar: "بنطال زي رسمي", services: { wash: 8, press: 8, dry: 5 } },
  { en: "Officer/Military Uniform", ar: "زي عسكري", services: { wash: 15, press: 7, dry: 15 } },
  { en: "Overcoat", ar: "معطف", services: { wash: 17, press: 17, dry: 10 } },
  { en: "Overcoat Wool", ar: "معطف صوف", services: { wash: 20, press: 16, dry: 8 } },
  { en: "Pajamas", ar: "لباس نوم", services: { wash: 8, press: 8, dry: 5 } },
  { en: "Pillow (Large)", ar: "وسادة (كبيرة)", services: { wash: 6, press: 4, dry: 8 } },
  { en: "Pillow (Small)", ar: "وسادة (صغيرة)", services: { wash: 2, press: 2, dry: 6 } },
  { en: "Pillow Case", ar: "غطاء وسادة", services: { wash: 6, press: 4, dry: 4 } },
  { en: "Police Uniform", ar: "زي الشرطة", services: { wash: 8, press: 6, dry: 8 } },
  { en: "Prayer Mat", ar: "سجادة صلاة", services: { wash: 10, press: 6, dry: 4 } },
  { en: "Punjabi", ar: "پنجابی", services: { wash: 5, press: 3, dry: 8 } },
  { en: "Pylama Trouser", ar: "بنطلون بيجاما", services: { wash: 6, press: 5, dry: 3 } },
  { en: "Quilt Large", ar: "لحاف كبير", services: { wash: 25, press: 0, dry: 25 } }
];

function createCard(item) {
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = item.en;
  card.appendChild(title);

  const arabic = document.createElement("p");
  arabic.className = "arabic";
  arabic.textContent = item.ar;
  card.appendChild(arabic);

  const servicesList = document.createElement("ul");
  servicesList.className = "services";

  const wash = document.createElement("li");
  wash.textContent = `Wash: ${item.services.wash} QR`;
  servicesList.appendChild(wash);

  const press = document.createElement("li");
  press.textContent = `Press: ${item.services.press} QR`;
  servicesList.appendChild(press);

  const dry = document.createElement("li");
  dry.textContent = `Dry Clean: ${item.services.dry} QR`;
  servicesList.appendChild(dry);

  card.appendChild(servicesList);

  return card;
}

function displayMenu() {
  const container = document.getElementById("menu-container");
  items.forEach(item => {
    const card = createCard(item);
    container.appendChild(card);
  });
}

window.onload = () => {
  displayMenu();
};
