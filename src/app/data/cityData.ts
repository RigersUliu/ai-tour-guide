// src/app/data/cityData.ts
import { CityData } from "./cityInterfaces";

export const cityData: Record<string, CityData> = {
  "shkodra": {
    "name": "Shkodra",
    "alternate_names": ["Shkodër", "Scutari"],
    "location": {
      "country": "Albania",
      "region": "Shkodër County",
      "coordinates": {
        "latitude": 42.0685,
        "longitude": 19.5119
      },
      "elevation": "13m above sea level",
      "nearby_landmarks": [
        "Lake Shkodër (largest lake in Balkans)",
        "Albanian Alps (Accursed Mountains)",
        "Buna River",
        "Montenegro border (20km north)"
      ]
    },
    "description": "Shkodra is a vibrant city in northwestern Albania, renowned for its ancient heritage, cultural diversity, and stunning natural landscapes. One of Albania's oldest cities with over two millennia of history, it offers travelers a rich tapestry of experiences blending history, adventure, and local traditions. Known as the cultural capital of northern Albania, it serves as the gateway to the Albanian Alps.",
    "historical_background": {
      "founding": {
        "year": "4th century BCE",
        "by": "Illyrian tribe of Labeates",
        "original_name": "Scodra"
      },
      "timeline": [
        {
          "period": "Illyrian Kingdom",
          "years": "4th century BCE - 168 BCE",
          "key_facts": [
            "Capital under King Gentius",
            "Strategic hilltop fortress",
            "Minted own coins"
          ]
        },
        {
          "period": "Roman Rule",
          "years": "168 BCE - 5th century CE",
          "key_facts": [
            "Important trade center on Via Egnatia",
            "Christianized in 1st century CE",
            "Bishopric established"
          ]
        },
        {
          "period": "Byzantine Era",
          "years": "5th century - 1396",
          "key_facts": [
            "Withstood Slavic invasions",
            "Fortified with new walls",
            "Center of conflict between Serbian and Albanian rulers"
          ]
        },
        {
          "period": "Venetian Rule",
          "years": "1396-1479",
          "key_facts": [
            "Built St. Stephen's Church (later converted to mosque)",
            "Strengthened castle defenses",
            "Heroic resistance against Ottomans (1478-79 siege)"
          ]
        },
        {
          "period": "Ottoman Era",
          "years": "1479-1912",
          "key_facts": [
            "Renamed Iskodra",
            "Important trade and craft center",
            "Famous for silver and arms workshops",
            "19th century: Over 3,000 shops recorded"
          ]
        },
        {
          "period": "Modern Albania",
          "years": "1912-present",
          "key_facts": [
            "Sieged by Montenegrins in 1913",
            "Center of anti-communist resistance",
            "Cultural revival post-1990s"
          ]
        }
      ],
      "archaeological_sites": [
        "Early Bronze Age settlement traces around Shkodra",
        "Rozafa Castle excavations",
        "Ancient city walls near Lead Mosque",
        "Roman artifacts in Historical Museum"
      ]
    },
    "demographics": {
      "population": 112276,
      "ethnic_groups": ["Albanians", "Montenegrins", "Roma"],
      "languages": ["Albanian (Gheg dialect)", "English (tourist areas)", "Italian"],
      "religions": [
        {
          "name": "Islam",
          "percentage": "65%",
          "landmarks": ["Ebu Bekr Mosque", "Lead Mosque"]
        },
        {
          "name": "Catholicism",
          "percentage": "30%",
          "landmarks": ["St. Stephen's Cathedral", "Franciscan Church"]
        },
        {
          "name": "Orthodoxy",
          "percentage": "5%",
          "landmarks": ["Orthodox Cathedral of the Nativity"]
        }
      ]
    },
    "cultural_importance": {
      "nicknames": [
        "City of Bicycles",
        "Little Venice",
        "Traditional capital of northern Albania"
      ],
      "cultural_firsts": [
        "First photography studio in Albania (Marubi, 1850s)",
        "First public library (1879)",
        "First Albanian-language school (1891)"
      ],
      "notable_figures": [
        {
          "name": "Pietro Marubi",
          "contribution": "Pioneer of Albanian photography"
        },
        {
          "name": "Kolë Idromeno",
          "contribution": "Renaissance painter and architect"
        },
        {
          "name": "Migjeni",
          "contribution": "Influential 20th century poet"
        }
      ],
      "cultural_institutions": [
        {
          "name": "Migjeni Theater",
          "type": "Performing arts",
          "established": "1949"
        },
        {
          "name": "Marubi National Museum of Photography",
          "type": "Museum",
          "collection_size": "500,000+ negatives"
        },
        {
          "name": "Vilson Kilica Cultural Center",
          "type": "Multidisciplinary"
        }
      ],
      "festivals": [
        {
          "name": "Shkodra Jazz Festival",
          "month": "July",
          "duration": "3 days",
          "features": ["International artists", "Open-air concerts"]
        },
        {
          "name": "Carnival of Shkodra",
          "month": "February/March",
          "duration": "1 day",
          "features": ["Parade with Venetian masks", "Street performances"]
        },
        {
          "name": "Lake Day Festival",
          "month": "August",
          "duration": "1 day",
          "features": ["Boat races", "Traditional fishing demonstrations"]
        }
      ]
    },
    "climate": {
      "classification": "Csa (Hot-summer Mediterranean)",
      "seasons": [
        {
          "name": "Spring",
          "months": "March-May",
          "avg_temp": "12-22°C",
          "characteristics": [
            "Lush greenery",
            "Wildflowers bloom",
            "Ideal for outdoor activities"
          ]
        },
        {
          "name": "Summer",
          "months": "June-August",
          "avg_temp": "22-34°C",
          "characteristics": [
            "Dry and sunny",
            "Lake activities popular",
            "Occasional heat waves"
          ]
        },
        {
          "name": "Autumn",
          "months": "September-November",
          "avg_temp": "12-22°C",
          "characteristics": [
            "Mild temperatures",
            "Harvest season",
            "Good for hiking"
          ]
        },
        {
          "name": "Winter",
          "months": "December-February",
          "avg_temp": "2-12°C",
          "characteristics": [
            "Cold with occasional snow",
            "Lake views often misty",
            "Good for indoor activities"
          ]
        }
      ]
    },
    "attractions": {
      "historical": [
        {
          "name": "Rozafa Castle",
          "description": "Medieval fortress with Illyrian origins",
          "location": "Rozafa Hill",
          "visitor_info": {
            "hours": "9:00 - 17:00",
            "fee": "€2",
            "accessibility": "Partially accessible",
            "best_time": "Morning"
          }
        }
      ],
      "museums": [
        {
          "name": "Marubi National Museum of Photography",
          "description": "Preserves Albanian photographic heritage",
          "location": "19th-century villa",
          "visitor_info": {
            "hours": "9:00-16:00 (closed Mondays)",
            "fee": "500 lek"
          }
        }
      ],
      "religious_sites": [
        {
          "name": "Ebu Bekr Mosque",
          "description": "Active community center with 35m tall minaret",
          "location": "Sheshi Demokracia",
          "visitor_info": {
            "hours": "Outside prayer times"
          }
        }
      ],
      "natural": [
        {
          "name": "Lake Shkodër",
          "description": "Largest lake in the Balkans with rich biodiversity",
          "location": "Border with Montenegro",
          "stats": {
            "size": "370-530 km² (varies seasonally)",
            "depth": "8m average",
            "islands": ["50"],
            "protected_status": "Ramsar Wetland of International Importance"
          },
          "activities": [
            {
              "name": "Kayaking",
              "options": [
                {
                  "name": "Half-day tour",
                  "difficulty": "Easy",
                  "distance": "5km",
                  "duration": "3 hours",
                  "season": "April-October",
                  "description": "Explore the lake's islands and marshes by kayak"
                }
              ]
            }
          ]
        },
        {
          "name": "Kir River Canyon",
          "description": "White limestone cliffs with natural swimming holes",
          "location": "Near Mesi Bridge",
          "activities": [
            {
              "name": "Hiking",
              "options": [
                {
                  "name": "Canyon Trail",
                  "difficulty": "Moderate",
                  "distance": "5km",
                  "duration": "3 hours",
                  "season": "April-October",
                  "description": "Moderate hike along the Kir River"
                }
              ]
            }
          ]
        }
      ],
      "urban_experiences": [
        {
          "name": "Pedonalja (Rruga Kolë Idromeno)",
          "description": "800m pedestrian zone with historic architecture",
          "location": "City center",
          "visitor_info": {
            "hours": "24/7",
            "best_time": "Evening for xhiro (stroll) tradition"
          }
        },
        {
          "name": "Shkodra Bazaar Area",
          "description": "Modern market replacing historic Ottoman bazaar",
          "location": "Rus Market",
          "visitor_info": {
            "hours": "6:00-14:00 daily",
            "note": "Best for morning shopping"
          }
        }
      ]
    },
    "tourism_types": {
      "cultural": {
        "description": "Immerse in Shkodra's rich history and living traditions",
        "experiences": [
          {
            "name": "Historic City Walk",
            "itineraries": ["Rozafa Castle", "Shkodra Historical Museum", "Ebu Bekr Mosque"],
            "circuit": "Historic Center Circuit",
            "options": ["Guided tours available", "Self-guided map available at tourist office"]
          }
        ]
      },
      "gastronomy": {
        "description": "Experience traditional Albanian cuisine with fresh lake fish",
        "experiences": [
          {
            "name": "Lake Cuisine Experience",
            "venues": [
              {
                "name": "Rrëfim",
                "feature": "Traditional Albanian dishes"
              },
              {
                "name": "Buna",
                "feature": "Fresh lake fish"
              }
            ]
          }
        ]
      }
    },
    "dining": {
      "cuisine_overview": {
        "characteristics": [
          "Fresh lake fish",
          "Local dairy products",
          "Traditional meat dishes"
        ],
        "dining_culture": [
          "Family-style meals",
          "Outdoor cafes",
          "Traditional taverns"
        ]
      },
      "restaurants": [
        {
          "name": "Lake View Restaurant",
          "type": "Traditional Albanian",
          "setting": "Lakefront terrace",
          "specialties": [
            "Fresh lake fish",
            "Local cheese",
            "Traditional meat dishes"
          ],
          "price_range": "€10-20",
          "atmosphere": "Romantic",
          "concept": "Local cuisine with lake views",
          "signature_dishes": [
            "Lac Fërgesë",
            "Tave Kosi"
          ],
          "types": ["Main course", "Specialty"],
          "variations": [
            {
              "name": "Lac me mish",
              "ingredients": ["Fish", "Tomato sauce", "Onions", "Paprika"],
              "types": ["Main course", "Specialty"],
              "serving": "1 person",
              "where_to_find": ["Lakefront restaurants", "Traditional taverns"]
            },
            {
              "name": "Lac me djathë",
              "ingredients": ["Fish", "Yogurt", "Garlic", "Dill"],
              "types": ["Main course", "Specialty"],
              "serving": "1 person",
              "where_to_find": ["Lakefront restaurants", "Traditional taverns"]
            }
          ],
        },
        {
          "name": "Rrëfim",
          "type": "Traditional Albanian",
          "setting": "Historic building",
          "specialties": [
            "Traditional Albanian dishes",
            "Local cheese",
            "Meat dishes"
          ],
          "price_range": "€15-25",
          "atmosphere": "Historic",
          "concept": "Traditional Albanian dining",
          "signature_dishes": [
            "Byrek",
            "Tave Kosi"
          ],
          "types": ["Main course", "Breakfast"],
          "variations": [
            {
              "name": "Byrek me mish",
              "ingredients": ["Spinach", "Feta cheese", "Onions"],
              "types": ["Breakfast", "Main course"],
              "serving": "1 person",
              "where_to_find": ["Traditional bakeries", "Street vendors"]
            },
            {
              "name": "Byrek me mish",
              "ingredients": ["Meat", "Onions", "Spices"],
              "types": ["Main course", "Breakfast"],
              "serving": "1 person",
              "where_to_find": ["Traditional bakeries", "Street vendors"]
            }
          ],
        }
      ],
      "cafes": [
        {
          "name": "Pedonalja Coffee",
          "specialty": "Traditional Albanian coffee",
          "feature": "Outdoor seating with city views"
        }
      ],
      "street_food": [
        {
          "name": "Burek",
          "price": "€1-2",
          "best_time": "Morning",
          "where": "Rus Market area",
          "season": "Year-round",
          "note": "Best with local yogurt"
        }
      ]
    },
    "tips": [
      "Best time to visit: April-June or September-November",
      "Carry cash for markets and smaller shops",
      "Wear comfortable shoes for walking and hiking",
      "Try local dishes at lakefront restaurants",
      "Visit Rozafa Castle early morning to avoid crowds",
      "Check local festival schedules for cultural events",
      "Bring sunscreen and hat for lake activities",
      "Reserve tables at popular restaurants in advance",
      "Take a guided tour for historical context",
      "Pack layers for cooler evenings near the lake",
      "Try traditional Albanian coffee at outdoor cafes",
      "Visit the Marubi Museum for historical photography",
      "Explore the lake islands by traditional boat",
      "Attend a cultural performance at Migjeni Theater",
      "Sample local cheeses at the bazaar market",
      "Take a sunset boat tour for stunning views",
      "Try the local rakia (fruit brandy) at traditional taverns",
      "Visit the old Ottoman bazaar for authentic souvenirs",
      "Check the local market for fresh produce"
    ]
  }
};