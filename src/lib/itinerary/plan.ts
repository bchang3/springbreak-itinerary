export interface DayPlan {
  date: Date;
  events: ItineraryEvent[][];
  nightEvents: ItineraryEvent[][];
}
export interface ItineraryEvent {
  event: CityEvent;
  start: Date;
  end: Date;
}
export interface Plan {
  days: DayPlan[];
}

export type EventType =
  | "nightlife"
  | "nature"
  | "food"
  | "activities"
  | "sightseeing"
  | "empty"
  | "train"
  | "plane";

export type CityType = "Barcelona" | "Madrid" | "Seville" | "Cordoba";
export interface CityEvent {
  title: string;
  city: CityType;
  type: EventType;
  imageLink: string;
  description: string;
}
export interface City {
  name: string;
  coords: [number, number];
  description: string;
  events: CityEvent[];
}

const sagradaFamilia: CityEvent = {
  title: "Sagrada Família",
  city: "Barcelona",
  imageLink:
    "https://cdn.britannica.com/15/194815-050-08B5E7D1/Nativity-facade-Sagrada-Familia-cathedral-Barcelona-Spain.jpg",
  type: "sightseeing",
  description:
    "Antoni Gaudí’s unfinished basilica is one of Barcelona’s most iconic landmarks, blending Gothic and Art Nouveau styles. Its soaring facades and stunning interior light make it a must‑see for any visitor. Book ahead to skip lines and catch the best views.",
};

const barcaGame: CityEvent = {
  title: "Camp Nou: Barcelona vs Seville",
  city: "Barcelona",
  imageLink:
    "https://images.unsplash.com/photo-1587368062478-e804f5e2a55a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcCUyMG5vdXxlbnwwfHwwfHx8MA%3D%3D",
  type: "activities",
  description:
    "Catch the electric atmosphere of a La Liga match at Camp Nou on March 15th, as Barcelona takes on Seville. The roar of tens of thousands of fans brings a thrilling energy unique to Spanish football. It’s an unforgettable cultural and sporting experience.",
};
const gothicQuarter: CityEvent = {
  title: "Gothic Quarter",
  city: "Barcelona",
  imageLink:
    "https://www.througheternity.com/upload/CONF83/20220223/barcelona_gothic_quarter_tour_3_1_-tSa-1200X630.png",
  type: "sightseeing",
  description:
    "Wander the maze of narrow streets in the historic Gothic Quarter, where medieval buildings hide lively plazas. Street performers, hidden cafes, and timeless architecture make every turn feel like discovery. It’s perfect for a relaxed afternoon of exploring.",
};
const placaReial: CityEvent = {
  title: "Plaça Reial",
  city: "Barcelona",
  imageLink:
    "https://www.bcn.travel/wp-content/uploads/Royal-Plaza-Barcelona.jpg",
  type: "nightlife",
  description:
    "This lively square near La Rambla is lined with palm trees, historic lampposts, and buzzing bars. It’s a popular spot to grab drinks, people-watch, and soak up Barcelona’s vibrant street life. Evening energy here sets the tone for a great night out.",
};
const costaBrava: CityEvent = {
  title: "Costa Brava",
  city: "Barcelona",
  imageLink:
    "https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/cataluna/palafrugell-girona-s144973225.jpg",
  type: "nature",
  description:
    "Just north of Barcelona, Costa Brava offers dramatic cliffs, hidden coves, and crystal-clear waters. Perfect for a day trip, you can hike scenic coastal trails or relax in charming seaside towns. The landscape feels like a breath of fresh Mediterranean air.",
};
const barceloneta: CityEvent = {
  title: "Barceloneta Beach",
  city: "Barcelona",
  imageLink:
    "https://barcelonahacks.com/wp-content/uploads/2025/06/barceloneta-beach-cover.jpg",
  type: "nature",
  description:
    "Barceloneta Beach is the heart of Barcelona’s seaside vibe, with wide sandy shores and lively promenade bars. Even in cooler months, it’s great for strolling and drinks with a view. Sunset here is one of the city’s most social daily rituals.",
};

const barcaClubs: CityEvent = {
  title: "Pacha, Opium & Shôko (Barcelona Beach Clubs)",
  city: "Barcelona",
  imageLink:
    "https://shoko.biz/cdn/shop/files/6_802bcb15-06c1-4782-81ca-6690381ff46d.jpg?v=1754413546&width=3840",
  type: "nightlife",
  description:
    "Barcelona’s beachfront clubs—Pacha, Opium, and Shôko—are some of the city’s most popular late-night spots. They combine DJs, dancing, and oceanfront views, with crowds that build after midnight and peak late. It’s a high-energy option that feels distinctly Barcelona.",
};

const barcelonaPickup: CityEvent = {
  title: "Pickup Soccer (optional)",
  city: "Barcelona",
  imageLink:
    "https://media.coliseum-online.com/2025/08/Coliseum-GSVA-News-Barcelona-receives-approval-to-open-stadium.webp",
  type: "activities",
  description:
    "Pickup soccer is easy to find in Barcelona, especially in parks, beaches, and small turf fields around the city. Games are informal and welcoming, with locals and travelers mixing in. It’s a fun, active way to break up sightseeing and experience the city like a local.",
};
const montjuicHill: CityEvent = {
  title: "Montjuïc Hill",
  city: "Barcelona",
  imageLink:
    "https://sitgesluxuryrentals.com/wp-content/uploads/2024/07/Template-Blog-Photo-SLR-5-e1731682149242.jpg",
  type: "nature",
  description:
    "Montjuïc Hill overlooks the city and harbor with parks, gardens, and historic sites to explore. Ride the cable car for panoramic views or visit the castle on top. It’s a calming outdoor escape with sunsets worth lingering for.",
};
const ciutadellaPark: CityEvent = {
  title: "Ciutadella Park",
  city: "Barcelona",
  imageLink:
    "https://cdn1.matadornetwork.com/blogs/1/2023/06/barcelona-park-gaudi-fountain.jpg",
  type: "nature",
  description:
    "Ciutadella Park is Barcelona’s green heart, filled with fountains, sculptures, and wide tree-lined paths. It’s perfect for a relaxed stroll, a picnic, or people-watching near the lake. You can rent a rowboat, visit the small zoo, or simply enjoy the open space away from the city bustle.",
};
const montserrat: CityEvent = {
  title: "Montserrat & Mountain Biking",
  city: "Barcelona",
  imageLink:
    "https://www.spain.info/.content/imagenes/cabeceras-grandes/cataluna/monasterio_montserrat_s_628801775.jpg",
  type: "nature",
  description:
    "Take a day trip to Montserrat for dramatic mountain scenery and spiritual atmosphere. The rugged terrain around the monastery is ideal for mountain biking and outdoor adventure. Trails range from easy to challenging, all with unforgettable views.",
};
const plazaCatalunya: CityEvent = {
  title: "Plaça de Catalunya",
  city: "Barcelona",
  imageLink:
    "https://www.barcelo.com/guia-turismo/wp-content/uploads/ok-plaza-de-catalunya.jpg",
  type: "sightseeing",
  description:
    "Plaça de Catalunya sits at the crossroads of Barcelona’s old city and modern avenues. It’s a natural meeting point, surrounded by shops, cafés, and constant movement. From here, it’s easy to head toward the Gothic Quarter, El Born, or down La Rambla.",
};

