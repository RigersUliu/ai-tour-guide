// src/app/data/cityData.ts
import { CityData } from "./cityInterfaces";

export const cityData: Record<string, CityData> = {
  shkodra: {
    name: "Shkodra",
    alternate_names: ["Shkodër", "Scutari"],
    location: {
      country: "Albania",
      region: "Shkodër County",
      coordinates: {
        latitude: 42.0685,
        longitude: 19.5119,
      },
      elevation: "13m above sea level",
      nearby_landmarks: [
        "Lake Shkodër (largest lake in Balkans)",
        "Albanian Alps (Accursed Mountains)",
        "Buna River",
        "Montenegro border (20km north)",
      ],
    },
    description:
      "Shkodra is a vibrant city in northwestern Albania, renowned for its ancient heritage, cultural diversity, and stunning natural landscapes. One of Albania's oldest cities with over two millennia of history, it offers travelers a rich tapestry of experiences blending history, adventure, and local traditions. Known as the cultural capital of northern Albania, it serves as the gateway to the Albanian Alps.",
    historical_background: {
      founding: {
        year: "4th century BCE",
        by: "Illyrian tribe of Labeates",
        original_name: "Scodra",
      },
      timeline: [
        {
          period: "Illyrian Kingdom",
          years: "4th century BCE - 168 BCE",
          key_facts: [
            "Capital under King Gentius",
            "Strategic hilltop fortress",
            "Minted own coins",
          ],
        },
        {
          period: "Roman Rule",
          years: "168 BCE - 5th century CE",
          key_facts: [
            "Important trade center on Via Egnatia",
            "Christianized in 1st century CE",
            "Bishopric established",
          ],
        },
        {
          period: "Byzantine Era",
          years: "5th century - 1396",
          key_facts: [
            "Withstood Slavic invasions",
            "Fortified with new walls",
            "Center of conflict between Serbian and Albanian rulers",
          ],
        },
        {
          period: "Venetian Rule",
          years: "1396-1479",
          key_facts: [
            "Built St. Stephen's Church (later converted to mosque)",
            "Strengthened castle defenses",
            "Heroic resistance against Ottomans (1478-79 siege)",
          ],
        },
        {
          period: "Ottoman Era",
          years: "1479-1912",
          key_facts: [
            "Renamed Iskodra",
            "Important trade and craft center",
            "Famous for silver and arms workshops",
            "19th century: Over 3,000 shops recorded",
          ],
        },
        {
          period: "Modern Albania",
          years: "1912-present",
          key_facts: [
            "Sieged by Montenegrins in 1913",
            "Center of anti-communist resistance",
            "Cultural revival post-1990s",
          ],
        },
      ],
      archaeological_sites: [
        "Early Bronze Age settlement traces around Shkodra",
        "Rozafa Castle excavations",
        "Ancient city walls near Lead Mosque",
        "Roman artifacts in Historical Museum",
      ],
    },
    demographics: {
      population: 112276,
      ethnic_groups: ["Albanians", "Montenegrins", "Roma"],
      languages: [
        "Albanian (Gheg dialect)",
        "English (tourist areas)",
        "Italian",
      ],
      religions: [
        {
          name: "Islam",
          percentage: "65%",
          landmarks: ["Ebu Bekr Mosque", "Lead Mosque"],
        },
        {
          name: "Catholicism",
          percentage: "30%",
          landmarks: ["St. Stephen's Cathedral", "Franciscan Church"],
        },
        {
          name: "Orthodoxy",
          percentage: "5%",
          landmarks: ["Orthodox Cathedral of the Nativity"],
        },
      ],
    },
    cultural_importance: {
      nicknames: [
        "City of Bicycles",
        "Little Venice",
        "Traditional capital of northern Albania",
      ],
      cultural_firsts: [
        "First photography studio in Albania (Marubi, 1850s)",
        "First public library (1879)",
        "First Albanian-language school (1891)",
      ],
      notable_figures: [
        {
          name: "Pietro Marubi",
          contribution: "Pioneer of Albanian photography",
        },
        {
          name: "Kolë Idromeno",
          contribution: "Renaissance painter and architect",
        },
        {
          name: "Migjeni",
          contribution: "Influential 20th century poet",
        },
      ],
      cultural_institutions: [
        {
          name: "Migjeni Theater",
          type: "Performing arts",
          established: "1949",
        },
        {
          name: "Marubi National Museum of Photography",
          type: "Museum",
          collection_size: "500,000+ negatives",
        },
        {
          name: "Vilson Kilica Cultural Center",
          type: "Multidisciplinary",
        },
      ],
      festivals: [
        {
          name: "Shkodra Jazz Festival",
          month: "July",
          duration: "3 days",
          features: ["International artists", "Open-air concerts"],
        },
        {
          name: "Carnival of Shkodra",
          month: "February/March",
          duration: "1 day",
          features: ["Parade with Venetian masks", "Street performances"],
        },
        {
          name: "Lake Day Festival",
          month: "August",
          duration: "1 day",
          features: ["Boat races", "Traditional fishing demonstrations"],
        },
      ],
    },
    climate: {
      classification: "Csa (Hot-summer Mediterranean)",
      seasons: [
        {
          name: "Spring",
          months: "March-May",
          avg_temp: "12-22°C",
          characteristics: [
            "Lush greenery",
            "Wildflowers bloom",
            "Ideal for outdoor activities",
          ],
        },
        {
          name: "Summer",
          months: "June-August",
          avg_temp: "22-34°C",
          characteristics: [
            "Dry and sunny",
            "Lake activities popular",
            "Occasional heat waves",
          ],
        },
        {
          name: "Autumn",
          months: "September-November",
          avg_temp: "12-22°C",
          characteristics: [
            "Mild temperatures",
            "Harvest season",
            "Good for hiking",
          ],
        },
        {
          name: "Winter",
          months: "December-February",
          avg_temp: "2-12°C",
          characteristics: [
            "Cold with occasional snow",
            "Lake views often misty",
            "Good for indoor activities",
          ],
        },
      ],
    },
    attractions: {
      historical: [
        {
          name: "Rozafa Castle",
          description: "Medieval fortress with Illyrian origins",
          location: "Rozafa Hill",
          visitor_info: {
            hours: "9:00 - 17:00",
            fee: "€2",
            accessibility: "Partially accessible",
            best_time: "Morning",
          },
        },
      ],
      museums: [
        {
          name: "Marubi National Museum of Photography",
          description: "Preserves Albanian photographic heritage",
          location: "19th-century villa",
          visitor_info: {
            hours: "9:00-16:00 (closed Mondays)",
            fee: "500 lek",
          },
        },
      ],
      religious_sites: [
        {
          name: "Ebu Bekr Mosque",
          description: "Active community center with 35m tall minaret",
          location: "Sheshi Demokracia",
          visitor_info: {
            hours: "Outside prayer times",
          },
        },
      ],
      natural: [
        {
          name: "Lake Shkodër",
          description: "Largest lake in the Balkans with rich biodiversity",
          location: "Border with Montenegro",
          stats: {
            size: "370-530 km² (varies seasonally)",
            depth: "8m average",
            islands: ["50"],
            protected_status: "Ramsar Wetland of International Importance",
          },
          activities: [
            {
              name: "Kayaking",
              options: [
                {
                  name: "Half-day tour",
                  difficulty: "Easy",
                  distance: "5km",
                  duration: "3 hours",
                  season: "April-October",
                  description:
                    "Explore the lake's islands and marshes by kayak",
                },
              ],
            },
          ],
        },
        {
          name: "Kir River Canyon",
          description: "White limestone cliffs with natural swimming holes",
          location: "Near Mesi Bridge",
          activities: [
            {
              name: "Hiking",
              options: [
                {
                  name: "Canyon Trail",
                  difficulty: "Moderate",
                  distance: "5km",
                  duration: "3 hours",
                  season: "April-October",
                  description: "Moderate hike along the Kir River",
                },
              ],
            },
          ],
        },
      ],
      urban_experiences: [
        {
          name: "Pedonalja (Rruga Kolë Idromeno)",
          description: "800m pedestrian zone with historic architecture",
          location: "City center",
          visitor_info: {
            hours: "24/7",
            best_time: "Evening for xhiro (stroll) tradition",
          },
        },
        {
          name: "Shkodra Bazaar Area",
          description: "Modern market replacing historic Ottoman bazaar",
          location: "Rus Market",
          visitor_info: {
            hours: "6:00-14:00 daily",
            note: "Best for morning shopping",
          },
        },
      ],
    },
    tourism_types: {
      cultural: {
        description: "Immerse in Shkodra's rich history and living traditions",
        experiences: [
          {
            name: "Historic City Walk",
            itineraries: [
              "Rozafa Castle",
              "Shkodra Historical Museum",
              "Ebu Bekr Mosque",
            ],
            circuit: "Historic Center Circuit",
            options: [
              "Guided tours available",
              "Self-guided map available at tourist office",
            ],
          },
        ],
      },
      gastronomy: {
        description:
          "Experience traditional Albanian cuisine with fresh lake fish",
        experiences: [
          {
            name: "Lake Cuisine Experience",
            venues: [
              {
                name: "Rrëfim",
                feature: "Traditional Albanian dishes",
              },
              {
                name: "Buna",
                feature: "Fresh lake fish",
              },
            ],
          },
        ],
      },
    },
    dining: {
      cuisine_overview: {
        characteristics: [
          "Fresh lake fish",
          "Local dairy products",
          "Traditional meat dishes",
        ],
        dining_culture: [
          "Family-style meals",
          "Outdoor cafes",
          "Traditional taverns",
        ],
      },
      restaurants: [
        {
          name: "Lake View Restaurant",
          type: "Traditional Albanian",
          setting: "Lakefront terrace",
          specialties: [
            "Fresh lake fish",
            "Local cheese",
            "Traditional meat dishes",
          ],
          price_range: "€10-20",
          atmosphere: "Romantic",
          concept: "Local cuisine with lake views",
          signature_dishes: ["Lac Fërgesë", "Tave Kosi"],
          types: ["Main course", "Specialty"],
          variations: [
            {
              name: "Lac me mish",
              ingredients: ["Fish", "Tomato sauce", "Onions", "Paprika"],
              types: ["Main course", "Specialty"],
              serving: "1 person",
              where_to_find: ["Lakefront restaurants", "Traditional taverns"],
            },
            {
              name: "Lac me djathë",
              ingredients: ["Fish", "Yogurt", "Garlic", "Dill"],
              types: ["Main course", "Specialty"],
              serving: "1 person",
              where_to_find: ["Lakefront restaurants", "Traditional taverns"],
            },
          ],
        },
        {
          name: "Rrëfim",
          type: "Traditional Albanian",
          setting: "Historic building",
          specialties: [
            "Traditional Albanian dishes",
            "Local cheese",
            "Meat dishes",
          ],
          price_range: "€15-25",
          atmosphere: "Historic",
          concept: "Traditional Albanian dining",
          signature_dishes: ["Byrek", "Tave Kosi"],
          types: ["Main course", "Breakfast"],
          variations: [
            {
              name: "Byrek me mish",
              ingredients: ["Spinach", "Feta cheese", "Onions"],
              types: ["Breakfast", "Main course"],
              serving: "1 person",
              where_to_find: ["Traditional bakeries", "Street vendors"],
            },
            {
              name: "Byrek me mish",
              ingredients: ["Meat", "Onions", "Spices"],
              types: ["Main course", "Breakfast"],
              serving: "1 person",
              where_to_find: ["Traditional bakeries", "Street vendors"],
            },
          ],
        },
      ],
      cafes: [
        {
          name: "Pedonalja Coffee",
          specialty: "Traditional Albanian coffee",
          feature: "Outdoor seating with city views",
        },
      ],
      street_food: [
        {
          name: "Burek",
          price: "€1-2",
          best_time: "Morning",
          where: "Rus Market area",
          season: "Year-round",
          note: "Best with local yogurt",
        },
      ],
    },
    tips: [
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
      "Check the local market for fresh produce",
    ],
  },

  // ------------------------ Tirana -----------------------------------------------

  tirana: {
    name: "Tirana",
    alternate_names: ["Tiranë"],
    location: {
      country: "Albania",
      region: "Tirana County",
      coordinates: {
        latitude: 41.3275,
        longitude: 19.8187,
      },
      elevation: "130m above sea level",
      nearby_landmarks: ["Mount Dajti", "Lake Tirana", "Dajti National Park"],
    },
    description:
      "Tirana is the vibrant capital of Albania, known for its colorful architecture, rich history, and modern European vibe. The city blends Ottoman and communist-era influences with contemporary development, offering visitors a unique cultural experience.",
    historical_background: {
      founding: {
        year: "1614",
        by: "Sulejman Bargjini Pasha",
        original_name: "Tirana",
      },
      timeline: [
        {
          period: "Ottoman Period",
          years: "1614-1912",
          key_facts: [
            "Founded as a small village",
            "Grew into a regional center",
            "Preserved Ottoman architecture",
          ],
        },
        {
          period: "Early Independence",
          years: "1912-1939",
          key_facts: [
            "Became capital in 1920",
            "Modernization under Ahmet Zog",
            "Construction of Skanderbeg Square",
          ],
        },
        {
          period: "Communist Era",
          years: "1944-1991",
          key_facts: [
            "Massive urban development",
            "Construction of Enver Hoxha's monuments",
            "Population growth and industrialization",
          ],
        },
        {
          period: "Post-Communist Era",
          years: "1991-present",
          key_facts: [
            "Urban renewal projects",
            "Development of Blloku district",
            "Modernization of infrastructure",
          ],
        },
      ],
    },
    demographics: {
      population: 860000,
      ethnic_groups: ["Albanians", "Roma", "Greek minority"],
      languages: [
        "Albanian",
        "English (widely spoken in business and tourism)",
        "Italian",
      ],
      religions: [
        {
          name: "Muslim",
          percentage: "56.7%",
          landmarks: ["Et'hem Bey Mosque", "Bashkia e Madhe"],
        },
        {
          name: "Christian (Orthodox and Catholic)",
          percentage: "10.0%",
          landmarks: ["Saint Paul's Cathedral"],
        },
        {
          name: "Atheist",
          percentage: "32.5%",
          landmarks: [],
        },
      ],
    },
    cultural_importance: {
      nicknames: ["Capital of Albania", "Heart of Albania", "City of Colors"],
      cultural_firsts: [
        "First Albanian university",
        "First Albanian opera house",
        "First Albanian national library",
        "First Albanian parliament building",
        "First Albanian film studio",
      ],
      festivals: [
        {
          name: "International Film Festival",
          month: "October",
          duration: "1 week",
          features: [
            "International film screenings",
            "Director Q&A sessions",
            "Cultural events",
            "Film workshops",
          ],
        },
        {
          name: "Tirana International Jazz Festival",
          month: "May",
          duration: "3 days",
          features: [
            "Live jazz performances",
            "Workshops",
            "Jam sessions",
            "Street performances",
          ],
        },
        {
          name: "Street Art Festival",
          month: "June",
          duration: "1 week",
          features: [
            "Live street art",
            "Workshops",
            "Artist demonstrations",
            "City tours",
          ],
        },
      ],
    },
    attractions: {
      historical: [
        {
          name: "Skanderbeg Square",
          description:
            "The heart of Tirana featuring the National History Museum and the Skanderbeg Monument",
          location: "City Center",
        },
        {
          name: "Et'hem Bey Mosque",
          description: "18th-century Ottoman mosque with beautiful frescoes",
          location: "Skanderbeg Square",
        },
        {
          name: "Bashkia e Madhe",
          description: "Historic Ottoman-era clock tower",
          location: "City Center",
        },
      ],
      museums: [
        {
          name: "National History Museum",
          description:
            "Albania's largest museum showcasing the country's history",
          location: "Skanderbeg Square",
        },
        {
          name: "National Art Gallery",
          description:
            "Showcases Albanian art from the 19th century to present",
          location: "City Center",
        },
        {
          name: "House of Leaves Museum",
          description: "Former secret police headquarters",
          location: "City Center",
        },
      ],
      religious_sites: [
        {
          name: "Et'hem Bey Mosque",
          description: "18th-century Ottoman mosque with beautiful frescoes",
          location: "Skanderbeg Square",
        },
        {
          name: "Saint Paul's Cathedral",
          description: "Modern Orthodox cathedral",
          location: "City Center",
        },
      ],
      natural: [
        {
          name: "Mount Dajti National Park",
          description: "Beautiful mountain park with cable car access",
          location: "25km from center",
        },
        {
          name: "Lake Tirana",
          description: "Popular recreational area with beaches",
          location: "Near city center",
        },
      ],
      urban_experiences: [
        {
          name: "Blloku District",
          description: "Trendy area with cafes, restaurants, and nightlife",
          location: "City Center",
        },
        {
          name: "Downtown Tirana",
          description: "Modern shopping and business district",
          location: "City Center",
        },
        {
          name: "Tirana International Airport",
          description: "Main international gateway to Albania",
          location: "12km from city center",
        },
      ],
    },
    climate: {
      classification: "Mediterranean climate",
      seasons: [
        {
          name: "Spring",
          months: "March - May",
          avg_temp: "15-20°C",
          characteristics: [
            "Mild temperatures",
            "Flowering season",
            "Good hiking weather",
          ],
        },
        {
          name: "Summer",
          months: "June - August",
          avg_temp: "25-30°C",
          characteristics: [
            "Warmest season",
            "Long sunny days",
            "Beach activities",
          ],
        },
        {
          name: "Autumn",
          months: "September - November",
          avg_temp: "15-20°C",
          characteristics: [
            "Pleasant temperatures",
            "Harvest season",
            "Good for sightseeing",
          ],
        },
        {
          name: "Winter",
          months: "December - February",
          avg_temp: "5-10°C",
          characteristics: [
            "Cooler temperatures",
            "Snow in mountains",
            "Ski season",
          ],
        },
      ],
      precipitation: {
        annual: "600-800mm",
        wettest_month: "December",
        driest_month: "July",
      },
      best_travel_times: [
        {
          period: "Spring (April-May)",
          reasons: [
            "Pleasant weather",
            "Lower tourist numbers",
            "Beautiful flowers",
          ],
        },
        {
          period: "Autumn (September-October)",
          reasons: [
            "Comfortable temperatures",
            "Harvest festivals",
            "Beautiful scenery",
          ],
        },
      ],
    },
    dining: {
      cuisine_overview: {
        characteristics: [
          "Traditional Albanian dishes",
          "Modern European influences",
          "Street food culture",
          "International cuisine options",
        ],
        dining_culture: [
          "Casual dining atmosphere",
          "Family-style meals common",
          "Coffee culture",
          "Street food popular",
          "International restaurants in city center",
        ],
      },
      signature_dishes: [
        {
          name: "Byrek",
          description: "Flaky pastry filled with cheese, meat, or spinach",
          origin: "Traditional Albanian",
          best_places: ["Local bakeries", "Street vendors", "Cafes"],
          variations: [
            {
              name: "Byrek me mish",
              ingredients: ["Beef", "Onions", "Spices"],
              types: ["Meat"],
              serving: "Hot",
              where_to_find: ["Traditional restaurants", "Street vendors"],
            },
            {
              name: "Byrek me djath",
              ingredients: ["White cheese", "Fresh herbs"],
              types: ["Cheese"],
              serving: "Warm",
              where_to_find: ["Cafes", "Bakeries"],
            },
          ],
        },
        {
          name: "Tavë Kosi",
          description: "Baked lamb with yogurt and rice",
          origin: "Traditional Albanian",
          best_places: ["Local restaurants", "Family-style eateries"],
          variations: [
            {
              name: "Tavë Kosi me mish",
              ingredients: ["Lamb", "Yogurt", "Rice", "Spices"],
              types: ["Meat", "Dairy"],
              serving: "Hot",
              where_to_find: [
                "Traditional restaurants",
                "Family-style eateries",
              ],
            },
          ],
        },
        {
          name: "Fërgesë",
          description: "Baked peppers with cheese and eggs",
          origin: "Traditional Albanian",
          best_places: ["Local restaurants", "Cafes"],
          variations: [
            {
              name: "Fërgesë me djath",
              ingredients: ["Bell peppers", "White cheese", "Eggs", "Spices"],
              types: ["Vegetarian", "Dairy"],
              serving: "Warm",
              where_to_find: ["Cafes", "Local restaurants"],
            },
          ],
        },
        {
          name: "Baklava",
          description: "Sweet pastry with honey and nuts",
          origin: "Ottoman influence",
          best_places: ["Bakeries", "Cafes", "Sweet shops"],
          variations: [
            {
              name: "Baklava me kafene",
              ingredients: ["Walnuts", "Honey", "Spices"],
              types: ["Dessert"],
              serving: "Room temperature",
              where_to_find: ["Bakeries", "Cafes"],
            },
          ],
        },
      ],
    },
    tips: [
      "Visit Skanderbeg Square for the best city views",
      "Take the cable car to Mount Dajti for stunning mountain vistas",
      "Explore the Blloku district for nightlife and dining",
      "Try traditional Albanian dishes in local restaurants",
      "Visit the National History Museum for insight into Albanian history",
    ],
  },

  // ------------------------ Vlora -----------------------------------------------

  vlora: {
    name: "Vlora",
    alternate_names: ["Vlorë", "Valona", "Aulon (Avlona)"],
    location: {
      country: "Albania",
      region: "Vlorë County",
      coordinates: {
        latitude: 40.4667,
        longitude: 19.4897,
      },
      elevation: "0 m above sea level",
      nearby_landmarks: [
        "Bay of Vlorë (meeting point of Adriatic and Ionian Seas)",
        "Karaburun Peninsula and Sazan Island (across the bay)",
        "Narta Lagoon (protected wetland just north)",
        "Llogara Pass (1027 m, scenic gateway to the Albanian Riviera)",
      ],
    },
    description:
      "Vlorë (Vlora) is a vibrant coastal city in southwestern Albania, famed as the birthplace of Albanian independence and the gateway to the Albanian Riviera. Nestled where the Adriatic and Ionian Seas meet, Vlora offers a mix of historical significance and seaside charm. Visitors can explore its rich heritage – from ancient ruins to Ottoman architecture – and enjoy modern waterfront promenades, sandy and pebble beaches, and a backdrop of the Ceraunian Mountains. As Albania’s third-largest city and a major port, Vlora buzzes with energy in summer, yet still provides pockets of tranquility in its lagoons and hillside villages. Its unique blend of sunny Mediterranean climate, cultural landmarks, and natural beauty make Vlora a compelling destination for both history enthusiasts and beachgoers.",
    historical_background: {
      founding: {
        year: "6th century BCE",
        by: "Greek colonists (from Corinth/Epidamnos)",
        original_name: "Aulon (Ancient Greek)",
      },
      timeline: [
        {
          period: "Ancient Period",
          years: "6th century BCE - 1417",
          key_facts: [
            "Founded as Greek colony Aulon",
            "Important port in antiquity",
            "First mentioned in 2nd century CE",
          ],
        },
        {
          period: "Medieval Period",
          years: "1081 - 1417",
          key_facts: [
            "Captured by Norman forces in 1081",
            "Known to Venetians as Valona",
            "Important regional center",
          ],
        },
        {
          period: "Ottoman Rule",
          years: "1417 - 1912",
          key_facts: [
            "Conquered by Ottomans in 1417",
            "Flourished as regional center",
            "Known as Valona to Europeans",
          ],
        },
        {
          period: "Modern Era",
          years: "1912 - present",
          key_facts: [
            "Site of Albanian Declaration of Independence",
            "First capital of independent Albania",
            "Major port and industrial center",
          ],
        },
      ],
      archaeological_sites: [
        "Triport Archaeological Site",
        "Oricum (Orikum) ruins",
        "Amantia remains",
        "Kaninë Castle excavations",
        "Late Antique ruins in city center",
      ],
    },
    demographics: {
      population: 90000,
      ethnic_groups: [
        "Albanians (majority)",
        "Greeks (notable minority in region)",
        "Aromanians (Vlach)",
        "Italians (historical community)",
        "Jewish (historically present)",
      ],
      languages: [
        "Albanian (Tosk dialect, Labëria variant)",
        "Italian (widely understood)",
        "English (especially younger generations and tourism sector)",
        "Greek (some understanding in families with regional ties)",
      ],
      religions: [
        {
          name: "Islam (Sunni and Bektashi)",
          percentage: "50.0%",
          landmarks: ["Kuzum Baba Bektashi Shrine", "Old Mosque"],
        },
        {
          name: "Christianity (Orthodox and Catholic)",
          percentage: "45.0%",
          landmarks: ["Petro Marko Theater", "Local churches"],
        },
        {
          name: "Secular",
          percentage: "5.0%",
          landmarks: [],
        },
      ],
    },
    cultural_importance: {
      nicknames: [
        "City of Independence",
        "Gateway to the Albanian Riviera",
        "Birthplace of Albanian Independence",
      ],
      cultural_firsts: [
        "Site of Albania's Declaration of Independence and first capital of independent Albania (1912)",
        "Home to Albania's first naval base (Pashaliman, established in the 1950s)",
      ],
      cultural_institutions: [
        {
          name: "National Museum of Independence",
          type: "Historical",
          established: "1912",
          collection_size: "Extensive",
        },
        {
          name: "Petro Marko Theater",
          type: "Theater",
          established: "1920s",
          collection_size: "Active",
        },
        {
          name: "University of Vlora 'Ismail Qemali'",
          type: "Educational",
          established: "1991",
          collection_size: "Major",
        },
      ],
      festivals: [
        {
          name: "Independence Day Celebrations",
          month: "November",
          duration: "2 days",
          features: [
            "Patriotic parades",
            "Concerts",
            "Fireworks in Flag Square",
          ],
        },
        {
          name: "Vlora Summer Festival",
          month: "June",
          duration: "Weekend",
          features: ["Concerts", "Beach parties", "Cultural events"],
        },
        {
          name: "International Folk Festival",
          month: "Summer",
          duration: "3 days",
          features: [
            "Traditional music",
            "Dance groups",
            "Cultural performances",
          ],
        },
      ],
      notable_figures: [
        {
          name: "Ismail Qemali",
          contribution: "Statesman who declared Albanian independence in 1912",
        },
        {
          name: "Avni Rustemi",
          contribution: "Early 20th-century activist and national hero",
        },
        {
          name: "Petro Marko",
          contribution: "20th-century writer and journalist from Vlora",
        },
      ],
    },
    attractions: {
      historical: [
        {
          name: "Independence Monument (Flag Square)",
          description:
            "Grand bronze monument commemorating Albania's Declaration of Independence in 1912",
          location: "City Center",
        },
        {
          name: "Kaninë Castle",
          description:
            "Hilltop ruins with panoramic views of Vlora and the bay",
          location: "6km from center",
        },
        {
          name: "National Museum of Independence",
          description: "Historic building where independence was declared",
          location: "Flag Square",
        },
      ],
      museums: [
        {
          name: "National Museum of Independence",
          description: "Commemorates Albanian independence",
          location: "Flag Square",
        },
        {
          name: "Vlora Regional Museum",
          description: "Showcases local history and archaeology",
          location: "City Center",
        },
      ],
      religious_sites: [
        {
          name: "Kuzum Baba Bektashi Shrine",
          description: "Important spiritual site for the Bektashi Order",
          location: "City Center",
        },
        {
          name: "Petro Marko Theater",
          description: "City theater named after local writer",
          location: "City Center",
        },
      ],
      natural: [
        {
          name: "Bay of Vlorë",
          description: "Meeting point of Adriatic and Ionian Seas",
          location: "City waterfront",
        },
        {
          name: "Narta Lagoon",
          description: "Protected wetland with wildlife",
          location: "North of city",
        },
        {
          name: "Llogara Pass",
          description: "Scenic gateway to Albanian Riviera",
          location: "1027m above sea level",
        },
      ],
      urban_experiences: [
        {
          name: "Lungomare",
          description: "Modern waterfront promenade",
          location: "City Center",
        },
        {
          name: "Vlora Public Market",
          description: "Daily bazaar with fresh produce",
          location: "City Center",
        },
        {
          name: "Komiteti Café-Bar",
          description: "Retro Albanian theme bar",
          location: "City Center",
        },
      ],
    },
    climate: {
      classification: "Csa (Hot-summer Mediterranean)",
      seasons: [
        {
          name: "Spring",
          months: "March - May",
          avg_temp: "15-23°C",
          characteristics: [
            "Mild, gradually warming temperatures",
            "Wildflowers bloom in hills and countryside",
            "Moderate rainfall, especially in March",
          ],
        },
        {
          name: "Summer",
          months: "June - August",
          avg_temp: "25-33°C",
          characteristics: [
            "Hot, sunny and dry",
            "Sea breezes provide some relief by the coast",
            "Peak beach season and nightlife",
          ],
        },
        {
          name: "Autumn",
          months: "September - November",
          avg_temp: "16-26°C",
          characteristics: [
            "Warm early autumn (great for swimming through September)",
            "Increasing rainfall by November",
            "Grape and olive harvest season in villages",
          ],
        },
        {
          name: "Winter",
          months: "December - February",
          avg_temp: "8-15°C",
          characteristics: [
            "Mild coastal winter (frost and snow are very rare in city)",
            "Rainy season (periodic heavy showers)",
            "Surrounding mountains occasionally get snow-caps",
          ],
        },
      ],
      precipitation: {
        annual: "800-1000mm",
        wettest_month: "November",
        driest_month: "July",
      },
      best_travel_times: [
        {
          period: "May - June",
          reasons: [
            "Pleasant warm weather (mid-20s °C)",
            "Lush green landscapes & spring flowers",
            "Beach season starts, but without peak crowds",
          ],
        },
        {
          period: "September - early October",
          reasons: [
            "Sea water is warm from summer",
            "Fewer tourists and lower prices than August",
            "Harvest time – try fresh figs, grapes, and festivals",
          ],
        },
      ],
    },
    dining: {
      cuisine_overview: {
        characteristics: [
          "Coastal Mediterranean influence with an emphasis on seafood",
          "Blend of Albanian tradition and Italian inspiration",
          "Fresh local ingredients",
          "Street food culture",
        ],
        dining_culture: [
          "Fresh seafood daily",
          "Traditional Albanian dishes",
          "Italian influence in modern restaurants",
          "Street food popular",
          "Coffee culture strong",
        ],
      },
      signature_dishes: [
        {
          name: "Byrek",
          description: "Flaky pastry filled with cheese, meat, or spinach",
          origin: "Traditional Albanian",
          best_places: ["Local bakeries", "Street vendors", "Cafes"],
          variations: [
            {
              name: "Byrek me mish",
              ingredients: ["Beef", "Onions", "Spices"],
              types: ["Meat"],
              serving: "Hot",
              where_to_find: ["Traditional restaurants", "Street vendors"],
            },
            {
              name: "Byrek me djath",
              ingredients: ["White cheese", "Fresh herbs"],
              types: ["Cheese"],
              serving: "Warm",
              where_to_find: ["Cafes", "Bakeries"],
            },
          ],
        },
        {
          name: "Tavë Kosi",
          description: "Baked lamb with yogurt and rice",
          origin: "Traditional Albanian",
          best_places: ["Local restaurants", "Family-style eateries"],
          variations: [
            {
              name: "Tavë Kosi me mish",
              ingredients: ["Lamb", "Yogurt", "Rice", "Spices"],
              types: ["Meat", "Dairy"],
              serving: "Hot",
              where_to_find: [
                "Traditional restaurants",
                "Family-style eateries",
              ],
            },
          ],
        },
        {
          name: "Fërgesë",
          description: "Baked peppers with cheese and eggs",
          origin: "Traditional Albanian",
          best_places: ["Local restaurants", "Cafes"],
          variations: [
            {
              name: "Fërgesë me djath",
              ingredients: ["Bell peppers", "White cheese", "Eggs", "Spices"],
              types: ["Vegetarian", "Dairy"],
              serving: "Warm",
              where_to_find: ["Cafes", "Local restaurants"],
            },
          ],
        },
      ],
    },
    tips: [
      "Visit Flag Square for the Independence Monument and historical significance",
      "Explore the Lungomare for stunning coastal views",
      "Try fresh seafood at local restaurants by the water",
      "Visit Kaninë Castle for panoramic views of the bay",
      "Experience the local markets for fresh produce and traditional goods",
    ],
  },

  // ------------------------------------------- DURRES --------------------------------------------------
  durres: {
    name: "Durrës",
    alternate_names: ["Durres", "Dyrrachium"],
    location: {
      country: "Albania",
      region: "Durrës County",
      coordinates: {
        latitude: 41.3333,
        longitude: 19.4333,
      },
      elevation: "0m above sea level",
      nearby_landmarks: [
        "Adriatic Sea (coastal city)",
        "Mount Dajti (30km east)",
        "Tirana (33km north)",
        "Port of Durrës",
        "Durrës Amphitheatre",
      ],
    },
    description:
      "Durrës is Albania's second largest city and main seaport, known for its rich Roman and Byzantine heritage, beautiful beaches, and strategic location on the Adriatic coast.",
    historical_background: {
      founding: {
        year: "627 BC",
        by: "Corinthian colonists",
        original_name: "Epidamnos",
      },
      timeline: [
        {
          period: "Ancient Era",
          years: "627 BC - 146 BC",
          key_facts: [
            "Founded as a Greek colony",
            "Important trading port in the Adriatic",
            "Roman conquest in 168 BC",
          ],
        },
        {
          period: "Byzantine Era",
          years: "395 AD - 1204 AD",
          key_facts: [
            "Major Byzantine port",
            "Construction of city walls",
            "Amphitheatre built in 2nd century AD",
          ],
        },
        {
          period: "Modern Era",
          years: "1912 - present",
          key_facts: [
            "Albanian independence",
            "Major industrial development",
            "Tourism growth since 1990s",
          ],
        },
      ],
    },
    demographics: {
      population: 113770,
      ethnic_groups: ["Albanian"],
      languages: ["Albanian"],
      religions: [
        {
          name: "Islam",
          percentage: "65%",
          landmarks: ["Durrës Grand Mosque"],
        },
        {
          name: "Christianity",
          percentage: "30%",
          landmarks: ["St. Mary's Church"],
        },
        {
          name: "Other",
          percentage: "5%",
          landmarks: [],
        },
      ],
    },
    attractions: {
      historical: [
        {
          name: "Durrës Amphitheatre",
          description: "One of the largest Roman amphitheatres in the Balkans",
          era: "2nd century AD",
          visitor_info: {
            hours: "08:00 - 17:00",
            fee: "300 ALL",
            accessibility: "Wheelchair accessible",
            best_time: "Spring and Autumn",
          },
          stats: {
            size: "20,000 spectators capacity",
          },
        },
        {
          name: "Durrës Archaeological Museum",
          description: "Houses extensive collection of ancient artifacts",
          era: "Modern",
          visitor_info: {
            hours: "09:00 - 17:00",
            fee: "200 ALL",
            accessibility: "Wheelchair accessible",
            best_time: "Weekdays",
          },
        },
      ],
      museums: [],
      religious_sites: [
        {
          name: "Durrës Grand Mosque",
          description: "Historic mosque in the city center",
          era: "Modern",
        },
        {
          name: "St. Mary's Church",
          description: "Byzantine-style church",
          era: "Byzantine",
        },
      ],
      natural: [
        {
          name: "Durrës Beach",
          description: "Long sandy beach along the Adriatic",
          visitor_info: {
            best_time: "Summer",
            access: "Direct access from city center",
          },
          activities: [
            {
              name: "Water Sports",
              options: [
                {
                  name: "Parasailing",
                  difficulty: "Easy",
                  season: "Summer",
                },
                {
                  name: "Jet Skiing",
                  difficulty: "Moderate",
                  season: "Summer",
                },
              ],
            },
            {
              name: "Beach Activities",
              options: [
                {
                  name: "Sunbathing",
                  difficulty: "Easy",
                  season: "Summer",
                },
                {
                  name: "Beach Volleyball",
                  difficulty: "Easy",
                  season: "Summer",
                },
              ],
            },
          ],
        },
      ],
      urban_experiences: [
        {
          name: "Durrës City Center",
          description: "Modern city center with shops and restaurants",
          visitor_info: {
            best_time: "Any time",
            access: "Free access",
          },
        },
      ],
    },
    transportation: {
      arrival_options: [
        {
          method: "Sea",
          routes: [
            {
              from: "Bari, Italy",
              duration: "2-3 hours",
              frequency: "Daily",
              price: "From 30-50 EUR",
            },
          ],
        },
        {
          method: "Road",
          routes: [
            {
              from: "Tirana",
              duration: "45 minutes",
              frequency: "Frequent",
              price: "From 200 ALL",
            },
          ],
        },
      ],
    },
    itineraries: [
      {
        title: "Durrës in a Day",
        duration: "1 day",
        days: [
          {
            day: 1,
            focus: "History and Beach",
            activities: [
              "Visit Durrës Amphitheatre",
              "Explore Archaeological Museum",
              "Relax at Durrës Beach",
            ],
          },
        ],
      },
    ],
    tips: [
      "Visit the Durrës Amphitheatre early morning to avoid crowds",
      "Try traditional Albanian seafood at the beachfront restaurants",
      "Take a ferry to Bari for a day trip to Italy",
      "Explore the Old Town for authentic Albanian architecture",
      "Visit the Archaeological Museum on weekdays for a quieter experience",
    ],
  },

  // ------------------------------------------- HIMARE --------------------------------------------------
  himare: {
    name: "Himarë",
    alternate_names: ["Himara", "Himara"],
    location: {
      country: "Albania",
      region: "Vlorë County",
      coordinates: {
        latitude: 40.0833,
        longitude: 19.6333,
      },
      elevation: "0m above sea level",
      nearby_landmarks: [
        "Ionian Sea (coastal town)",
        "Gjipe Canyon",
        "Llogara National Park (20km north)",
        "Karaburun Peninsula",
        "Sazan Island",
      ],
    },
    description:
      "Himarë is a picturesque coastal town in southern Albania, known for its stunning beaches, dramatic cliffs, and rich cultural heritage. It's a popular destination for both beach lovers and history enthusiasts.",
    historical_background: {
      founding: {
        year: "Ancient times",
        by: "Ancient Greek colonists",
        original_name: "Phoenice",
      },
      timeline: [
        {
          period: "Ancient Era",
          years: "8th century BC - 31 BC",
          key_facts: ["Greek colony", "Roman conquest", "Byzantine period"],
        },
        {
          period: "Ottoman Era",
          years: "1479 - 1912",
          key_facts: [
            "Ottoman rule",
            "Construction of Himarë Castle",
            "Local resistance movements",
          ],
        },
        {
          period: "Modern Era",
          years: "1912 - present",
          key_facts: [
            "Albanian independence",
            "Tourism development",
            "Preservation of traditional architecture",
          ],
        },
      ],
    },
    demographics: {
      population: 12000,
      ethnic_groups: ["Albanian"],
      languages: ["Albanian"],
      religions: [
        {
          name: "Islam",
          percentage: "70%",
          landmarks: ["Himarë Mosque"],
        },
        {
          name: "Christianity",
          percentage: "25%",
          landmarks: ["St. Nicholas Church"],
        },
        {
          name: "Other",
          percentage: "5%",
          landmarks: [],
        },
      ],
    },
    attractions: {
      historical: [
        {
          name: "Himarë Castle",
          description: "Medieval fortress with panoramic sea views",
          era: "Medieval",
          visitor_info: {
            hours: "09:00 - 17:00",
            fee: "100 ALL",
            accessibility: "Limited",
            best_time: "Spring and Autumn",
          },
        },
        {
          name: "Old Town Himarë",
          description: "Well-preserved traditional Albanian architecture",
          era: "19th-20th century",
          visitor_info: {
            best_time: "Any time",
            access: "Free access",
          },
        },
      ],
      museums: [],
      religious_sites: [
        {
          name: "Himarë Mosque",
          description: "Historic mosque with sea views",
          era: "Ottoman",
        },
        {
          name: "St. Nicholas Church",
          description: "Byzantine-style church",
          era: "Byzantine",
        },
      ],
      natural: [
        {
          name: "Gjipe Beach",
          description:
            "Famous for its dramatic cliffs and crystal-clear waters",
          visitor_info: {
            best_time: "Summer",
            access: "Via coastal road",
          },
          activities: [
            {
              name: "Water Activities",
              options: [
                {
                  name: "Cliff Diving",
                  difficulty: "Advanced",
                  season: "Summer",
                },
                {
                  name: "Snorkeling",
                  difficulty: "Easy",
                  season: "Summer",
                },
              ],
            },
            {
              name: "Beach Activities",
              options: [
                {
                  name: "Sunbathing",
                  difficulty: "Easy",
                  season: "Summer",
                },
                {
                  name: "Beach Volleyball",
                  difficulty: "Easy",
                  season: "Summer",
                },
              ],
            },
          ],
        },
        {
          name: "Jale Beach",
          description: "Long sandy beach with clear blue waters",
          visitor_info: {
            best_time: "Summer",
            access: "Via coastal road",
          },
          activities: [
            {
              name: "Water Sports",
              options: [
                {
                  name: "Kayaking",
                  difficulty: "Easy",
                  season: "Summer",
                },
                {
                  name: "Paddleboarding",
                  difficulty: "Easy",
                  season: "Summer",
                },
              ],
            },
            {
              name: "Beach Activities",
              options: [
                {
                  name: "Sunbathing",
                  difficulty: "Easy",
                  season: "Summer",
                },
                {
                  name: "Beach Volleyball",
                  difficulty: "Easy",
                  season: "Summer",
                },
              ],
            },
          ],
        },
      ],
      urban_experiences: [
        {
          name: "Himarë Town Center",
          description: "Coastal town center with traditional architecture",
          visitor_info: {
            best_time: "Any time",
            access: "Free access",
          },
        },
      ],
    },
    transportation: {
      arrival_options: [
        {
          method: "Road",
          routes: [
            {
              from: "Vlora",
              duration: "1 hour",
              frequency: "Frequent",
              price: "From 400 ALL",
            },
            {
              from: "Saranda",
              duration: "2.5 hours",
              frequency: "Regular",
              price: "From 600 ALL",
            },
          ],
        },
      ],
    },
    itineraries: [
      {
        title: "Himarë Adventure",
        duration: "2 days",
        days: [
          {
            day: 1,
            focus: "Beaches and Nature",
            activities: [
              "Explore Gjipe Beach",
              "Visit Jale Beach",
              "Hike to nearby cliffs",
            ],
          },
          {
            day: 2,
            focus: "History and Culture",
            activities: [
              "Visit Himarë Castle",
              "Walk through Old Town",
              "Experience local cuisine",
            ],
          },
        ],
      },
    ],
    tips: [
      "Visit Gjipe Beach early morning for the best cliff diving conditions",
      "Try local Himarë cheese and honey at the market",
      "Take a guided tour of Himarë Castle for historical context",
      "Hike to the nearby cliffs for panoramic sea views",
      "Experience the local folklore performances in the Old Town",
    ],
  },
};
