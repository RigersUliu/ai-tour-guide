export interface CityAttraction {
  name: string;
  description?: string;
  location?: string;
  features?: string[];
  visitor_info?: {
    hours?: string;
    fee?: string;
    accessibility?: string;
    best_time?: string;
    guide?: string;
    access?: string;
    guided_tours?: string[];
    note?: string;
  };
  era?: string;
  history?: string;
  stats?: {
    size?: string;
    depth?: string;
    elevation?: string;
    other?: string;
    islands?: string[];
    protected_status?: string;
  };
  activities?: Array<{
    name: string;
    options?: Array<{
      name: string;
      difficulty?: string;
      distance?: string;
      duration?: string;
      season?: string;
      reward?: string;
      description?: string;
      routes?: string[];
      departure_time?: string;
      surface?: string;
    }>;
    species?: string[];
    best_spots?: string[];
    locations?: string[];
  }>;
  collections?: string[];
  sections?: string[];
  viewpoints?: string[];
  building?: string;
  setting?: string;
  built?: string;
  length?: string;
  circuit?: string;
  stops?: string[];
  locations?: string[];
  style?: string;
  type?: string;
  architect?: string;
  construction_date?: string;
  opening_date?: string;
  renovation_date?: string;
  architect_style?: string;
  notable_features?: string[];
  awards?: string[];
  ranking?: string;
  rating?: string;
  reviews?: string[];
  tips?: string[];
  warnings?: string[];
  accessibility_info?: string;
  amenities?: string[];
  services?: string[];
  guided_tour_info?: string;
  audio_guide_info?: string;
  map_info?: string;
  nearby_attractions?: string[];
  nearby_landmarks?: string[];
  nearby_hotels?: string[];
  nearby_restaurants?: string[];
  nearby_shops?: string[];
  nearby_bars?: string[];
  nearby_clubs?: string[];
  nearby_events?: string[];
  nearby_activities?: string[];
}

export interface Restaurant {
  name: string;
  type: string;
  setting: string;
  specialties: string[];
  price_range: string;
  reservation?: string;
  atmosphere?: string;
  concept?: string;
  signature_dishes?: string[];
  variations?: Array<{
    name: string;
    ingredients: string[];
    types?: string[];
    serving?: string;
    where_to_find?: string[];
    price?: string;
    preparation_time?: string;
    dietary_info?: string[];
  }>;
  types?: string[];
  opening_hours?: {
    weekdays?: string;
    weekends?: string;
    holidays?: string;
  };
  amenities?: string[];
  dress_code?: string;
  capacity?: number;
  outdoor_seating?: boolean;
  parking?: {
    available?: boolean;
    free?: boolean;
    nearby?: boolean;
  };
}

export interface Shop {
  name: string;
  location: string;
  specialty: string;
}

export interface MarketSection {
  name: string;
  items: string[];
  specialties?: string[];
}

export interface Bar {
  name: string;
  concept: string;
  signature_drinks: string[];
  hours: string;
  atmosphere?: string;
  features?: string[];
}

export interface Nightclub {
  name: string;
  music: string[];
  features: string[];
  hours: string;
  crowd?: string;
  highway?: string;
  route?: string;
}

export interface ItineraryDay {
  day: number;
  focus: string;
  activities?: string[];
  options?: string[];
}

export interface Itinerary {
  duration: string;
  title: string;
  schedule?: {
    time: string;
    activities: string[];
  }[];
  days?: ItineraryDay[];
}