const flamencoBarca: CityEvent = {
  title: "Flamenco Show - Barcelona",
  city: "Barcelona",
  imageLink:
    "https://festivalboca.org/sites/FestivalBoca/cache/file/17F5946D-FCCA-45F9-B953346FE01F3DA7.jpg",
  type: "activities",
  description:
    "Experience the passion of flamenco with guitar, song, and dance at an intimate tablao. Barcelona offers a range of shows from traditional to contemporary. It’s a cultural highlight you’ll remember long after your trip.",
};
const jazzBarca: CityEvent = {
  title: "Jazz Clubs",
  city: "Barcelona",
  imageLink:
    "https://files.theproject.es/archivos/milano-jazz-club-barcelona-16329.jpg",
  type: "nightlife",
  description:
    "Barcelona’s jazz scene thrives in cozy clubs tucked into the old city and Eixample. Catch live sets from local and international musicians. Sip wine, relax, and enjoy world-class improvisation in a chilled atmosphere.",
};
const barcaRooftop: CityEvent = {
  title: "Barcelona Rooftop Bars",
  city: "Barcelona",
  imageLink: "https://media.timeout.com/images/105909905/image.jpg",
  type: "nightlife",
  description:
    "Rooftop bars across Barcelona serve up sunsets, skyline views, and craft cocktails. Whether in Eixample or near Plaça d’Espanya, the elevated vantage points are perfect for evening drinks. They’re ideal for starting a night of city exploration.",
};
const elBorn: CityEvent = {
  title: "El Born District",
  city: "Barcelona",
  imageLink:
    "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/348000/348352-La-Ribera.jpg",
  type: "nightlife",
  description:
    "El Born mixes history with trendy boutiques and buzzing cafes. Wander its narrow lanes, discover artisanal shops, and stop for tapas or drinks. It’s one of the city’s most dynamic and walkable neighborhoods.",
};
const beachVolleyball: CityEvent = {
  title: "Beach Volleyball at Barceloneta",
  city: "Barcelona",
  imageLink:
    "https://blog.apartmentbarcelona.com/wp-content/uploads/2023/06/beach-volleyball-6113245_1280.jpg",
  type: "activities",
  description:
    "Barceloneta’s public volleyball courts are active most mornings and easy to drop into. Games are casual and social, whether you’re joining an open match or just rallying with friends. It’s a quick way to get moving by the beach without committing to a full workout.",
};

const barcelonaShopping: CityEvent = {
  title: "Shopping in El Born & Passeig de Gràcia",
  city: "Barcelona",
  imageLink:
    "https://www.paseodegracia.com/wp-content/uploads/2011/07/CHANEL.jpg",
  type: "activities",
  description:
    "Shopping around El Born and Passeig de Gràcia mixes local boutiques with familiar brands. Passeig de Gràcia has flagship stores like Uniqlo, Zara, and H&M, while nearby areas offer streetwear and surf-style shops similar to PacSun. It’s easy to bounce between polished avenues and smaller side streets without committing to a full shopping day.",
};

const portAventura: CityEvent = {
  title: "PortAventura Park",
  city: "Barcelona",
  imageLink: "https://sportsincoming.com/wp-content/uploads/2023/05/paw01.jpg",
  type: "activities",
  description:
    "Just outside Barcelona, PortAventura Park delivers thrilling rides and themed attractions for a full-day adventure. Roller coasters and shows make it perfect for a break from urban exploring. It’s one of Spain’s top amusement parks.",
};
const portVell: CityEvent = {
  title: "Sunset Drinks at Port Vell",
  city: "Barcelona",
  imageLink:
    "https://www.barcelo.com/guia-turismo/wp-content/uploads/ok-port-vell.jpg",
  type: "sightseeing",
  description:
    "Port Vell’s marina area blends scenic waterfront promenades with lively restaurants and bars. Watch boats bobbing against the backdrop of the city at sunset. It’s a great place for a leisurely stroll or seaside drink.",
};
const laBoqueria: CityEvent = {
  title: "La Boqueria Market",
  city: "Barcelona",
  imageLink:
    "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blta1fde3e8f791cf05/6855cfb8ff047977b3a78d73/BCC-2025-EXPLORER-MERCAT-DE-LA-BOQUERIA-VISIT-MERCAT-DE-LA-BOQUERIA-HEADER_MOBILE.jpg?format=webp&quality=60&width=1440",
  type: "food",
  description:
    "La Boqueria is Barcelona’s famous food market, teeming with fresh produce, tapas stands, and local flavors. Sample jamón, seafood, and fresh juice as you wander vibrant stalls. It’s a delicious snapshot of Catalan cuisine.",
};

const delPradoMuseum: CityEvent = {
  title: "Museo Nacional del Prado",
  city: "Madrid",
  imageLink:
    "https://media.cntraveler.com/photos/580775c2fefb7fe774d64246/16:9/w_2560,c_limit/GettyImages-104515838.jpg?mbid=social_retweet",
  type: "sightseeing",
  description:
    "The Prado is one of Europe’s premier art museums, home to works by Velázquez, Goya, and Bosch. The galleries are large but well-organized, making it easy to focus on highlights. Even a short visit leaves a strong impression.",
};

const palacioMadrid: CityEvent = {
  title: "Palacio Real de Madrid",
  city: "Madrid",
  imageLink:
    "https://images.musement.com/cover/0003/11/royal-palace-of-madrid_header-210276.jpeg?w=1200&h=630&q=95&fit=crop",
  type: "sightseeing",
  description:
    "The Royal Palace showcases Madrid’s grandeur through massive halls, detailed ceilings, and formal gardens. It’s still used for state ceremonies, giving it a lived-in feel despite its scale. Views toward the city add to the experience.",
};
const madridBotanico: CityEvent = {
  title: "Real Jardín Botánico",
  city: "Madrid",
  imageLink:
    "https://d36tnp772eyphs.cloudfront.net/blogs/1/2020/03/Madrid-Botanic-Garden.jpg",
  type: "nature",
  description:
    "Located next to the Prado, the Royal Botanical Garden offers a quiet contrast to the city streets. Tree-lined paths and seasonal flowers make it ideal for a slow walk. It’s especially relaxing on a sunny afternoon.",
};

const bernabeu: CityEvent = {
  title: "Estadio Santiago Bernabéu Tour (optional)",
  city: "Madrid",
  imageLink:
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Estadio_Santiago_Bernab%C3%A9u_Madrid.jpg",
  type: "activities",
  description:
    "The Bernabéu tour gives behind-the-scenes access to one of football’s most famous stadiums. Walk through the stands, locker rooms, and trophy displays. It’s a must for sports fans and surprisingly engaging even for casual visitors.",
};
const buenRetiroPark: CityEvent = {
  title: "Parque del Buen Retiro",
  city: "Madrid",
  imageLink:
    "https://travel.usnews.com/images/Noppasin_Wongchumpark-outside.jpg",
  type: "nature",
  description:
    "Retiro Park is Madrid’s favorite green space, with wide paths, gardens, and a central lake. Rent a rowboat, relax on the grass, or walk past street performers. It’s an easy place to spend an unplanned afternoon.",
};
const gokarting: CityEvent = {
  title: "Go-Karting",
  city: "Madrid",
  imageLink:
    "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2022/12/27165528/shutterstock_2171045113-1-1024x683.jpg",
  type: "activities",
  description:
    "Go-kart tracks around Madrid offer a high-energy break from sightseeing. Races are short, competitive, and easy to jump into. It’s a fun group activity that doesn’t require much planning.",
};
const madridSportsPark: CityEvent = {
  title: "Madrid Río Sports & Activity Zone",
  city: "Madrid",
  imageLink:
    "https://www.gestilar.com/uploads/Blog/BLOG%202020/200528_RC7_13_CONJUNTO_NOCHE_4000p.jpg",
  type: "activities",
  description:
    "Madrid Río is a huge riverside park with open paths, courts, and activity zones stretching along the river. You can bike, walk, play tennis, kick a ball around, or just hang out by the water. It’s easy to drop in for something active without committing to a full plan.",
};
const goldMadrid: CityEvent = {
  title: "Golf in Madrid",
  city: "Madrid",
  imageLink:
    "https://www.teetimes.pt/slideshow/pictures/course/395/spain-golf-santander-img1.webp",
  type: "activities",
  description:
    "Golf venues around Madrid offer a relaxed, social activity with a unique twist. It’s less about competition and more about atmosphere. Great for a slower-paced afternoon with friends.",
};
const madridBikeTour: CityEvent = {
  title: "Madrid Bike Tour",
  city: "Madrid",
  imageLink: "https://www.trixi.com/storage/2015/01/bike_tour_madrid_0010.jpg",
  type: "activities",
  description:
    "Bike tours are a fast way to see Madrid’s main neighborhoods and landmarks. Routes often pass Retiro, historic districts, and major plazas. It’s active without being exhausting.",
};
const cookingClass: CityEvent = {
  title: "Tapas & Paella Cooking Class",
  city: "Madrid",
  imageLink:
    "https://wineofthemonthclub.com/cdn/shop/files/20240115234445-2023_0509_spanishtable_paellaparty_smaller.jpg?v=1726833472&width=1500",
  type: "food",
  description:
    "Hands-on cooking classes focus on classic Spanish dishes like paella and traditional tapas. You’ll cook, eat, and usually share wine with the group. It’s social, casual, and surprisingly fun.",
};
const mercadoSanMiguel: CityEvent = {
  title: "Mercado de San Miguel",
  city: "Madrid",
  imageLink:
    "https://assets2.devourtours.com/wp-content/uploads/mercado-san-miguel-interior.jpeg",
  type: "food",
  description:
    "This historic food hall is packed with tapas counters, wine stalls, and desserts. It’s best for grazing rather than full meals. The atmosphere stays lively well into the evening.",
};
const sanGinesChurros: CityEvent = {
  title: "Chocolatería San Ginés",
  city: "Madrid",
  imageLink: "https://www.rappler.com/tachyon/2025/10/sangines.png",
  type: "food",
  description:
    "San Ginés is famous for churros and thick hot chocolate, especially late at night. Lines move quickly, and the experience is fast and satisfying. It’s a classic Madrid ritual.",
};

