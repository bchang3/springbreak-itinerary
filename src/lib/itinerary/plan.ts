export interface DayPlan {
  date: Date;
  events: ItineraryEvent[];
}
export interface ItineraryEvent {
  start: Date;
  end: Date;
  event: Event;
}

export interface Plan {
  days: DayPlan[];
}

export type EventType =
  | "nightlife"
  | "nature"
  | "food"
  | "activities"
  | "sightseeing";
export interface CityEvent {
  title: string;
  city: string;
  type: EventType;
  imageLink: string;
  description: string;
}
export interface City {
  name: string;
  coords: [number, number];
  description: string;
  tentative?: boolean;
  events: CityEvent[];
}
export const plan: Plan = {
  days: [
    { date: new Date(2026, 2, 13), events: [] },
    { date: new Date(2026, 2, 14), events: [] },
    { date: new Date(2026, 2, 15), events: [] },
    { date: new Date(2026, 2, 16), events: [] },
    { date: new Date(2026, 2, 17), events: [] },
    { date: new Date(2026, 2, 18), events: [] },
    { date: new Date(2026, 2, 19), events: [] },
    { date: new Date(2026, 2, 20), events: [] },
    { date: new Date(2026, 2, 21), events: [] },
  ],
};

export const cities: City[] = [
  {
    name: "Barcelona",
    coords: [41.3851, 2.1734],
    description:
      "Barcelona bursts with energy from the winding Gothic Quarter to the sun-soaked beaches of Barceloneta. Gaudí’s Sagrada Família and Park Güell offer surreal architecture, while La Rambla and Mercat de Sant Josep dazzle the senses. By day, explore art-filled neighborhoods and taste local tapas; by night, the city pulses with music and vibrant nightlife.",
    events: [
      {
        title: "Sagrada Família",
        city: "Barcelona",
        imageLink:
          "https://cdn.britannica.com/15/194815-050-08B5E7D1/Nativity-facade-Sagrada-Familia-cathedral-Barcelona-Spain.jpg",
        type: "sightseeing",
        description:
          "Antoni Gaudí’s unfinished basilica is one of Barcelona’s most iconic landmarks, blending Gothic and Art Nouveau styles. Its soaring facades and stunning interior light make it a must‑see for any visitor. Book ahead to skip lines and catch the best views.",
      },
      {
        title: "Camp Nou: Barcelona vs Seville",
        city: "Barcelona",
        imageLink:
          "https://images.unsplash.com/photo-1587368062478-e804f5e2a55a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcCUyMG5vdXxlbnwwfHwwfHx8MA%3D%3D",
        type: "activities",
        description:
          "Catch the electric atmosphere of a La Liga match at Camp Nou on March 15th, as Barcelona takes on Seville. The roar of tens of thousands of fans brings a thrilling energy unique to Spanish football. It’s an unforgettable cultural and sporting experience.",
      },
      {
        title: "Gothic Quarter",
        city: "Barcelona",
        imageLink:
          "https://www.througheternity.com/upload/CONF83/20220223/barcelona_gothic_quarter_tour_3_1_-tSa-1200X630.png",
        type: "sightseeing",
        description:
          "Wander the maze of narrow streets in the historic Gothic Quarter, where medieval buildings hide lively plazas. Street performers, hidden cafes, and timeless architecture make every turn feel like discovery. It’s perfect for a relaxed afternoon of exploring.",
      },
      {
        title: "Plaça Reial",
        city: "Barcelona",
        imageLink:
          "https://www.bcn.travel/wp-content/uploads/Royal-Plaza-Barcelona.jpg",
        type: "nightlife",
        description:
          "This lively square near La Rambla is lined with palm trees, historic lampposts, and buzzing bars. It’s a popular spot to grab drinks, people-watch, and soak up Barcelona’s vibrant street life. Evening energy here sets the tone for a great night out.",
      },
      {
        title: "Costa Brava",
        city: "Barcelona",
        imageLink:
          "https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/cataluna/palafrugell-girona-s144973225.jpg",
        type: "nature",
        description:
          "Just north of Barcelona, Costa Brava offers dramatic cliffs, hidden coves, and crystal-clear waters. Perfect for a day trip, you can hike scenic coastal trails or relax in charming seaside towns. The landscape feels like a breath of fresh Mediterranean air.",
      },
      {
        title: "Barceloneta Beach",
        city: "Barcelona",
        imageLink:
          "https://barcelonahacks.com/wp-content/uploads/2025/06/barceloneta-beach-cover.jpg",
        type: "nature",
        description:
          "Barceloneta Beach is the heart of Barcelona’s seaside vibe, with wide sandy shores and lively promenade bars. Even in cooler months, it’s great for strolling and drinks with a view. Sunset here is one of the city’s most social daily rituals.",
      },
      {
        title: "Montjuïc Hill",
        city: "Barcelona",
        imageLink:
          "https://sitgesluxuryrentals.com/wp-content/uploads/2024/07/Template-Blog-Photo-SLR-5-e1731682149242.jpg",
        type: "nature",
        description:
          "Montjuïc Hill overlooks the city and harbor with parks, gardens, and historic sites to explore. Ride the cable car for panoramic views or visit the castle on top. It’s a calming outdoor escape with sunsets worth lingering for.",
      },
      {
        title: "Ciutadella Park",
        city: "Barcelona",
        imageLink:
          "https://cdn1.matadornetwork.com/blogs/1/2023/06/barcelona-park-gaudi-fountain.jpg",
        type: "nature",
        description:
          "Ciutadella Park is Barcelona’s green heart, filled with fountains, sculptures, and wide tree-lined paths. It’s perfect for a relaxed stroll, a picnic, or people-watching near the lake. You can rent a rowboat, visit the small zoo, or simply enjoy the open space away from the city bustle.",
      },
      {
        title: "Montserrat & Mountain Biking",
        city: "Barcelona",
        imageLink:
          "https://www.spain.info/.content/imagenes/cabeceras-grandes/cataluna/monasterio_montserrat_s_628801775.jpg",
        type: "nature",
        description:
          "Take a day trip to Montserrat for dramatic mountain scenery and spiritual atmosphere. The rugged terrain around the monastery is ideal for mountain biking and outdoor adventure. Trails range from easy to challenging, all with unforgettable views.",
      },
      {
        title: "Flamenco Show",
        city: "Barcelona",
        imageLink:
          "https://festivalboca.org/sites/FestivalBoca/cache/file/17F5946D-FCCA-45F9-B953346FE01F3DA7.jpg",
        type: "activities",
        description:
          "Experience the passion of flamenco with guitar, song, and dance at an intimate tablao. Barcelona offers a range of shows from traditional to contemporary. It’s a cultural highlight you’ll remember long after your trip.",
      },
      {
        title: "Jazz Clubs",
        city: "Barcelona",
        imageLink:
          "https://files.theproject.es/archivos/milano-jazz-club-barcelona-16329.jpg",
        type: "nightlife",
        description:
          "Barcelona’s jazz scene thrives in cozy clubs tucked into the old city and Eixample. Catch live sets from local and international musicians. Sip wine, relax, and enjoy world-class improvisation in a chilled atmosphere.",
      },
      {
        title: "Rooftop Bars",
        city: "Barcelona",
        imageLink: "https://media.timeout.com/images/105909905/image.jpg",
        type: "nightlife",
        description:
          "Rooftop bars across Barcelona serve up sunsets, skyline views, and craft cocktails. Whether in Eixample or near Plaça d’Espanya, the elevated vantage points are perfect for evening drinks. They’re ideal for starting a night of city exploration.",
      },
      {
        title: "El Born District",
        city: "Barcelona",
        imageLink:
          "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/348000/348352-La-Ribera.jpg",
        type: "nightlife",
        description:
          "El Born mixes history with trendy boutiques and buzzing cafes. Wander its narrow lanes, discover artisanal shops, and stop for tapas or drinks. It’s one of the city’s most dynamic and walkable neighborhoods.",
      },
      {
        title: "Port Vell",
        city: "Barcelona",
        imageLink:
          "https://www.barcelo.com/guia-turismo/wp-content/uploads/ok-port-vell.jpg",
        type: "sightseeing",
        description:
          "Port Vell’s marina area blends scenic waterfront promenades with lively restaurants and bars. Watch boats bobbing against the backdrop of the city at sunset. It’s a great place for a leisurely stroll or seaside drink.",
      },
      {
        title: "PortAventura Park",
        city: "Barcelona",
        imageLink:
          "https://sportsincoming.com/wp-content/uploads/2023/05/paw01.jpg",
        type: "activities",
        description:
          "Just outside Barcelona, PortAventura Park delivers thrilling rides and themed attractions for a full-day adventure. Roller coasters and shows make it perfect for a break from urban exploring. It’s one of Spain’s top amusement parks.",
      },
      {
        title: "La Boqueria Market",
        city: "Barcelona",
        imageLink:
          "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blta1fde3e8f791cf05/6855cfb8ff047977b3a78d73/BCC-2025-EXPLORER-MERCAT-DE-LA-BOQUERIA-VISIT-MERCAT-DE-LA-BOQUERIA-HEADER_MOBILE.jpg?format=webp&quality=60&width=1440",
        type: "food",
        description:
          "La Boqueria is Barcelona’s famous food market, teeming with fresh produce, tapas stands, and local flavors. Sample jamón, seafood, and fresh juice as you wander vibrant stalls. It’s a delicious snapshot of Catalan cuisine.",
      },
    ],
  },
  {
    name: "Madrid",
    coords: [40.4168, -3.7038],
    description:
      "Madrid is a city of grand boulevards, historic plazas, and world-class museums. Wander the Prado, Reina Sofía, and Thyssen-Bornemisza for unforgettable art, or stroll through Retiro Park and the bustling Puerta del Sol. Tapas bars, rooftop terraces, and lively neighborhoods keep the city buzzing from morning to night.",
    events: [],
  },
  {
    name: "Granada",
    coords: [37.1773, -3.5986],
    description:
      "Granada captivates with its mix of Moorish history and Andalusian charm. The Alhambra palace and gardens overlook the Albaicín’s narrow, winding streets, offering breathtaking views. Sample local cuisine in traditional tapas bars and feel the city’s relaxed, timeless energy as the sun sets over the Sierra Nevada.",
    tentative: true,
    events: [],
  },
  {
    name: "Seville",
    coords: [37.3891, -5.9845],
    description:
      "Seville radiates warmth and color through its flamenco rhythms and historic streets. The Alcázar, Seville Cathedral, and Plaza de España showcase its rich architecture, while the Triana neighborhood and local tapas bars bring the city to life. Sunlit squares and lively nightlife make every moment unforgettable.",
    events: [],
  },
  {
    name: "Ronda",
    coords: [36.7423, -5.1663],
    description:
      "Ronda is perched dramatically above a deep gorge, offering one of Spain’s most scenic settings. Cross the Puente Nuevo for sweeping views, explore the historic old town, and visit the ancient bullring, Plaza de Toros. Its compact streets and stunning vistas make it perfect for a day of discovery and reflection.",
    events: [],
    tentative: true,
  },
  {
    name: "Cordoba",
    coords: [37.8882, -4.7794],
    description:
      "Córdoba blends Roman, Moorish, and Andalusian history in a mesmerizing cityscape. The Mezquita’s grand arches, the Alcázar de los Reyes Cristianos, and the charming Jewish Quarter showcase its heritage. Stroll fragrant patios, enjoy local cuisine, and feel the city’s serene yet vibrant atmosphere.",
    events: [],
  },
  {
    name: "Toledo",
    coords: [39.8628, -4.0273],
    description:
      "Toledo rises above the Tagus River with medieval charm and layered history. Explore the Alcázar, Toledo Cathedral, and winding streets of the old town, rich with Christian, Muslim, and Jewish heritage. Art, architecture, and artisan workshops make it a compact city full of surprises.",
    tentative: true,
    events: [],
  },
];
