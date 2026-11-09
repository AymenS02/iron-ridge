// All editable business content lives here.
//
// Before launch, anything marked CONFIRM has to be checked with Hasib, and
// anything marked PLACEHOLDER has to be replaced with the real thing.

export const business = {
  name: "Iron Ridge Contracting",
  owner: "Hasib A.",
  ownerFirstName: "Hasib",
  phone: "905-730-8746",
  phoneHref: "tel:+19057308746",
  email: "hasib@ironridgecontracting.ca",
  emailHref: "mailto:hasib@ironridgecontracting.ca",
  serviceArea: "Hamilton & Surrounding Areas",
  copyrightYear: 2026,
  // CONFIRM: exact towns served.
  towns: ["Hamilton", "Ancaster", "Dundas", "Stoney Creek", "Waterdown", "Binbrook", "Burlington", "Grimsby"],
  // CONFIRM: real hours.
  hours: [
    { days: "Monday to Friday", time: "7:30 am – 6:00 pm" },
    { days: "Saturday", time: "9:00 am – 2:00 pm" },
    { days: "Sunday", time: "Closed" },
  ],
};

// Turn both off for the final draft, once real photos and reviews are in.
export const showPlaceholderLabels = true;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export type SiteImage = { src: string; alt: string };

// PLACEHOLDER: every image below is Unsplash stock, not Iron Ridge work.
const photo = (id: string, alt: string): SiteImage => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2000&q=80`,
  alt,
});

export const images = {
  hero: photo("1505798577917-a65157d3320a", "Two tradesmen using a mitre saw in a bright kitchen under renovation"),
  saw: photo("1513467535987-fd81bc7d62f8", "A carpenter cutting lumber with a circular saw"),
  carpenter: photo("1589939705384-5185137a7f0f", "A tradesman in safety gear measuring lumber on a workbench"),
  plans: photo("1503387762-592deb58ef4e", "A contractor marking up renovation plans at a table"),
  drill: photo("1504148455328-c376907d081c", "A cordless drill resting on a dusty subfloor"),
  handshake: photo("1521791136064-7986c2920216", "Two people shaking hands"),
  neighbourhood: photo("1605276374104-dee2a0ed3cd6", "A brick and stone home on a quiet residential street"),
  livingRoom: photo("1600566753086-00f18fb6b3ea", "An open-concept living room with a new oak staircase"),
  familyRoom: photo("1600121848594-d8644e57abab", "A finished family room with built-in shelving"),
  bathroom: photo("1584622650111-993a426fbf0a", "A renovated bathroom with a glass walk-in shower"),
  bathroomTub: photo("1620626011761-996317b8d101", "A white bathroom with a freestanding tub"),
  kitchenDark: photo("1600489000022-c2086d79f9d4", "A kitchen with charcoal shaker cabinets and floating shelves"),
  kitchenIsland: photo("1507089947368-19c1da9775ae", "A white kitchen with a large island and pendant lights"),
  kitchenOak: photo("1600585152220-90363fe7e115", "A modern kitchen with oak cabinets and a white waterfall island"),
  kitchenWalnut: photo("1556912172-45b7abe8b7e1", "A white kitchen with a walnut-fronted breakfast bar"),
  floorHall: photo("1581858726788-75bc0f6a952d", "A hallway with new wide-plank hardwood flooring"),
  floorLiving: photo("1618221195710-dd6b41faaea6", "A living room with light engineered hardwood floors"),
  floorChair: photo("1586023492125-27b2c045efd7", "A yellow armchair on a warm hardwood floor"),
  wallOpen: photo("1517581177682-a085bb7ffb15", "An interior wall opened up during a renovation"),
  wallInsulation: photo("1607400201889-565b1ee75f8e", "A tradesman fitting insulation between wall studs before drywall"),
  wallFinished: photo("1513694203232-719a280e022f", "A smooth, freshly finished interior wall"),
  brickHome: photo("1592595896551-12b371d546d5", "A brick home with a curved front walkway"),
  brickBuilding: photo("1574362848149-11496d93a7c7", "A low-rise building with red brick walls"),
  pavedPath: photo("1600047509358-9dc75507daeb", "A paver walkway leading to a modern home"),
  pavedPatio: photo("1599809275671-b5942cabc7a2", "A stone patio surrounding a backyard pool"),
  pavedEntry: photo("1600047509807-ba8f99d2cdde", "Large pavers set into the lawn in front of a home"),
};

export type ServiceIconName = "renovations" | "kitchen" | "flooring" | "drywall" | "brick" | "interlock";

export type Service = {
  slug: string;
  name: string;
  icon: ServiceIconName;
  short: string;
  description: string;
  included: string[];
  image: SiteImage;
  secondaryImage: SiteImage;
};

export const services: Service[] = [
  {
    slug: "renovations",
    name: "Renovations",
    icon: "renovations",
    short: "Basements, bathrooms and whole floors, managed start to finish.",
    description:
      "A renovation goes well when one person is accountable for it. I plan the work, line up the trades, and stay on the job from demolition to the final walkthrough, so you always know what is happening and what comes next.",
    included: [
      "Basement finishing",
      "Bathroom remodels",
      "Open-concept conversions",
      "Framing and demolition",
      "Trade coordination",
      "Final walkthrough and touch-ups",
    ],
    image: images.bathroom,
    secondaryImage: images.hero,
  },
  {
    slug: "kitchen-cabinets",
    name: "Kitchen Cabinets",
    icon: "kitchen",
    short: "Cabinets that fit your kitchen and the way you actually cook.",
    description:
      "Cabinets are the first thing you see and the thing you touch every day. We measure carefully, install them dead level, and fuss over the gaps, fillers and hardware that separate a good kitchen from a great one.",
    included: [
      "On-site measuring and layout",
      "Supply and install",
      "Cabinet refacing and repainting",
      "Soft-close hardware",
      "Islands and pantry units",
      "Crown and finishing trim",
    ],
    image: images.kitchenDark,
    secondaryImage: images.kitchenWalnut,
  },
  {
    slug: "flooring",
    name: "Flooring",
    icon: "flooring",
    short: "Hardwood, vinyl, laminate and tile, on a properly prepared base.",
    description:
      "Most flooring problems start underneath. Before a single plank goes down we check the subfloor, level what needs levelling and plan the layout so your cuts land where nobody will notice them.",
    included: [
      "Hardwood and engineered wood",
      "Luxury vinyl plank",
      "Laminate and tile",
      "Old floor removal and disposal",
      "Subfloor repair and levelling",
      "Baseboards and transitions",
    ],
    image: images.floorLiving,
    secondaryImage: images.floorHall,
  },
  {
    slug: "drywall-taping",
    name: "Drywall & Taping",
    icon: "drywall",
    short: "Clean seams and walls that are ready for paint the first time.",
    description:
      "Good drywall disappears. New walls, patched holes and tired ceilings get hung square, taped tight and sanded smooth, with dust kept to the room we are working in.",
    included: [
      "New board installation",
      "Taping and mudding",
      "Sanding to a paint-ready finish",
      "Hole and crack repair",
      "Ceiling repairs and popcorn removal",
      "Dust containment",
    ],
    image: images.wallOpen,
    secondaryImage: images.wallFinished,
  },
  {
    slug: "bricklaying",
    name: "Bricklaying",
    icon: "brick",
    short: "New brickwork and careful repairs that match what is already there.",
    description:
      "Plenty of Hamilton homes have brick older than any of us. Whether it is a new feature wall or a crumbling chimney, we match the brick and mortar so the repair looks like it has always been there.",
    included: [
      "New brick and block walls",
      "Repointing and tuckpointing",
      "Chimney repairs",
      "Steps and front porches",
      "Brick and mortar matching",
      "Stone veneer",
    ],
    image: images.neighbourhood,
    secondaryImage: images.brickHome,
  },
  {
    slug: "interlocking",
    name: "Interlocking",
    icon: "interlock",
    short: "Driveways, walkways and patios built on a base that stays put.",
    description:
      "Interlock only stays flat if the base is done right, and our winters are not forgiving. We excavate to the proper depth, compact in layers and finish with polymeric sand so your stone is still level years from now.",
    included: [
      "Driveways and walkways",
      "Patios and pool surrounds",
      "Excavation and compacted base",
      "Retaining and garden walls",
      "Re-levelling sunken stone",
      "Polymeric sand and sealing",
    ],
    image: images.pavedPath,
    secondaryImage: images.pavedPatio,
  },
];

export const reasons = [
  {
    icon: "handshake",
    title: "You deal with me",
    body: "The person who quotes your job is the person on your job. No call centre and no salesperson who disappears after the deposit.",
  },
  {
    icon: "quote",
    title: "Quotes in plain writing",
    body: "You get a written price that says what is included and what is not. If something changes, we talk about it before any money does.",
  },
  {
    icon: "clean",
    title: "A site you can live with",
    body: "Floors covered, dust contained and tools put away at the end of every day. It is still your home while we work in it.",
  },
  {
    icon: "shield",
    title: "Work I stand behind",
    body: "If something isn't right, call me. Most of my work comes from neighbours talking to neighbours, and I intend to keep it that way.",
  },
] as const;

// PLACEHOLDER: Hasib's story, in his voice. Replace after an interview with him.
export const about = {
  teaser:
    "I started Iron Ridge because I got tired of seeing homeowners let down by contractors who never called back. So I keep things simple: show up when I say I will, do the work properly, and treat your home like it belongs to my own family.",
  story: [
    "I learned this trade the slow way, on job sites around Hamilton, carrying board and mixing mud for people who cared about getting it right. They taught me that a straight wall and a straight answer come from the same place.",
    "Over the years I saw what homeowners go through: quotes that double halfway through, crews that vanish for a week, messes left behind for someone else to deal with. Iron Ridge is my answer to all of that.",
    "It is still a small operation by choice. I work with a short list of tradespeople I trust, and I take on only what I can personally look after. When you call, you get me.",
  ],
  pullQuote: "A straight wall and a straight answer come from the same place.",
  values: [
    { title: "Say it straight", body: "Honest prices, honest timelines, and honest advice, even when the honest advice is that you don't need me." },
    { title: "Do it once", body: "We take the extra hour on the prep nobody sees, because that is what decides how the job looks in ten years." },
    { title: "Respect the home", body: "Boots off where it matters, dust kept down, and your family's routine considered every single day." },
    { title: "Keep in touch", body: "You will never have to wonder where things stand. Calls and messages get answered, usually the same day." },
  ],
  roots:
    "Hamilton is a city that knows how things get built. From brick homes in Kirkendall to new builds up on the Mountain, I have worked on these streets and I run into my clients at the grocery store. That keeps a person honest.",
  commitments: [
    "I will tell you what I would do if it were my own house.",
    "I will give you a price in writing before we start.",
    "I will call you before anything changes, not after.",
    "I will leave your home cleaner than an average job site has any right to be.",
    "I will still answer the phone after the job is done.",
  ],
};

export type GalleryItem = { title: string; location: string; service: string; image: SiteImage };

// PLACEHOLDER: stock photos with invented project names.
export const gallery: GalleryItem[] = [
  { title: "Charcoal shaker kitchen", location: "Ancaster", service: "kitchen-cabinets", image: images.kitchenDark },
  { title: "Walk-in shower remodel", location: "Dundas", service: "renovations", image: images.bathroom },
  { title: "Paver front walkway", location: "Waterdown", service: "interlocking", image: images.pavedPath },
  { title: "Wide-plank hallway", location: "Stoney Creek", service: "flooring", image: images.floorHall },
  { title: "Front elevation repointing", location: "Hamilton Mountain", service: "bricklaying", image: images.neighbourhood },
  { title: "Whole-wall rebuild", location: "Kirkendall", service: "drywall-taping", image: images.wallOpen },
  { title: "Oak and white island", location: "Burlington", service: "kitchen-cabinets", image: images.kitchenOak },
  { title: "Backyard stone patio", location: "Binbrook", service: "interlocking", image: images.pavedPatio },
  { title: "Finished family room", location: "Stoney Creek", service: "renovations", image: images.familyRoom },
  { title: "Engineered oak living room", location: "Ancaster", service: "flooring", image: images.floorLiving },
  { title: "Brick and walkway refresh", location: "Grimsby", service: "bricklaying", image: images.brickHome },
  { title: "Paint-ready feature wall", location: "Hamilton", service: "drywall-taping", image: images.wallFinished },
  { title: "Classic white island kitchen", location: "Dundas", service: "kitchen-cabinets", image: images.kitchenIsland },
  { title: "Spa-style main bath", location: "Burlington", service: "renovations", image: images.bathroomTub },
  { title: "Warm hardwood refinish", location: "Hamilton", service: "flooring", image: images.floorChair },
  { title: "Insulated exterior wall", location: "Waterdown", service: "drywall-taping", image: images.wallInsulation },
  { title: "Red brick restoration", location: "Hamilton", service: "bricklaying", image: images.brickBuilding },
  { title: "Slab paver entry", location: "Ancaster", service: "interlocking", image: images.pavedEntry },
];

export const featuredProjects = [gallery[0], gallery[2], gallery[1], gallery[4], gallery[3], gallery[7]];

// PLACEHOLDER: sample reviews for the design preview. These must be replaced
// with real client reviews before the site goes live.
export const testimonials = [
  {
    quote:
      "Hasib gave us a price, stuck to it, and called us the moment he found old wiring behind the wall. We never once had to chase him. Our kitchen looks better than the drawings did.",
    name: "Sarah M.",
    location: "Ancaster",
    project: "Kitchen cabinets",
  },
  {
    quote: "He showed up when he said he would. Every single day. After our last contractor, that alone felt like a miracle.",
    name: "Daniel & Priya R.",
    location: "Stoney Creek",
    project: "Basement renovation",
  },
  {
    quote:
      "Our front steps were falling apart and the brick is almost a hundred years old. You genuinely can't tell where the old work ends and the new work starts.",
    name: "Tom K.",
    location: "Dundas",
    project: "Bricklaying",
  },
  {
    quote: "We live with two kids and a dog, and somehow the house was tidy every night. The new floors are beautiful too.",
    name: "Angela F.",
    location: "Waterdown",
    project: "Flooring",
  },
  {
    quote:
      "He talked us out of the more expensive option because we didn't need it. That's when we knew we had the right guy, and we've had him back twice since.",
    name: "Marcus L.",
    location: "Hamilton Mountain",
    project: "Drywall & taping",
  },
  {
    quote: "Our interlock driveway went through its first hard winter without a single stone shifting. Neighbours keep asking for his number.",
    name: "Nadia H.",
    location: "Burlington",
    project: "Interlocking",
  },
];

// CONFIRM: every answer, especially insurance, WSIB, warranty and payment terms.
export const faqs = [
  {
    question: "Are your quotes really free?",
    answer:
      "Yes. I come out, look at the space, listen to what you want and send a written quote, usually within a few days. There is no charge and no pressure to go ahead.",
  },
  {
    question: "How long will my project take?",
    answer:
      "It depends on the scope. As a rough guide, a floor or drywall job often takes a few days, a kitchen two to four weeks, and a full basement six to ten weeks. Your quote will include a realistic schedule, and I will tell you early if anything changes.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Iron Ridge carries full commercial liability insurance and WSIB coverage, and I am happy to provide certificates before any work starts. You should ask that of any contractor you are thinking of hiring.",
  },
  {
    question: "Do I need a permit, and will you handle it?",
    answer:
      "Basements, structural changes and some exterior work usually need a permit in Hamilton. I will let you know what applies to your project and can look after the application and inspections.",
  },
  {
    question: "What happens with the mess?",
    answer:
      "We protect floors and furniture, contain dust with barriers where we can, and clean up at the end of every working day. Debris and old materials are hauled away, and you get a thorough clean at the end of the job.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Hamilton and the surrounding areas, including Ancaster, Dundas, Stoney Creek, Waterdown, Binbrook, Burlington and Grimsby. If you are a little further out, call me anyway and we can talk about it.",
  },
  {
    question: "How does payment work?",
    answer:
      "Typically a deposit to book the job and buy materials, progress payments at agreed milestones on larger work, and the balance only once you have done the final walkthrough and are happy with it. It is all spelled out in your quote.",
  },
  {
    question: "What if something goes wrong after you finish?",
    answer:
      "Call me. My workmanship is covered by a written warranty, and I come back to fix anything that isn't right. I live and work here, so I am not hard to find.",
  },
];