const madridClubs: CityEvent = {
  title: "Madrid Nightlife: Bars, Clubs & Live Shows",
  city: "Madrid",
  imageLink:
    "https://nightlifemadrid.com/wp-content/uploads/2020/05/Clubs-Madrid-Fucking-Monday.jpg",
  type: "nightlife",
  description:
    "Madrid’s nightlife starts late and rarely slows down before sunrise. From cocktail bars to live music and clubs, options are everywhere. The energy feels constant and unforced.",
};
const plazaCibelesAndMayor: CityEvent = {
  title: "Plaza de Cibeles & Plaza Mayor",
  city: "Madrid",
  imageLink:
    "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/348000/348758-Plaza-De-Cibeles.jpg",
  type: "sightseeing",
  description:
    "These two plazas show different sides of Madrid, from grand civic architecture to historic public space. Both are easy to reach on foot. They’re especially atmospheric in the evening.",
};
const granVia: CityEvent = {
  title: "Gran Vía",
  city: "Madrid",
  imageLink:
    "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/26000/26515-Madrid.jpg",
  type: "sightseeing",
  description:
    "Gran Vía is Madrid’s main artery, lined with theaters, shops, and classic facades. It’s busy at all hours and well-lit at night. Walking it gives a good sense of the city’s scale and energy.",
};

const madridZoo: CityEvent = {
  title: "Zoo Aquarium de Madrid",
  city: "Madrid",
  imageLink:
    "https://www.zoomadrid.com/content/dam/zoo/images/animals/panda-rojo/Panda-rojo-Zoo-Madrid-main.jpg",
  type: "activities",
  description:
    "Explore a world of wildlife and marine life at Zoo Aquarium de Madrid, where animals from five continents live across varied habitats. You can see giants like giraffes, elephants, lions, and gorillas alongside unique species such as giant pandas, koalas, and red pandas, as well as underwater life like sharks, stingrays, and colorful reef fish in the aquarium. It’s a relaxed, engaging way to see a huge range of creatures in one place — perfect for animal lovers and curious travelers alike.",
};

const puertaDelSol: CityEvent = {
  title: "Puerta del Sol",
  city: "Madrid",
  imageLink:
    "https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/madrid/puerta-del-sol-pano-s1276320760-c-ed-valery-bareta.jpg",
  type: "sightseeing",
  description:
    "Puerta del Sol marks the symbolic center of Spain. Crowds come and go constantly, making it feel alive at all times. It’s a common meeting point before heading out.",
};
const warnerBrosPark: CityEvent = {
  title: "Parque Warner Madrid",
  city: "Madrid",
  imageLink:
    "https://visitmadrid-files.s3.eu-west-1.amazonaws.com/files/styles/scale_webp_1280x720/public/2024-01/WarnerBros-Madrid.jpg?itok=Sc1azlMd",
  type: "activities",
  description:
    "Parque Warner offers roller coasters, shows, and themed zones just outside the city. It’s a full-day commitment but delivers high-energy fun. Best for groups wanting a break from urban exploring.",
};
const madridBarHopping: CityEvent = {
  title: "Bar Hopping: Malasaña → Chueca → Gran Vía",
  city: "Madrid",
  imageLink:
    "https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2022/01/07180116/6N0A5701.jpg",
  type: "nightlife",
  description:
    "This classic route moves from alternative bars to high-energy clubs as the night goes on. Neighborhoods blend together naturally, making it easy to keep going. Expect late starts and very late finishes.",
};

const madridShopping: CityEvent = {
  title: "Shopping in Gran Vía & Salamanca District",
  city: "Madrid",
  imageLink:
    "https://madridpourvous.com/wp-content/uploads/2019/04/resized_Tienda-Gran-V%C3%ADa-Primark1.jpg",
  type: "activities",
  description:
    "Shopping in Madrid centers around Gran Vía and the nearby Salamanca District. Gran Vía has major international brands like Zara, Uniqlo, and flagship fashion stores, while Salamanca leans more upscale and polished. It’s easy to browse casually and mix shopping with cafés and food stops.",
};

const teatroKapital: CityEvent = {
  title: "Teatro Kapital",
  city: "Madrid",
  imageLink:
    "https://teatrokapital.com/wp-content/uploads/2023/06/0V7A5026-scaled.jpg",
  type: "nightlife",
  description:
    "Teatro Kapital is one of Madrid’s most famous nightlife destinations, known for its seven floors of music and themed spaces. Each level offers a different vibe, from dance floors and lounges to chill bars, so the party never feels static. It’s a go-to spot for big nights with friends and a true taste of Madrid’s late-night energy.",
};

