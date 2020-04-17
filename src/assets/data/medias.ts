/* tslint:disable max-line-length */
import { Media } from '../../app/shared/models/media';

const medias: Media[] = [
  {
    id: 1,
    title: 'All the Bright Places',
    thumbnail: 'assets/medias/all-the-bright-places/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/all-the-bright-places/thumbnail-logo.webp',
    poster: 'assets/medias/all-the-bright-places/poster.webp',
    topPoster: '',
    billboard: 'assets/medias/all-the-bright-places/billboard.webp',
    mediaPath: 'assets/medias/all-the-bright-places/media.mp4',
    synopsis:
      'Two teens facing personal struggles form a powerful bond as they embark on a cathartic journey chronicling the wonders of Indiana.',
    maturity: 12,
    match: '88% Match',
    lastRelease: '2020',
    top10: false,
    originals: true,
    duration: '1h 48m',
    starring: ['Elle Fanning', 'Justice Smith', 'Luke Wilson'],
    genres: ['Teen Movies', 'Dramas', 'Romantic Dramas'],
    tags: ['Dark', 'Emotional', 'Romantic'],
  },
  {
    id: 2,
    title: 'Anne With an E',
    thumbnail: 'assets/medias/anne-with-an-e/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/anne-with-an-e/thumbnail-logo.webp',
    poster: 'assets/medias/anne-with-an-e/poster.webp',
    topPoster: '',
    billboard: 'assets/medias/anne-with-an-e/billboard.webp',
    mediaPath: 'assets/medias/anne-with-an-e/media.mp4',
    synopsis:
      'A bungled message brings spirited orphan Anne Shirley to Green Gables, where unmarried siblings Matthew and Marilla Cuthbert are waiting for a boy.',
    maturity: 16,
    match: '98% Match',
    lastRelease: '2019',
    top10: false,
    originals: true,
    duration: '3 Seasons',
    starring: ['Amybeth McNulty', 'Geraldine James', 'R.H. Thomson'],
    genres: [
      'TV Shows Based on Books',
      'Family Watch Together TV',
      'Teen TV Shows',
    ],
    tags: ['Emotional'],
  },
  {
    id: 3,
    title: 'Ares',
    thumbnail: 'assets/medias/ares/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/ares/thumbnail-logo.webp',
    poster: 'assets/medias/ares/poster.webp',
    topPoster: '',
    billboard: 'assets/medias/ares/billboard.webp',
    mediaPath: 'assets/medias/ares/media.mp4',
    synopsis:
      "Aiming to become part of Amsterdam's elite, an ambitious college student joins an exclusive society, unaware it's hiding a horrifying secret.",
    maturity: 16,
    match: '68% Match',
    lastRelease: '2020',
    top10: false,
    originals: false,
    duration: '1 Season',
    starring: ['Jade Olieberg', 'Tobias Kersloot', 'Lisa Smit'],
    genres: ['TV Dramas', 'TV Horror'],
    tags: ['Dark', 'Suspenseful'],
  },
  {
    id: 4,
    title: 'Dare me',
    thumbnail: 'assets/medias/dare-me/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/dare-me/thumbnail-logo.webp',
    poster: 'assets/medias/dare-me/poster.webp',
    topPoster: 'assets/medias/dare-me/top-poster.jpg',
    billboard: 'assets/medias/dare-me/billboard.webp',
    mediaPath: 'assets/medias/dare-me/media.mp4',
    synopsis:
      'Relationships topple and loyalties flip when an icy new cheerleading coach takes over the high school squad ruled by Beth and her devoted BFF, Addy.',
    maturity: 14,
    match: '98% Match',
    lastRelease: '2019',
    top10: true,
    originals: true,
    duration: '1 Season',
    starring: ['Willa Fitzgerald', 'Herizen Guardiola', 'Marlo Kelly'],
    genres: ['Crime TV Dramas', 'TV Shows Based on Books', 'Teen TV Shows'],
    tags: ['Dark'],
  },
  {
    id: 5,
    title: 'Elite',
    thumbnail: 'assets/medias/elite/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/elite/thumbnail-logo.webp',
    poster: '',
    topPoster: 'assets/medias/elite/top-poster.webp',
    billboard: 'assets/medias/elite/billboard.webp',
    mediaPath: 'assets/medias/elite/media.mp4',
    synopsis:
      'After a public high school collapses, the builder tries to repair its image by paying for three impacted students to attend an exclusive private school.',
    maturity: 18,
    match: '98% Match',
    lastRelease: '2020',
    top10: true,
    originals: false,
    duration: '3 Seasons',
    starring: ['Danna Paola', 'Itzan Escamilla', 'Miguel Bernardeau'],
    genres: ['Crime TV Dramas', 'Teen TV Shows', 'Spanish TV Shows'],
    tags: ['Suspenseful'],
  },
  {
    id: 6,
    title: 'Freud',
    thumbnail: 'assets/medias/freud/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/freud/thumbnail-logo.webp',
    poster: 'assets/medias/freud/poster.webp',
    topPoster: 'assets/medias/freud/top-poster.jpg',
    billboard: 'assets/medias/freud/billboard.webp',
    mediaPath: 'assets/medias/freud/media.mp4',
    synopsis:
      'Eager to make his name in 19th-century Vienna, a hungry young Sigmund Freud joins a psychic and an inspector to solve a string of bloody mysteries.',
    maturity: 16,
    match: '98% Match',
    lastRelease: '2020',
    top10: true,
    originals: true,
    duration: '1 Season',
    starring: ['Robert Finster', 'Ella Rumpf', 'Georg Friedrich'],
    genres: ['Crime TV Dramas', 'Period Pieces', 'TV Mysteries'],
    tags: ['Dark', 'Suspenseful'],
  },
  {
    id: 7,
    title: 'How to Fix a Drug Scanndal',
    thumbnail: 'assets/medias/how-to-fix-a-drug-scandal/thumbnail.jpg',
    thumbnailLogo:
      'assets/medias/how-to-fix-a-drug-scandal/thumbnail-logo.webp',
    poster: 'assets/medias/how-to-fix-a-drug-scandal/poster.webp',
    topPoster: '',
    billboard: 'assets/medias/how-to-fix-a-drug-scandal/billboard.webp',
    mediaPath: 'assets/medias/how-to-fix-a-drug-scandal/media.mp4',
    synopsis:
      "Two drug lab chemists' shocking crimes cripple a state's judicial system and blur the lines of justice for lawyers, officials and thousands of inmates.",
    maturity: 18,
    match: 'New',
    lastRelease: '2020',
    top10: false,
    originals: true,
    duration: '1h 48m',
    starring: [],
    genres: [
      'True Crime Documentaries',
      'Social & Cultural Docs',
      'US TV Shows',
    ],
    tags: ['Scandalous', 'Investigative'],
  },
  {
    id: 8,
    title: 'Interior Design Masters',
    thumbnail: 'assets/medias/interior-design-masters/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/interior-design-masters/thumbnail-logo.webp',
    poster: 'assets/medias/interior-design-masters/poster.webp',
    topPoster: '',
    billboard: 'assets/medias/interior-design-masters/billboard.webp',
    mediaPath: 'assets/medias/interior-design-masters/media.mp4',
    synopsis:
      'Aspiring interior designers transform a variety of spaces from dowdy to delightful as they vie for a life-changing contract with a top London hotel.',
    maturity: 14,
    match: '95% Match',
    lastRelease: '2019',
    top10: false,
    originals: true,
    duration: '1 Season',
    starring: ['Fearne Cotton'],
    genres: [
      'Home & Garden Reality TV',
      'Competition Reality TV',
      'British TV Shows',
    ],
    tags: ['Feel-Good'],
  },
  {
    id: 9,
    title: 'Locke & Key',
    thumbnail: 'assets/medias/locke-and-key/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/locke-and-key/thumbnail-logo.webp',
    poster: 'assets/medias/locke-and-key/poster.webp',
    topPoster: '',
    billboard: 'assets/medias/locke-and-key/billboard.webp',
    mediaPath: 'assets/medias/locke-and-key/media.mp4',
    synopsis:
      "After their dad's murder, three siblings move with their mom to his ancestral estate, where they discover magical keys that unlock powers — and secrets.",
    maturity: 16,
    match: '96% Match',
    lastRelease: '2020',
    top10: false,
    originals: true,
    duration: '1 Season',
    starring: ['Darby Stanchfield', 'Connor Jessup', 'Emilia Jones'],
    genres: ['Fantasy TV Shows', 'Teen TV Shows', 'TV Dramas'],
    tags: ['Mind-Bending', 'Witty', 'Irreverent'],
  },
  {
    id: 10,
    title: 'Love, Death & Robots',
    thumbnail: 'assets/medias/love-death-robots/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/love-death-robots/thumbnail-logo.webp',
    poster: 'assets/medias/love-death-robots/poster.webp',
    topPoster: '',
    billboard: 'assets/medias/love-death-robots/billboard.webp',
    mediaPath: 'assets/medias/love-death-robots/media.mp4',
    synopsis:
      'After seeing a brutal murder, a woman flees from the killer through the streets of a surreal city.',
    maturity: 18,
    match: '99% Match',
    lastRelease: '2019',
    top10: false,
    originals: false,
    duration: '1 Volume',
    starring: ['Topher Grace', 'Mary Elizabeth Winstead', 'Gary Cole'],
    genres: ['Sci-Fi TV', 'TV Thrillers', 'TV Horror'],
    tags: ['Mind-Bending', 'Exciting'],
  },
  {
    id: 11,
    title: 'Love is Blind',
    thumbnail: 'assets/medias/love-is-blind/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/love-is-blind/thumbnail-logo.webp',
    poster: 'assets/medias/love-is-blind/poster.webp',
    topPoster: '',
    billboard: 'assets/medias/love-is-blind/billboard.webp',
    mediaPath: 'assets/medias/love-is-blind/media.mp4',
    synopsis:
      'Nick and Vanessa reunite with this season’s past and present couples and revisit their highs and lows. Plus, get an update on where they are now.',
    maturity: 16,
    match: '98% Match',
    lastRelease: '2020',
    top10: false,
    originals: false,
    duration: '1h 48m',
    starring: ['Nick Lachey', 'Vanessa Lachey'],
    genres: [
      'TWedding & Romance Reality TV',
      'Competition Reality TV',
      'Reality TV',
    ],
    tags: ['Romantic'],
  },
  {
    id: 12,
    title: 'Money Heist',
    thumbnail: 'assets/medias/money-heist/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/money-heist/thumbnail-logo.webp',
    poster: 'assets/medias/money-heist/poster.webp',
    topPoster: '',
    billboard: 'assets/medias/money-heist/billboard.webp',
    mediaPath: 'assets/medias/money-heist/media.mp4',
    synopsis:
      'The Professor recruits a young female robber and seven other criminals for a grand heist, targeting the Royal Mint of Spain.',
    maturity: 16,
    match: '94% Match',
    lastRelease: '2020',
    top10: false,
    originals: true,
    duration: '4 parts',
    starring: ['Úrsula Corberó', 'Álvaro Morte', 'Itziar Ituño'],
    genres: ['Spanish TV Shows', 'TV Thrillers'],
    tags: ['Suspenseful', 'Exciting'],
  },
  {
    id: 13,
    title: 'Pandemic',
    thumbnail: 'assets/medias/pandemic/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/pandemic/thumbnail-logo.webp',
    poster: 'assets/medias/pandemic/poster.webp',
    topPoster: '',
    billboard: 'assets/medias/pandemic/billboard.webp',
    mediaPath: 'assets/medias/pandemic/media.mp4',
    synopsis:
      'In this docuseries, meet the heroes on the front lines of the battle against influenza and learn about their efforts to stop the next global outbreak.',
    maturity: 12,
    match: '95% Match',
    lastRelease: '2020',
    top10: false,
    originals: true,
    duration: '1 Season',
    starring: [],
    genres: [
      'Science & Nature Docs',
      'Social & Cultural Docs',
      'Science & Nature TV',
    ],
    tags: ['Cerebral'],
  },
  {
    id: 14,
    title: 'Ragnarok',
    thumbnail: 'assets/medias/ragnarok/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/ragnarok/thumbnail-logo.webp',
    poster: 'assets/medias/ragnarok/poster.webp',
    topPoster: '',
    billboard: 'assets/medias/ragnarok/billboard.webp',
    mediaPath: 'assets/medias/ragnarok/media.mp4',
    synopsis:
      'In a Norwegian town poisoned by pollution and rattled by melting glaciers, the End Times feel all too real. It’ll take a legend to battle an old evil.',
    maturity: 16,
    match: '98% Match',
    lastRelease: '2020',
    top10: false,
    originals: false,
    duration: '1 Season',
    starring: ['David Stakston', 'Herman Tømmeraas', 'Theresa Frostad Eggesbø'],
    genres: ['Scandinavian TV Shows', 'TV Mysteries', 'TV Dramas'],
    tags: ['Exciting'],
  },
  {
    id: 15,
    title: 'Self Made',
    thumbnail: 'assets/medias/self-made/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/self-made/thumbnail-logo.webp',
    poster: '',
    topPoster: 'assets/medias/self-made/top-poster.webp',
    billboard: 'assets/medias/self-made/billboard.webp',
    mediaPath: 'assets/medias/self-made/media.mp4',
    synopsis:
      "Aspiring to be more than a washerwoman, Sarah grows determined to sell Addie's hair product. But when she's cruelly rebuffed, the gloves come off.",
    maturity: 16,
    match: '98% Match',
    lastRelease: '2020',
    top10: true,
    originals: false,
    duration: '1h 48m',
    starring: ['Octavia Spencer', 'Tiffany Haddish', 'Carmen Ejogo'],
    genres: ['TV Dramas', 'US TV Shows'],
    tags: ['Inspiring', 'Feel-Good'],
  },
  {
    id: 16,
    title: 'Sniper',
    thumbnail: 'assets/medias/sniper/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/sniper/thumbnail-logo.webp',
    poster: 'assets/medias/sniper/poster.webp',
    topPoster: 'assets/medias/sniper/top-poster.webp',
    billboard: 'assets/medias/sniper/billboard.webp',
    mediaPath: 'assets/medias/sniper/media.mp4',
    synopsis:
      'When a Colombian drug kingpin takes over the smuggling routes to the U.S., a Marine sniper teams with a federal agent to take him and his cartel down.',
    maturity: 16,
    match: 'New',
    lastRelease: '2017',
    top10: true,
    originals: false,
    duration: '1h 33m',
    starring: ['Chad Michael Collins', 'Danay Garcia', 'Billy Zane'],
    genres: ['Action & Adventure', 'Crime Action & Adventure'],
    tags: ['Suspenseful', 'Exciting'],
  },
  {
    id: 17,
    title: 'The Circle',
    thumbnail: 'assets/medias/the-circle/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/the-circle/thumbnail-logo.webp',
    poster: 'assets/medias/the-circle/poster.webp',
    topPoster: 'assets/medias/the-circle/top-poster.webp',
    billboard: 'assets/medias/the-circle/billboard.webp',
    mediaPath: 'assets/medias/the-circle/media.mp4',
    synopsis:
      'Be yourself or someone else? In this fun reality competition, online players try their best to flirt, bond and catfish their way to a R$300,000 prize.',
    maturity: 12,
    match: '98% Match',
    lastRelease: '2020',
    top10: true,
    originals: true,
    duration: '1 Season',
    starring: ['Giovanna Ewbank'],
    genres: ['Competition Reality TV', 'Brazilian TV Shows', 'Reality TV'],
    tags: ['Scandalous', 'Exciting'],
  },
  {
    id: 18,
    title: 'The Decline',
    thumbnail: 'assets/medias/the-decline/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/the-decline/thumbnail-logo.webp',
    poster: '',
    topPoster: 'assets/medias/the-decline/top-poster.webp',
    billboard: 'assets/medias/the-decline/billboard.webp',
    mediaPath: 'assets/medias/the-decline/media.mp4',
    synopsis:
      'An accident at a remote training camp leaves a group of survivalists bitterly divided — and caught in a brutal fight for their lives.',
    maturity: 14,
    match: 'New',
    lastRelease: '2020',
    top10: true,
    originals: false,
    duration: '1h 23m',
    starring: ['Guillaume Laurin', 'Marie-Evelyne Lessard', 'Réal Bossé'],
    genres: ['Canadian Movies', 'Action & Adventure', 'Action Thrillers'],
    tags: ['Dark', 'Suspenseful'],
  },
  {
    id: 19,
    title: 'The Letter for the King',
    thumbnail: 'assets/medias/the-letter-for-the-king/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/the-letter-for-the-king/thumbnail-logo.webp',
    poster: 'assets/medias/the-letter-for-the-king/poster.webp',
    topPoster: '',
    billboard: 'assets/medias/the-letter-for-the-king/billboard.webp',
    mediaPath: 'assets/medias/the-letter-for-the-king/media.mp4',
    synopsis:
      'A young knight in training contends with ancient prophecies, magical powers and fickle companions as he sets out on an epic quest to save his kingdom.',
    maturity: 12,
    match: '96% Match',
    lastRelease: '2020',
    top10: false,
    originals: false,
    duration: '1 Season',
    starring: ['Amir Wilson', 'Ruby Ashbourne Serkis', 'Thaddea Graham'],
    genres: [
      'Fantasy TV Shows',
      'TV Shows Based on Books',
      'Family Watch Together TV',
    ],
    tags: [],
  },
  {
    id: 20,
    title: 'The Occupant',
    thumbnail: 'assets/medias/the-occupant/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/the-occupant/thumbnail-logo.webp',
    poster: 'assets/medias/the-occupant/poster.webp',
    topPoster: 'assets/medias/the-occupant/top-poster.jpg',
    billboard: 'assets/medias/the-occupant/billboard.webp',
    mediaPath: 'assets/medias/the-occupant/media.mp4',
    synopsis:
      'An unemployed advertising executive begins stalking the new tenants of his former home and his motives toward the family turn sinister.',
    maturity: 14,
    match: '97% Match',
    lastRelease: '2020',
    top10: true,
    originals: true,
    duration: '1h 43m',
    starring: ['Javier Gutiérrez', 'Mario Casas', 'Bruna Cusí'],
    genres: ['Spanish Movies', 'Thriller Movies', 'International Thrillers'],
    tags: ['Suspenseful'],
  },
  {
    id: 21,
    title: 'The Platform',
    thumbnail: 'assets/medias/the-platform/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/the-platform/thumbnail-logo.webp',
    poster: 'assets/medias/the-platform/poster.webp',
    topPoster: 'assets/medias/the-platform/top-poster.jpg',
    billboard: 'assets/medias/the-platform/billboard.webp',
    mediaPath: 'assets/medias/the-platform/media.mp4',
    synopsis:
      'A slab of food descends floor by floor in a prison. The inmates above eat heartily, leaving those below starving and desperate. A rebellion is imminent.',
    maturity: 16,
    match: '99% Match',
    lastRelease: '2019',
    top10: true,
    originals: true,
    duration: '1h 34m',
    starring: ['Iván Massagué', 'Antonia San Juan', 'Zorion Eguileor'],
    genres: ['Spanish Movies', 'Thriller Movies', 'International Thrillers'],
    tags: ['Violent', 'Dark'],
  },
  {
    id: 22,
    title: 'The Stranger',
    thumbnail: 'assets/medias/the-stranger/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/the-stranger/thumbnail-logo.webp',
    poster: 'assets/medias/the-stranger/poster.webp',
    topPoster: '',
    billboard: 'assets/medias/the-stranger/billboard.webp',
    mediaPath: 'assets/medias/the-stranger/media.mp4',
    synopsis:
      'When a stranger makes a shocking claim about his wife, family man Adam Price becomes entangled in a mystery as he desperately searches for answers.',
    maturity: 16,
    match: '97% Match',
    lastRelease: '2020',
    top10: false,
    originals: false,
    duration: '1 Season',
    starring: ['Richard Armitage', 'Siobhan Finneran', 'Jennifer Saunders'],
    genres: ['Crime TV Dramas', 'TV Shows Based on Books', 'TV Mysteries'],
    tags: ['Suspenseful'],
  },
  {
    id: 23,
    title: 'The Witcher',
    thumbnail: 'assets/medias/the-witcher/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/the-witcher/thumbnail-logo.webp',
    poster: 'assets/medias/the-witcher/poster.webp',
    topPoster: '',
    billboard: 'assets/medias/the-witcher/billboard.webp',
    mediaPath: 'assets/medias/the-witcher/media.mp4',
    synopsis:
      'A bungled message brings spirited orphan Anne Shirley to Green Gables, where unmarried siblings Matthew and Marilla Cuthbert are waiting for a boy.',
    maturity: 16,
    match: '83% Match',
    lastRelease: '2019',
    top10: false,
    originals: false,
    duration: '1 Season',
    starring: ['Henry Cavill', 'Anya Chalotra', 'Freya Allan'],
    genres: ['Fantasy TV Shows', 'TV Shows Based on Books', 'TV Dramas'],
    tags: ['Exciting'],
  },
  {
    id: 24,
    title: 'Toy Boy',
    thumbnail: 'assets/medias/toy-boy/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/toy-boy/thumbnail-logo.webp',
    poster: 'assets/medias/toy-boy/poster.webp',
    topPoster: 'assets/medias/toy-boy/top-poster.jpg',
    billboard: 'assets/medias/toy-boy/billboard.webp',
    mediaPath: 'assets/medias/toy-boy/media.mp4',
    synopsis:
      "After seven years in a Málaga prison, a male stripper is released pending retrial and sets out to prove his lover framed him for her husband's murder.",
    maturity: 18,
    match: '98% Match',
    lastRelease: '2019',
    top10: true,
    originals: true,
    duration: '1 Season',
    starring: ['Jesús Mosquera', 'Cristina Castaño', 'María Pedraza'],
    genres: ['Crime TV Dramas', 'Spanish TV Shows', 'TV Thrillers'],
    tags: ['Gritty', 'Suspenseful'],
  },
  {
    id: 25,
    title: 'Unorthodox',
    thumbnail: 'assets/medias/unorthodox/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/unorthodox/thumbnail-logo.webp',
    poster: 'assets/medias/unorthodox/poster.webp',
    topPoster: '',
    billboard: 'assets/medias/unorthodox/billboard.webp',
    mediaPath: 'assets/medias/unorthodox/media.mp4',
    synopsis:
      'A Hasidic Jewish woman in Brooklyn flees to Berlin from an arranged marriage and is taken in by a group of musicians — until her past comes calling.',
    maturity: 14,
    match: '98% Match',
    lastRelease: '2020',
    top10: false,
    originals: true,
    duration: 'Limited Series',
    starring: ['Shira Haas', 'Amit Rahav', 'Jeff Wilbusch'],
    genres: [
      'TV Shows Based on Books',
      'Social Issue TV Dramas',
      'German TV Shows',
    ],
    tags: ['Intimate', 'Emotional'],
  },
  {
    id: 26,
    title: 'Virgin River',
    thumbnail: 'assets/medias/virgin-river/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/virgin-river/thumbnail-logo.webp',
    poster: 'assets/medias/virgin-river/poster.webp',
    topPoster: '',
    billboard: 'assets/medias/virgin-river/billboard.webp',
    mediaPath: 'assets/medias/virgin-river/media.mp4',
    synopsis:
      'Searching for a fresh start, a nurse practitioner moves from LA to a remote northern California town and is surprised by what -- and who -- she finds.',
    maturity: 14,
    match: '97% Match',
    lastRelease: '2019',
    top10: false,
    originals: true,
    duration: '1 Season',
    starring: ['Alexandra Breckenridge', 'Martin Henderson', 'Tim Matheson'],
    genres: ['Romantic TV Dramas', 'TV Shows Based on Books', 'TV Dramas'],
    tags: ['Intimate', 'Emotional', 'Romantic'],
  },
  {
    id: 27,
    title: 'Wheen They See Us',
    thumbnail: 'assets/medias/when-they-see-us/thumbnail.jpg',
    thumbnailLogo: 'assets/medias/when-they-see-us/thumbnail-logo.webp',
    poster: 'assets/medias/when-they-see-us/poster.webp',
    topPoster: '',
    billboard: 'assets/medias/when-they-see-us/billboard.webp',
    mediaPath: 'assets/medias/when-they-see-us/media.mp4',
    synopsis:
      'As the jogger case stirs tensions nationwide, the families of the boys and their lawyers prepare for a bitter legal fight against the city of New York.',
    maturity: 16,
    match: '77% Match',
    lastRelease: '2019',
    top10: false,
    originals: false,
    duration: 'Limited Series',
    starring: ['Asante Blackk', 'Caleel Harris', 'Ethan Herisse'],
    genres: ['Crime TV Dramas', 'Social Issue TV Dramas', 'TV Dramas'],
    tags: ['Provocative', 'Emotional'],
  },
];
export default medias;
