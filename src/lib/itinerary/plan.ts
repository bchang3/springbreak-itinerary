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
    events: [
      {
        title: "Museo Nacional del Prado",
        city: "Madrid",
        imageLink: "https://media.cntraveler.com/photos/580775c2fefb7fe774d64246/16:9/w_2560,c_limit/GettyImages-104515838.jpg?mbid=social_retweet",
        type: "sightseeing",
        description:
          "The Prado is one of Europe’s premier art museums, home to works by Velázquez, Goya, and Bosch. The galleries are large but well-organized, making it easy to focus on highlights. Even a short visit leaves a strong impression.",
      },
      {
        title: "Palacio Real de Madrid",
        city: "Madrid",
        imageLink: "https://images.musement.com/cover/0003/11/royal-palace-of-madrid_header-210276.jpeg?w=1200&h=630&q=95&fit=crop",
        type: "sightseeing",
        description:
          "The Royal Palace showcases Madrid’s grandeur through massive halls, detailed ceilings, and formal gardens. It’s still used for state ceremonies, giving it a lived-in feel despite its scale. Views toward the city add to the experience.",
      },
      {
        title: "Real Jardín Botánico",
        city: "Madrid",
        imageLink: "https://d36tnp772eyphs.cloudfront.net/blogs/1/2020/03/Madrid-Botanic-Garden.jpg",
        type: "nature",
        description:
          "Located next to the Prado, the Royal Botanical Garden offers a quiet contrast to the city streets. Tree-lined paths and seasonal flowers make it ideal for a slow walk. It’s especially relaxing on a sunny afternoon.",
      },
      {
        title: "Estadio Santiago Bernabéu Tour",
        city: "Madrid",
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Estadio_Santiago_Bernab%C3%A9u_Madrid.jpg",
        type: "activities",
        description:
          "The Bernabéu tour gives behind-the-scenes access to one of football’s most famous stadiums. Walk through the stands, locker rooms, and trophy displays. It’s a must for sports fans and surprisingly engaging even for casual visitors.",
      },
      {
        title: "Parque del Buen Retiro",
        city: "Madrid",
        imageLink: "https://travel.usnews.com/images/Noppasin_Wongchumpark-outside.jpg",
        type: "nature",
        description:
          "Retiro Park is Madrid’s favorite green space, with wide paths, gardens, and a central lake. Rent a rowboat, relax on the grass, or walk past street performers. It’s an easy place to spend an unplanned afternoon.",
      },
      {
        title: "Go-Karting Experience",
        city: "Madrid",
        imageLink: "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2022/12/27165528/shutterstock_2171045113-1-1024x683.jpg",
        type: "activities",
        description:
          "Go-kart tracks around Madrid offer a high-energy break from sightseeing. Races are short, competitive, and easy to jump into. It’s a fun group activity that doesn’t require much planning.",
      },
      {
        title: "Golf in Madrid",
        city: "Madrid",
        imageLink: "https://www.teetimes.pt/slideshow/pictures/course/395/spain-golf-santander-img1.webp",
        type: "activities",
        description:
          "Golf venues around Madrid offer a relaxed, social activity with a unique twist. It’s less about competition and more about atmosphere. Great for a slower-paced afternoon with friends.",
      },
      {
        title: "Madrid Bike Tour",
        city: "Madrid",
        imageLink: "https://www.trixi.com/storage/2015/01/bike_tour_madrid_0010.jpg",
        type: "activities",
        description:
          "Bike tours are a fast way to see Madrid’s main neighborhoods and landmarks. Routes often pass Retiro, historic districts, and major plazas. It’s active without being exhausting.",
      },
      {
        title: "Tapas & Paella Cooking Class",
        city: "Madrid",
        imageLink: "https://wineofthemonthclub.com/cdn/shop/files/20240115234445-2023_0509_spanishtable_paellaparty_smaller.jpg?v=1726833472&width=1500",
        type: "food",
        description:
          "Hands-on cooking classes focus on classic Spanish dishes like paella and traditional tapas. You’ll cook, eat, and usually share wine with the group. It’s social, casual, and surprisingly fun.",
      },
      {
        title: "Mercado de San Miguel",
        city: "Madrid",
        imageLink: "https://assets2.devourtours.com/wp-content/uploads/mercado-san-miguel-interior.jpeg",
        type: "food",
        description:
          "This historic food hall is packed with tapas counters, wine stalls, and desserts. It’s best for grazing rather than full meals. The atmosphere stays lively well into the evening.",
      },
      {
        title: "Chocolatería San Ginés",
        city: "Madrid",
        imageLink: "https://www.rappler.com/tachyon/2025/10/sangines.png",
        type: "food",
        description:
          "San Ginés is famous for churros and thick hot chocolate, especially late at night. Lines move quickly, and the experience is fast and satisfying. It’s a classic Madrid ritual.",
      },
      {
        title: "Madrid Nightlife: Bars, Clubs & Live Shows",
        city: "Madrid",
        imageLink: "https://nightlifemadrid.com/wp-content/uploads/2020/05/Clubs-Madrid-Fucking-Monday.jpg",
        type: "nightlife",
        description:
          "Madrid’s nightlife starts late and rarely slows down before sunrise. From cocktail bars to live music and clubs, options are everywhere. The energy feels constant and unforced.",
      },
      {
        title: "Plaza de Cibeles & Plaza Mayor",
        city: "Madrid",
        imageLink: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/348000/348758-Plaza-De-Cibeles.jpg",
        type: "sightseeing",
        description:
          "These two plazas show different sides of Madrid, from grand civic architecture to historic public space. Both are easy to reach on foot. They’re especially atmospheric in the evening.",
      },
      {
        title: "Gran Vía",
        city: "Madrid",
        imageLink: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/26000/26515-Madrid.jpg",
        type: "sightseeing",
        description:
          "Gran Vía is Madrid’s main artery, lined with theaters, shops, and classic facades. It’s busy at all hours and well-lit at night. Walking it gives a good sense of the city’s scale and energy.",
      },
      {
        title: "Puerta del Sol",
        city: "Madrid",
        imageLink: "https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/madrid/puerta-del-sol-pano-s1276320760-c-ed-valery-bareta.jpg",
        type: "sightseeing",
        description:
          "Puerta del Sol marks the symbolic center of Spain. Crowds come and go constantly, making it feel alive at all times. It’s a common meeting point before heading out.",
      },
      {
        title: "Parque Warner Madrid",
        city: "Madrid",
        imageLink: "https://visitmadrid-files.s3.eu-west-1.amazonaws.com/files/styles/scale_webp_1280x720/public/2024-01/WarnerBros-Madrid.jpg?itok=Sc1azlMd",
        type: "activities",
        description:
          "Parque Warner offers roller coasters, shows, and themed zones just outside the city. It’s a full-day commitment but delivers high-energy fun. Best for groups wanting a break from urban exploring.",
      },
      {
        title: "All-Night Bar Hopping: Malasaña → Chueca → Gran Vía",
        city: "Madrid",
        imageLink: "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2022/01/07180116/6N0A5701.jpg",
        type: "nightlife",
        description:
          "This classic route moves from alternative bars to high-energy clubs as the night goes on. Neighborhoods blend together naturally, making it easy to keep going. Expect late starts and very late finishes.",
      },
    ],
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