const alcazarSeville: CityEvent = {
  title: "Real Alcázar of Seville",
  city: "Seville",
  imageLink:
    "https://d2i7eq829tbbje.cloudfront.net/webp/medium/alcazar11_P_3891_86a9edf2-5941-4b6a-8f2f-6d7623f24c0d",
  type: "sightseeing",
  description:
    "The Real Alcázar is a royal palace layered with Moorish and Christian design, known for detailed tilework and calm gardens. Wandering through the courtyards feels unhurried and immersive. It’s one of Seville’s most rewarding stops.",
};
const sevilleCathedralAndLaGiralda: CityEvent = {
  title: "Seville Cathedral & La Giralda",
  city: "Seville",
  imageLink:
    "https://cliomusetours.com/wp-content/uploads/2020/07/henrique-ferreira-62QRdDoe44M-unsplash-1.jpg",
  type: "sightseeing",
  description:
    "Seville Cathedral is massive and surprisingly atmospheric, with Columbus’s tomb inside. La Giralda’s ramped climb leads to wide views over the city. It’s an easy landmark to build the day around.",
};
const plazaEspanaSeville: CityEvent = {
  title: "Plaza de España",
  city: "Seville",
  imageLink:
    "https://www.turismosevilla.org/sites/default/files/2023-07/plaza-espaa-sevilla-espaa_52618454587_o_0.jpg",
  type: "sightseeing",
  description:
    "Plaza de España is an open, curved plaza with canals, bridges, and tiled alcoves representing Spain’s regions. It’s spacious and relaxed despite its scale. Late afternoon light works best here.",
};
const santaCruzSeville: CityEvent = {
  title: "Barrio Santa Cruz",
  city: "Seville",
  imageLink:
    "https://travel.usnews.com/images/Barrio-de-Santa-Cruz-Credit_Carlos_Koblischek-Getty_Images.jpg",
  type: "sightseeing",
  description:
    "Santa Cruz is a dense web of narrow streets, small plazas, and orange trees. It’s best explored slowly without a plan. The neighborhood feels especially alive in the early evening.",
};
const triannaSeville: CityEvent = {
  title: "Triana Neighborhood",
  city: "Seville",
  imageLink:
    "https://www.mediastorehouse.com/p/251/sunset-view-triana-neighbourhood-guadalquivir-23901109.jpg.webp",
  type: "sightseeing",
  description:
    "Across the river, Triana offers a more local feel with ceramic shops, food spots, and relaxed bars. The river views back toward the old city are a highlight. It’s a good area for sunset walks and dinner.",
};
const mariaLusiaSeville: CityEvent = {
  title: "Parque de María Luisa",
  city: "Seville",
  imageLink:
    "https://sevillasecreta.co/wp-content/uploads/2020/06/shutterstock_1324665797-1-1024x651.jpg",
  type: "nature",
  description:
    "This large park next to Plaza de España provides shade, fountains, and quiet paths. It’s ideal for slowing the pace between sightseeing stops. Easy to enter and exit without planning.",
};
const guadalquivirRiver: CityEvent = {
  title: "Guadalquivir River Walk & Cruise",
  city: "Seville",
  imageLink:
    "https://mediaim.expedia.com/localexpert/367984/9abefdff-1cf1-48af-9814-4a2626862cc2.jpg",
  type: "nature",
  description:
    "Walking or cruising along the Guadalquivir River is flat, scenic, and especially good near sunset. Bridges and historic buildings line the water, giving great views from either perspective. It’s a relaxed way to shift from daytime sightseeing into evening plans.",
};

const metropolParasol: CityEvent = {
  title: "Metropol Parasol (Setas de Sevilla)",
  city: "Seville",
  imageLink:
    "https://arquitecturaviva.com/assets/uploads/obras/38979/av_imagen_vertical.webp?h=056c8ece",
  type: "nightlife",
  description:
    "The Setas’ rooftop walkway offers wide views over Seville and is popular for sunset drinks. The structure feels modern against the historic city. It’s an easy pre-dinner stop.",
};

const tapasSeville: CityEvent = {
  title: "Traditional Tapas Crawl",
  city: "Seville",
  imageLink:
    "https://www.thewanderinghedonist.com/wp-content/uploads/2022/02/FeatureTapasTour.jpg",
  type: "food",
  description:
    "Seville is ideal for bar-hopping tapas rather than long meals. Ordering a few dishes and moving on is part of the rhythm. The experience feels social and low-pressure.",
};

const flamencoSeville: CityEvent = {
  title: "Flamenco Show - Seville",
  city: "Seville",
  imageLink: "https://notjustatourist.com/wp-content/uploads/2015/08/Kati2.jpg",
  type: "nightlife",
  description:
    "Flamenco in Seville is intense, close-up, and emotional. Performances are usually compact and high-energy. It’s an easy cultural add-on to an evening out.",
};

const alamedaHercules: CityEvent = {
  title: "Late-Night Bars in Alameda de Hércules",
  city: "Seville",
  imageLink:
    "https://static01.nyt.com/images/2017/05/07/travel/07HEADSUP1/07HEADSUP1-superJumbo.jpg",
  type: "nightlife",
  description:
    "Alameda de Hércules is Seville’s late-night hub, with open plazas and bars that stay busy well past midnight. Spots like **Antique Theatro**, **Uthopia**, and **Fun Club** draw mixed crowds. The vibe is social rather than club-heavy.",
};

const terrazaBar: CityEvent = {
  title: "Terraza EME Rooftop Bar",
  city: "Seville",
  imageLink:
    "https://images.apirocket.io/images/6vkd6ta3/Galleries/AJsFO-HStP/IMG4525.jpg?w=1200&h=800&fit=cover&format=auto",
  type: "nightlife",
  description:
    "This rooftop bar offers close-up views of the cathedral and a refined but relaxed setting. It’s popular for sunset cocktails. Best treated as a short stop before heading elsewhere.",
};

const salaCosmos: CityEvent = {
  title: "Sala Cosmos",
  city: "Seville",
  imageLink:
    "https://www.spain-nightlife.es/wp-content/uploads/2019/07/sala-kosmos.jpg",
  type: "nightlife",
  description:
    "Sala Cosmos is a popular nightclub in Seville known for its energetic crowd and mix of music styles, from house to reggaeton. It’s a go-to spot for dancing late into the night and draws a young, social crowd. The atmosphere stays lively well past midnight, making it a great choice for a big night out.",
};

const mezquitaCathedral: CityEvent = {
  title: "Mezquita–Catedral de Córdoba",
  city: "Cordoba",
  imageLink:
    "https://images.squarespace-cdn.com/content/v1/5c92008192441b7d4d98100a/8e794992-eae6-4cd2-bb57-7f41ca1deab6/L1010632.jpg",
  type: "sightseeing",
  description:
    "The Mezquita–Catedral is Córdoba’s defining landmark, known for its rows of red-and-white arches and layered history. Walking through it feels immersive and slightly surreal. Even a short visit leaves a lasting impression.",
};
const jewishQuarter: CityEvent = {
  title: "La Judería (Jewish Quarter)",
  city: "Cordoba",
  imageLink:
    "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/345000/345199-Jewish-Quarter.jpg",
  type: "sightseeing",
  description:
    "The Jewish Quarter is a compact maze of narrow streets and whitewashed buildings just outside the Mezquita. It’s easy to explore without a plan. The area feels calm and atmospheric, especially in the afternoon.",
};
const cordobaBridge: CityEvent = {
  title: "Puente Romano de Córdoba",
  city: "Cordoba",
  imageLink:
    "https://tocordoba.com/wp-content/uploads/2021/09/puente-romano-1024x640.jpg",
  type: "sightseeing",
  description:
    "The Roman Bridge stretches across the Guadalquivir River and offers clear views back toward the old city. It’s an easy walk from the historic center. Sunset adds a little extra atmosphere if timing works.",
};
const cordobaFortress: CityEvent = {
  title: "Alcázar de los Reyes Cristianos",
  city: "Cordoba",
  imageLink:
    "https://www.espanaguide.com/images/cordoba/alcazar/alcazar-de-los-reyes-cristianos-cordoba-mobile.jpg",
  type: "sightseeing",
  description:
    "This historic fortress features stone towers and landscaped gardens. It’s less crowded than the Mezquita and offers good city views. Worth visiting if your stopover allows extra time.",
};
const cordobaFood: CityEvent = {
  title: "Traditional Córdoba Cuisine Stop",
  city: "Cordoba",
  imageLink:
    "https://www.cnature.es/wp-content/uploads/2020/08/salmorejo-tradicional.jpg",
  type: "food",
  description:
    "A quick stop for local dishes like salmorejo or flamenquín adds flavor without slowing your schedule. Many casual spots are clustered near the historic center. Ideal for a short, efficient break.",
};

const barcelonaBrunch1: CityEvent = {
  title: "Brunch in Barcelona",
  city: "Barcelona",
  imageLink: "https://media.timeout.com/images/105994392/image.jpg",
  type: "food",
  description:
    "Brunch in Barcelona blends laid-back mornings with creative flavors, from classic eggs and avocado to Mediterranean-inspired plates. Many cafés around El Born, Gràcia, and the beach offer relaxed outdoor seating perfect for people-watching. It’s a great way to ease into the day before exploring or heading to the beach.",
};

