export interface Attraction {
  name: string;
  desc: string;
  category: "Nature" | "Heritage" | "Spiritual" | "Adventure" | "Modern";
}

export interface TriviaQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface StateData {
  id: string; // ISO Code e.g. IN-MH
  name: string;
  capital: string;
  region: "North" | "South" | "East" | "West" | "Central" | "Northeast" | "Union Territory";
  language: string;
  food: string;
  bestTime: string;
  animal: string;
  color: string; // Custom state visual theme
  about: string;
  attractions: Attraction[];
  quiz: TriviaQuestion[];
}

export const statesData: StateData[] = [
  {
    id: "IN-MH",
    name: "Maharashtra",
    capital: "Mumbai",
    region: "West",
    language: "Marathi",
    food: "Vada Pav, Misal Pav, Puran Poli",
    bestTime: "October to March",
    animal: "Indian Giant Squirrel (Shekru)",
    color: "bg-orange-500",
    about: "Maharashtra is India's commercial hub, blessed with rich history, deep-cut Sahyadri forts, a massive coastline, and magnificent rock-cut caves.",
    attractions: [
      { name: "Ajanta & Ellora Caves", desc: "UNESCO World Heritage rock-cut temples depicting ancient Buddhist, Hindu, and Jain art.", category: "Heritage" },
      { name: "Gateway of India", desc: "An iconic arch monument built in 1924 overlooking the Arabian Sea in Mumbai.", category: "Modern" },
      { name: "Mahabaleshwar", desc: "A scenic hill station in the Western Ghats known for strawberries, mist, and deep valleys.", category: "Nature" }
    ],
    quiz: [
      {
        question: "Which UNESCO site in Maharashtra features 34 rock-cut cave temples spanning Hindu, Buddhist, and Jain faiths?",
        options: ["Elephanta Caves", "Ellora Caves", "Ajanta Caves", "Kanheri Caves"],
        answerIndex: 1,
        explanation: "Ellora Caves is famous for its 34 monasteries and temples, including the spectacular single-rock Kailash Temple."
      },
      {
        question: "What is the state animal of Maharashtra?",
        options: ["Asiatic Lion", "Indian Elephant", "Indian Giant Squirrel", "Nilgiri Tahr"],
        answerIndex: 2,
        explanation: "The Indian Giant Squirrel, locally known as 'Shekru', is Maharashtra's colorful giant state animal found in Bhimashankar."
      },
      {
        question: "Which Maratha king constructed the famous sea-fort 'Sindhudurg'?",
        options: ["Chhatrapati Shivaji Maharaj", "Chhatrapati Sambhaji Maharaj", "Peshwa Baji Rao I", "Shahuji I"],
        answerIndex: 0,
        explanation: "Sindhudurg fort was built by Chhatrapati Shivaji Maharaj in 1664 to defend Maharashtra's coastal waters."
      }
    ]
  },
  {
    id: "IN-KL",
    name: "Kerala",
    capital: "Thiruvananthapuram",
    region: "South",
    language: "Malayalam",
    food: "Appam with Stew, Karimeen Pollichathu, Sadya",
    bestTime: "September to March",
    animal: "Indian Elephant",
    color: "bg-emerald-600",
    about: "Known as 'God's Own Country', Kerala is a tropical paradise of serene backwaters, swaying palm groves, and rich traditional arts like Kathakali.",
    attractions: [
      { name: "Alappuzha Backwaters", desc: "An intricate network of lakes, canals, and rivers explored in traditional hand-crafted houseboats.", category: "Nature" },
      { name: "Munnar", desc: "Lush green tea plantations draped in mist and home to the rare Nilgiri Tahr.", category: "Nature" },
      { name: "Fort Kochi", desc: "A colonial-era seaside town famous for historic Chinese fishing nets, spices, and synagogues.", category: "Heritage" }
    ],
    quiz: [
      {
        question: "What traditional classical dance drama of Kerala features elaborate green face makeup and exquisite costumes?",
        options: ["Mohiniyattam", "Kathakali", "Koodiyattam", "Theyyam"],
        answerIndex: 1,
        explanation: "Kathakali is Kerala's internationally renowned 17th-century classical dance drama symbolizing the triumph of good over evil."
      },
      {
        question: "Kerala is the largest producer of which spice in India?",
        options: ["Black Pepper", "Cardamom", "Cinnamon", "Clove"],
        answerIndex: 0,
        explanation: "Known historically as 'Black Gold', black pepper has made Kerala's spice hills famous for over two millennia."
      },
      {
        question: "Which lake is the longest lake in India, hosting the famous Nehru Trophy Boat Race?",
        options: ["Vembanad Lake", "Ashtamudi Lake", "Periyar Lake", "Sasthamkotta Lake"],
        answerIndex: 0,
        explanation: "Vembanad Lake in Kerala is India's longest lake and the heart of the world-famous snake boat races."
      }
    ]
  },
  {
    id: "IN-RJ",
    name: "Rajasthan",
    capital: "Jaipur",
    region: "West",
    language: "Rajasthani, Hindi",
    food: "Dal Baati Churma, Gatte ki Sabzi, Laal Maas",
    bestTime: "October to March",
    animal: "Chinkara & Dromedary Camel",
    color: "bg-amber-600",
    about: "Rajasthan is the Land of Kings, showcasing golden deserts, massive sandstone hill forts, opulent palaces, and vibrant folklore.",
    attractions: [
      { name: "Amer Fort (Jaipur)", desc: "A magnificent 16th-century red sandstone fort boasting the glittering Sheesh Mahal.", category: "Heritage" },
      { name: "Jaisalmer Fort", desc: "The 'Golden Fort' arising seamlessly from the heart of the Thar Desert.", category: "Heritage" },
      { name: "Lake Pichola (Udaipur)", desc: "An elegant artificial freshwater lake cradling the magical Lake Palace.", category: "Nature" }
    ],
    quiz: [
      {
        question: "Which Rajasthani city is widely celebrated as the 'Blue City'?",
        options: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
        answerIndex: 2,
        explanation: "Jodhpur is the 'Blue City' because of the signature indigo-colored houses clustered around the towering Mehrangarh Fort."
      },
      {
        question: "Which unique festival features camels dressed in beautiful handmade accessories dancing in Rajasthan?",
        options: ["Pushkar Camel Fair", "Desert Festival", "Marwar Festival", "Teej Festival"],
        answerIndex: 0,
        explanation: "The Pushkar Fair is one of the world's largest camel and livestock trading festivals, held on the banks of holy Pushkar Lake."
      },
      {
        question: "What iconic wind-palace in Jaipur features 953 small windows (jharokhas) to keep the palace naturally cool?",
        options: ["City Palace", "Hawa Mahal", "Jal Mahal", "Umaid Bhawan Palace"],
        answerIndex: 1,
        explanation: "Hawa Mahal ('Palace of Winds') was built in 1799 by Maharaja Sawai Pratap Singh so royal women could observe street life unseen."
      }
    ]
  },
  {
    id: "IN-KA",
    name: "Karnataka",
    capital: "Bengaluru",
    region: "South",
    language: "Kannada",
    food: "Bisi Bele Bath, Mysore Pak, Neer Dosa",
    bestTime: "October to March",
    animal: "Asian Elephant",
    color: "bg-yellow-600",
    about: "Karnataka offers a stunning juxtaposition of tech-forward metropolitan hubs, mesmerizing ancient stone empires, and rich wildlife sanctuaries.",
    attractions: [
      { name: "Hampi Ruins", desc: "The magnificent boulder-strewn capital ruins of the legendary Vijayanagara Empire.", category: "Heritage" },
      { name: "Mysore Palace", desc: "An outstanding Indo-Saracenic palace that glows with over 97,000 lightbulbs on festival nights.", category: "Heritage" },
      { name: "Coorg (Kodagu)", desc: "India's coffee cup, packed with cascading waterfalls, rich plantations, and mountain ridges.", category: "Nature" }
    ],
    quiz: [
      {
        question: "Which UNESCO World Heritage site in Karnataka was the flourishing capital of the Vijayanagara Empire in the 14th century?",
        options: ["Halebidu", "Hampi", "Pattadakal", "Badami"],
        answerIndex: 1,
        explanation: "Hampi's spectacular boulder-strewn landscape contains ancient temples, palaces, and ruins that represent peak Indian stone craftsmanship."
      },
      {
        question: "Which famous sweet, made of gram flour, ghee, and sugar, was created in the royal kitchens of the Mysore Palace?",
        options: ["Dharwad Pedha", "Mysore Pak", "Kunda", "Chiroti"],
        answerIndex: 1,
        explanation: "Mysore Pak was invented by royal chef Madappa Shesadri who wanted to create a unique dessert for the Maharaja of Mysore."
      },
      {
        question: "What is Karnataka's capital Bengaluru widely known as due to its dominant role in India's IT exports?",
        options: ["Steel City", "Silicon Valley of India", "Sandalwood Hub", "Garden City"],
        answerIndex: 1,
        explanation: "Bengaluru is called the Silicon Valley of India because it hosts almost all major global software and tech giants."
      }
    ]
  },
  {
    id: "IN-TN",
    name: "Tamil Nadu",
    capital: "Chennai",
    region: "South",
    language: "Tamil",
    food: "Idli, Dosa, Sambhar, Pongal, Chettinad Chicken",
    bestTime: "November to March",
    animal: "Nilgiri Tahr",
    color: "bg-blue-600",
    about: "Tamil Nadu is a cradle of ancient Dravidian culture, home to magnificent towering stone Gopurams, classical Bharatanatyam, and pristine beaches.",
    attractions: [
      { name: "Meenakshi Temple", desc: "A towering 14-gopuram temple complex in Madurai covered in thousands of colorful stucco figures.", category: "Spiritual" },
      { name: "Mahabalipuram", desc: "Ancient 7th-century rock-cut monuments, monolithic rathas, and shore temples by the sea.", category: "Heritage" },
      { name: "Ooty (Udhagamandalam)", desc: "The Queen of Hill Stations in the blue Nilgiri Hills, famous for tea and toy trains.", category: "Nature" }
    ],
    quiz: [
      {
        question: "Which classical dance style of India originated in the temples of Tamil Nadu?",
        options: ["Kathak", "Bharatanatyam", "Kuchipudi", "Odissi"],
        answerIndex: 1,
        explanation: "Bharatanatyam is one of India's oldest classical dance forms, originally performed by temple dancers called Devadasis."
      },
      {
        question: "What unique geological feature is Tamil Nadu's state animal, the Nilgiri Tahr, adapted to climb?",
        options: ["Sandy Deserts", "Steep Mountain Cliffs", "Dense River Deltas", "Mangrove swamps"],
        answerIndex: 1,
        explanation: "The Nilgiri Tahr is a stocky, agile wild mountain goat endemic to the high-elevation grassy cliffs of the Western Ghats."
      },
      {
        question: "Which ancient Tamil dynasty constructed the magnificent Brihadisvara Temple in Thanjavur?",
        options: ["Pandya Dynasty", "Chera Dynasty", "Chola Dynasty", "Pallava Dynasty"],
        answerIndex: 2,
        explanation: "The Brihadisvara ('Big Temple') of Thanjavur was built by the great Chola Emperor Raja Raja Chola I in 1010 AD."
      }
    ]
  },
  {
    id: "IN-GJ",
    name: "Gujarat",
    capital: "Gandhinagar",
    region: "West",
    language: "Gujarati",
    food: "Dhokla, Khandvi, Undhiyu, Jalebi Fafda",
    bestTime: "October to March",
    animal: "Asiatic Lion",
    color: "bg-teal-600",
    about: "Gujarat is a dynamic land of enterprise and heritage, featuring India's longest coastline, the white salt deserts of Kutch, and rich textiles.",
    attractions: [
      { name: "Statue of Unity", desc: "The world's tallest statue (182 meters) dedicated to freedom fighter Sardar Vallabhbhai Patel.", category: "Modern" },
      { name: "Rann of Kutch", desc: "A seasonal salt marsh desert that shines like a silver sheet under a full moon night.", category: "Nature" },
      { name: "Gir National Park", desc: "The last remaining wild sanctuary of the majestic Asiatic Lion in the world.", category: "Nature" }
    ],
    quiz: [
      {
        question: "Gujarat is the exclusive natural home of which endangered big cat?",
        options: ["Royal Bengal Tiger", "Snow Leopard", "Asiatic Lion", "Indian Cheetah"],
        answerIndex: 2,
        explanation: "Gir National Park in Gujarat is the world's only natural sanctuary hosting the wild Asiatic Lion population."
      },
      {
        question: "Which world-famous Gujarati dance involves swinging wooden sticks in synchronous circles during Navratri?",
        options: ["Garba", "Ghoomar", "Dandiya Raas", "Bhangra"],
        answerIndex: 2,
        explanation: "Dandiya Raas is a high-energy traditional folk dance where dancers strike polished wooden sticks to standard rhythms."
      },
      {
        question: "Which historic stepwell in Patan, built in the 11th century, is featured on the Indian 100-rupee note?",
        options: ["Adalaj Stepwell", "Rani ki Vav", "Chand Baori", "Agrasen ki Baoli"],
        answerIndex: 1,
        explanation: "Rani ki Vav ('Queen's Stepwell') is an architectural masterpiece styled as an inverted temple on the banks of Saraswati."
      }
    ]
  },
  {
    id: "IN-UP",
    name: "Uttar Pradesh",
    capital: "Lucknow",
    region: "North",
    language: "Hindi, Urdu",
    food: "Tunday Kababi, Petha, Bedmi Poori",
    bestTime: "October to March",
    animal: "Swamp Deer (Barasingha)",
    color: "bg-red-600",
    about: "Uttar Pradesh is the heartland of Indian heritage, cradling the world-famous Taj Mahal, the ancient spiritual ghats of Varanasi, and delicious Awadhi food.",
    attractions: [
      { name: "Taj Mahal", desc: "The legendary white marble monument of love built by Mughal Emperor Shah Jahan.", category: "Heritage" },
      { name: "Varanasi Ghats", desc: "The world's oldest living spiritual city where priests conduct Ganga Aarti on ancient river banks.", category: "Spiritual" },
      { name: "Fatehpur Sikri", desc: "An outstanding red sandstone ghost city built by Emperor Akbar.", category: "Heritage" }
    ],
    quiz: [
      {
        question: "On the banks of which river is the iconic Taj Mahal in Agra situated?",
        options: ["Ganges", "Yamuna", "Saraswati", "Narmada"],
        answerIndex: 1,
        explanation: "The Taj Mahal stands beautifully on the southern bank of the Yamuna River in Agra, creating a stunning reflection."
      },
      {
        question: "Which UP city is widely considered the oldest continuously inhabited city in the world?",
        options: ["Lucknow", "Ayodhya", "Varanasi", "Prayagraj"],
        answerIndex: 2,
        explanation: "Varanasi, also known as Kashi or Banaras, has been a major spiritual and cultural hub on the Ganges for over 3,000 years."
      },
      {
        question: "What is the capital of Uttar Pradesh, widely celebrated for its rich Awadhi culture and Nawabi hospitality?",
        options: ["Kanpur", "Lucknow", "Agra", "Allahabad"],
        answerIndex: 1,
        explanation: "Lucknow is famous as the 'City of Nawabs', known for its polite demeanor (Tehzeeb), Chikankari embroidery, and Awadhi cuisines."
      }
    ]
  },
  {
    id: "IN-WB",
    name: "West Bengal",
    capital: "Kolkata",
    region: "East",
    language: "Bengali",
    food: "Machher Jhol, Luchi Alur Dom, Sandesh, Rosogolla",
    bestTime: "October to March",
    animal: "Fishing Cat",
    color: "bg-sky-600",
    about: "West Bengal is the cultural capital of India, displaying British colonial architecture, tea-carpeted Darjeeling hills, and the world's largest mangrove forest.",
    attractions: [
      { name: "Sundarbans National Park", desc: "The world's largest mangrove forest hosting the elusive Royal Bengal Tigers.", category: "Nature" },
      { name: "Victoria Memorial", desc: "A magnificent white marble monument in Kolkata dedicated to Queen Victoria.", category: "Modern" },
      { name: "Darjeeling Toy Train", desc: "A UNESCO-listed steam locomotive chugging through beautiful Himalayan foothills.", category: "Adventure" }
    ],
    quiz: [
      {
        question: "Which iconic bridge in Kolkata spans the Hooghly River without any support pillars in the riverbed?",
        options: ["Vidyasagar Setu", "Howrah Bridge", "Vivekananda Setu", "Nivedita Setu"],
        answerIndex: 1,
        explanation: "Howrah Bridge is a world-famous balanced cantilever bridge opened in 1943, serving as the gateway to Kolkata."
      },
      {
        question: "West Bengal shares the world's largest delta with Bangladesh. What is it called?",
        options: ["Ganges Delta (Sundarbans)", "Mahanadi Delta", "Godavari Delta", "Cauvery Delta"],
        answerIndex: 0,
        explanation: "The Sundarbans delta is a dense network of tidal waterways and salt-tolerant mangrove forests hosting rich wildlife."
      },
      {
        question: "Which Nobel laureate poet from West Bengal composed India's national anthem 'Jana Gana Mana'?",
        options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Kazi Nazrul Islam", "Satyajit Ray"],
        answerIndex: 1,
        explanation: "Rabindranath Tagore was the first non-European to win a Nobel Prize in 1913, and he penned anthems for both India and Bangladesh."
      }
    ]
  },
  {
    id: "IN-MP",
    name: "Madhya Pradesh",
    capital: "Bhopal",
    region: "Central",
    language: "Hindi",
    food: "Poha Jalebi, Bhutte Ka Kees, Dal Bafla",
    bestTime: "October to March",
    animal: "Barasingha",
    color: "bg-lime-600",
    about: "The 'Heart of India', Madhya Pradesh is rich in dense teak forests, magnificent tiger sanctuaries, and legendary ancient stone structures.",
    attractions: [
      { name: "Khajuraho Temples", desc: "Ornate UNESCO-listed temples featuring intricate medieval carvings and sculptures.", category: "Heritage" },
      { name: "Sanchi Stupa", desc: "One of the oldest stone structures in India built by Emperor Ashoka over relics of Lord Buddha.", category: "Spiritual" },
      { name: "Kanha National Park", desc: "The inspiration for Rudyard Kipling's 'The Jungle Book', packed with sal forests and tigers.", category: "Nature" }
    ],
    quiz: [
      {
        question: "Which rock art sanctuary in MP features cave paintings dating back to the Paleolithic era?",
        options: ["Bhimbetka", "Pachmarhi", "Udayagiri", "Bagh Caves"],
        answerIndex: 0,
        explanation: "The Bhimbetka Rock Shelters exhibit some of the earliest traces of human life in the Indian subcontinent."
      },
      {
        question: "Which animal from MP's Kanha forest inspired Rudyard Kipling to create the famous characters of 'The Jungle Book'?",
        options: ["Bengal Tiger (Sher Khan)", "Indian Leopard (Bagheera)", "Sloth Bear (Baloo)", "All of the above"],
        answerIndex: 3,
        explanation: "Kipling's masterpiece was heavily inspired by the rich wildlife and dense teak woods of Seoni and Kanha in Central India."
      },
      {
        question: "Which dynasty constructed the world-famous carved stone temples of Khajuraho between 950 and 1050 AD?",
        options: ["Chandela Dynasty", "Gupta Dynasty", "Maurya Dynasty", "Chola Dynasty"],
        answerIndex: 0,
        explanation: "The Chandela Rajputs built the Khajuraho temples, which represent a high peak of medieval North Indian architecture."
      }
    ]
  },
  {
    id: "IN-PB",
    name: "Punjab",
    capital: "Chandigarh",
    region: "North",
    language: "Punjabi",
    food: "Sarson ka Saag & Makki di Roti, Butter Chicken",
    bestTime: "October to March",
    animal: "Blackbuck",
    color: "bg-amber-500",
    about: "Punjab, the 'Land of Five Rivers', is famous for its thriving agricultural fields, high-energy Bhangra beats, and deep spiritual landmarks.",
    attractions: [
      { name: "The Golden Temple", desc: "The holy center of Sikhism, coated in pure gold and hosting the world's largest community kitchen.", category: "Spiritual" },
      { name: "Wagah Border", desc: "A thrilling daily military flag-lowering ceremony conducted between India and Pakistan.", category: "Modern" },
      { name: "Rock Garden", desc: "A unique park in neighboring Chandigarh built entirely from industrial and domestic waste.", category: "Modern" }
    ],
    quiz: [
      {
        question: "What is the famous community kitchen of the Golden Temple called, serving over 100,000 free meals daily?",
        options: ["Langar", "Prasadam", "Bhoj", "Bhandara"],
        answerIndex: 0,
        explanation: "The Langar represents equality, where all people sit on the floor together to share a free vegetarian meal prepared by volunteers."
      },
      {
        question: "Punjab means 'The Land of Five Rivers'. Which of these rivers does NOT flow through the historic Punjab region?",
        options: ["Sutlej", "Beas", "Ravi", "Narmada"],
        answerIndex: 3,
        explanation: "The five rivers of Punjab are Sutlej, Beas, Ravi, Chenab, and Jhelum. Narmada flows through Central India."
      },
      {
        question: "Which high-energy folk dance of Punjab is traditionally performed by men during the harvest festival of Vaisakhi?",
        options: ["Gidha", "Bhangra", "Jhumar", "Kikli"],
        answerIndex: 1,
        explanation: "Bhangra is Punjab's iconic harvest dance performed to the heavy, mesmerizing beats of the traditional Dhol drum."
      }
    ]
  },
  {
    id: "IN-AS",
    name: "Assam",
    capital: "Dispur",
    region: "Northeast",
    language: "Assamese",
    food: "Masor Tenga (Sour Fish Curry), Khar",
    bestTime: "November to April",
    animal: "One-horned Rhinoceros",
    color: "bg-green-700",
    about: "Assam is the gateway to the Northeast, famous for its lush rolling tea gardens, the mighty Brahmaputra River, and rare wildlife.",
    attractions: [
      { name: "Kaziranga National Park", desc: "The world's premier sanctuary hosting two-thirds of the world's Great One-horned Rhinoceroses.", category: "Nature" },
      { name: "Kamakhya Temple", desc: "An ancient, highly revered hill temple dedicated to the mother goddess Kamakhya.", category: "Spiritual" },
      { name: "Majuli Island", desc: "The world's largest fresh-water river island, cradled in the Brahmaputra River.", category: "Nature" }
    ],
    quiz: [
      {
        question: "Assam is world-famous for its high-quality beverage exports. What is it?",
        options: ["Coffee", "Assam Tea", "Apple Cider", "Cardamom Wine"],
        answerIndex: 1,
        explanation: "Assam is the largest tea-growing region in the world, with its rich, full-bodied malty flavor loved globally."
      },
      {
        question: "What is the state festival of Assam, celebrated three times a year to mark agricultural stages?",
        options: ["Hornbill Festival", "Bihu", "Wangala", "Losar"],
        answerIndex: 1,
        explanation: "Bihu is Assam's soul festival, featuring exquisite folk songs and dances performed in colorful traditional muga silk attire."
      },
      {
        question: "Which major river, one of the largest in Asia, flows directly through the heart of Assam?",
        options: ["Ganges", "Indus", "Brahmaputra", "Godavari"],
        answerIndex: 2,
        explanation: "The mighty Brahmaputra River defines the geography, ecology, and livelihoods of the Assam valley."
      }
    ]
  },
  {
    id: "IN-AP",
    name: "Andhra Pradesh",
    capital: "Amaravati",
    region: "South",
    language: "Telugu",
    food: "Gongura Pachadi, Hyderabadi-style Biryani, Pootharekulu",
    bestTime: "November to February",
    animal: "Blackbuck",
    color: "bg-cyan-600",
    about: "Andhra Pradesh boasts beautiful coastal lines, legendary rich spice food, ancient Buddhist sites, and one of the world's most visited temples.",
    attractions: [
      { name: "Tirumala Venkateswara Temple", desc: "A majestic temple on Tirumala hills that attracts millions of devotees worldwide.", category: "Spiritual" },
      { name: "Araku Valley", desc: "A scenic hill station known for rich coffee plantations, waterfalls, and indigenous tribes.", category: "Nature" },
      { name: "Belum Caves", desc: "The second largest cave system in the Indian subcontinent, famous for quartz formations.", category: "Nature" }
    ],
    quiz: [
      {
        question: "Which classical dance of India, known for rhythmic footwork and plate-balancing, originated in Andhra Pradesh?",
        options: ["Kathakali", "Kuchipudi", "Kathak", "Mohiniyattam"],
        answerIndex: 1,
        explanation: "Kuchipudi originated in the village of Kuchipudi in Andhra Pradesh and features dramatic dance-drama storytelling."
      },
      {
        question: "Andhra Pradesh is historically called the 'Egg Bowl of Asia'. Why?",
        options: ["Large poultry farming industries", "Unique egg-shaped caves", "Traditional egg painting art", "State geological shape"],
        answerIndex: 0,
        explanation: "Andhra Pradesh is one of the leading producers and exporters of poultry and eggs in India."
      },
      {
        question: "Which river, often called the 'Ganges of the South', flows extensively through Andhra Pradesh?",
        options: ["Godavari", "Krishna", "Kaveri", "Penna"],
        answerIndex: 0,
        explanation: "The Godavari is India's second longest river and flows beautifully through Andhra Pradesh before entering the Bay of Bengal."
      }
    ]
  },
  {
    id: "IN-TG",
    name: "Telangana",
    capital: "Hyderabad",
    region: "South",
    language: "Telugu, Urdu",
    food: "Hyderabadi Biryani, Haleem, Qubani ka Meetha",
    bestTime: "November to February",
    animal: "Spotted Deer",
    color: "bg-indigo-600",
    about: "Formed in 2014, Telangana showcases a rich legacy of Nizami architecture, world-famous IT hubs, delicious royal biryanis, and ancient heritage temples.",
    attractions: [
      { name: "Charminar", desc: "A landmark mosque built in 1591 featuring four majestic arches and minarets in Hyderabad.", category: "Heritage" },
      { name: "Golconda Fort", desc: "A massive fort complex renowned for its brilliant acoustics and ancient diamond mines.", category: "Heritage" },
      { name: "Ramappa Temple", desc: "A UNESCO-listed temple famous for floating bricks and exquisite Kakatiya stone carvings.", category: "Spiritual" }
    ],
    quiz: [
      {
        question: "Which historic monument in Hyderabad was built in 1591 to celebrate the end of a deadly plague?",
        options: ["Qutb Shahi Tombs", "Charminar", "Mecca Masjid", "Chowmahalla Palace"],
        answerIndex: 1,
        explanation: "Sultan Muhammad Quli Qutb Shah constructed the iconic Charminar ('Four Minarets') in the heart of Hyderabad."
      },
      {
        question: "Which famous diamond, once the largest in the world, was mined from Telangana's Kollur Mine?",
        options: ["Hope Diamond", "Koh-i-Noor", "Orlov Diamond", "Regent Diamond"],
        answerIndex: 1,
        explanation: "The legendary Koh-i-Noor ('Mountain of Light') diamond was mined from the Kakatiya-ruled Kollur mines of Telangana."
      },
      {
        question: "What unique craft of Telangana involves hand-casting exquisite bell-metal artifacts using lost-wax methods?",
        options: ["Bidriware", "Dhokra Metal Craft", "Pochampally Ikat", "Cheriyal Scrolls"],
        answerIndex: 1,
        explanation: "Dhokra is a beautiful tribal metal craft using lost-wax casting that has been practiced for over 4,000 years."
      }
    ]
  },
  {
    id: "IN-JK",
    name: "Jammu & Kashmir",
    capital: "Srinagar (Summer) & Jammu (Winter)",
    region: "Union Territory",
    language: "Kashmiri, Dogri, Urdu",
    food: "Rogan Josh, Gustaba, Kahwa (Saffron Tea)",
    bestTime: "March to October",
    animal: "Hangul (Kashmir Stag)",
    color: "bg-sky-500",
    about: "J&K is the 'Heaven on Earth', famed for its majestic snow-capped peaks, placid lakes reflecting wooden houseboats, and sweet saffron fields.",
    attractions: [
      { name: "Dal Lake", desc: "The jewel of Srinagar, featuring colorful Shikara boat rides and historic floating gardens.", category: "Nature" },
      { name: "Gulmarg", desc: "A high-altitude meadow hosting the world's highest cable car (Gondola) and ski slopes.", category: "Adventure" },
      { name: "Shalimar Bagh", desc: "A stunning terraced Mughal garden built by Emperor Jehangir for his wife Noor Jahan.", category: "Heritage" }
    ],
    quiz: [
      {
        question: "Which traditional warm beverage of Kashmir is brewed with green tea, saffron, cinnamon, and almonds?",
        options: ["Chai", "Kahwa", "Noon Chai", "Lassi"],
        answerIndex: 1,
        explanation: "Kahwa is Kashmir's signature aromatic hospitality drink, brewed in a traditional copper kettle called a Samovar."
      },
      {
        question: "Kashmir is the exclusive Indian producer of which highly expensive, premium crimson spice?",
        options: ["Saffron", "Vanilla", "Green Cardamom", "Nutmeg"],
        answerIndex: 0,
        explanation: "Kashmir Saffron (Kesar), grown in Pampore, is legendary for its deep aroma, dark color, and high quality."
      },
      {
        question: "What are the traditional wooden boats called that are used to transport people and sell flowers on Dal Lake?",
        options: ["Houseboats", "Shikaras", "Dhows", "Kettuvallams"],
        answerIndex: 1,
        explanation: "Shikaras are elegant, flat-bottomed wooden taxi-boats that define the serene lifestyle of Srinagar's water channels."
      }
    ]
  },
  {
    id: "IN-HP",
    name: "Himachal Pradesh",
    capital: "Shimla",
    region: "North",
    language: "Hindi, Pahari",
    food: "Siddu, Dham, Madra",
    bestTime: "March to June",
    animal: "Snow Leopard",
    color: "bg-violet-600",
    about: "Himachal Pradesh is a snowy wonderland, packed with dramatic valley ridges, dense pine forests, Buddhist monasteries, and high-adrenaline ski slopes.",
    attractions: [
      { name: "Solang Valley", desc: "A high-altitude valley famous for paragliding, skiing, and panoramic mountain views.", category: "Adventure" },
      { name: "Kaza & Spiti Valley", desc: "A cold desert mountain valley home to ancient, fortress-like Buddhist monasteries.", category: "Nature" },
      { name: "Shimla Mall Road", desc: "A historic pedestrian avenue with colonial-era architecture and scenic views.", category: "Modern" }
    ],
    quiz: [
      {
        question: "Which town in Himachal is the official residence of the 14th Dalai Lama and the center of Tibetan culture in exile?",
        options: ["Manali", "Dharamshala (McLeod Ganj)", "Shimla", "Kullu"],
        answerIndex: 1,
        explanation: "McLeod Ganj, a suburb of Dharamshala, is called 'Little Lhasa' as it serves as the spiritual home of Tibetan Buddhists."
      },
      {
        question: "What is Himachal's state animal that is highly adapted to the freezing high-altitude Spiti desert?",
        options: ["Snow Leopard", "Himalayan Yak", "Musk Deer", "Brown Bear"],
        answerIndex: 0,
        explanation: "The beautiful, elusive Snow Leopard ('Ghost of the Mountains') is Himachal Pradesh's state animal."
      },
      {
        question: "Which toy train route in Himachal, constructed in 1903, is a UNESCO World Heritage site?",
        options: ["Darjeeling Toy Train", "Kalka-Shimla Railway", "Nilgiri Mountain Railway", "Matheran Hill Railway"],
        answerIndex: 1,
        explanation: "The Kalka-Shimla railway is an engineering marvel featuring 103 tunnels and over 800 stone bridge arches."
      }
    ]
  },
  {
    id: "IN-UT",
    name: "Uttarakhand",
    capital: "Dehradun (Winter) & Gairsain (Summer)",
    region: "North",
    language: "Hindi, Garhwali, Kumaoni",
    food: "Kafuli, Aloo ke Gutke, Singori",
    bestTime: "March to June / October to February",
    animal: "Alpine Musk Deer",
    color: "bg-cyan-700",
    about: "Uttarakhand, the 'Land of Gods', is a sacred mountainous sanctuary where the holy Ganges originates, and yoga centers thrive.",
    attractions: [
      { name: "Rishikesh", desc: "The Yoga Capital of the World, situated on the banks of the roaring emerald Ganges.", category: "Spiritual" },
      { name: "Valley of Flowers", desc: "A UNESCO-listed high-altitude alpine meadow carpeted in thousands of wild flowers.", category: "Nature" },
      { name: "Nainital Lake", desc: "A beautiful pear-shaped emerald lake surrounded by steep mountain ridges.", category: "Nature" }
    ],
    quiz: [
      {
        question: "Where in Uttarakhand do the Alaknanda and Bhagirathi rivers merge to officially form the Ganges?",
        options: ["Rishikesh", "Devprayag", "Haridwar", "Gangotri"],
        answerIndex: 1,
        explanation: "Devprayag is one of the five sacred confluences (Panch Prayag) where the holy Ganges river is born."
      },
      {
        question: "What is Rishikesh internationally celebrated as, attracting bands like The Beatles in the 1960s?",
        options: ["Adventure Capital of India", "Yoga Capital of the World", "Spice Capital of the North", "Valley of Monks"],
        answerIndex: 1,
        explanation: "The Beatles' visit to Maharishi Mahesh Yogi's ashram in Rishikesh in 1968 popularized Indian spiritualism globally."
      },
      {
        question: "Which oldest national park of India, established in 1936 to protect Royal Bengal Tigers, is in Uttarakhand?",
        options: ["Jim Corbett National Park", "Kaziranga Park", "Sundarbans Park", "Gir Park"],
        answerIndex: 0,
        explanation: "Jim Corbett National Park was established as Hailey National Park and is famous for tiger conservation and river safaris."
      }
    ]
  },
  {
    id: "IN-OR",
    name: "Odisha",
    capital: "Bhubaneswar",
    region: "East",
    language: "Odia",
    food: "Dalma, Pakhala Bhata, Chhena Poda (Burnt Cheese Dessert)",
    bestTime: "October to March",
    animal: "Sambar Deer",
    color: "bg-amber-700",
    about: "Odisha is a hidden coastal treasure, home to towering medieval stone temples, pristine salt lakes, and centuries-old classical arts.",
    attractions: [
      { name: "Konark Sun Temple", desc: "A 13th-century architectural marvel styled as a colossal chariot of the Sun God.", category: "Heritage" },
      { name: "Jagannath Temple (Puri)", desc: "A historic coastal temple famous for the majestic annual Ratha Yatra chariot festival.", category: "Spiritual" },
      { name: "Chilika Lake", desc: "Asia's largest brackish water lagoon, hosting migrating birds and rare Irrawaddy dolphins.", category: "Nature" }
    ],
    quiz: [
      {
        question: "Which medieval Odisha temple is shaped as a colossal stone chariot with 24 intricately carved stone wheels?",
        options: ["Jagannath Temple", "Lingaraj Temple", "Konark Sun Temple", "Mukteshwar Temple"],
        answerIndex: 2,
        explanation: "The Konark Sun Temple, built by King Narasimhadeva I, is designed as a chariot pulled by seven stone horses."
      },
      {
        question: "What is Odisha's world-famous burnt-cottage-cheese dessert, created in Nayagarh in the 1940s?",
        options: ["Rasgulla", "Chhena Poda", "Sandesh", "Rasmalai"],
        answerIndex: 1,
        explanation: "Chhena Poda literally means 'Burnt Cheese' in Odia, made by baking sweetened cottage cheese for hours until it caramelizes."
      },
      {
        question: "Which ancient emperor converted to Buddhism after witnessing the heavy bloodshed in the Kalinga War in Odisha?",
        options: ["Chandragupta Maurya", "Emperor Ashoka", "Harsha Vardhana", "Kanishka"],
        answerIndex: 1,
        explanation: "Ashoka the Great embraced Buddhism and non-violence in 261 BC after being moved by the tragedy of the Kalinga War."
      }
    ]
  },
  {
    id: "IN-BR",
    name: "Bihar",
    capital: "Patna",
    region: "East",
    language: "Hindi, Maithili, Bhojpuri",
    food: "Litti Chokha, Sattu Paratha, Khaja",
    bestTime: "October to March",
    animal: "Gaur (Bison)",
    color: "bg-red-500",
    about: "Bihar is the cradle of ancient religions, where Prince Siddhartha attained enlightenment to become Buddha, and the world's oldest university thrived.",
    attractions: [
      { name: "Mahabodhi Temple (Bodh Gaya)", desc: "The sacred UNESCO temple marking the exact spot where Lord Buddha attained enlightenment.", category: "Spiritual" },
      { name: "Nalanda University Ruins", desc: "The archaeological ruins of the world's premier 5th-century residential university.", category: "Heritage" },
      { name: "Rajgir", desc: "A historic valley enclosed by hills, famous for warm hot springs and Buddhist shrines.", category: "Nature" }
    ],
    quiz: [
      {
        question: "Under which tree did Siddhartha Gautama meditate in Bodh Gaya, Bihar, to attain Supreme Enlightenment?",
        options: ["Banyan Tree", "Bodhi Tree (Peepal)", "Mango Tree", "Sal Tree"],
        answerIndex: 1,
        explanation: "Prince Siddhartha attained Buddhahood under the sacred Bodhi Tree, which remains a premier global pilgrimage spot."
      },
      {
        question: "What is Bihar's iconic dish, consisting of wheat flour dough balls stuffed with roasted chickpea flour (sattu)?",
        options: ["Litti Chokha", "Dal Baati", "Samosa", "Kachori"],
        answerIndex: 0,
        explanation: "Litti Chokha is Bihar's highly nutritious rustic food, traditionally baked over charcoal and served with mashed vegetables (Chokha)."
      },
      {
        question: "Which ancient, highly intricate folk painting style using natural dyes originates in Bihar's Mithila region?",
        options: ["Warli Art", "Madhubani Painting", "Pattachitra", "Kalighat Art"],
        answerIndex: 1,
        explanation: "Madhubani paintings are traditionally made by Mithila women using fingers, twigs, and brushes to depict nature and mythology."
      }
    ]
  },
  {
    id: "IN-GA",
    name: "Goa",
    capital: "Panaji",
    region: "West",
    language: "Konkani",
    food: "Fish Curry Rice, Bebinca (Layered Cake), Vindaloo",
    bestTime: "November to February",
    animal: "Gaur (Bison)",
    color: "bg-sky-700",
    about: "Goa is India's pocket-sized paradise, famed for its golden sandy beaches, elegant 16th-century Portuguese churches, spices, and energetic nightlife.",
    attractions: [
      { name: "Calangute & Baga Beaches", desc: "Energetic coastal shores famous for water sports, beach shacks, and music.", category: "Nature" },
      { name: "Basilica of Bom Jesus", desc: "A UNESCO-listed church holding the sacred, preserved remains of St. Francis Xavier.", category: "Spiritual" },
      { name: "Dudhsagar Falls", desc: "A towering four-tiered waterfall on the Mandovi river that looks like a sea of milk.", category: "Nature" }
    ],
    quiz: [
      {
        question: "Goa was a colony of which European power for 450 years, until liberated by India in 1961?",
        options: ["Great Britain", "France", "Portugal", "Netherlands"],
        answerIndex: 2,
        explanation: "Goa was colonized by Portugal in 1510 and remained an overseas territory until liberated by Indian Armed Forces."
      },
      {
        question: "What is Goa's traditional multi-layered dessert made of flour, coconut milk, egg yolk, and ghee?",
        options: ["Bebinca", "Dodol", "Serradura", "Bol"],
        answerIndex: 0,
        explanation: "Bebinca is Goa's 'Queen of Desserts', featuring 7 to 16 rich baked layers representing local culinary synthesis."
      },
      {
        question: "What is the name of the traditional alcoholic beverage of Goa brewed from cashew apples or coconut sap?",
        options: ["Feni", "Toddy", "Arak", "Soma"],
        answerIndex: 0,
        explanation: "Feni has a GI (Geographical Indication) tag and is extensively hand-distilled in rural Goan orchards."
      }
    ]
  },
  {
    id: "IN-AN",
    name: "Andaman & Nicobar Islands",
    capital: "Sri Vijaya Puram (Port Blair)",
    region: "Union Territory",
    language: "Hindi, English, Bengali, Tamil, Telugu",
    food: "Seafood Platter, Fish Curry, Coconut Prawn Curry",
    bestTime: "October to May",
    animal: "Dugong (Sea Cow)",
    color: "bg-teal-700",
    about: "The Andaman & Nicobar Islands are a tropical archipelago in the Bay of Bengal, celebrated for their pristine white-sand beaches, emerald-blue waters, rich marine life, and historic colonial sites.",
    attractions: [
      { name: "Radhanagar Beach (Havelock)", desc: "Often rated as one of Asia's finest beaches, known for its soft white sand and magnificent sunsets.", category: "Nature" },
      { name: "Cellular Jail (Kala Pani)", desc: "The historic colonial prison in Port Blair where Indian freedom fighters were exiled.", category: "Heritage" },
      { name: "Baratang Island Caves", desc: "Exotic limestone caves surrounded by dense mangrove forests and indigenous tribes.", category: "Adventure" }
    ],
    quiz: [
      {
        question: "Which historic colonial prison in Port Blair, Andaman & Nicobar is famously known as 'Kala Pani'?",
        options: ["Yerwada Jail", "Cellular Jail", "Tihar Jail", "Alipore Jail"],
        answerIndex: 1,
        explanation: "Cellular Jail, completed in 1906, was used by the British to exile political prisoners under harsh, solitary conditions."
      },
      {
        question: "What is the official state animal of the Andaman & Nicobar Islands, also known as the sea cow?",
        options: ["Dugong", "Dolphin", "Otter", "Sea Lion"],
        answerIndex: 0,
        explanation: "The Dugong (sea cow) is a gentle marine mammal that feeds on seagrass beds surrounding the islands."
      },
      {
        question: "Which island in the Andaman archipelago is home to India's only active volcano?",
        options: ["Havelock Island", "Barren Island", "Neil Island", "Ross Island"],
        answerIndex: 1,
        explanation: "Barren Island houses the only active volcano in South Asia and the Indian subcontinent."
      }
    ]
  },
  {
    id: "IN-LA",
    name: "Ladakh",
    capital: "Leh",
    region: "Union Territory",
    language: "Ladakhi, Tibetan, Balti, Urdu",
    food: "Thukpa, Skyu, Chhurpi (Yak Cheese)",
    bestTime: "April to July (Summer)",
    animal: "Snow Leopard",
    color: "bg-amber-600",
    about: "Ladakh, the 'Land of High Passes', is a high-altitude cold desert in the Himalayas, famous for its dramatic barren landscapes, turquoise glacial lakes, and ancient Tibetan Buddhist monasteries.",
    attractions: [
      { name: "Pangong Tso Lake", desc: "A magnificent endorheic lake stretching from India to China that changes color through shades of blue and green.", category: "Nature" },
      { name: "Nubra Valley", desc: "A dramatic deep-cut valley known for sand dunes, double-humped Bactrian camels, and high passes.", category: "Adventure" },
      { name: "Hemis Monastery", desc: "A legendary 17th-century Tibetan Buddhist monastery hosting the colorful annual Hemis festival.", category: "Spiritual" }
    ],
    quiz: [
      {
        question: "Which spectacular brackish lake in Ladakh is famous for changing colors from turquoise to deep blue, and is shared with Tibet?",
        options: ["Dal Lake", "Tso Moriri", "Pangong Tso", "Chilika Lake"],
        answerIndex: 2,
        explanation: "Pangong Tso is a legendary salt-water lake situated at almost 4,350 meters altitude, spanning India and China."
      },
      {
        question: "Which unique animal, famous for carrying passengers on the sand dunes of Nubra Valley, is native to Ladakh?",
        options: ["One-humped Camel", "Bactrian Camel (Two-humped)", "Yak", "Tibetan Wild Ass"],
        answerIndex: 1,
        explanation: "Bactrian camels are double-humped camels native to the steppes of Central Asia, famously ridden in Ladakh's high altitudes."
      },
      {
        question: "Which of the following is Ladakh's state animal, symbolizing the high-altitude cold desert wildlife?",
        options: ["Red Panda", "Snow Leopard", "Himalayan Ibex", "Musk Deer"],
        answerIndex: 1,
        explanation: "The elusive and majestic Snow Leopard is the state animal of Ladakh, thriving in the Hemis National Park region."
      }
    ]
  },
  {
    id: "IN-DL",
    name: "Delhi",
    capital: "New Delhi",
    region: "Union Territory",
    language: "Hindi, Punjabi, Urdu, English",
    food: "Chole Bhature, Butter Chicken, Paranthas",
    bestTime: "October to March",
    animal: "Nilgai (Blue Bull)",
    color: "bg-red-700",
    about: "Delhi, the historic capital of India, seamlessly bridges ancient empires and modern metropolis. It houses magnificent Mughal fortresses, vibrant bazaars, and grand colonial architecture.",
    attractions: [
      { name: "Red Fort", desc: "The iconic red sandstone palace fort built by Mughal Emperor Shah Jahan in the 17th century.", category: "Heritage" },
      { name: "Qutub Minar", desc: "The world's tallest brick minaret, built in 1192 by Qutb-ud-din Aibak.", category: "Heritage" },
      { name: "Lotus Temple", desc: "A stunning lotus-shaped Bahai House of Worship celebrated for its peaceful silence and modern design.", category: "Spiritual" }
    ],
    quiz: [
      {
        question: "Which iconic red sandstone fortress in Delhi is the site of the Prime Minister's national address every Independence Day?",
        options: ["Humayun's Tomb", "Purana Qila", "Red Fort", "Tughlaqabad Fort"],
        answerIndex: 2,
        explanation: "The Red Fort (Lal Qila) was constructed in 1638 and serves as a powerful symbol of Indian national sovereignty."
      },
      {
        question: "Which 73-meter brick minaret in Delhi was built in the late 12th century as a victory tower?",
        options: ["Charminar", "Qutub Minar", "Gol Gumbaz", "Chand Minar"],
        answerIndex: 1,
        explanation: "Qutub Minar is a magnificent 5-storey victory tower and UNESCO World Heritage site situated in Mehrauli."
      },
      {
        question: "What is the official state animal of the National Capital Territory of Delhi?",
        options: ["Nilgai", "Chinkara", "Leopard", "Indian Hare"],
        answerIndex: 0,
        explanation: "The Nilgai or Blue Bull is the largest Asian antelope and is the state animal of Delhi, commonly seen in its forested ridges."
      }
    ]
  },
  {
    id: "IN-PY",
    name: "Puducherry",
    capital: "Puducherry",
    region: "Union Territory",
    language: "Tamil, French, English, Telugu, Malayalam",
    food: "French Baguettes, Crepes, Kadugu Yera (Mustard Prawns)",
    bestTime: "October to March",
    animal: "Squirrel (Indian Palm Squirrel)",
    color: "bg-yellow-600",
    about: "Puducherry, affectionately known as 'Pondy' or 'The French Riviera of the East', is a beautiful coastal Union Territory featuring mustard-colored colonial villas, leafy avenues, pristine beaches, and spiritual sanctuaries.",
    attractions: [
      { name: "White Town", desc: "A preserved French Quarter filled with mustard colonial houses, boutique cafes, and chic shops.", category: "Heritage" },
      { name: "Auroville", desc: "An experimental township founded by Mirra Alfassa (The Mother) aimed at human unity, centered around the golden Matrimandir.", category: "Spiritual" },
      { name: "Promenade Beach", desc: "A beautiful rocky beach boulevard popular for evening strolls and ocean views.", category: "Nature" }
    ],
    quiz: [
      {
        question: "Which experimental international township near Puducherry features the magnificent golden-domed Matrimandir?",
        options: ["Auroville", "Sri Aurobindo Ashram", "White Town", "Shantiniketan"],
        answerIndex: 0,
        explanation: "Auroville was founded in 1968 to realize human unity, housing a spectacular sphere paneled in gold."
      },
      {
        question: "Puducherry preserves a rich colonial legacy from which European country?",
        options: ["Portugal", "Great Britain", "France", "Netherlands"],
        answerIndex: 2,
        explanation: "The French East India Company established its headquarters in Puducherry in 1674, deeply influencing its urban layout and cuisine."
      },
      {
        question: "What is the famous beachfront boulevard in Puducherry that is lined with heritage buildings and a statue of Mahatma Gandhi?",
        options: ["Marina Beach", "Gopalpur Beach", "Promenade Beach", "Varkala Beach"],
        answerIndex: 2,
        explanation: "Promenade Beach is a beautiful 1.5-km oceanfront avenue that becomes a traffic-free pedestrian zone after sunset."
      }
    ]
  },
  {
    id: "IN-LD",
    name: "Lakshadweep",
    capital: "Kavaratti",
    region: "Union Territory",
    language: "Jeseri, Malayalam, Dhivehi, English",
    food: "Coconut Octopus Fry, Fish Curry, Mus Kavaab",
    bestTime: "October to May",
    animal: "Butterfly Fish",
    color: "bg-teal-500",
    about: "Lakshadweep, meaning 'a hundred thousand islands', is India's smallest Union Territory. It is a breathtaking group of 36 coral islands in the Laccadive Sea, famous for pristine white-sand shores, shallow turquoise lagoons, and rich marine life.",
    attractions: [
      { name: "Bangaram Atoll", desc: "An uninhabited tropical teardrop-shaped island with sparkling blue lagoons and superb diving sites.", category: "Nature" },
      { name: "Agatti Island", desc: "A stunning gateway island featuring a narrow landing strip surrounded by endless turquoise sea on both sides.", category: "Adventure" },
      { name: "Kadmat Island", desc: "An eco-haven known for cardamom plantations, coral reefs, and water sports.", category: "Adventure" }
    ],
    quiz: [
      {
        question: "What is the capital of India's tropical coral archipelago, Lakshadweep?",
        options: ["Port Blair", "Kavaratti", "Agatti", "Minicoy"],
        answerIndex: 1,
        explanation: "Kavaratti is the administrative capital of Lakshadweep, known for its pristine sandy beaches and beautiful white mosques."
      },
      {
        question: "Which type of geological formations primarily make up the beautiful islands of Lakshadweep?",
        options: ["Volcanic Rocks", "Sedimentary Basins", "Coral Reefs (Atolls)", "Granite Massifs"],
        answerIndex: 2,
        explanation: "Lakshadweep is entirely made up of coral atolls, barrier reefs, and sand banks, hosting rich marine ecosystems."
      },
      {
        question: "What is the official state animal of Lakshadweep, representing its vibrant marine ecosystem?",
        options: ["Dugong", "Butterfly Fish", "Green Sea Turtle", "Dolphin"],
        answerIndex: 1,
        explanation: "The ornate, bright yellow and black Butterfly Fish is the state animal, swimming across the coral reef shallow waters."
      }
    ]
  },
  {
    id: "IN-CH",
    name: "Chandigarh",
    capital: "Chandigarh",
    region: "Union Territory",
    language: "Punjabi, Hindi, English",
    food: "Chole Bhature, Butter Chicken, Paneer Tikka",
    bestTime: "October to March",
    animal: "Indian Gray Mongoose",
    color: "bg-gray-600",
    about: "Chandigarh is a prestigious, beautifully planned city designed by legendary Swiss-French architect Le Corbusier. Serving as the joint capital of both Punjab and Haryana, it is renowned for its grid-planned sectors, clean green gardens, and modernist buildings.",
    attractions: [
      { name: "The Rock Garden", desc: "An extraordinary 40-acre park sculpted entirely from industrial and recycled domestic waste by Nek Chand.", category: "Modern" },
      { name: "Sukhna Lake", desc: "A scenic rain-fed artificial lake at the foothills of the Shivalik range, perfect for boating and sunsets.", category: "Nature" },
      { name: "Le Corbusier Centre", desc: "A fascinating museum dedicated to the architectural heritage and planning of the modern city.", category: "Heritage" }
    ],
    quiz: [
      {
        question: "Which world-famous Swiss-French master architect laid out the modernist urban plan of Chandigarh?",
        options: ["Le Corbusier", "Frank Lloyd Wright", "Edwin Lutyens", "Laurie Baker"],
        answerIndex: 0,
        explanation: "Le Corbusier planned the city in the 1950s using a grid system, sector-wise self-sufficiency, and raw concrete monuments."
      },
      {
        question: "What extraordinary sculpture park in Chandigarh was created secretly by Nek Chand out of waste materials?",
        options: ["Garden of Silence", "Pinjore Gardens", "The Rock Garden", "Rose Garden"],
        answerIndex: 2,
        explanation: "The Rock Garden is famous for thousands of figures made of glass bottles, tiles, broken crockery, and light fixtures."
      },
      {
        question: "Which mountain range stands as a beautiful natural backdrop at Chandigarh's northern horizon?",
        options: ["Western Ghats", "Shivalik Hills", "Aravalli Range", "Vindhya Range"],
        answerIndex: 1,
        explanation: "The Shivalik Hills, the outermost foothills of the Himalayas, flank the city to the north, offering wonderful views."
      }
    ]
  },
  {
    id: "IN-DN",
    name: "Dadra & Nagar Haveli and Daman & Diu",
    capital: "Daman",
    region: "Union Territory",
    language: "Gujarati, Hindi, Konkani, Portuguese",
    food: "Dobra (Fish Curry), Ubadiyu, Seafood Biryani",
    bestTime: "October to March",
    animal: "Rust-Spotted Cat",
    color: "bg-emerald-700",
    about: "This united coastal Union Territory on India's western shores merges historic Portuguese fortresses, tranquil beaches, and lush inland forests, celebrating an exotic blend of tribal traditions and European influences.",
    attractions: [
      { name: "Moti Daman Fort", desc: "A monumental 16th-century Portuguese fortress housing grand cathedrals and administrative monuments.", category: "Heritage" },
      { name: "Jallandhar Beach", desc: "A pristine, serene beach in Diu shaded by casuarina trees, perfect for relaxing.", category: "Nature" },
      { name: "Vanganga Lake Garden", desc: "A beautiful Japanese-style landscaped lake garden located in Silvassa.", category: "Nature" }
    ],
    quiz: [
      {
        question: "Which European country ruled Daman and Diu for over 450 years before they were incorporated into India in 1961?",
        options: ["Great Britain", "France", "Portugal", "Netherlands"],
        answerIndex: 2,
        explanation: "Like Goa, Daman and Diu were Portuguese enclaves and colonies on the west coast of India until liberation in 1961."
      },
      {
        question: "What is the capital city of the merged Union Territory of Dadra & Nagar Haveli and Daman & Diu?",
        options: ["Silvassa", "Daman", "Diu", "Panaji"],
        answerIndex: 1,
        explanation: "Daman, located on the Gulf of Khambhat, is the administrative headquarters and capital of the merged territory."
      },
      {
        question: "Silvassa, a picturesque town famous for wildlife sanctuaries and tribal heritage, serves as the headquarters of which region?",
        options: ["Daman", "Diu", "Dadra & Nagar Haveli", "Goa"],
        answerIndex: 2,
        explanation: "Silvassa was historically the capital of Dadra and Nagar Haveli and remains its regional headquarters."
      }
    ]
  }
];

