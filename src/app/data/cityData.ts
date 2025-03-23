// src/app/data/cityData.ts
export interface CityAttraction {
  name: string;
  description: string;
  location: string;
}

export interface CityData {
  name: string;
  description: string;
  attractions: CityAttraction[];
  tips: string[];
}

export const cityData: Record<string, CityData> = {
  "berat": {
    name: "Berat",
    description: "The city of a thousand windows",
    attractions: [
      {
        name: "Berat Castle",
        description: "A medieval fortress with well-preserved Ottoman architecture",
        location: "Center of Berat"
      },
      {
        name: "Onufri Museum",
        description: "Houses the works of the famous Albanian iconographer",
        location: "Mangalem District"
      }
    ],
    tips: [
      "Best time to visit: April to June",
      "Don't miss the Mangalem and Gorica districts",
      "Try traditional Albanian food at local restaurants"
    ]
  },
  "shkodra": {
    name: "Shkodra",
    description: "The pearl of the north",
    attractions: [
      {
        name: "Rozafa Castle",
        description: "A medieval fortress with historical significance",
        location: "Center of Shkodra"
      },
      {
        name: "Lake of Shkodra",
        description: "The largest lake in Southern Europe",
        location: "North of Shkodra"
      }
    ],
    tips: [
      "Best time to visit: May to September",
      "Visit the Shkodra Lake National Park",
      "Explore the old town and its historic buildings"
    ]
  }
};