export interface CityData {
  name: string;
  alternate_names?: string[];
  location?: {
    country: string;
    region: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    elevation?: string;
    nearby_landmarks?: string[];
  };
  description: string;
  historical_background?: {
    founding?: {
      year: string;
      by: string;
      original_name: string;
    };
    timeline?: Array<{
      period: string;
      years: string;
      key_facts: string[];
    }>;
    archaeological_sites?: string[];
  };
  demographics?: {
    population?: number;
    ethnic_groups?: string[];
    languages?: string[];
    religions?: Array<{
      name: string;
      percentage: string;
      landmarks: string[];
    }>;
  };
  attractions: {
    historical: CityAttraction[];
    museums: CityAttraction[];
    religious_sites: CityAttraction[];
    natural: CityAttraction[];
    urban_experiences: CityAttraction[];
  };
  tips: string[];
  climate?: {
    classification?: string;
    seasons?: Array<{
      name: string;
      months: string;
      avg_temp: string;
      characteristics: string[];
    }>;
    precipitation?: {
      annual: string;
      wettest_month: string;
      driest_month: string;
    };
    best_travel_times?: Array<{
      period: string;
      reasons: string[];
    }>;
  };
  cultural_importance?: {
    nicknames?: string[];
    cultural_firsts?: string[];
    notable_figures?: Array<{
      name: string;
      contribution: string;
    }>;
    cultural_institutions?: Array<{
      name: string;
      type: string;
      established?: string;
      collection_size?: string;
    }>;
    festivals?: Array<{
      name: string;
      month: string;
      duration: string;
      features: string[];
    }>;
    cultural_connections?: string[];
  };
  tourism_types?: {
    cultural?: {
      description: string;
      experiences: Array<{
        name: string;
        itineraries: string[];
        circuit?: string;
        options?: string[];
        stops?: string[];
        locations?: string[];
      }>;
    };
    adventure?: {
      description: string;
      activities: Array<{
        name: string;
        options: Array<{
          name: string;
          difficulty?: string;
          distance?: string;
          duration?: string;
          season?: string;
          reward?: string;
          description?: string;
          rapids?: string;
          routes?: string[];
          departure_time?: string;
          surface?: string;
        }>;
      }>;
    };
    gastronomy?: {
      description: string;
      experiences: Array<{
        name: string;
        venues?: Array<{
          name: string;
          feature: string;
        }>;
        stops?: string[];
        locations?: string[];
      }>;
    };
    eco_tourism?: {
      description: string;
      initiatives: Array<{
        name: string;
        operator?: string;
        species?: string;
        locations?: string[];
        activities?: string[];
      }>;
    };
  };
  dining?: {
    cuisine_overview?: {
      characteristics: string[];
      dining_culture: string[];
    };
    signature_dishes?: Array<{
      name: string;
      description: string;
      origin: string;
      best_places: string[];
      variations?: Array<{
        name: string;
        ingredients: string[];
        types?: string[];
        serving?: string;
        where_to_find?: string[];
      }>;
      types?: string[];
      serving?: string;
      where_to_find?: string[];
    }>;
    restaurants?: Array<{
      name: string;
      type: string;
      setting: string;
      specialties: string[];
      price_range: string;
      reservation?: string;
      atmosphere?: string;
      concept?: string;
      signature_dishes?: string[];
      variations?: Array<{
        name: string;
        ingredients: string[];
        types?: string[];
        serving?: string;
        where_to_find?: string[];
      }>;
      types?: string[];
    }>;
    cafes?: Array<{
      name: string;
      specialty: string;
      feature: string;
    }>;
    street_food?: Array<{
      name: string;
      price: string;
      best_time?: string;
      where?: string;
      season?: string;
      note?: string;
    }>;
  };
  shopping?: {
    handicrafts?: Array<{
      type: string;
      shops: Shop[];
      price_range: string;
      villages?: Array<{
        name: string;
        distance: string;
        products: string[];
      }>;
    }>;
    markets?: Array<{
      name: string;
      hours: string;
      sections: MarketSection[];
    }>;
    modern_shopping?: Array<{
      name: string;
      location: string;
      stores: string[];
    }>;
  };
  nightlife?: {
    bars?: Bar[];
    clubs?: Nightclub[];
    cultural_nightlife?: Array<{
      name: string;
      offerings: string[];
      location?: string;
      schedule?: string;
    }>;
  };
  transportation?: {
    arrival_options?: Array<{
      method: string;
      routes: Array<{
        from: string;
        duration: string;
        frequency: string;
        price: string;
        highway?: string;
        route?: string;
        distance?: string;
      }>;
    }>;
    local_transport?: Array<{
      type: string;
      applicability?: string;
      notes?: string;
      price_examples?: string[];
      rental_locations?: string[];
      companies?: string[];
      usage?: string;
      price?: string;
      tip?: string;
      fare?: string;
    }>;
    regional_excursions?: Array<{
      destination: string;
      options: Array<{
        type: string;
        departure: string;
        duration: string;
        price: string;
        package?: string[];
      }>;
      package?: string[];
    }>;
  };
  accommodation?: {
    by_category?: Array<{
      category: string;
      options: Array<{
        name: string;
        features: string[];
        price_range: string;
      }>;
    }>;
    booking_tips?: string[];
  };
  hidden_gems?: Array<{
    name: string;
    description: string;
    experiences: string[];
    location?: string;
    highlights?: string[];
    venues?: string[];
  }>;
  itineraries?: Itinerary[];
  travel_tips?: Array<{
    category: string;
    tips: string[];
    phrases?: string[];
    advice?: string[];
    points?: string[];
    essentials?: string[];
  }>;
  resources?: Array<{
    type: string;
    location?: string;
    services?: string[];
    links?: Array<{
      name: string;
      url: string;
    }>;
    opportunities?: Array<{
      organization: string;
      focus: string;
    }>;
  }>;
}