const barcelonaBrunch2: CityEvent = {
  title: "Brunch in Barcelona",
  city: "Barcelona",
  imageLink: "https://media.timeout.com/images/105994392/image.jpg",
  type: "food",
  description:
    "Brunch in Barcelona blends laid-back mornings with creative flavors, from classic eggs and avocado to Mediterranean-inspired plates. Many cafés around El Born, Gràcia, and the beach offer relaxed outdoor seating perfect for people-watching. It’s a great way to ease into the day before exploring or heading to the beach.",
};

const barcaMontserratBus: CityEvent = {
  title: "Bus from Barcelona - Montserrat",
  city: "Barcelona",
  imageLink:
    "https://cdn-imgix.headout.com/media/images/9e42c0a5261b793f42afd9d95ea50e94-Buses-from-Barcelona-to-Montserrat.jpg?auto=format&q=90&crop=faces&fit=crop",
  type: "train",
  description: "Take a bus from Barcelona to Montserrat (~2 hours)",
};

const montserratBarcaBus: CityEvent = {
  title: "Bus from Montserrat - Barcelona",
  city: "Barcelona",
  imageLink:
    "https://cdn-imgix.headout.com/media/images/9e42c0a5261b793f42afd9d95ea50e94-Buses-from-Barcelona-to-Montserrat.jpg?auto=format&q=90&crop=faces&fit=crop",
  type: "train",
  description: "Take a bus from Barcelona to Montserrat (~2 hours)",
};
const barcaCostaBravaBus: CityEvent = {
  title: "Bus from Barcelona - Costa Brava",
  city: "Barcelona",
  imageLink:
    "https://offloadmedia.feverup.com/barcelonasecreta.com/wp-content/uploads/2025/08/07113457/bus_de_barcelona_a_costa_brava-min-2.jpg",
  type: "train",
  description: "Take a bus from Barcelona to Costa Brava (~2 hours)",
};

const costaBravaBarcaBus: CityEvent = {
  title: "Bus from Costa Brava - Barcelona",
  city: "Barcelona",
  imageLink:
    "https://offloadmedia.feverup.com/barcelonasecreta.com/wp-content/uploads/2025/08/07113457/bus_de_barcelona_a_costa_brava-min-2.jpg",
  type: "train",
  description: "Take a bus from Costa Brava to Barcelona (~2 hours)",
};
const madridBarcaTrain: CityEvent = {
  title: "Train from Barcelona - Madrid",
  city: "Barcelona",
  imageLink:
    "https://media.cntraveler.com/photos/68ac749c71f7633489ed72c8/16:9/w_2560%2Cc_limit/082525-Al%2520Andalus-PR-Global-Al%2520Andalus%2520-%2520Olivos%2520en%2520Linares%252002.jpg",
  type: "train",
  description: "Travel from Barcelona to Madrid (~ 3 hours)",
};

const madridCordobaTrain: CityEvent = {
  title: "Train from Madrid - Cordoba",
  city: "Barcelona",
  imageLink:
    "https://media.cntraveler.com/photos/68ac749c71f7633489ed72c8/16:9/w_2560%2Cc_limit/082525-Al%2520Andalus-PR-Global-Al%2520Andalus%2520-%2520Olivos%2520en%2520Linares%252002.jpg",
  type: "train",
  description: "Travel from Madrid to Cordoba (~ 2 hours)",
};

const cordobaSevilleTrain: CityEvent = {
  title: "Train from Cordoba - Seville",
  city: "Barcelona",
  imageLink:
    "https://media.cntraveler.com/photos/68ac749c71f7633489ed72c8/16:9/w_2560%2Cc_limit/082525-Al%2520Andalus-PR-Global-Al%2520Andalus%2520-%2520Olivos%2520en%2520Linares%252002.jpg",
  type: "train",
  description: "Travel from Cordoba to Seville (~ 1 hours)",
};

const chicagoBarcelonaPlane1: CityEvent = {
  title: "Plane from Chicago - Barcelona",
  city: "Barcelona",
  imageLink:
    "https://www.travelandleisure.com/thmb/AOYoBM7-dy8sZIeKoKUPI-EeTfk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-airplane-landing-spain-SPANISHAIRLINE0625-a8580b3b8296431ea884699c76e1becf.jpg",
  type: "plane",
  description: "Travel from Chicago to Barcelona (~ 12 hours, 1 stop)",
};

const chicagoBarcelonaPlane2: CityEvent = {
  title: "Plane from Chicago - Barcelona",
  city: "Barcelona",
  imageLink:
    "https://www.travelandleisure.com/thmb/AOYoBM7-dy8sZIeKoKUPI-EeTfk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-airplane-landing-spain-SPANISHAIRLINE0625-a8580b3b8296431ea884699c76e1becf.jpg",
  type: "plane",
  description: "Travel from Chicago to Barcelona (~ 12 hours, 1 stop)",
};

const madridChicagoPlane: CityEvent = {
  title: "Plane from Madrid - Chicago",
  city: "Madrid",
  imageLink:
    "https://www.travelandleisure.com/thmb/AOYoBM7-dy8sZIeKoKUPI-EeTfk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-airplane-landing-spain-SPANISHAIRLINE0625-a8580b3b8296431ea884699c76e1becf.jpg",
  type: "plane",
  description: "Travel from Chicago to Barcelona (~ 12 hours, 1 stop)",
};

const lastDayPadding: CityEvent = {
  title: "Padding",
  city: "Madrid",
  imageLink:
    "https://www.travelandleisure.com/thmb/AOYoBM7-dy8sZIeKoKUPI-EeTfk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-airplane-landing-spain-SPANISHAIRLINE0625-a8580b3b8296431ea884699c76e1becf.jpg",
  type: "empty",
  description: "Travel from Chicago to Barcelona (~ 12 hours, 1 stop)",
};

