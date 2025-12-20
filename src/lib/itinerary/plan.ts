export interface DayPlan {
  date: Date;
  activities: Activities[];
}
export interface Activities {
  start: Date;
  end: Date;
  imageLink: string;
  description: string;
}

export interface Plan {
  days: DayPlan[];
}

export interface City {
  name: string;
  coords: [number, number];
  description: string;
}
export const plan: Plan = {
  days: [
    { date: new Date(2026, 2, 13), activities: [] },
    { date: new Date(2026, 2, 14), activities: [] },
    { date: new Date(2026, 2, 15), activities: [] },
    { date: new Date(2026, 2, 16), activities: [] },
    { date: new Date(2026, 2, 17), activities: [] },
    { date: new Date(2026, 2, 18), activities: [] },
    { date: new Date(2026, 2, 19), activities: [] },
    { date: new Date(2026, 2, 20), activities: [] },
    { date: new Date(2026, 2, 21), activities: [] },
  ],
};

export const cities: City[] = [
  {
    name: "Barcelona",
    coords: [41.3851, 2.1734],
    description:
      "Barcelona bursts with energy from the winding Gothic Quarter to the sun-soaked beaches of Barceloneta. Gaudí’s Sagrada Família and Park Güell offer surreal architecture, while La Rambla and Mercat de Sant Josep dazzle the senses. By day, explore art-filled neighborhoods and taste local tapas; by night, the city pulses with music and vibrant nightlife.",
  },
  {
    name: "Madrid",
    coords: [40.4168, -3.7038],
    description:
      "Madrid is a city of grand boulevards, historic plazas, and world-class museums. Wander the Prado, Reina Sofía, and Thyssen-Bornemisza for unforgettable art, or stroll through Retiro Park and the bustling Puerta del Sol. Tapas bars, rooftop terraces, and lively neighborhoods keep the city buzzing from morning to night.",
  },
  {
    name: "Granada",
    coords: [37.1773, -3.5986],
    description:
      "Granada captivates with its mix of Moorish history and Andalusian charm. The Alhambra palace and gardens overlook the Albaicín’s narrow, winding streets, offering breathtaking views. Sample local cuisine in traditional tapas bars and feel the city’s relaxed, timeless energy as the sun sets over the Sierra Nevada.",
  },
  {
    name: "Seville",
    coords: [37.3891, -5.9845],
    description:
      "Seville radiates warmth and color through its flamenco rhythms and historic streets. The Alcázar, Seville Cathedral, and Plaza de España showcase its rich architecture, while the Triana neighborhood and local tapas bars bring the city to life. Sunlit squares and lively nightlife make every moment unforgettable.",
  },
  {
    name: "Ronda",
    coords: [36.7423, -5.1663],
    description:
      "Ronda is perched dramatically above a deep gorge, offering one of Spain’s most scenic settings. Cross the Puente Nuevo for sweeping views, explore the historic old town, and visit the ancient bullring, Plaza de Toros. Its compact streets and stunning vistas make it perfect for a day of discovery and reflection.",
  },
  {
    name: "Cordoba",
    coords: [37.8882, -4.7794],
    description:
      "Córdoba blends Roman, Moorish, and Andalusian history in a mesmerizing cityscape. The Mezquita’s grand arches, the Alcázar de los Reyes Cristianos, and the charming Jewish Quarter showcase its heritage. Stroll fragrant patios, enjoy local cuisine, and feel the city’s serene yet vibrant atmosphere.",
  },
  {
    name: "Toledo",
    coords: [39.8628, -4.0273],
    description:
      "Toledo rises above the Tagus River with medieval charm and layered history. Explore the Alcázar, Toledo Cathedral, and winding streets of the old town, rich with Christian, Muslim, and Jewish heritage. Art, architecture, and artisan workshops make it a compact city full of surprises.",
  },
];
