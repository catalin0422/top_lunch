export const PRICE_LEI = 90;

// Meniul se schimbă în fiecare săptămână — aici e săptămâna curentă.
export const weekMenu = [
  {
    day: "Luni",
    dishes: [
      "Zeamă",
      "Carne de pui în sos de smântână",
      "Bulgur",
      "Salată Coleslaw",
    ],
    vegan: ["Zeamă", "Orez cu legume și creveți", "Salată Coleslaw"],
  },
  {
    day: "Marți",
    dishes: [
      "Ciorbă de legume",
      "Fasoliță cu legume",
      "Carne de curcan coaptă",
      "Salată Shopskii",
    ],
    vegan: ["Ciorbă de legume", "Fasoliță cu legume", "Salată Shopskii"],
  },
  {
    day: "Miercuri",
    dishes: [
      "Ciorbă de văcuță",
      "Orez cu legume",
      "Frigărui de pui",
      "Zacuscă de vinete",
    ],
    vegan: ["Ciorbă de văcuță", "Paste cu pesto și parmezan", "Zacuscă de vinete"],
  },
  {
    day: "Joi",
    dishes: [
      "Borș cu varză",
      "Piept de pui cu cașcaval și roșii",
      "Pireu de cartofi",
      "Salată Shopskii",
    ],
    vegan: ["Borș cu varză", "Merluciu copt", "Pireu de cartofi", "Salată Shopskii"],
  },
  {
    day: "Vineri",
    dishes: [
      "Supă de linte",
      "Tocană de porc",
      "Mămăligă",
      "Legume înăbușite",
    ],
    vegan: ["Supă de linte", "Omletă", "Mămăligă", "Legume înăbușite"],
  },
];

// Luni–Vineri: ziua curentă; weekend: Luni (meniul cu care începe săptămâna)
export function getTodayIndex() {
  const day = new Date().getDay();
  return day >= 1 && day <= 5 ? day - 1 : 0;
}

export function isWeekend() {
  const day = new Date().getDay();
  return day === 0 || day === 6;
}
