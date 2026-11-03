import { Festival } from "@/types/festival";

export const FESTIVALS: Festival[] = [
  {
    id: "lunar-new-year",
    name: "Lunar New Year (Spring Festival)",
    alternateNames: ["Chinese New Year", "Chūnjié", "Tet"],
    culture: "East Asian",
    originCountry: "China / East Asia",
    month: 2,
    monthName: "February",
    approximateDate: "Late January / Early February",
    date2026: "2026-02-17",
    tagline: "Dumpling-making date night, red lanterns, and wishes of good fortune.",
    summary:
      "The arrival of the new lunar cycle symbolizing fresh beginnings, family warmth, and prosperity. Clean the house beforehand, dress in vibrant red, and fold dumplings together for wealth and health.",
    culturalSignificance:
      "Celebrated across China, Vietnam, Korea, and global diaspora. Dumplings (Jiaozi) are shaped like ancient Chinese silver ingots, representing wealth. Giving red packets (Hongbao) shares luck and prosperity.",
    coverImage:
      "https://images.unsplash.com/photo-1548625361-192a4cb751f8?auto=format&fit=crop&w=1200&q=80",
    coupleRitual: {
      title: "Handmade Dumpling Folding & Couple's Red Envelope Exchange",
      estimatedDuration: "60 mins",
      description:
        "Spend the evening in the kitchen rolling dough or stuffing wrappers together. Hide a lucky almond or raisin inside one dumpling—whoever finds it gets good fortune for the year! Afterwards, exchange handwritten red envelopes with 3 promises to each other.",
      steps: [
        "Put on cheerful instrumental Guzheng/Lo-fi Chinese music and light warm amber lights.",
        "Prepare the filling: minced paneer/mushrooms/cabbage or chicken with ginger, garlic, soy sauce, and sesame oil.",
        "Fold dumplings together side-by-side using water to seal the edges in pleated crescents.",
        "Steam in a standard Indian idli/steamer or pan-fry into crispy potstickers.",
        "Write 3 loving wishes/promises for each other on slips of paper and slip them into red envelopes.",
      ],
      materialsNeeded: [
        "Dumpling wrappers (or all-purpose flour / maida for handmade dough)",
        "Red envelopes (or red craft paper folded into envelopes with golden pen)",
        "Steamer or non-stick frying pan",
      ],
    },
    feast: {
      dishName: "Crispy Pan-Fried Dumplings (Potstickers) with Ginger-Chili Dip",
      dishDescription:
        "Golden crispy bottoms with juicy aromatic steamed fillings, dipped in savory black vinegar & chili crisp oil.",
      drinkName: "Warm Jasmine & Chrysanthemum Honey Tea",
      drinkDescription:
        "Fragrant whole jasmine green tea brewed with dried chrysanthemum blossoms and honey.",
      quickRecipeSteps: [
        "Mix filling: finely chopped cabbage, grated ginger, scallions, minced paneer or chicken, soy sauce, sesame oil, and black pepper.",
        "Spoon 1 tsp into wrapper, moisten edge with water, fold and crimp shut.",
        "Pan fry in 1 tbsp oil for 2 mins until bottom is golden brown.",
        "Pour 1/4 cup water into the hot pan, immediately cover with lid, and steam for 5 minutes until water evaporates.",
        "Serve hot with soy sauce, rice vinegar, and chili oil.",
      ],
      vegetarianOption:
        "Finely minced shiitake/button mushrooms, crumbled fresh paneer, and shredded cabbage make an unbeatable filling.",
    },
    ambiance: {
      musicTheme: "Lo-Fi Chinese Spring Festival & Traditional Instrumental",
      suggestedPlaylist: "Chinese Lo-Fi Beats & Guqin Spring Melodies",
      spotifySearchQuery: "Chinese New Year Lofi chill",
      lightingAndDecor:
        "Warm red and golden accents. Hang 2 simple red paper lanterns or use red fairy lights over your dining table.",
      movieOrShowRecommendation: {
        title: "Crazy Rich Asians (or Studio Ghibli's Spirited Away)",
        year: "2018",
        platformHint: "Netflix / Prime Video",
        whyWatch:
          "Vibrant family feast scenes, stunning visuals, and warm romantic atmosphere centered around heritage and love.",
      },
    },
    indianFeasibility: {
      effortLevel: "Half-Day Fun",
      estimatedBudgetInINR: "₹500 - ₹900",
      prepTime: "45 mins",
      quickCommerceItems: [
        "Maida (All-Purpose Flour) or Ready Gyoza/Spring Roll wrappers",
        "Dark Soy Sauce, Sesame Oil, and Chili Crisp (Blinkit/Zepto stocks Lee Kum Kee or Master Chow)",
        "Fresh ginger, garlic, spring onions, cabbage, paneer or chicken mince",
        "Jasmine green tea bags",
      ],
      localMarketItems: [
        "Red craft paper or stationery red envelopes from a local stationery store",
      ],
      substitutions: [
        {
          authenticItem: "Gyoza Wrappers",
          indianSubstitute: "Maida dough rolled thin or square spring roll sheets cut into rounds",
          note: "Standard maida + warm water kneaded into a soft dough works brilliantly and is fun to roll together.",
        },
        {
          authenticItem: "Chinese Chives",
          indianSubstitute: "Fresh green garlic (hara lehsun) or spring onion greens",
          note: "Indian winter green garlic is in peak season in Jan/Feb and tastes even more aromatic!",
        },
      ],
      proTip:
        "Clean your bedroom and living space the day before—in Chinese custom, sweeping on New Year's Day sweeps away your luck!",
    },
  },
  {
    id: "st-patricks-day",
    name: "St. Patrick's Day",
    alternateNames: ["Lá Fhéile Pádraig", "Paddy's Day"],
    culture: "Celtic & Western",
    originCountry: "Ireland",
    month: 3,
    monthName: "March",
    approximateDate: "March 17",
    date2026: "2026-03-17",
    tagline: "A cozy green-themed date: homemade soda bread, Irish stew, and Celtic folk music.",
    summary:
      "A celebration of Irish heritage, folklore, and spring cheer. Wear a splash of green, bake rustic bread without yeast, and enjoy hearty comfort food together.",
    culturalSignificance:
      "Originating as a saint's feast day in Ireland, it has evolved worldwide into a joyful festival of emerald green, Celtic storytelling, live music, and hospitality.",
    coverImage:
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=1200&q=80",
    coupleRitual: {
      title: "Bake Irish Soda Bread & The 'Lucky 4-Leaf Clover' Gratitude Toast",
      estimatedDuration: "45 mins",
      description:
        "Bake a quick rustic loaf together—it needs no yeast, just flour, buttermilk (chaas), and baking soda! While it bakes, carve an 'X' on top to let the fairies out (traditional folklore). Write down 4 lucky things that happened to your relationship.",
      steps: [
        "Dress in cozy green attire or green accessories.",
        "Knead the soda bread dough for just 1 minute—it's super easy and smells incredible.",
        "Score a deep cross on top of the loaf together before putting it into the oven or cooker.",
        "Put on an upbeat Irish pub fiddle / Celtic folk acoustic playlist.",
        "Pour two glasses of craft beer, Irish cider, or mint green mocktails and share your 4 lucky moments.",
      ],
      materialsNeeded: [
        "Atta/Maida, Baking Soda, and Salt",
        "Plain Buttermilk (Amul Masti Chaas / Dahi whisked with water)",
        "Salted Indian butter (Amul) for slathering hot fresh bread",
      ],
    },
    feast: {
      dishName: "Hearty Irish Vegetable & Potato Stew with Fresh Soda Bread",
      dishDescription:
        "Tender baby potatoes, carrots, celery, and mushrooms slow-simmered in rich savory herb broth, served with warm crusty bread slathered in butter.",
      drinkName: "Irish Emerald Apple Mint Fizz (or Guinness/Stout)",
      drinkDescription:
        "Sparkling apple juice infused with fresh mint, lime, and crushed ice (or a bottle of imported Irish stout).",
      quickRecipeSteps: [
        "Mix 2 cups atta/maida, 1 tsp baking soda, 1/2 tsp salt, and 1 cup plain buttermilk to form a rustic dough. Bake at 190°C for 30 mins.",
        "Sauté chopped onions, carrots, and mushrooms in butter with rosemary and thyme.",
        "Add cubed potatoes, vegetable broth, and black pepper. Simmer covered for 25 mins until potatoes are melt-in-the-mouth soft.",
        "Serve steaming hot with chunks of crusty warm bread and Amul butter.",
      ],
      vegetarianOption:
        "The mushroom and baby potato stew is 100% vegetarian, incredibly hearty and filling.",
    },
    ambiance: {
      musicTheme: "Celtic Folk, Acoustic Fiddle & Irish Pub Ballads",
      suggestedPlaylist: "Irish Pub & Celtic Acoustic Cozy Session",
      spotifySearchQuery: "Irish folk acoustic cozy",
      lightingAndDecor:
        "Emerald green napkins, fresh green potted plants or mint leaves on the table, and warm candlelight.",
      movieOrShowRecommendation: {
        title: "Sing Street (or Leap Year)",
        year: "2016",
        platformHint: "Prime Video / Apple TV",
        whyWatch:
          "Set in 1980s Dublin with infectious music and heart-melting romantic comedy charm.",
      },
    },
    indianFeasibility: {
      effortLevel: "Easy & Cozy",
      estimatedBudgetInINR: "₹400 - ₹750",
      prepTime: "40 mins",
      quickCommerceItems: [
        "Amul Masti Buttermilk (Chaas) or fresh curd",
        "Maida / Whole Wheat Flour, Baking Soda",
        "Baby potatoes, carrots, mushrooms, fresh mint",
        "Apple juice and club soda for mocktails (or Bira Stout / Guinness from local liquor store)",
      ],
      localMarketItems: ["Fresh mint and parsley from local vegetable vendor"],
      substitutions: [
        {
          authenticItem: "Irish Buttermilk",
          indianSubstitute: "Amul Plain Chaas or 1 cup milk + 1 tbsp vinegar left for 5 mins",
          note: "Works identical to traditional European cultured buttermilk.",
        },
        {
          authenticItem: "Fresh Thyme / Rosemary",
          indianSubstitute: "Dried mixed Italian/herbs seasoning or fresh rosemary from Instamart",
          note: "Easily available on Zepto or Nature's Basket.",
        },
      ],
      proTip:
        "Eat the soda bread within 20 minutes out of the oven with cold salted Amul butter—it will be one of the best breads you've ever had!",
    },
  },
  {
    id: "nowruz",
    name: "Nowruz (Persian New Year)",
    alternateNames: ["Iranian New Year", "Navroz"],
    culture: "Middle Eastern & Persian",
    originCountry: "Iran / Central Asia",
    month: 3,
    monthName: "March",
    approximateDate: "March 20 or 21 (Vernal Equinox)",
    date2026: "2026-03-20",
    tagline: "Jeweled saffron rice, pomegranates, and a mini Haft-sin table of rebirth.",
    summary:
      "Celebrates the exact astronomical moment of the Spring Equinox. Nowruz means 'New Day' and dates back over 3,000 years. It welcomes rebirth, fresh blooms, and love.",
    culturalSignificance:
      "A secular holiday with roots in ancient Zoroastrian culture, widely celebrated across Iran, Afghanistan, Central Asia, and Parsi communities in India. Families display the 'Haft-Sin'—seven symbolic items starting with the Persian letter 'S'.",
    coverImage:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
    coupleRitual: {
      title: "Assembling a Couple's 'Haft-Sin' Table & Saffron Toast",
      estimatedDuration: "30 mins",
      description:
        "Set up a small table with 7 symbolic items together. Each item carries a beautiful wish for your relationship. At the exact equinox or evening dinner, sit together and share a glass of chilled pomegranate juice.",
      steps: [
        "Gather 7 symbolic items easily found in Indian kitchens: 1. *Seeb* (Apple for beauty), 2. *Sir* (Garlic for health), 3. *Somagh* (Sumac or dried red berries/pomegranate for sunrise/love), 4. *Sabzeh* (Sprouted wheat/lentils or fresh mint for rebirth), 5. *Serkeh* (Vinegar for patience), 6. *Samanoo* (Sweet halwa/pudding for sweet life), 7. *Senjed* (Dry fruits/dates for affection).",
        "Place a small mirror and two candles on the table to reflect light and clarity into your future.",
        "Light the candles together and take a photo sitting by your couple's Haft-Sin table.",
        "Serve jeweled saffron rice and pomegranate mocktails.",
      ],
      materialsNeeded: [
        "An apple, garlic bulb, dates or almonds, fresh mint or small green houseplant, small bowl of vinegar, pomegranate seeds",
        "A small mirror and 2 tea lights",
      ],
    },
    feast: {
      dishName: "Persian Jeweled Saffron Rice (Javaher Polow) with Crispy Tahdig",
      dishDescription:
        "Fluffy aromatic Basmati rice infused with golden saffron, topped with toasted slivered almonds, pistachios, barberries or cranberries, and pomegranate arils.",
      drinkName: "Rosewater & Pomegranate Sherbet",
      drinkDescription:
        "Cold pressed pomegranate juice with a splash of culinary rosewater, sparkling water, and crushed mint.",
      quickRecipeSteps: [
        "Steep crushed saffron in 3 tbsp warm water until deep crimson-gold.",
        "Parboil aged Indian Basmati rice for 6 mins, then drain.",
        "Pour oil and a layer of thinly sliced potatoes at the bottom of a heavy pot (this creates the crunchy Persian 'Tahdig' crust!).",
        "Mound the rice over the potatoes, drizzle saffron water and melted ghee on top, cover tightly with a cloth-lined lid and steam on low for 35 mins.",
        "Garnish with toasted pistachios, slivered almonds, dried cranberries or raisins, and fresh pomegranate arils.",
      ],
      vegetarianOption:
        "The jeweled rice is entirely vegetarian and pairs gorgeously with spiced roast paneer or yogurt dip with dried mint (Mast-o Khiar).",
    },
    ambiance: {
      musicTheme: "Persian Sitar, Oud, and Meditative Acoustic Fusion",
      suggestedPlaylist: "Persian Traditional Saffron Lounge",
      spotifySearchQuery: "Persian traditional acoustic relax",
      lightingAndDecor:
        "A small table draped in silk or patterned fabric with a mirror, fresh flowers, and warm candlelight.",
      movieOrShowRecommendation: {
        title: "Children of Heaven (or A Separation)",
        year: "1997",
        platformHint: "YouTube / Prime Video",
        whyWatch:
          "Masterpiece of Iranian cinema—gentle, poetic, and heartwarming storytelling about simple love and family devotion.",
      },
    },
    indianFeasibility: {
      effortLevel: "Easy & Cozy",
      estimatedBudgetInINR: "₹600 - ₹1,100",
      prepTime: "40 mins",
      quickCommerceItems: [
        "Aged Basmati Rice, Indian Saffron (Kesar)",
        "Fresh Pomegranates, Almonds, Pistachios, Raisins or Dried Cranberries",
        "Culinary Rose Water (Dabur Gulabari or edible rose extract)",
        "Fresh mint leaves, lemons, and curd (dahi)",
      ],
      localMarketItems: ["Fresh red apples and loose flowers from local fruit vendor"],
      substitutions: [
        {
          authenticItem: "Zereshk (Persian Dried Barberries)",
          indianSubstitute: "Dried cranberries or golden raisins tossed with lemon juice",
          note: "Provides the exact sweet-tart burst as authentic barberries.",
        },
        {
          authenticItem: "Persian Sumac",
          indianSubstitute: "Amchur powder mixed with a pinch of Kashmiri red chili",
          note: "Provides the same tangy, reddish garnish.",
        },
      ],
      proTip:
        "The crispy potato Tahdig at the bottom of the pot is legendary. Lift it out carefully with a spatula—it is crunchy, buttery, and unforgettable.",
    },
  },
  {
    id: "hanami",
    name: "Hanami (Cherry Blossom Spring Picnic)",
    alternateNames: ["Sakura Matsuri", "Cherry Blossom Festival"],
    culture: "East Asian",
    originCountry: "Japan",
    month: 4,
    monthName: "April",
    approximateDate: "Early to mid April",
    date2026: "2026-04-05",
    tagline: "A dreamy spring picnic under blooming trees with homemade onigiri and iced matcha.",
    summary:
      "Hanami translates to 'flower viewing'. In Japan, friends and couples gather under blossoming trees to eat, drink, and appreciate the fleeting, transient beauty of life (Mono no aware).",
    culturalSignificance:
      "Celebrated since the 8th century. In India, April is when Gulmohar, Jacaranda (purple trumpet trees), Pink Poui (Tabebuia rosea), and Bougainvillea burst into spectacular pink and red blossoms!",
    coverImage:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1200&q=80",
    coupleRitual: {
      title: "DIY Outdoor/Balcony Spring Picnic & Onigiri (Rice Ball) Making",
      estimatedDuration: "50 mins",
      description:
        "Pack a picnic basket or set up a picnic rug on your balcony or under a blooming neighborhood tree (Tabebuia/Gulmohar/Bougainvillea). Make cute triangular Japanese Onigiri together and share an iced matcha toast.",
      steps: [
        "Pick a picnic spot: either a local city park with blooming trees or your own balcony with potted plants and pink fairy lights.",
        "Cook short-grain rice, season with a pinch of salt and toasted sesame seeds.",
        "Shape rice into cute triangles using your hands with a savory filling inside (spicy mayo paneer, edamame, or tuna).",
        "Wrap a strip of crispy roasted seaweed (Nori) around the base.",
        "Pack your bento box with onigiri, sliced cucumbers, strawberries, and sweet tamagoyaki (Japanese rolled omelet or sweet tofu).",
        "Relax on the picnic blanket, play Studio Ghibli piano music, and soak in the spring breeze.",
      ],
      materialsNeeded: [
        "Picnic mat or cozy outdoor blanket",
        "Sushi rice or sticky/Govindobhog rice",
        "Roasted Nori seaweed sheets (available on Blinkit/Instamart)",
        "Fresh strawberries and sliced fruits",
      ],
    },
    feast: {
      dishName: "Spicy Mayo Sesame Onigiri & Crispy Japanese Vegetable Karaage",
      dishDescription:
        "Savory handheld Japanese rice triangles with sesame seeds and nori, paired with crispy seasoned tempura veggies and sweet soy dip.",
      drinkName: "Iced Strawberry Matcha Latte",
      drinkDescription:
        "Layers of fresh muddled strawberry puree, cold milk (or oat milk), and whisked vibrant green matcha tea poured over ice.",
      quickRecipeSteps: [
        "Cook short grain rice. While warm, mix with toasted sesame seeds and salt.",
        "Take a ball of rice, press a dent in the center, fill with spicy mayo paneer/tofu/mushroom filling, close and shape into a triangle.",
        "Attach a strip of roasted Nori seaweed sheet to hold.",
        "Whisk 1 tsp matcha powder in 50ml warm water until frothy.",
        "In a glass, layer crushed strawberries with honey, ice cubes, cold milk, and pour matcha on top for gorgeous aesthetic layers.",
      ],
      vegetarianOption:
        "Completely vegetarian! The spicy mayo paneer filling inside the onigiri is immensely satisfying.",
    },
    ambiance: {
      musicTheme: "Studio Ghibli Piano Solos & Japanese Acoustic Lo-Fi",
      suggestedPlaylist: "Ghibli Spring Hanami Piano & Chill",
      spotifySearchQuery: "Studio Ghibli piano relax",
      lightingAndDecor:
        "Soft natural sunlight for daytime picnic, or paper lanterns and pink blossom stems in a vase for an evening balcony date.",
      movieOrShowRecommendation: {
        title: "Whisper of the Heart (or 5 Centimeters Per Second)",
        year: "1995",
        platformHint: "Netflix",
        whyWatch:
          "Incredible Tokyo spring aesthetics, cherry blossom petals dancing in the wind, and tender coming-of-age romance.",
      },
    },
    indianFeasibility: {
      effortLevel: "Easy & Cozy",
      estimatedBudgetInINR: "₹450 - ₹850",
      prepTime: "35 mins",
      quickCommerceItems: [
        "Sushi Rice or Small Grain Rice (Urban Platter / Master Chow / Blinkit)",
        "Roasted Seaweed Nori Sheets (widely available on Zepto/Instamart)",
        "Japanese Mayonnaise (Kewpie) or standard eggless mayo + Sriracha",
        "Matcha green tea powder, fresh strawberries, milk",
      ],
      localMarketItems: ["Fresh local strawberries and a sprig of fresh flowers"],
      substitutions: [
        {
          authenticItem: "Japanese Short Grain Rice",
          indianSubstitute: "Indian Govindobhog or Jeera Samba rice",
          note: "These short grain Indian varieties have natural stickiness that holds Onigiri shapes perfectly!",
        },
        {
          authenticItem: "Japanese Sakura Trees",
          indianSubstitute: "Tabebuia Rosea (Pink Trumpet) or Bougainvillea",
          note: "Bangalore, Delhi, Mumbai, and Pune are covered in breathtaking pink blossoms throughout March and April.",
        },
      ],
      proTip:
        "Keep a small bowl of salted water nearby when shaping onigiri—wetting your hands stops the rice from sticking to your fingers completely.",
    },
  },
  {
    id: "cinco-de-mayo",
    name: "Cinco de Mayo",
    alternateNames: ["Battle of Puebla Day", "Fiesta Mexicana"],
    culture: "Latin American",
    originCountry: "Mexico",
    month: 5,
    monthName: "May",
    approximateDate: "May 5",
    date2026: "2026-05-05",
    tagline: "Vibrant Mexican taco fiesta, fresh guacamole bar, churros, and spicy margaritas.",
    summary:
      "Commemorates the Mexican army's historic victory at the Battle of Puebla in 1862. Celebrated with colorful fiesta music, regional folk dances, and vibrant food.",
    culturalSignificance:
      "A tribute to Mexican culture, resilience, and incredible cuisine (recognized as UNESCO Intangible Cultural Heritage). The vibrant mix of chilies, lime, corn, and fresh herbs feels instantly familiar to Indian palates!",
    coverImage:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=1200&q=80",
    coupleRitual: {
      title: "DIY Couple Taco Bar & Homemade Churro Night",
      estimatedDuration: "45 mins",
      description:
        "Transform your dining table into a Mexican cantina! Warm up soft tortillas, whip up fresh guacamole, roast spiced beans/chicken, and build custom tacos for each other. Finish the night by dipping fresh homemade cinnamon churros into warm chocolate.",
      steps: [
        "Play an energetic Mariachi / Latin Acoustic fiesta playlist.",
        "Mash ripe avocados with lime, finely chopped onion, tomatoes, green chilies, and salt for the guacamole.",
        "Sauté black/rajma beans or chicken with cumin, paprika, garlic, and tomato puree.",
        "Warm tortillas on a hot Indian tawa until soft and speckled.",
        "Build tacos together: tortilla + spiced filling + shredded cheese + salsa + dollop of guacamole + squeeze of lime.",
        "Pipe or roll quick dough into hot oil for churros and toss in cinnamon sugar.",
      ],
      materialsNeeded: [
        "Corn or flour tortillas (Habit, Mission, or homemade chapati/makki style)",
        "2 ripe avocados, limes, fresh coriander, jalapeños or green chilies",
        "Cinnamon powder and sugar for churros",
      ],
    },
    feast: {
      dishName: "Smoky Street-Style Tacos with Fresh Guacamole & Pico de Gallo",
      dishDescription:
        "Warm charred tortillas loaded with smoky cumin-spiced fillings, tangy tomato-lime salsa, melted cheese, and creamy avocado.",
      drinkName: "Spicy Jalapeño Chili-Lime Margarita (or Jarritos Mocktail)",
      drinkDescription:
        "Tequila or sparkling lemon soda shaken with fresh lime juice, orange liqueur/juice, and sliced fresh jalapeño with a chili-salt rim.",
      quickRecipeSteps: [
        "Season beans, paneer cubes, or chicken strips with cumin, smoked paprika, garlic powder, and lime juice; sear in pan for 6 mins.",
        "Dice tomatoes, onions, coriander, and green chilies with lime juice and salt for fresh Pico de Gallo.",
        "Mash avocados with salt, lemon, and a splash of olive oil.",
        "Toast tortillas on tawa for 20 seconds each side.",
        "Assemble and enjoy immediately with spicy margaritas.",
      ],
      vegetarianOption:
        "Spiced rajma/black beans and charred sweet corn with paneer makes an unbelievable, high-protein taco filling.",
    },
    ambiance: {
      musicTheme: "Mariachi, Latin Guitar & Upbeat Cumbia",
      suggestedPlaylist: "Mexican Cantina Fiesta & Acoustic Guitar",
      spotifySearchQuery: "Mexican fiesta acoustic guitar",
      lightingAndDecor:
        "Bright festive colors! Use brightly colored cloth or table runners, small cactus/succulents, and lime wedges in glasses.",
      movieOrShowRecommendation: {
        title: "Coco (Disney Pixar)",
        year: "2017",
        platformHint: "Disney+ Hotstar",
        whyWatch:
          "Pure visual and musical joy! Deeply moving celebration of Mexican family traditions, music, and colorful spirit.",
      },
    },
    indianFeasibility: {
      effortLevel: "Easy & Cozy",
      estimatedBudgetInINR: "₹600 - ₹1,200",
      prepTime: "35 mins",
      quickCommerceItems: [
        "Ripe Hass Avocados (Zepto and Blinkit consistently stock ripe avocados)",
        "Soft Flour / Corn Tortillas or Taco Shells",
        "Jalapeños (fresh or pickled jar), Cheddar or Mozzarella cheese",
        "Limes, fresh coriander, cumin powder, smoked paprika",
        "Hershey's chocolate syrup or dark chocolate bar for churro dip",
      ],
      localMarketItems: ["Fresh lemons, green chilies, and ripe tomatoes from local sabzi mandi"],
      substitutions: [
        {
          authenticItem: "Mexican Cotija Cheese",
          indianSubstitute: "Crumbled fresh salted Paneer",
          note: "Tossed with a pinch of sea salt and lime, it mirrors fresh Mexican queso fresco flawlessly.",
        },
        {
          authenticItem: "Masa Harina Tortillas",
          indianSubstitute: "Makki Atta mixed with 30% maida or thin soft whole wheat rotis",
          note: "Fresh thin corn rotis lightly blistered on a tawa are incredibly delicious.",
        },
      ],
      proTip:
        "Rim your cocktail glasses with a mix of Indian Chaat Masala and Kashmiri chili powder—it creates an addictive spicy kick!",
    },
  },
  {
    id: "midsommar",
    name: "Midsommar (Summer Solstice)",
    alternateNames: ["Midsummer", "Sankt Hans", "Litha"],
    culture: "European & Mediterranean",
    originCountry: "Sweden / Nordic Scandinavia",
    month: 6,
    monthName: "June",
    approximateDate: "June 20 - 24 (Longest Day of the Year)",
    date2026: "2026-06-20",
    tagline: "Floral crowns, fairy lights on the terrace, fresh berry tart, and golden hour dining.",
    summary:
      "Celebrates the longest day and the shortest night of the year. In Nordic countries, towns empty as people head to nature, weave crowns of wildflowers, dance around the maypole, and celebrate endless sunlight.",
    culturalSignificance:
      "An ancient celebration of light, romance, and fertility. Nordic folklore says that if you sleep with 7 different flowers under your pillow on Midsummer Eve, you will dream of your true love.",
    coverImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    coupleRitual: {
      title: "DIY Wildflower Headbands & Midsummer Balcony Feast",
      estimatedDuration: "45 mins",
      description:
        "Weave floral crowns (*Midsommarkrans*) for each other using fresh local flowers and greenery. As the sun sets, light fairy lights or candles, set up an outdoor table, and tuck 7 flowers under your pillows before bed.",
      steps: [
        "Buy loose yellow, white, and pink flowers from a local flower stall (jasmine, roses, marigolds, or baby's breath).",
        "Wrap green floral wire or a simple strip of craft paper around each other's head to measure.",
        "Weave the flowers and small leaves into the crown for each other—crown your partner!",
        "Set up an al fresco dinner at golden hour with fairy lights and a white tablecloth.",
        "Serve fresh summer potato salad, crusty bread, cheese board, and strawberry shortcake.",
      ],
      materialsNeeded: [
        "Fresh loose flowers from local vendor (genda, mogra, roses, ferns)",
        "Craft wire, thread, or floral tape",
        "White tablecloth and fairy lights",
      ],
    },
    feast: {
      dishName: "Nordic Herbed Baby Potato Salad with Fresh Dill & Mustard Dressing",
      dishDescription:
        "Tender boiled baby potatoes tossed warm in whole grain mustard, olive oil, lemon juice, capers, fresh dill, and sea salt, served with crusty artisan sourdough.",
      drinkName: "Elderflower / Berry Sparkling Spritz",
      drinkDescription:
        "Sparkling water or Prosecco infused with elderflower cordial (Monin) or blueberry-strawberry puree, lemon slices, and fresh mint.",
      quickRecipeSteps: [
        "Boil baby potatoes in salted water until fork-tender (approx. 12 mins).",
        "Whisk 2 tbsp olive oil, 1 tbsp lemon juice, 1 tsp mustard, chopped fresh dill, salt, and black pepper.",
        "Toss the warm halved potatoes in the dressing so they absorb all the herbs.",
        "Serve alongside a cheese board (brie, gouda, crackers, nuts, and honey).",
        "Finish with fresh strawberries tossed with sugar and whipped cream.",
      ],
      vegetarianOption:
        "Completely vegetarian, refreshing, light, and perfectly suited for warm summer evenings.",
    },
    ambiance: {
      musicTheme: "Nordic Folk, Acoustic Indie & Dream Pop",
      suggestedPlaylist: "Swedish Midsummer Acoustic Golden Hour",
      spotifySearchQuery: "Nordic acoustic indie folk",
      lightingAndDecor:
        "Abundant loose flowers in mason jars, white linens, and warm fairy lights reflecting the endless golden hour.",
      movieOrShowRecommendation: {
        title: "Mamma Mia! (or Before Sunset)",
        year: "2008",
        platformHint: "Prime Video / Netflix",
        whyWatch:
          "Sun-drenched European summer romance, joyful singing, and vibrant Mediterranean/Nordic celebration vibes.",
      },
    },
    indianFeasibility: {
      effortLevel: "Easy & Cozy",
      estimatedBudgetInINR: "₹500 - ₹950",
      prepTime: "30 mins",
      quickCommerceItems: [
        "Baby potatoes, fresh dill (suva bhaji) or parsley",
        "Dijon or whole grain mustard, extra virgin olive oil",
        "Fresh cream (Amul), strawberries, digestive biscuits for quick cheesecake cups",
        "Sourdough bread or baguette from The Baker's Dozen / local bakery",
      ],
      localMarketItems: [
        "Fresh loose flowers (mogra, roses, marigolds) from the nearest temple or street flower stall (₹50-₹100)",
      ],
      substitutions: [
        {
          authenticItem: "Fresh Swedish Dill",
          indianSubstitute: "Indian Suva / Shepu (Dill leaves)",
          note: "Indian dill is widely sold across Indian markets for ₹15 a bunch and tastes identical.",
        },
        {
          authenticItem: "Elderflower Cordial",
          indianSubstitute: "Monin Elderflower syrup or Lychee-Rose crush with sparkling water",
          note: "Delivers that enchanting floral aroma.",
        },
      ],
      proTip:
        "Fresh flower crowns cost next to nothing at Indian local flower stalls and look extraordinarily photogenic in golden hour couple photos.",
    },
  },
  {
    id: "tanabata",
    name: "Tanabata (Japanese Star Festival)",
    alternateNames: ["The Star Festival", "Hoshi Matsuri"],
    culture: "East Asian",
    originCountry: "Japan",
    month: 7,
    monthName: "July",
    approximateDate: "July 7",
    date2026: "2026-07-07",
    tagline: "Writing secret wishes on bamboo strips, chilled noodles, and rooftop stargazing.",
    summary:
      "Celebrates the mythical meeting of the celestial lovers Orihime (the weaver star Vega) and Hikoboshi (the cowherd star Altair), who are separated by the Milky Way and permitted to reunite only once a year on this night.",
    culturalSignificance:
      "A profoundly romantic festival dating back to the Heian period. People write wishes, poetry, and love notes on colorful paper strips called 'Tanzaku' and hang them on bamboo branches.",
    coverImage:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    coupleRitual: {
      title: "Tanzaku Wish-Writing Ceremony & Terrace Stargazing",
      estimatedDuration: "40 mins",
      description:
        "Cut 5 strips of colorful paper (Tanzaku). In secret, each partner writes 3 heartfelt wishes for your relationship and 2 personal dreams. Tie them together onto an indoor bamboo plant or houseplant, then head to the balcony to stargaze and spot Vega and Altair.",
      steps: [
        "Cut colorful strips of paper (blue, red, yellow, white, purple) and punch a hole at the top with a thread.",
        "Light candles and put on meditative Japanese Zen koto or lofi anime melodies.",
        "Secretly write your dreams and promises for each other on the strips.",
        "Read them out loud to each other and tie them to an indoor bamboo plant or leafy branch.",
        "Head to the roof or terrace with a warm throw blanket and chilled Somen/ramen noodles.",
        "Look up into the summer night sky to find the Milky Way.",
      ],
      materialsNeeded: [
        "Colorful pastel craft paper and colorful pens",
        "A small indoor bamboo plant (lucky bamboo in water) or balcony plant",
        "Thread or ribbon",
      ],
    },
    feast: {
      dishName: "Chilled Japanese Somen Noodles with Sesame-Soy Dipping Sauce",
      dishDescription:
        "Delicate chilled noodles served with ice cubes, cucumber ribbons, toasted sesame seeds, scallions, and a chilled umami dipping broth.",
      drinkName: "Ramune-Style Fizzy Melon or Citrus Lemonade",
      drinkDescription:
        "Bubbly sparkling soda flavored with melon syrup or fresh lime, poured over crushed ice and frozen grapes.",
      quickRecipeSteps: [
        "Boil thin hakka or somen/eggless wheat noodles for 3 minutes, then immediately rinse in cold ice water to make them chewy and cool.",
        "Mix 3 tbsp soy sauce, 1 tbsp sugar, 1 tsp vinegar, 1/2 tsp ginger paste, and 1/2 cup cold water with a drop of sesame oil for dipping broth.",
        "Serve noodles on a plate with ice cubes on top to keep them freezing cold.",
        "Dip each bite into the sauce with sliced cucumbers and green onions.",
      ],
      vegetarianOption:
        "Completely vegetarian, light, and wonderfully soothing during warm monsoon/summer evenings.",
    },
    ambiance: {
      musicTheme: "Japanese Anime OST, Koto Acoustic & Lofi Chillhop",
      suggestedPlaylist: "Tanabata Japanese Star Festival & Anime Acoustic",
      spotifySearchQuery: "Your Name anime acoustic piano",
      lightingAndDecor:
        "Blue and silver paper stars, paper lanterns, and fairy lights wrapped around your indoor bamboo plant.",
      movieOrShowRecommendation: {
        title: "Your Name (Kimi no Na wa) or Weathering with You",
        year: "2016",
        platformHint: "Netflix",
        whyWatch:
          "Makoto Shinkai's masterpiece about two souls connected across the stars and time—visual perfection for this festival.",
      },
    },
    indianFeasibility: {
      effortLevel: "Easy & Cozy",
      estimatedBudgetInINR: "₹350 - ₹650",
      prepTime: "25 mins",
      quickCommerceItems: [
        "Thin Hakka noodles or Somen/Soba noodles (Master Chow / Chings / Blinkit)",
        "Soy sauce, sesame oil, cucumber, spring onions",
        "Colored craft paper or origami sheets (Blinkit / local stationery)",
        "Small 2-layer Lucky Bamboo plant (available on Blinkit/Ferns N Petals or local plant nursery for ₹150)",
      ],
      localMarketItems: ["Stationery colored chart paper from local shop"],
      substitutions: [
        {
          authenticItem: "Japanese Somen Noodles",
          indianSubstitute: "Chings Secret thin Hakka noodles boiled and chilled in ice water",
          note: "Becomes delightfully bouncy and light when shocked in ice water.",
        },
      ],
      proTip:
        "Use a free stargazing app like 'Stellarium' or 'SkyView' on your phone to point at the sky and pinpoint the stars Vega and Altair together!",
    },
  },
  {
    id: "oktoberfest",
    name: "Oktoberfest",
    alternateNames: ["Wiesn", "Bavarian Beer Festival"],
    culture: "European & Mediterranean",
    originCountry: "Germany (Bavaria)",
    month: 9,
    monthName: "September",
    approximateDate: "Mid to late September",
    date2026: "2026-09-19",
    tagline: "Giant soft pretzels with warm beer-cheese dip, German board games, and craft tastings.",
    summary:
      "The world's largest folk festival held annually in Munich, Bavaria. Originally a royal wedding celebration in 1810, it is famous for soft doughy pretzels, brass bands (Oompah music), hearty food, and convivial joy (Gemütlichkeit).",
    culturalSignificance:
      "Celebrates Bavarian folk culture, craftsmanship, and community warmth. Soft pretzels with coarse sea salt and mustard are culinary art, and the celebration is all about laughter, games, and comfort food.",
    coverImage:
      "https://images.unsplash.com/photo-1574512964349-5a507fa73934?auto=format&fit=crop&w=1200&q=80",
    coupleRitual: {
      title: "Bake Giant Bavarian Pretzels & The Couple Board Game Duel",
      estimatedDuration: "50 mins",
      description:
        "Shape and bake oversized soft pretzels together, sprinkling them with coarse salt crystals. While they bake, open a Bavarian beer or apple cider, put on upbeat folk music, and play a fun two-player tabletop game (like Catan, Carcassonne, or Scrabble).",
      steps: [
        "Knead a simple bread dough (flour, yeast, pinch of sugar, butter, and water).",
        "Roll into long ropes and cross the ends into the iconic pretzel knot together.",
        "Quickly dip into boiling water with baking soda (this creates that shiny, chewy brown pretzel crust!).",
        "Sprinkle with rock salt and bake until deep mahogany brown.",
        "Whip up a warm cheese and mustard dip.",
        "Clink your beer steins or mugs with a hearty 'Prost!' and start your game duel.",
      ],
      materialsNeeded: [
        "Maida, active dry yeast, baking soda, and coarse salt",
        "Cheddar cheese and spicy mustard for the dip",
        "A board game or card game for two",
      ],
    },
    feast: {
      dishName: "Warm Giant Soft Pretzels with Spiced Cheddar-Mustard Dip",
      dishDescription:
        "Fresh out of the oven chewy, glossy soft pretzels with coarse salt, dipped into melted sharp cheddar and whole grain mustard fondue.",
      drinkName: "Bavarian Wheat Beer (or Sparkling Apple Apfelschorle)",
      drinkDescription:
        "Paulaner / Erdinger / Bira White wheat beer served in tall glassware (or crisp 50/50 mix of apple juice and sparkling soda).",
      quickRecipeSteps: [
        "Form pretzel knots from proofed dough.",
        "Simmer in 4 cups water + 1/4 cup baking soda for 30 seconds, then place on baking sheet.",
        "Sprinkle coarse rock salt and bake at 220°C for 14 minutes until dark golden brown.",
        "Melt 1 cup cheddar cheese with 2 tbsp milk, 1 tsp mustard, and a pinch of paprika for the dip.",
        "Serve piping hot.",
      ],
      vegetarianOption:
        "The pretzels and cheese dip are 100% vegetarian. Pair with grilled paneer or spiced vegetable skewers for a full meal.",
    },
    ambiance: {
      musicTheme: "Bavarian Brass, German Accordion & Upbeat Folk",
      suggestedPlaylist: "Oktoberfest Accordion & Bavarian Brass Party",
      spotifySearchQuery: "Oktoberfest traditional accordion brass",
      lightingAndDecor:
        "Bavarian blue and white check accents (or simple blue napkins), rustic wooden cutting boards, and glass beer steins.",
      movieOrShowRecommendation: {
        title: "The Grand Budapest Hotel (or Beerfest)",
        year: "2014",
        platformHint: "Disney+ Hotstar",
        whyWatch:
          "Wes Anderson's visually stunning, quirky European masterpiece with delightful pastries, old-world charm, and endless laughs.",
      },
    },
    indianFeasibility: {
      effortLevel: "Half-Day Fun",
      estimatedBudgetInINR: "₹600 - ₹1,300",
      prepTime: "50 mins",
      quickCommerceItems: [
        "Maida (All-Purpose Flour), Dry Active Yeast, Baking Soda",
        "Cheddar Cheese block, Dijon/Whole Grain Mustard",
        "Apple juice and club soda (or imported German beers like Paulaner / Erdinger widely sold at city liquor stores)",
      ],
      localMarketItems: ["Local coarse sea salt / sendha namak"],
      substitutions: [
        {
          authenticItem: "German Food-Grade Lye",
          indianSubstitute: "Baking soda bath (boiling water + baking soda)",
          note: "Gives the exact same glossy brown crust and chewy texture safely at home without chemicals.",
        },
        {
          authenticItem: "Bavarian Weissbier",
          indianSubstitute: "Bira White or Simba Wit / Kingfisher Ultra Witbier",
          note: "Delightfully refreshing Indian Belgian/wheat beers available at every local wine shop.",
        },
      ],
      proTip:
        "Eat pretzels straight from the oven—the contrast between the crunchy sea salt and pillowy dough is heavenly.",
    },
  },
  {
    id: "halloween",
    name: "Halloween",
    alternateNames: ["All Hallows' Eve", "Samhain"],
    culture: "Celtic & Western",
    originCountry: "Ireland / Celtic origins",
    month: 10,
    monthName: "October",
    approximateDate: "October 31",
    date2026: "2026-10-31",
    tagline: "Carving Indian Kaddu Jack-o'-lanterns, spooky movie marathon, and spiced warm cider.",
    summary:
      "Rooted in the ancient Celtic festival of Samhain marking the end of harvest and the thinning of the veil between worlds. Today it's the ultimate fun night of spooky decorations, costumes, sweet treats, and horror films.",
    culturalSignificance:
      "A celebration of playful mystery, facing fears, and cozy autumn vibes. Carving scary faces into vegetables originated with turnips in Ireland before moving to pumpkins.",
    coverImage:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80",
    coupleRitual: {
      title: "Indian Kaddu (Pumpkin) Carving Duel & Spooky Movie Marathon",
      estimatedDuration: "60 mins",
      description:
        "Head to the local vegetable market or order an Indian orange/green Kaddu (pumpkin). Scoop out the seeds together, draw funny or terrifying faces with a marker, and carve them out. Place a tea light inside, turn off all the room lights, and hit play on a cozy spooky movie.",
      steps: [
        "Cut a circular lid off the top of the pumpkin at an angle so it doesn't fall through.",
        "Scrape out the seeds and stringy pulp together using sturdy spoons (save the seeds to roast!).",
        "Each partner sketches their chosen expression (spooky, silly, or cute) on opposite sides or on two small pumpkins.",
        "Carefully carve along your lines with a small kitchen knife.",
        "Drop a tea light candle or LED diya inside, turn off the lights, and watch it glow!",
        "Roast the pumpkin seeds with salt and peri-peri for your movie snack.",
      ],
      materialsNeeded: [
        "1-2 medium Indian Kaddu / pumpkins (₹40-₹80 at local mandi)",
        "Kitchen knife and sturdy tablespoon",
        "Tea lights or battery LED diyas",
        "Popcorn and Halloween candy",
      ],
    },
    feast: {
      dishName: "Spiced Roasted Pumpkin & Garlic Pasta with Crispy Sage/Herbs",
      dishDescription:
        "Silky roasted pumpkin puree blended with garlic, cream, nutmeg, and parmesan, tossed with al dente penne pasta and roasted pumpkin seeds.",
      drinkName: "Warm Witches' Spiced Apple Cider",
      drinkDescription:
        "Pure apple juice simmered with cinnamon sticks, cloves, star anise, orange slices, and a dash of dark rum or brandy.",
      quickRecipeSteps: [
        "Roast chopped pumpkin cubes with garlic and olive oil until soft, blend with 3 tbsp cream and salt into a velvety sauce.",
        "Boil pasta until al dente.",
        "Toss pasta in the warm pumpkin garlic cream with black pepper and grated cheese.",
        "Simmer 1 liter apple juice with 2 cinnamon sticks and 4 cloves for 15 mins for the cider.",
        "Serve warm in mugs beside your glowing carved Jack-o'-lantern.",
      ],
      vegetarianOption:
        "Completely vegetarian, decadent, cozy, and makes great use of the pumpkin flesh!",
    },
    ambiance: {
      musicTheme: "Spooky Orchestral, Dark Synthwave & Autumn Acoustic",
      suggestedPlaylist: "Halloween Spooky Cozy Vibes & Horror Soundtracks",
      spotifySearchQuery: "Halloween spooky cozy vibes",
      lightingAndDecor:
        "Only candlelight! Let your carved Jack-o'-lanterns illuminate the room. Drape fake spiderwebs or black craft paper bats on the wall.",
      movieOrShowRecommendation: {
        title: "Hocus Pocus (or A Quiet Place / The Conjuring)",
        year: "1993",
        platformHint: "Disney+ Hotstar / Netflix",
        whyWatch:
          "The ultimate nostalgic Halloween couple comfort film filled with witches, laughs, and cozy autumn aesthetics.",
      },
    },
    indianFeasibility: {
      effortLevel: "Half-Day Fun",
      estimatedBudgetInINR: "₹400 - ₹800",
      prepTime: "45 mins",
      quickCommerceItems: [
        "Apple Juice (Real or Tropicana 100%), Cinnamon sticks, cloves",
        "Penne or Fusilli pasta, fresh garlic, Amul cooking cream, cheese",
        "Tea light candles (Blinkit/Zepto sells 50-packs for ₹120)",
        "Halloween candy / chocolates (Snickers, Dairy Milk, marshmallows)",
      ],
      localMarketItems: [
        "1-2 Indian red/yellow pumpkins (Kaddu / Sitaphal) from the local sabzi mandi (costs barely ₹30-₹60!)",
      ],
      substitutions: [
        {
          authenticItem: "American Carving Pumpkin",
          indianSubstitute: "Indian Kaddu (Yellow / Red Pumpkin) or large sweet melon",
          note: "Indian kaddu has a softer skin which makes carving even easier than tough American pumpkins, and costs 1/10th the price!",
        },
        {
          authenticItem: "Fresh Apple Cider",
          indianSubstitute: "Packaged 100% cloudy apple juice simmered with whole spices",
          note: "Boiling with real cinnamon sticks, cloves, and orange slices creates the exact same holiday aroma.",
        },
      ],
      proTip:
        "Don't throw away the pumpkin seeds! Toss them with oil, salt, and Chaat Masala and bake at 180°C for 15 mins for the ultimate crunchy movie snack.",
    },
  },
  {
    id: "dia-de-los-muertos",
    name: "Día de los Muertos (Day of the Dead)",
    alternateNames: ["Day of the Dead"],
    culture: "Latin American",
    originCountry: "Mexico",
    month: 11,
    monthName: "November",
    approximateDate: "November 1 - 2",
    date2026: "2026-11-01",
    tagline: "Bright marigolds (Genda phool), glowing candles, Mexican spiced hot chocolate, and love.",
    summary:
      "A joyful, vibrant Mexican celebration honoring loved ones and ancestors. Far from gloomy, it is a colorful fiesta of memory, love, music, and celebration of the cycle of life.",
    culturalSignificance:
      "Recognized by UNESCO. Central to the celebration is the 'Ofrenda' (altar) decorated with bright orange cempasúchil (marigolds), candles, photos, and sweet Pan de Muerto bread. Orange marigolds are believed to guide souls with their vibrant color and scent.",
    coverImage:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    coupleRitual: {
      title: "Building a Couple's Marigold (Genda Phool) Ofrenda & Memory Toast",
      estimatedDuration: "40 mins",
      description:
        "India and Mexico share an identical love for orange marigolds! Build a miniature Ofrenda table covered in fresh Genda Phool, light candles, display photos of beloved grandparents or pets who passed away, and sip rich spiced Mexican hot chocolate while sharing stories of their lives.",
      steps: [
        "Buy 2-3 garlands of fresh orange and yellow Genda Phool (marigolds) from the local flower stall.",
        "Lay a bright tablecloth, arrange photos of loved ones or ancestors you wish to honor.",
        "Scatter vibrant marigold petals leading toward the altar like a path of light.",
        "Light candles and diyas around the flowers.",
        "Bake or serve sweet buns and warm Mexican hot chocolate infused with cinnamon and a pinch of chili.",
        "Take turns sharing one funny or sweet memory of someone who shaped who you are today.",
      ],
      materialsNeeded: [
        "2 garlands of fresh orange Genda Phool (₹40-₹60 at any Indian florist)",
        "Candles or terracotta diyas",
        "Photos of beloved family members or pets",
        "Cocoa powder, milk, cinnamon, and dark chocolate",
      ],
    },
    feast: {
      dishName: "Warm Pan de Muerto (Sweet Anise Bread) & Mexican Street Corn (Elote)",
      dishDescription:
        "Sweet pillowy brioche buns scented with orange zest and anise, paired with charred sweet corn slathered in spicy lime mayo and cheese.",
      drinkName: "Authentic Mexican Spiced Hot Chocolate (Champurrado)",
      drinkDescription:
        "Thick, velvety dark chocolate melted into whole milk simmered with cinnamon sticks, brown sugar, and a whisper of cayenne pepper.",
      quickRecipeSteps: [
        "Simmer 2 cups milk with a cinnamon stick and orange peel for 5 mins.",
        "Whisk in 80g chopped dark chocolate and 1 tbsp brown sugar until thick and glossy.",
        "Add a tiny pinch of red chili/cayenne powder—it creates warmth at the back of the throat.",
        "Boil sweet corn cobs, char over open flame, brush with mayo, lime juice, chili powder, and grated cheese.",
        "Serve hot alongside sweet buns.",
      ],
      vegetarianOption: "Completely vegetarian, soul-warming, and deeply festive.",
    },
    ambiance: {
      musicTheme: "Mexican Folk, Romantic Boleros & Acoustic Guitar",
      suggestedPlaylist: "Dia de los Muertos Boleros & Traditional Guitar",
      spotifySearchQuery: "Dia de los muertos traditional guitar",
      lightingAndDecor:
        "Bright golden orange from hundreds of marigold petals illuminated by dozens of glowing candles.",
      movieOrShowRecommendation: {
        title: "Coco (Disney Pixar) or The Book of Life",
        year: "2017",
        platformHint: "Disney+ Hotstar",
        whyWatch:
          "The most gorgeous, tear-jerking, and authentic portrayal of this tradition—watching it together with hot chocolate is pure magic.",
      },
    },
    indianFeasibility: {
      effortLevel: "Easy & Cozy",
      estimatedBudgetInINR: "₹300 - ₹600",
      prepTime: "30 mins",
      quickCommerceItems: [
        "Dark Chocolate bar (Amul Dark 55% or Bournville)",
        "Whole Milk, Cinnamon sticks, Sweet Corn cobs, Mayonnaise, Lemons",
        "Sweet milk bread rolls or brioche buns (The Baker's Dozen)",
      ],
      localMarketItems: [
        "Fresh orange and yellow Genda Phool (marigold) garlands from any local flower vendor or temple entrance (the most abundant flower in India!)",
      ],
      substitutions: [
        {
          authenticItem: "Mexican Cempasúchil Flowers",
          indianSubstitute: "Indian Orange Genda Phool (Tagetes erecta)",
          note: "Botanically and culturally the EXACT same flower! Mexico and India use the identical sacred marigold.",
        },
        {
          authenticItem: "Mexican Abuelita Chocolate",
          indianSubstitute: "Indian Dark Chocolate simmered with a cinnamon stick and brown sugar",
          note: "Recreates the authentic aromatic Mexican spiced chocolate flawlessly.",
        },
      ],
      proTip:
        "This is arguably the most effortless world festival to celebrate in India because Genda Phool is available on every corner right after Diwali!",
    },
  },
  {
    id: "diwali",
    name: "Diwali (Festival of Lights)",
    alternateNames: ["Deepavali"],
    culture: "Indian & South Asian",
    originCountry: "India",
    month: 11,
    monthName: "November",
    approximateDate: "October / November",
    date2026: "2026-11-08",
    tagline: "Hand-painting terracotta diyas, floral rangoli, dressing in traditional finery, and terrace feast.",
    summary:
      "The triumph of light over darkness, wisdom over ignorance, and new beginnings. Homes are illuminated with oil diyas, colorful rangolis are drawn, and loved ones exchange sweets.",
    culturalSignificance:
      "One of the world's most luminous celebrations with profound roots in Indian heritage. For couples, it's a cherished time to dress up in traditional attire, bless the home, and cook festive treats together.",
    coverImage:
      "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=1200&q=80",
    coupleRitual: {
      title: "Hand-Paint Terracotta Diyas & Couple's Floral Rangoli",
      estimatedDuration: "50 mins",
      description:
        "Buy raw earthen diyas from a local potter. Sit on the floor side-by-side with acrylic paints and brushes, customizing diyas for each other with golden and turquoise designs. Later, create a fresh floral rangoli at your doorway with marigolds and rose petals.",
      steps: [
        "Pick up 10-15 clay diyas from a local street vendor.",
        "Paint them together with vibrant acrylic colors and glitter accents.",
        "Fill with mustard oil or ghee and cotton wicks.",
        "Design a flower rangoli together at your doorway using loose petals.",
        "Dress up in your favorite festive kurtas/sarees and take couple portraits illuminated by the warm flame glow.",
        "Enjoy a sweet feast together on the terrace.",
      ],
      materialsNeeded: [
        "Raw terracotta diyas from local potter/vendor",
        "Acrylic paints & brushes",
        "Mustard oil / ghee and cotton battis (wicks)",
        "Loose flower petals (marigold, rose)",
      ],
    },
    feast: {
      dishName: "Festive Shahi Paneer with Garlic Naan & Homemade Kaju Katli",
      dishDescription:
        "Rich cashew-tomato gravy with succulent paneer, hot blistered garlic naan, and melt-in-mouth homemade cashew fudge.",
      drinkName: "Saffron Badam Milk (Kesar Badam Doodh)",
      drinkDescription:
        "Warm whole milk simmered with crushed almonds, cardamoms, and strands of royal Kashmiri saffron.",
      quickRecipeSteps: [
        "Soak 1 cup cashews in warm water, blend with sugar syrup into a smooth dough, roll out and slice into iconic silver-leaf diamonds for quick Kaju Katli.",
        "Simmer tomato puree, cashew paste, ginger-garlic, and spices in butter.",
        "Add fresh paneer cubes and a swirl of cream.",
        "Warm ready-to-cook naans on a hot tawa with minced garlic and butter.",
      ],
      vegetarianOption: "A 100% vegetarian royal Indian celebration feast.",
    },
    ambiance: {
      musicTheme: "Indian Classical Fusion, Sitar & Festive Semiclassical",
      suggestedPlaylist: "Diwali Acoustic Sitar & Semiclassical Chill",
      spotifySearchQuery: "Diwali sitar instrumental cozy",
      lightingAndDecor:
        "Dozens of flickering earthen diyas lining the balcony and windows, fairy lights, and brass urlis filled with floating flowers and candles.",
      movieOrShowRecommendation: {
        title: "Kabhi Khushi Kabhie Gham (or Dilwale Dulhania Le Jayenge)",
        year: "2001",
        platformHint: "Netflix",
        whyWatch:
          "The quintessential grand festive Bollywood spectacle with iconic Diwali celebration sequences and family warmth.",
      },
    },
    indianFeasibility: {
      effortLevel: "Half-Day Fun",
      estimatedBudgetInINR: "₹500 - ₹1,200",
      prepTime: "60 mins",
      quickCommerceItems: [
        "Paneer, Amul Cream, Cashews, Saffron (Kesar), Cardamom",
        "Cotton wicks, mustard oil, sweet boxes",
        "Fairy lights and brass/copper accessories",
      ],
      localMarketItems: [
        "Handmade terracotta diyas from roadside potters (kumhar)",
        "Fresh marigold and rose garlands from local flower mandi",
      ],
      substitutions: [
        {
          authenticItem: "Silver Vark (Warq)",
          indianSubstitute: "Edible silver foil or toasted pistachio slivers",
          note: "Pistachio garnish looks stunning and avoids adulteration concerns.",
        },
      ],
      proTip:
        "Soak the clay diyas in a bucket of water for 30 minutes before filling with oil—this prevents them from soaking up all the oil and keeps them burning for hours!",
    },
  },
  {
    id: "thanksgiving",
    name: "Thanksgiving (Harvest & Gratitude Feast)",
    alternateNames: ["Harvest Feast"],
    culture: "Celtic & Western",
    originCountry: "North America / European harvest roots",
    month: 11,
    monthName: "November",
    approximateDate: "Fourth Thursday of November",
    date2026: "2026-11-26",
    tagline: "Herb-roast dinner for two, creamy mashed potatoes, and the couple gratitude jar.",
    summary:
      "A celebration of harvest, gratitude, and coming together. Families and friends gather around an abundant table to acknowledge blessings, reflect on the past year, and express thankfulness for one another.",
    culturalSignificance:
      "Rooted in ancient harvest festivals of giving thanks for the earth's bounty. For couples, it's an intimate date to intentionally unplug, celebrate what you appreciate about each other, and cook a cozy feast.",
    coverImage:
      "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1200&q=80",
    coupleRitual: {
      title: "The '10 Things I'm Grateful For You' Toast & Couple Roast",
      estimatedDuration: "45 mins",
      description:
        "Instead of cooking a giant turkey for 20 people, roast a seasoned whole chicken or stuffed butternut squash together. While it roasts, write down 10 specific small things you were grateful for about each other over the past year and read them aloud over candlelight.",
      steps: [
        "Marinate the chicken or squash with butter, garlic, rosemary, thyme, salt, and pepper.",
        "Pop into the oven or air fryer while making silky mashed potatoes.",
        "Take two sheets of stationery paper and write 10 heartfelt gratitude notes.",
        "Set the table with candles, warm autumn tones, and autumn leaves or cinnamon sticks.",
        "Carve your roast together, clink glasses, and read your notes to each other.",
      ],
      materialsNeeded: [
        "1 small whole chicken (or 1 butternut squash / paneer roast for vegetarians)",
        "Potatoes, butter, milk, garlic, fresh rosemary/thyme",
        "Two pens and fine stationery paper",
      ],
    },
    feast: {
      dishName: "Garlic-Herb Butter Roast Chicken (or Stuffed Squash) with Velvety Mashed Potatoes",
      dishDescription:
        "Golden crispy skin, juicy herb-infused roast served with rich brown onion gravy, buttery mashed potatoes, and sweet cranberry compote.",
      drinkName: "Spiced Cranberry Ginger Sparkler",
      drinkDescription:
        "Cranberry juice shaken with ginger beer or ginger ale, fresh lime juice, and a rosemary sprig garnish.",
      quickRecipeSteps: [
        "Boil peeled potatoes until soft, mash with generous Amul butter, warm milk, garlic, salt, and white pepper.",
        "Rub roast with butter, minced garlic, rosemary, and smoked paprika. Roast at 200°C for 45 mins until golden.",
        "Simmer pan juices with 1 tbsp flour and broth for savory gravy.",
        "Simmer dried cranberries with orange juice and sugar for 5 mins for quick tart cranberry sauce.",
        "Plate together and serve warm.",
      ],
      vegetarianOption:
        "Herb-roasted butternut squash or thick cauliflower steaks basted in garlic-herb butter and mushroom gravy are spectacular.",
    },
    ambiance: {
      musicTheme: "Acoustic Folk, Warm Jazz & Autumn Classics",
      suggestedPlaylist: "Thanksgiving Acoustic Warmth & Cozy Dinner Jazz",
      spotifySearchQuery: "Acoustic autumn dinner jazz cozy",
      lightingAndDecor:
        "Warm amber candlelight, pine cones or cinnamon sticks bundled with twine, and rustic napkins.",
      movieOrShowRecommendation: {
        title: "A Charlie Brown Thanksgiving (or Little Women)",
        year: "2019",
        platformHint: "Netflix / Prime Video",
        whyWatch:
          "Greta Gerwig's Little Women captures the cozy warmth of family feasts, sisterhood, gratitude, and golden winter hearths.",
      },
    },
    indianFeasibility: {
      effortLevel: "Half-Day Fun",
      estimatedBudgetInINR: "₹600 - ₹1,200",
      prepTime: "50 mins",
      quickCommerceItems: [
        "Fresh Whole Chicken (Licious / FreshToHome / Blinkit) or Butternut Squash / Cauliflower",
        "Potatoes, Amul Salted Butter, Fresh Garlic, Cream",
        "Dried Cranberries (Urban Platter / Happilo) or Cranberry juice",
        "Fresh Rosemary or Thyme (readily available on Zepto/Instamart)",
      ],
      localMarketItems: ["Fresh local potatoes and garlic from sabzi mandi"],
      substitutions: [
        {
          authenticItem: "Whole Turkey",
          indianSubstitute: "Small Whole Chicken (Roaster) or Herb-basted Cauliflower Roast",
          note: "A 1kg chicken is the perfect portion for two people, cooks in 40 mins, and stays much juicier than dry turkey.",
        },
      ],
      proTip:
        "Put your mashed potatoes through a fine mesh strainer or potato ricer once—it makes them as silky and luxurious as a 3-star Michelin restaurant.",
    },
  },
  {
    id: "christmas",
    name: "Christmas & Advent",
    alternateNames: ["Noël", "Navidad"],
    culture: "Celtic & Western",
    originCountry: "Global / European origins",
    month: 12,
    monthName: "December",
    approximateDate: "December 25",
    date2026: "2026-12-25",
    tagline: "Decorating a tabletop pine, baking gingerbread cookies, mulled wine, and holiday films.",
    summary:
      "A worldwide celebration of love, generosity, peace, and light in the heart of winter. Homes are decorated with evergreen trees, fairy lights, wreaths, stockings, and festive feasts.",
    culturalSignificance:
      "While commemorating the Nativity, Christmas has become a universal season of coziness, gift-giving, and festive goodwill. The pine tree symbolizes everlasting life amidst winter cold.",
    coverImage:
      "https://images.unsplash.com/photo-1543258103-a62bdc069871?auto=format&fit=crop&w=1200&q=80",
    coupleRitual: {
      title: "Tabletop Tree Trimming, Gingerbread Cookie Decorating & Mulled Wine",
      estimatedDuration: "60 mins",
      description:
        "Set up a small tabletop Christmas pine or potted cypress plant together. Decorate it with warm fairy lights and baubles. Bake a batch of spiced gingerbread or butter cookies, decorate them with icing together, and sip fragrant warm spiced mulled wine.",
      steps: [
        "Put on classic Christmas carols (Frank Sinatra, Nat King Cole, Michael Bublé).",
        "Decorate your mini Christmas tree with warm string lights and red ribbons.",
        "Roll out spiced cookie dough (cinnamon, ginger, clove, flour, and butter) and cut into stars, hearts, and trees.",
        "Bake for 10 minutes until your whole home smells like a European bakery.",
        "Pipe sweet royal icing decorations onto the cookies together.",
        "Wrap secret stocking gifts for each other to open on Christmas morning.",
      ],
      materialsNeeded: [
        "Mini tabletop artificial Christmas tree or potted cypress plant (available everywhere in Dec)",
        "Fairy lights and small ornaments",
        "Flour, butter, brown sugar, cinnamon, ginger powder, and powdered sugar for icing",
        "Red wine or cranberry juice + whole spices for mulled wine",
      ],
    },
    feast: {
      dishName: "Warm Spiced Gingerbread & Cinnamon Star Cookies with Festive Fondue",
      dishDescription:
        "Freshly baked spiced cookies dipped into warm melted chocolate or creamy cheese fondue with crusty baguette cubes.",
      drinkName: "Traditional Holiday Spiced Mulled Wine (Glühwein)",
      drinkDescription:
        "Red wine (or cranberry-grape juice for non-alcoholic) gently simmered with sliced oranges, cinnamon sticks, cloves, and star anise.",
      quickRecipeSteps: [
        "Combine 1 bottle red wine (or 1 liter grape-cranberry juice), 1 sliced orange, 2 cinnamon sticks, 4 cloves, 2 star anise, and 2 tbsp honey in a pot.",
        "Warm over very low heat for 20 minutes (never boil!). Strain into warm mugs with a cinnamon stick garnish.",
        "Cream butter and brown sugar, mix in ginger, cinnamon, flour, and bake cookies at 180°C for 10 mins.",
        "Serve with hot chocolate or fondue by the glowing tree lights.",
      ],
      vegetarianOption: "Completely vegetarian, sweet, aromatic, and iconic.",
    },
    ambiance: {
      musicTheme: "Christmas Jazz Classics & Holiday Orchestral",
      suggestedPlaylist: "Cozy Christmas Jazz & Fireside Carols",
      spotifySearchQuery: "Christmas jazz cozy fireplace",
      lightingAndDecor:
        "Warm fairy lights on the tree, stockings hung on a shelf, red ribbons, and scent of pine/cinnamon in the air.",
      movieOrShowRecommendation: {
        title: "The Holiday (or Love Actually / Home Alone)",
        year: "2006",
        platformHint: "Netflix / Prime Video",
        whyWatch:
          "The ultimate romantic holiday comfort film featuring snowy English countryside cottages, crackling fires, and enduring love.",
      },
    },
    indianFeasibility: {
      effortLevel: "Half-Day Fun",
      estimatedBudgetInINR: "₹600 - ₹1,400",
      prepTime: "45 mins",
      quickCommerceItems: [
        "Mini 1-2ft Christmas Tree & Ornaments (Zepto/Blinkit stocks dozens of Christmas trees and baubles throughout December!)",
        "Red Wine (Sula Cabernet Shiraz from local store) or Real Cranberry/Grape juice",
        "Cinnamon sticks, whole cloves, star anise, fresh oranges",
        "Maida, butter, brown sugar, ginger powder, powdered sugar",
      ],
      localMarketItems: [
        "Mini pine tree or ornaments from local Christmas bazaar / Hill Road / Khan Market / Commercial St",
      ],
      substitutions: [
        {
          authenticItem: "Glühwein Spices Pre-mix",
          indianSubstitute: "Indian whole Garam Masala spices (cinnamon, laung, chakra phool) + fresh orange peel",
          note: "India's whole spices are fresher and far more fragrant than any imported mulling spice pack.",
        },
      ],
      proTip:
        "Baking gingerbread in your apartment creates an incredible festive fragrance that lasts for days—it beats any scented candle!",
    },
  },
  {
    id: "hogmanay",
    name: "Hogmanay & New Year's Eve",
    alternateNames: ["Scottish New Year", "First Footing"],
    culture: "Celtic & Western",
    originCountry: "Scotland / Global",
    month: 12,
    monthName: "December",
    approximateDate: "December 31",
    date2026: "2026-12-31",
    tagline: "First-footing tradition, midnight sparkling toast, and couple's vision board for the new year.",
    summary:
      "The Scottish celebration of the New Year, renowned for traditions like 'First Footing'—bringing symbolic gifts like shortbread, salt, and coal across the threshold to bring luck for the entire coming year.",
    culturalSignificance:
      "Historically even bigger than Christmas in Scotland! Singing 'Auld Lang Syne' at the stroke of midnight originated here from poet Robert Burns. It's a poignant moment to celebrate lasting friendship and romance.",
    coverImage:
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=1200&q=80",
    coupleRitual: {
      title: "The 'First-Footing' Gift Exchange & New Year Couple Vision Board",
      estimatedDuration: "45 mins",
      description:
        "Before midnight, step outside your front door for a minute and re-enter bringing gifts of Scottish shortbread (sweetness) and a coin (wealth). Sit together with a scrapbook or tablet to design your couple travel & life vision board for the coming 12 months.",
      steps: [
        "Bake or buy buttery Scottish shortbread biscuits.",
        "Step across your doorway at midnight carrying shortbread and a shiny coin to welcome good fortune.",
        "Pop open a bottle of sparkling wine, Champagne, or sparkling grape juice.",
        "Sing or play 'Auld Lang Syne' by Dougie MacLean.",
        "Open a scrapbook or note and write 5 adventures you want to take together in the new year.",
        "Toast to another year of shared memories and growth.",
      ],
      materialsNeeded: [
        "Scottish shortbread (Walkers or homemade with butter, sugar, flour)",
        "Sparkling wine or sparkling white grape juice",
        "A journal or poster board for your couple vision board",
      ],
    },
    feast: {
      dishName: "Classic Golden Scottish Shortbread & Gourmet Cheese Board",
      dishDescription:
        "Melt-in-your-mouth 3-ingredient buttery Scottish shortbread fingers paired with artisan cheeses, grapes, and nuts.",
      drinkName: "Midnight Sparkling Elderflower Champagne Toast",
      drinkDescription:
        "Chilled Prosecco / Sula Brut or sparkling grape juice with a splash of elderflower syrup and a frozen raspberry.",
      quickRecipeSteps: [
        "Mix 1 cup salted Amul butter, 1/2 cup powdered sugar, and 2 cups maida into a crumbly dough.",
        "Press into a baking tin, prick with a fork in rows, and bake at 160°C for 30 mins until pale golden.",
        "Slice into fingers while warm and dust with castor sugar.",
        "Pour chilled bubbly into champagne flutes.",
        "Toast at the stroke of 12!",
      ],
      vegetarianOption: "100% vegetarian, buttery, luxurious, and celebratory.",
    },
    ambiance: {
      musicTheme: "Celtic Bagpipes, Auld Lang Syne & Midnight Party Anthem",
      suggestedPlaylist: "Hogmanay Scottish New Year & Auld Lang Syne",
      spotifySearchQuery: "Auld Lang Syne Dougie MacLean",
      lightingAndDecor:
        "Sparklers on the balcony at midnight, gold and silver party ribbons, and candlelight.",
      movieOrShowRecommendation: {
        title: "About Time (or When Harry Met Sally...)",
        year: "2013",
        platformHint: "Netflix / Prime Video",
        whyWatch:
          "The greatest New Year's Eve romance film in modern cinema—tender, philosophical, and intensely moving.",
      },
    },
    indianFeasibility: {
      effortLevel: "Easy & Cozy",
      estimatedBudgetInINR: "₹500 - ₹1,200",
      prepTime: "30 mins",
      quickCommerceItems: [
        "Amul Butter (or Kerrygold), Powdered Sugar, Maida",
        "Sparkling Wine (Sula Brut / Chandon) or Sparkling White Grape Juice (Blinkit/Zepto stocks non-alcoholic celebration bottles)",
        "Grapes, Walnuts, Brie or Gouda cheese",
        "Party sparklers / poppers",
      ],
      localMarketItems: ["Stationery or notebook for vision board"],
      substitutions: [
        {
          authenticItem: "Walkers Scottish Shortbread",
          indianSubstitute: "Homemade shortbread made with cold Amul butter",
          note: "Taking 3 ingredients (butter, sugar, maida) and baking them fresh at home tastes 10x richer than packaged boxes.",
        },
      ],
      proTip:
        "Keep the sparklers ready on your balcony at 11:58 PM so you can light them together as the countdown hits zero!",
    },
  },
];