export const cities: City[] = [
  {
    name: "Barcelona",
    coords: [41.3851, 2.1734],
    description:
      "Barcelona bursts with energy from the winding Gothic Quarter to the sun-soaked beaches of Barceloneta. Gaudí’s Sagrada Família and Park Güell offer surreal architecture, while La Rambla and Mercat de Sant Josep dazzle the senses. By day, explore art-filled neighborhoods and taste local tapas; by night, the city pulses with music and vibrant nightlife.",
    events: [
      sagradaFamilia,
      barcaGame,
      gothicQuarter,
      placaReial,
      costaBrava,
      barceloneta,
      montjuicHill,
      ciutadellaPark,
      montserrat,
      flamencoBarca,
      jazzBarca,
      barcaRooftop,
      elBorn,
      portAventura,
      portVell,
      laBoqueria,
    ],
  },
  {
    name: "Madrid",
    coords: [40.4168, -3.7038],
    description:
      "Madrid is a city of grand boulevards, historic plazas, and world-class museums. Wander the Prado, Reina Sofía, and Thyssen-Bornemisza for unforgettable art, or stroll through Retiro Park and the bustling Puerta del Sol. Tapas bars, rooftop terraces, and lively neighborhoods keep the city buzzing from morning to night.",
    events: [
      delPradoMuseum,
      palacioMadrid,
      madridBotanico,
      bernabeu,
      buenRetiroPark,
      gokarting,
      goldMadrid,
      madridBikeTour,
      cookingClass,
      mercadoSanMiguel,
      sanGinesChurros,
      madridClubs,
      plazaCibelesAndMayor,
      granVia,
      puertaDelSol,
      warnerBrosPark,
      madridBarHopping,
      teatroKapital,
    ],
  },
  {
    name: "Seville",
    coords: [37.3891, -5.9845],
    description:
      "Seville radiates warmth and color through its flamenco rhythms and historic streets. The Alcázar, Seville Cathedral, and Plaza de España showcase its rich architecture, while the Triana neighborhood and local tapas bars bring the city to life. Sunlit squares and lively nightlife make every moment unforgettable.",
    events: [
      alcazarSeville,
      sevilleCathedralAndLaGiralda,
      plazaEspanaSeville,
      santaCruzSeville,
      triannaSeville,
      mariaLusiaSeville,
      guadalquivirRiver,
      metropolParasol,
      tapasSeville,
      flamencoSeville,
      alamedaHercules,
      terrazaBar,
      salaCosmos,
    ],
  },
  {
    name: "Cordoba",
    coords: [37.8882, -4.7794],
    description:
      "Córdoba blends Roman, Moorish, and Andalusian history in a mesmerizing cityscape. The Mezquita’s grand arches, the Alcázar de los Reyes Cristianos, and the charming Jewish Quarter showcase its heritage. Stroll fragrant patios, enjoy local cuisine, and feel the city’s serene yet vibrant atmosphere.",
    events: [
      mezquitaCathedral,
      jewishQuarter,
      cordobaBridge,
      cordobaFortress,
      cordobaFood,
    ],
  },
];
// V1
export const plan_v1: Plan = {
  days: [
    {
      date: new Date(Date.UTC(2026, 2, 13)),
      events: [
        [
          {
            event: chicagoBarcelonaPlane1,
            start: new Date(Date.UTC(2026, 2, 13, 23, 35)),
            end: new Date(Date.UTC(2026, 2, 13, 23, 59)),
          },
        ],
      ],
      nightEvents: [],
    },
    {
      date: new Date(Date.UTC(2026, 2, 14)),
      events: [
        [
          {
            event: chicagoBarcelonaPlane2,
            start: new Date(Date.UTC(2026, 2, 14, 0)),
            end: new Date(Date.UTC(2026, 2, 14, 17, 45)),
          },
        ],
        [
          {
            event: portVell,
            start: new Date(Date.UTC(2026, 2, 14, 18)),
            end: new Date(Date.UTC(2026, 2, 14, 19)),
          },
        ],
        [
          {
            event: barceloneta,
            start: new Date(Date.UTC(2026, 2, 14, 19)),
            end: new Date(Date.UTC(2026, 2, 14, 20)),
          },
        ],
        [
          {
            event: montjuicHill,
            start: new Date(Date.UTC(2026, 2, 14, 20)),
            end: new Date(Date.UTC(2026, 2, 14, 21)),
          },
        ],
      ],
      nightEvents: [
        [
          {
            event: placaReial,
            start: new Date(Date.UTC(2026, 2, 14, 22)),
            end: new Date(Date.UTC(2026, 2, 15)),
          },
        ],
      ],
    },
    {
      date: new Date(Date.UTC(2026, 2, 15)),
      events: [
        [
          {
            event: sagradaFamilia,
            start: new Date(Date.UTC(2026, 2, 15, 10)),
            end: new Date(Date.UTC(2026, 2, 15, 11, 30)),
          },
          {
            event: barcelonaShopping,
            start: new Date(Date.UTC(2026, 2, 15, 10)),
            end: new Date(Date.UTC(2026, 2, 15, 11, 30)),
          },
        ],
        [
          {
            event: plazaCatalunya,
            start: new Date(Date.UTC(2026, 2, 15, 13, 30)),
            end: new Date(Date.UTC(2026, 2, 15, 14)),
          },
          {
            event: beachVolleyball,
            start: new Date(Date.UTC(2026, 2, 15, 13, 30)),
            end: new Date(Date.UTC(2026, 2, 15, 14)),
          },
        ],
        [
          {
            event: gothicQuarter,
            start: new Date(Date.UTC(2026, 2, 15, 14)),
            end: new Date(Date.UTC(2026, 2, 15, 15, 30)),
          },
          {
            event: beachVolleyball,
            start: new Date(Date.UTC(2026, 2, 15, 14)),
            end: new Date(Date.UTC(2026, 2, 15, 15, 30)),
          },
        ],
        [
          {
            event: elBorn,
            start: new Date(Date.UTC(2026, 2, 15, 15)),
            end: new Date(Date.UTC(2026, 2, 15, 15, 30)),
          },
          {
            event: beachVolleyball,
            start: new Date(Date.UTC(2026, 2, 15, 15)),
            end: new Date(Date.UTC(2026, 2, 15, 15, 30)),
          },
        ],
        [
          {
            event: ciutadellaPark,
            start: new Date(Date.UTC(2026, 2, 15, 15, 30)),
            end: new Date(Date.UTC(2026, 2, 15, 17)),
          },
        ],
        [
          {
            event: laBoqueria,
            start: new Date(Date.UTC(2026, 2, 15, 17)),
            end: new Date(Date.UTC(2026, 2, 15, 18)),
          },
        ],
        [
          {
            event: barcaGame,
            start: new Date(Date.UTC(2026, 2, 15, 21)),
            end: new Date(Date.UTC(2026, 2, 15, 23)),
          },
        ],
      ],
      nightEvents: [
        [
          {
            event: barcaClubs,
            start: new Date(Date.UTC(2026, 2, 16)),
            end: new Date(Date.UTC(2026, 2, 16, 2)),
          },
        ],
      ],
    },
    {
      date: new Date(Date.UTC(2026, 2, 16)),
      events: [
        [
          {
            event: barcelonaPickup,
            start: new Date(Date.UTC(2026, 2, 16, 8)),
            end: new Date(Date.UTC(2026, 2, 16, 10)),
          },
        ],
        [
          {
            event: barcelonaBrunch1,
            start: new Date(Date.UTC(2026, 2, 16, 10)),
            end: new Date(Date.UTC(2026, 2, 16, 12)),
          },
        ],
        [
          {
            event: madridBarcaTrain,
            start: new Date(Date.UTC(2026, 2, 16, 12, 30)),
            end: new Date(Date.UTC(2026, 2, 16, 15, 30)),
          },
        ],
        [
          {
            event: buenRetiroPark,
            start: new Date(Date.UTC(2026, 2, 16, 16, 30)),
            end: new Date(Date.UTC(2026, 2, 16, 17, 45)),
          },
        ],
        [
          {
            event: puertaDelSol,
            start: new Date(Date.UTC(2026, 2, 16, 17, 45)),
            end: new Date(Date.UTC(2026, 2, 16, 18)),
          },
          {
            event: madridBikeTour,
            start: new Date(Date.UTC(2026, 2, 16, 17, 45)),
            end: new Date(Date.UTC(2026, 2, 16, 18)),
          },
        ],
        [
          {
            event: plazaCibelesAndMayor,
            start: new Date(Date.UTC(2026, 2, 16, 19, 30)),
            end: new Date(Date.UTC(2026, 2, 16, 20)),
          },
          {
            event: madridBikeTour,
            start: new Date(Date.UTC(2026, 2, 16, 19, 30)),
            end: new Date(Date.UTC(2026, 2, 16, 20)),
          },
        ],
        [
          {
            event: granVia,
            start: new Date(Date.UTC(2026, 2, 16, 20)),
            end: new Date(Date.UTC(2026, 2, 16, 20, 30)),
          },
          {
            event: madridBikeTour,
            start: new Date(Date.UTC(2026, 2, 16, 20)),
            end: new Date(Date.UTC(2026, 2, 16, 20, 30)),
          },
        ],
      ],
      nightEvents: [
        [
          {
            event: teatroKapital,
            start: new Date(Date.UTC(2026, 2, 17)),
            end: new Date(Date.UTC(2026, 2, 17, 3)),
          },
        ],
      ],
    },
    {
      date: new Date(Date.UTC(2026, 2, 17)),
      events: [
        [
          {
            event: madridShopping,
            start: new Date(Date.UTC(2026, 2, 17, 9)),
            end: new Date(Date.UTC(2026, 2, 17, 11)),
          },
        ],
        [
          {
            event: madridZoo,
            start: new Date(Date.UTC(2026, 2, 17, 13)),
            end: new Date(Date.UTC(2026, 2, 17, 17)),
          },
        ],
        [
          {
            event: mercadoSanMiguel,
            start: new Date(Date.UTC(2026, 2, 17, 19, 30)),
            end: new Date(Date.UTC(2026, 2, 17, 20, 30)),
          },
        ],
      ],
      nightEvents: [
        [
          {
            event: madridBarHopping,
            start: new Date(Date.UTC(2026, 2, 17, 23)),
            end: new Date(Date.UTC(2026, 2, 18, 2)),
          },
        ],
      ],
    },
    {
      date: new Date(Date.UTC(2026, 2, 18)),
      events: [
        [
          {
            event: madridSportsPark,
            start: new Date(Date.UTC(2026, 2, 18, 9)),
            end: new Date(Date.UTC(2026, 2, 18, 11)),
          },
        ],
        [
          {
            event: palacioMadrid,
            start: new Date(Date.UTC(2026, 2, 18, 12)),
            end: new Date(Date.UTC(2026, 2, 18, 14)),
          },
          {
            event: gokarting,
            start: new Date(Date.UTC(2026, 2, 18, 12)),
            end: new Date(Date.UTC(2026, 2, 18, 14)),
          },
        ],
        [
          {
            event: delPradoMuseum,
            start: new Date(Date.UTC(2026, 2, 18, 14)),
            end: new Date(Date.UTC(2026, 2, 18, 17)),
          },
          {
            event: warnerBrosPark,
            start: new Date(Date.UTC(2026, 2, 18, 14)),
            end: new Date(Date.UTC(2026, 2, 18, 17)),
          },
        ],
        [
          {
            event: cookingClass,
            start: new Date(Date.UTC(2026, 2, 18, 17, 30)),
            end: new Date(Date.UTC(2026, 2, 18, 20, 30)),
          },
        ],
      ],
      nightEvents: [],
    },
    {
      date: new Date(Date.UTC(2026, 2, 19)),
      events: [
        [
          {
            event: bernabeu,
            start: new Date(Date.UTC(2026, 2, 19, 9)),
            end: new Date(Date.UTC(2026, 2, 19, 11)),
          },
        ],
        [
          {
            event: madridCordobaTrain,
            start: new Date(Date.UTC(2026, 2, 19, 12)),
            end: new Date(Date.UTC(2026, 2, 19, 14)),
          },
        ],
        [
          {
            event: mezquitaCathedral,
            start: new Date(Date.UTC(2026, 2, 19, 14)),
            end: new Date(Date.UTC(2026, 2, 19, 14, 30)),
          },
        ],
        [
          {
            event: cordobaFood,
            start: new Date(Date.UTC(2026, 2, 19, 14, 30)),
            end: new Date(Date.UTC(2026, 2, 19, 15, 30)),
          },
        ],
        [
          {
            event: cordobaSevilleTrain,
            start: new Date(Date.UTC(2026, 2, 19, 16)),
            end: new Date(Date.UTC(2026, 2, 19, 17)),
          },
        ],
        [
          {
            event: flamencoSeville,
            start: new Date(Date.UTC(2026, 2, 19, 20)),
            end: new Date(Date.UTC(2026, 2, 19, 21)),
          },
        ],
      ],
      nightEvents: [],
    },
    {
      date: new Date(Date.UTC(2026, 2, 20)),
      events: [
        [
          {
            event: mariaLusiaSeville,
            start: new Date(Date.UTC(2026, 2, 20, 12, 30)),
            end: new Date(Date.UTC(2026, 2, 20, 13, 30)),
          },
        ],
        [
          {
            event: plazaEspanaSeville,
            start: new Date(Date.UTC(2026, 2, 20, 13, 30)),
            end: new Date(Date.UTC(2026, 2, 20, 14)),
          },
        ],
        [
          {
            event: sevilleCathedralAndLaGiralda,
            start: new Date(Date.UTC(2026, 2, 20, 14)),
            end: new Date(Date.UTC(2026, 2, 20, 15)),
          },
        ],
        [
          {
            event: guadalquivirRiver,
            start: new Date(Date.UTC(2026, 2, 20, 16)),
            end: new Date(Date.UTC(2026, 2, 20, 18)),
          },
        ],
        [
          {
            event: terrazaBar,
            start: new Date(Date.UTC(2026, 2, 20, 20)),
            end: new Date(Date.UTC(2026, 2, 20, 21)),
          },
        ],
      ],
      nightEvents: [],
    },
    {
      date: new Date(Date.UTC(2026, 2, 21)),
      events: [
        [
          {
            event: madridChicagoPlane,
            start: new Date(Date.UTC(2026, 2, 21, 13)),
            end: new Date(Date.UTC(2026, 2, 21, 16)),
          },
        ],
        [
          {
            event: lastDayPadding,
            start: new Date(Date.UTC(2026, 2, 21, 16)),
            end: new Date(Date.UTC(2026, 2, 21, 23, 59)),
          },
        ],
      ],
      nightEvents: [],
    },
  ],
};

