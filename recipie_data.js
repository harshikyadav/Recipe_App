const { v4: uuidv4 } = require('uuid');
const recipe=[
    {
        title: "Butter Chicken",
        image_url: "https://www.shemins.com/wp-content/uploads/2017/05/Shemins-Butter-Chicken-LR.jpg",
        about: "Butter Chicken, also known as Murgh Makhani, is a rich and creamy chicken curry cooked with a blend of spices, tomatoes, and butter. It's a popular dish in Indian cuisine, often served with naan or rice.",
        Ingredients: "Chicken breast (500 grams), butter (3 tbsp), cream (1/2 cup), tomatoes (3 medium-sized), onion (1 large, finely chopped), ginger-garlic paste (1 tbsp), garam masala (1 tsp), red chili powder (1 tsp), turmeric powder (1/2 tsp), kasuri methi (1 tsp), salt, oil (2 tbsp).",
        steps: "1. Marinate chicken with ginger-garlic paste, red chili powder, and salt for at least 30 minutes. 2. Cook the marinated chicken until tender and golden brown. 3. In a pan, heat butter and sauté onions until golden brown. 4. Add tomatoes, red chili powder, turmeric, garam masala, and salt, and cook until the oil separates. 5. Add the cooked chicken and stir in cream and kasuri methi. 6. Simmer for 5-10 minutes, and serve with naan or rice.",
        type: "indian",
        id:uuidv4()
    },
    {
        "title": "Paneer Butter Masala",
        "image_url": "https://khaddoroshik.com/wp-content/uploads/2024/06/paneer-do-pyaza-cooking.jpg",
        "about": "Paneer Butter Masala is a rich and creamy vegetarian curry made with paneer (cottage cheese) in a spiced tomato gravy. It’s a popular choice for vegetarians and is usually served with naan, roti, or rice.",
        "Ingredients": "Paneer (250 grams), tomatoes (3 medium-sized), onion (1 large, chopped), ginger-garlic paste (1 tbsp), butter (3 tbsp), heavy cream (1/4 cup), garam masala (1 tsp), red chili powder (1 tsp), turmeric powder (1/2 tsp), kasuri methi (1 tsp), salt, and fresh coriander for garnish.",
        "steps": "1. Heat butter in a pan and sauté onions until golden brown. 2. Add ginger-garlic paste and cook for a minute. 3. Add tomatoes, red chili powder, turmeric, and salt. Cook until tomatoes are soft. 4. Blend the mixture to a smooth paste. 5. Return the paste to the pan, add paneer cubes, and cook for 5 minutes. 6. Add cream, kasuri methi, and garam masala. Simmer for a few minutes. 7. Garnish with fresh coriander and serve with naan or rice.",
        "type": "indian",
        id:uuidv4()
    },
    {
        "title": "Chole",
        "image_url": "https://vaya.in/recipes/wp-content/uploads/2018/03/Dry-Chole.jpg",
        "about": "Chole is a flavorful and hearty North Indian curry made with chickpeas and a blend of spices. It's a favorite served with bhature, roti, or rice.",
        "Ingredients": "Chickpeas (1 cup, soaked overnight), onion (1 large, chopped), tomatoes (2 medium-sized, chopped), ginger-garlic paste (1 tbsp), green chilies (2, slit), cumin seeds (1 tsp), coriander powder (1 tsp), cumin powder (1 tsp), garam masala (1 tsp), red chili powder (1 tsp), turmeric powder (1/2 tsp), tea bag (1), salt, and oil.",
        "steps": "1. In a pressure cooker, cook the soaked chickpeas with a tea bag for 3-4 whistles. Set aside. 2. Heat oil in a pan, add cumin seeds, and let them splutter. 3. Add onions, and sauté until golden. Add ginger-garlic paste and cook for 2 minutes. 4. Add tomatoes, red chili, turmeric, coriander, cumin powder, and cook until the oil separates. 5. Add cooked chickpeas, water, salt, and cook for 10-15 minutes. 6. Add garam masala and simmer for 5 minutes. Garnish with fresh coriander.",
        "type": "indian",
        id:uuidv4()
    },
    {
        "title": "Aloo Gobi",
        "image_url": "https://static01.nyt.com/images/2023/12/21/multimedia/ND-Aloo-Gobi-gkwc/ND-Aloo-Gobi-gkwc-threeByTwoMediumAt2X.jpg",
        "about": "Aloo Gobi is a simple and flavorful vegetarian curry made with potatoes and cauliflower. It’s a staple in Indian households, perfect with roti, paratha, or rice.",
        "Ingredients": "Potatoes (2 medium-sized, peeled and cubed), cauliflower (1 small, cut into florets), onions (1 large, chopped), tomatoes (2 medium-sized, chopped), ginger-garlic paste (1 tbsp), cumin seeds (1 tsp), turmeric powder (1/2 tsp), red chili powder (1 tsp), coriander powder (1 tsp), garam masala (1 tsp), salt, oil (2 tbsp), fresh coriander leaves.",
        "steps": "1. Heat oil in a pan, add cumin seeds, and let them splutter. 2. Add onions and sauté until golden. 3. Add ginger-garlic paste and cook for 2 minutes. 4. Add tomatoes, turmeric, red chili, and coriander powders, and cook until tomatoes soften. 5. Add potatoes and cauliflower, mix well, and cook for 5 minutes. 6. Add water to make a gravy, cover, and simmer until vegetables are tender. 7. Add garam masala, stir, and garnish with fresh coriander leaves.",
        "type": "indian",
        id:uuidv4()
    },
    {
        "title": "Vegetable Biryani",
        "image_url": "https://t3.ftcdn.net/jpg/09/06/05/64/360_F_906056452_KzWr4CtlCIXwayURl2TJc5uLHXthbSEf.jpg",
        "about": "Vegetable Biryani is a fragrant and flavorful one-pot rice dish made with mixed vegetables, basmati rice, and aromatic spices. It’s often served with raita or salad.",
        "Ingredients": "Basmati rice (1 cup), mixed vegetables (carrot, peas, beans, 1 cup), onions (1 large, thinly sliced), tomatoes (2 medium-sized), ginger-garlic paste (1 tbsp), green chilies (2, slit), biryani masala (1 tbsp), garam masala (1 tsp), cinnamon stick (1-inch), cloves (2), bay leaf (1), fresh mint leaves, fresh coriander leaves, yogurt (2 tbsp), oil or ghee (3 tbsp), salt.",
        "steps": "1. Rinse and soak basmati rice for 30 minutes. 2. Heat oil/ghee in a pan and fry the onions until golden brown. Remove and set aside. 3. Add spices (bay leaf, cinnamon, cloves) and sauté for 1 minute. 4. Add ginger-garlic paste, green chilies, and tomatoes. Cook until soft. 5. Add mixed vegetables, biryani masala, and cook for 5 minutes. 6. Add soaked rice, water (1.5 cups), yogurt, salt, and cook on low heat for 15-20 minutes. 7. Garnish with fried onions, mint, and coriander.",
        "type": "indian",
        id:uuidv4()
    },
    {
        "title": "Spaghetti Carbonara",
        "image_url": "https://images.unsplash.com/photo-1633337474564-1d9478ca4e2e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhZ2hldHRpJTIwY2FyYm9uYXJhfGVufDB8fDB8fHww",
        "about": "Spaghetti Carbonara is a traditional Italian pasta dish made with eggs, cheese, pancetta, and pepper. It's creamy, rich, and comforting.",
        "Ingredients": "Spaghetti (200 grams), pancetta (100 grams, diced), eggs (2 large), Pecorino Romano cheese (1/2 cup, grated), Parmesan cheese (1/4 cup, grated), black pepper (freshly ground), salt.",
        "steps": "1. Cook spaghetti according to package instructions. 2. In a pan, cook pancetta until crispy. 3. Beat eggs in a bowl and mix with grated cheeses and black pepper. 4. Drain the pasta, reserving some pasta water. 5. Toss pasta in the pancetta, adding egg mixture and pasta water to create a creamy sauce. 6. Serve with extra cheese and black pepper.",
        "type": "italian",
        id:uuidv4()
    },
    {
        "title": "Fish and Chips",
        "image_url": "https://i0.wp.com/travelandmunchies.com/wp-content/uploads/2022/12/IMG_9513-scaled.jpg?fit=2560%2C1828&ssl=1",
        "about": "Fish and Chips is a classic British dish consisting of battered and deep-fried fish, usually cod or haddock, served with crispy fries.",
        "Ingredients": "Cod fillets (4 pieces), potatoes (4 large, cut into fries), flour (1 cup), baking powder (1 tsp), cold beer or sparkling water (1 cup), salt, pepper, oil (for frying), lemon wedges, tartar sauce (optional).",
        "steps": "1. Cut potatoes into fries and soak them in water. 2. Prepare the batter by mixing flour, baking powder, cold beer (or water), salt, and pepper. 3. Heat oil in a deep pan for frying. 4. Dip the cod fillets into the batter and fry until golden and crispy. 5. Fry the potatoes until golden and crispy. 6. Serve the fish and chips with lemon wedges and tartar sauce.",
        "type": "english",
        id:uuidv4()
    },
    {
        "title": "Tacos",
        "image_url": "https://images.alphacoders.com/583/583490.jpg",
        "about": "Tacos are a traditional Mexican dish consisting of a folded or rolled tortilla filled with various ingredients like meat, cheese, lettuce, and salsa.",
        "Ingredients": "Soft corn tortillas (6), ground beef (500 grams), taco seasoning (1 packet), onion (1, chopped), lettuce (shredded), tomatoes (diced), cheddar cheese (shredded), salsa, sour cream.",
        "steps": "1. Cook ground beef with taco seasoning according to package instructions. 2. Heat tortillas in a dry pan. 3. Assemble tacos by adding beef, onion, lettuce, tomato, cheese, salsa, and sour cream. 4. Serve with lime wedges.",
        "type": "mexican",
        id:uuidv4()
    },{
        "title": "Sushi",
        "image_url": "https://pixelz.cc/wp-content/uploads/2018/12/sushi-uhd-4k-wallpaper.jpg",
        "about": "Sushi is a Japanese dish made with vinegared rice and various fillings like seafood, vegetables, and sometimes tropical fruits.",
        "Ingredients": "Sushi rice (1 cup), nori sheets (seaweed), rice vinegar (2 tbsp), sugar (1 tbsp), salt (1 tsp), tuna or salmon (100 grams, thinly sliced), cucumber (1, julienned), avocado (1, sliced), soy sauce, wasabi, pickled ginger.",
        "steps": "1. Cook sushi rice and season it with rice vinegar, sugar, and salt. 2. Lay a sheet of nori on a bamboo mat. 3. Spread a thin layer of rice on the nori, leaving a small border. 4. Add fillings like tuna, cucumber, and avocado. 5. Roll tightly using the bamboo mat. 6. Slice into bite-sized pieces and serve with soy sauce, wasabi, and pickled ginger.",
        "type": "japanese",
        id:uuidv4()
    },
    {
        "title": "Caesar Salad",
        "image_url": "https://images.pexels.com/photos/2092903/pexels-photo-2092903.jpeg?cs=srgb&dl=pexels-tonyleong81-2092903.jpg&fm=jpg",
        "about": "Caesar Salad is a classic American dish made with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
        "Ingredients": "Romaine lettuce (1 head, chopped), croutons (1 cup), Parmesan cheese (1/4 cup, grated), Caesar dressing (1/4 cup), chicken breast (optional, grilled and sliced).",
        "steps": "1. Wash and chop the romaine lettuce. 2. Toss lettuce with croutons, Parmesan cheese, and Caesar dressing. 3. If using, top with grilled chicken slices. 4. Serve immediately.",
        "type": "american",
        id:uuidv4()
    },
    {
        "title": "Paella",
        "image_url": "https://images.pexels.com/photos/16743486/pexels-photo-16743486.jpeg?cs=srgb&dl=pexels-marceloverfe-16743486.jpg&fm=jpg",
        "about": "Paella is a traditional Spanish rice dish originally from Valencia, featuring seafood, meat, and vegetables.",
        "Ingredients": "Bomba rice (2 cups), seafood mix (shrimp, mussels, clams, 500 grams), chicken thighs (2, cut into pieces), chorizo (1, sliced), bell peppers (1, chopped), peas (1/2 cup), tomatoes (2, chopped), saffron (a pinch), chicken stock (4 cups), olive oil, garlic (3 cloves, minced), lemon wedges.",
        "steps": "1. In a large pan, heat olive oil and sauté garlic, chorizo, and chicken. 2. Add tomatoes, bell peppers, peas, and cook for a few minutes. 3. Add rice and saffron, stirring to coat with the oil and vegetables. 4. Pour in chicken stock and bring to a boil. 5. Reduce heat, add seafood, and cook until the rice is tender. 6. Serve with lemon wedges.",
        "type": "spanish",
        id:uuidv4()
    },
    {
        title: 'Kadai Paneer',
        about: 'Kadai Paneer is a popular North Indian curry made with paneer (Indian cottage cheese) cooked in a spicy, flavorful tomato-based gravy, and flavored with aromatic spices.',
        Ingredients: '250g paneer, cut into cubes\r\n' +
          '2 medium onions, finely chopped\r\n' +
          '2 tomatoes, pureed\r\n' +
          '1 bell pepper (capsicum), sliced\r\n' +
          '2 green chilies, slit\r\n' +
          '1-inch piece ginger, finely chopped\r\n' +
          '2 garlic cloves, minced\r\n' +
          '1 tablespoon Kadai masala (store-bought or homemade)\r\n' +
          '1 teaspoon cumin seeds\r\n' +
          '1 teaspoon coriander powder\r\n' +
          '1/2 teaspoon turmeric powder\r\n' +
          '1 teaspoon red chili powder\r\n' +
          '1 teaspoon garam masala\r\n' +
          '2 tablespoons oil or ghee\r\n' +
          'Salt to taste\r\n' +
          'Fresh coriander leaves, chopped for garnish\r\n' +
          '1/4 cup water\r\n' +
          '1 tablespoon kasuri methi (dried fenugreek leaves)\r\n' +
          '\r\n',
        steps: 'Heat oil or ghee in a pan or kadai (wok). Add cumin seeds and let them splutter.\r\n' +
          'Add finely chopped onions and sauté until golden brown.\r\n' +
          'Add ginger, garlic, and green chilies. Sauté for a minute until fragrant.\r\n' +
          'Add pureed tomatoes and cook for 5-6 minutes until the oil separates from the masala.\r\n' +
          'Add turmeric powder, red chili powder, and coriander powder. Stir well and cook for 2 minutes.\r\n' +
          'Add sliced bell peppers and cook for another 2 minutes until they soften slightly.\r\n' +
          'Add the Kadai masala and garam masala. Mix well and cook for a minute to blend the flavors.\r\n' +
          'Add water and bring the curry to a simmer. Let it cook for 5 minutes.\r\n' +
          'Add the paneer cubes and gently stir. Let the paneer soak in the flavors of the gravy for 2-3 minutes.\r\n' +
          'Add kasuri methi (dried fenugreek leaves) and mix gently.\r\n' +
          'Garnish with chopped fresh coriander leaves.\r\n' +
          'Serve hot with roti, naan, or rice.',
        image_url: 'https://static.vecteezy.com/system/resources/previews/030/323/043/non_2x/delicious-paneer-bater-masala-dish-in-an-indian-restaurant-generative-ai-photo.jpg',
        type: 'Indian',
        id: uuidv4()
      },
      {
        title: 'Farmhouse Pizza',
        about: 'Farmhouse Pizza is a hearty and delicious pizza topped with a variety of fresh vegetables and meats like mushrooms, bell peppers, onions, and olives, making it a flavorful and satisfying meal.',
        Ingredients: '1 pizza dough (store-bought or homemade)\r\n' +
          '1/2 cup tomato sauce\r\n' +
          '1 cup shredded mozzarella cheese\r\n' +
          '1/2 cup sliced mushrooms\r\n' +
          '1/2 cup green bell pepper, sliced\r\n' +
          '1/2 cup red bell pepper, sliced\r\n' +
          '1/2 cup black olives, sliced\r\n' +
          '1/2 cup onions, thinly sliced\r\n' +
          '1/2 cup sweet corn\r\n' +
          '1/4 cup cooked chicken (optional)\r\n' +
          '1 teaspoon oregano\r\n' +
          '1 teaspoon dried basil\r\n' +
          '1 tablespoon olive oil\r\n' +
          'Salt and pepper to taste\r\n' +
          'Fresh basil leaves (optional, for garnish)',
        steps: 'Preheat your oven to 220°C (425°F).\r\n' +
          'Roll out the pizza dough on a floured surface to about 12 inches in diameter.\r\n' +
          'Spread tomato sauce evenly on the dough, leaving a small border for the crust.\r\n' +
          'Sprinkle shredded mozzarella cheese generously over the sauce.\r\n' +
          'Layer the mushrooms, bell peppers, olives, onions, and sweet corn over the cheese.\r\n' +
          'If using, add the cooked chicken pieces on top of the vegetables.\r\n' +
          'Season with salt, pepper, oregano, and dried basil.\r\n' +
          'Drizzle olive oil over the pizza for added flavor and crispiness.\r\n' +
          'Bake the pizza in the preheated oven for 12-15 minutes, or until the crust is golden and the cheese is melted and bubbly.\r\n' +
          'Remove the pizza from the oven, garnish with fresh basil leaves if desired.\r\n' +
          'Slice and serve hot!',
        image_url: 'https://pixelz.cc/wp-content/uploads/2018/10/pizza-uhd-4k-wallpaper.jpg',
        type: 'Italian',
        id: uuidv4()
      },
      {
        title: 'Chicken Biryani ',
        about: 'Chicken Biryani is a popular and flavorful South Asian dish made with aromatic basmati rice, tender chicken, and a blend of rich spices.',
        Ingredients: 'Basmati rice (2 cups), chicken (500 grams, bone-in pieces), yogurt (1/2 cup), onions (2 large, thinly sliced), tomatoes (2, chopped), ginger-garlic paste (2 tbsp), green chilies (2, slit), biryani masala (2 tbsp), garam masala (1 tsp), turmeric (1/2 tsp), red chili powder (1 tsp), coriander leaves (a handful), mint leaves (a handful), saffron (a pinch soaked in 2 tbsp warm milk), whole spices (bay leaf, cloves, cardamom, cinnamon), oil/ghee, salt to taste.',
        steps: '1. Marinate chicken with yogurt, ginger-garlic paste, turmeric, chili powder, and salt. Let it rest for at least 30 minutes.  \r\n' +
          '2. Fry onions until golden brown and set aside. In the same pot, cook marinated chicken with tomatoes and spices until tender.  \r\n' +
          '3. In a separate pot, cook basmati rice with whole spices until 70% done.  \r\n' +
          '4. In a heavy-bottomed pan, layer chicken and rice. Top with fried onions, mint, coriander, saffron milk, and a bit of ghee.  \r\n' +
          '5. Cover tightly and cook on low heat (dum) for 20–25 minutes.  \r\n' +
          '6. Fluff gently and serve hot with raita or salad.',
        image_url: 'https://images.pexels.com/photos/16020573/pexels-photo-16020573.jpeg?cs=srgb&dl=pexels-gourav-sarkar-462560178-16020573.jpg&fm=jpg',
        type: 'indian',
        id: uuidv4()
      }
]
module.exports=recipe;