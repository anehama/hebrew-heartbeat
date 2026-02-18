export const HOME_RESTAURANT = {
  id: "romano",
  name: "רומנו",
  area: "תל אביב – נמל",
  labels: ["איטלקי", "סיזונלי", "ים תיכוני"],
  imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
  infoUrl: "https://www.rest.co.il/restaurants/63088/",
};

export type Restaurant = {
  id: string;
  name: string;
  area: string;
  labels: string[];
  imageUrl: string;
  infoUrl: string;
};

export type Cuisine = {
  id: string;
  name: string;
  emoji: string;
  restaurants: Restaurant[];
};

export const CUISINES: Cuisine[] = [
  {
    id: "italian",
    name: "איטלקי / ים תיכוני",
    emoji: "🍝",
    restaurants: [
      {
        id: "taizu",
        name: "טאיזו",
        area: "תל אביב – הצפון הישן",
        labels: ["אסייתי-ים תיכוני", "קוקטייל", "אווירה"],
        imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
        infoUrl: "https://www.taizu.co.il/",
      },
      {
        id: "messa",
        name: "מסה",
        area: "תל אביב – הבורסה",
        labels: ["יוקרתי", "סיזונלי", "עיצוב"],
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
        infoUrl: "https://www.messa.rest/",
      },
      {
        id: "crave",
        name: "קרייב",
        area: "תל אביב – פלורנטין",
        labels: ["מודרני", "ים תיכוני", "אווירה"],
        imageUrl: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
        infoUrl: "https://www.rest.co.il/",
      },
    ],
  },
  {
    id: "sushi",
    name: "יפני / סושי",
    emoji: "🍣",
    restaurants: [
      {
        id: "sushiya",
        name: "סושייה",
        area: "תל אביב – צפון",
        labels: ["יפני", "עמדת שף", "מרענן"],
        imageUrl: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&h=300&fit=crop",
        infoUrl: "https://www.rest.co.il/",
      },
      {
        id: "minato",
        name: "מינאטו",
        area: "תל אביב – יפו",
        labels: ["אוממי", "רול", "קרפצ׳יו"],
        imageUrl: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
        infoUrl: "https://www.rest.co.il/",
      },
      {
        id: "nagoya",
        name: "נגויה",
        area: "הרצליה פיתוח",
        labels: ["יפני קלאסי", "ראמן", "סשימי"],
        imageUrl: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&h=300&fit=crop",
        infoUrl: "https://www.rest.co.il/",
      },
    ],
  },
  {
    id: "steak",
    name: "בשרים / סטייק",
    emoji: "🥩",
    restaurants: [
      {
        id: "primus",
        name: "פרימוס",
        area: "תל אביב – מרכז",
        labels: ["סטייק", "וויסקי", "אווירה"],
        imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
        infoUrl: "https://www.rest.co.il/",
      },
      {
        id: "meatbar",
        name: "מיט בר",
        area: "תל אביב – נחלת בנימין",
        labels: ["גריל", "בורגר", "אמריקאי"],
        imageUrl: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop",
        infoUrl: "https://www.rest.co.il/",
      },
      {
        id: "grill69",
        name: "גריל 69",
        area: "תל אביב – הצפון",
        labels: ["בשרים", "יין", "רומנטי"],
        imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
        infoUrl: "https://www.rest.co.il/",
      },
    ],
  },
  {
    id: "creative",
    name: "יצירתי / שף",
    emoji: "👨‍🍳",
    restaurants: [
      {
        id: "ocd",
        name: "OCD",
        area: "תל אביב – שרונה",
        labels: ["דגוסטציה", "חוויה", "מולקולרי"],
        imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop",
        infoUrl: "https://www.ocd.rest/",
      },
      {
        id: "the-yard",
        name: "החצר",
        area: "תל אביב – מרכז",
        labels: ["בוטיק", "יצירתי", "חווייתי"],
        imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
        infoUrl: "https://www.rest.co.il/",
      },
      {
        id: "hashulchan",
        name: "השולחן",
        area: "ירושלים – עיר עתיקה",
        labels: ["ירושלמי", "מסורתי", "יצירתי"],
        imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop",
        infoUrl: "https://www.rest.co.il/",
      },
      {
        id: "lumina",
        name: "לומינה",
        area: "הרצליה פיתוח",
        labels: ["נוף ים", "שף", "רומנטי"],
        imageUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
        infoUrl: "https://www.rest.co.il/",
      },
    ],
  },
];

export const TIMES = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

export function getNextWeekDays(): { label: string; value: string }[] {
  const days = [];
  const today = new Date();
  const hebrewDays = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
  
  // Start from tomorrow
  for (let i = 1; i <= 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const dayOfWeek = d.getDay();
    if (dayOfWeek === 6) continue; // Skip Saturday
    const label = `יום ${hebrewDays[dayOfWeek]}, ${d.getDate()}/${d.getMonth() + 1}`;
    const value = d.toISOString().split("T")[0];
    days.push({ label, value });
  }
  return days;
}