// V2
export const plan_v2: Plan = {
  days: [
    {
      date: new Date(Date.UTC(2026, 2, 13)),
      events: [
        [
          {
            event: chicagoBarcelonaPlane1,
            start: new Date(Date.UTC(2026, 2, 13, 23, 35)),
            end: new Date(Date.UTC(2026, 2, 13, 23, 59)),
          },
        ],
      ],
      nightEvents: [],
    },
    {
      date: new Date(Date.UTC(2026, 2, 14)),
      events: [
        [
          {
            event: chicagoBarcelonaPlane2,
            start: new Date(Date.UTC(2026, 2, 14, 0)),
            end: new Date(Date.UTC(2026, 2, 14, 17, 45)),
          },
        ],
        [
          {
            event: portVell,
            start: new Date(Date.UTC(2026, 2, 14, 18)),
            end: new Date(Date.UTC(2026, 2, 14, 19)),
          },
        ],
        [
          {
            event: barceloneta,
            start: new Date(Date.UTC(2026, 2, 14, 19)),
            end: new Date(Date.UTC(2026, 2, 14, 20)),
          },
        ],
        [
          {
            event: montjuicHill,
            start: new Date(Date.UTC(2026, 2, 14, 20)),
            end: new Date(Date.UTC(2026, 2, 14, 21)),
          },
        ],
      ],
      nightEvents: [
        [
          {
            event: barcaRooftop,
            start: new Date(Date.UTC(2026, 2, 14, 22)),
            end: new Date(Date.UTC(2026, 2, 15, 2)),
          },
        ],
      ],
    },
    {
      date: new Date(Date.UTC(2026, 2, 15)),
      events: [
        [
          {
            event: sagradaFamilia,
            start: new Date(Date.UTC(2026, 2, 15, 10)),
            end: new Date(Date.UTC(2026, 2, 15, 11, 30)),
          },
          {
            event: barcelonaShopping,
            start: new Date(Date.UTC(2026, 2, 15, 10)),
            end: new Date(Date.UTC(2026, 2, 15, 11, 30)),
          },
        ],
        [
          {
            event: plazaCatalunya,
            start: new Date(Date.UTC(2026, 2, 15, 13, 30)),
            end: new Date(Date.UTC(2026, 2, 15, 14)),
          },
          {
            event: beachVolleyball,
            start: new Date(Date.UTC(2026, 2, 15, 13, 30)),
            end: new Date(Date.UTC(2026, 2, 15, 14)),
          },
        ],
        [
          {
            event: gothicQuarter,
            start: new Date(Date.UTC(2026, 2, 15, 14)),
            end: new Date(Date.UTC(2026, 2, 15, 15, 30)),
          },
          {
            event: beachVolleyball,
            start: new Date(Date.UTC(2026, 2, 15, 14)),
            end: new Date(Date.UTC(2026, 2, 15, 15, 30)),
          },
        ],
        [
          {
            event: elBorn,
            start: new Date(Date.UTC(2026, 2, 15, 15)),
            end: new Date(Date.UTC(2026, 2, 15, 15, 30)),
          },
          {
            event: beachVolleyball,
            start: new Date(Date.UTC(2026, 2, 15, 15)),
            end: new Date(Date.UTC(2026, 2, 15, 15, 30)),
          },
        ],
        [
          {
            event: ciutadellaPark,
            start: new Date(Date.UTC(2026, 2, 15, 15, 30)),
            end: new Date(Date.UTC(2026, 2, 15, 17)),
          },
        ],
        [
          {
            event: laBoqueria,
            start: new Date(Date.UTC(2026, 2, 15, 17)),
            end: new Date(Date.UTC(2026, 2, 15, 18)),
          },
        ],
        [
          {
            event: barcaGame,
            start: new Date(Date.UTC(2026, 2, 15, 21)),
            end: new Date(Date.UTC(2026, 2, 15, 23)),
          },
        ],
      ],
      nightEvents: [
        [
          {
            event: placaReial,
            start: new Date(Date.UTC(2026, 2, 16)),
            end: new Date(Date.UTC(2026, 2, 16, 2)),
          },
        ],
      ],
    },
    {
      date: new Date(Date.UTC(2026, 2, 16)),
      events: [
        [
          {
            event: barcaMontserratBus,
            start: new Date(Date.UTC(2026, 2, 16, 10)),
            end: new Date(Date.UTC(2026, 2, 16, 12)),
          },
          {
            event: barcaCostaBravaBus,
            start: new Date(Date.UTC(2026, 2, 16, 10)),
            end: new Date(Date.UTC(2026, 2, 16, 12)),
          },
        ],
        [
          {
            event: montserrat,
            start: new Date(Date.UTC(2026, 2, 16, 12)),
            end: new Date(Date.UTC(2026, 2, 16, 16)),
          },
          {
            event: costaBrava,
            start: new Date(Date.UTC(2026, 2, 16, 12)),
            end: new Date(Date.UTC(2026, 2, 16, 16)),
          },
        ],
        [
          {
            event: montserratBarcaBus,
            start: new Date(Date.UTC(2026, 2, 16, 16)),
            end: new Date(Date.UTC(2026, 2, 16, 18)),
          },
          {
            event: costaBravaBarcaBus,
            start: new Date(Date.UTC(2026, 2, 16, 16)),
            end: new Date(Date.UTC(2026, 2, 16, 18)),
          },
        ],
      ],
      nightEvents: [
        [
          {
            event: barcaClubs,
            start: new Date(Date.UTC(2026, 2, 16, 23)),
            end: new Date(Date.UTC(2026, 2, 17, 2)),
          },
        ],
      ],
    },
    {
      date: new Date(Date.UTC(2026, 2, 17)),
      events: [
        [
          {
            event: barcelonaPickup,
            start: new Date(Date.UTC(2026, 2, 17, 8)),
            end: new Date(Date.UTC(2026, 2, 17, 10)),
          },
        ],
        [
          {
            event: barcelonaBrunch2,
            start: new Date(Date.UTC(2026, 2, 17, 10)),
            end: new Date(Date.UTC(2026, 2, 17, 12)),
          },
        ],
        [
          {
            event: madridBarcaTrain,
            start: new Date(Date.UTC(2026, 2, 17, 12, 30)),
            end: new Date(Date.UTC(2026, 2, 17, 15, 30)),
          },
        ],
        [
          {
            event: buenRetiroPark,
            start: new Date(Date.UTC(2026, 2, 17, 16, 30)),
            end: new Date(Date.UTC(2026, 2, 17, 17, 45)),
          },
        ],
        [
          {
            event: puertaDelSol,
            start: new Date(Date.UTC(2026, 2, 16, 17, 45)),
            end: new Date(Date.UTC(2026, 2, 16, 18)),
          },
          {
            event: madridBikeTour,
            start: new Date(Date.UTC(2026, 2, 16, 17, 45)),
            end: new Date(Date.UTC(2026, 2, 16, 18)),
          },
        ],
        [
          {
            event: plazaCibelesAndMayor,
            start: new Date(Date.UTC(2026, 2, 16, 19, 30)),
            end: new Date(Date.UTC(2026, 2, 16, 20)),
          },
          {
            event: madridBikeTour,
            start: new Date(Date.UTC(2026, 2, 16, 19, 30)),
            end: new Date(Date.UTC(2026, 2, 16, 20)),
          },
        ],
        [
          {
            event: granVia,
            start: new Date(Date.UTC(2026, 2, 16, 20)),
            end: new Date(Date.UTC(2026, 2, 16, 20, 30)),
          },
          {
            event: madridBikeTour,
            start: new Date(Date.UTC(2026, 2, 16, 20)),
            end: new Date(Date.UTC(2026, 2, 16, 20, 30)),
          },
        ],
      ],
      nightEvents: [
        [
          {
            event: teatroKapital,
            start: new Date(Date.UTC(2026, 2, 18)),
            end: new Date(Date.UTC(2026, 2, 18, 3)),
          },
        ],
      ],
    },
    {
      date: new Date(Date.UTC(2026, 2, 18)),
      events: [
        [
          {
            event: madridShopping,
            start: new Date(Date.UTC(2026, 2, 18, 9)),
            end: new Date(Date.UTC(2026, 2, 18, 11)),
          },
        ],
        [
          {
            event: madridZoo,
            start: new Date(Date.UTC(2026, 2, 18, 13)),
            end: new Date(Date.UTC(2026, 2, 18, 17)),
          },
        ],
        [
          {
            event: mercadoSanMiguel,
            start: new Date(Date.UTC(2026, 2, 19, 19, 30)),
            end: new Date(Date.UTC(2026, 2, 19, 20, 30)),
          },
        ],
      ],
      nightEvents: [
        [
          {
            event: madridBarHopping,
            start: new Date(Date.UTC(2026, 2, 18, 23)),
            end: new Date(Date.UTC(2026, 2, 19, 2)),
          },
        ],
      ],
    },
    {
      date: new Date(Date.UTC(2026, 2, 19)),
      events: [
        [
          {
            event: madridSportsPark,
            start: new Date(Date.UTC(2026, 2, 19, 9)),
            end: new Date(Date.UTC(2026, 2, 19, 11)),
          },
        ],
        [
          {
            event: palacioMadrid,
            start: new Date(Date.UTC(2026, 2, 19, 12)),
            end: new Date(Date.UTC(2026, 2, 19, 14)),
          },
          {
            event: gokarting,
            start: new Date(Date.UTC(2026, 2, 19, 12)),
            end: new Date(Date.UTC(2026, 2, 19, 14)),
          },
        ],
        [
          {
            event: delPradoMuseum,
            start: new Date(Date.UTC(2026, 2, 19, 14)),
            end: new Date(Date.UTC(2026, 2, 19, 17)),
          },
          {
            event: warnerBrosPark,
            start: new Date(Date.UTC(2026, 2, 19, 14)),
            end: new Date(Date.UTC(2026, 2, 19, 17)),
          },
        ],
        [
          {
            event: cookingClass,
            start: new Date(Date.UTC(2026, 2, 19, 17, 30)),
            end: new Date(Date.UTC(2026, 2, 19, 20, 30)),
          },
        ],
      ],
      nightEvents: [],
    },
    {
      date: new Date(Date.UTC(2026, 2, 20)),
      events: [
        [
          {
            event: bernabeu,
            start: new Date(Date.UTC(2026, 2, 20, 9)),
            end: new Date(Date.UTC(2026, 2, 20, 11)),
          },
        ],
        [
          {
            event: madridChicagoPlane,
            start: new Date(Date.UTC(2026, 2, 20, 13)),
            end: new Date(Date.UTC(2026, 2, 20, 16)),
          },
        ],
        [
          {
            event: lastDayPadding,
            start: new Date(Date.UTC(2026, 2, 20, 16)),
            end: new Date(Date.UTC(2026, 2, 20, 23, 59)),
          },
        ],
      ],
      nightEvents: [],
    },
  ],
};
