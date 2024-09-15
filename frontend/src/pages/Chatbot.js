// src/pages/Chatbot.js

import React, { useState } from 'react';
import './Chatbot.css'; // Optional: for styling
import Navbar from '../components/Navbar';
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      setMessages([...messages, { text: input, sender: 'user' }]);

      // Simulate a chatbot response
      const response = getChatbotResponse(input);
      setMessages((prevMessages) => [...prevMessages, { text: response, sender: 'bot' }]);
      setInput('');
    }
  };

  const getChatbotResponse = (userInput) => {
    const input = userInput.toLowerCase();
  
    if (input.includes('vitamin c')) {
      return "Kiwis and oranges are great sources of vitamin C!";
    }else if(input.includes('hello')){
      return "Hello,write fruit name to know about it";
    } else if (input.includes('recipe')) {
      return "How about a kiwi smoothie? Just blend kiwis with yogurt and a bit of honey!";
    } else if (input.includes('banana')) {
      return "Bananas are a great source of potassium and make an excellent snack!";
    } else if (input.includes('apple')) {
      return "Apples are high in fiber and vitamin C. They make a great addition to any meal!";
    } else if (input.includes('strawberry')) {
      return "Strawberries are rich in antioxidants and can be used in desserts or salads!";
    } else if (input.includes('grape')) {
      return "Grapes are hydrating and can be eaten fresh or dried as raisins!";
    } else if (input.includes('orange')) {
      return "Oranges are not only juicy but also packed with vitamin C!";
    } else if (input.includes('kiwi')) {
      return "Kiwis are a great source of vitamin C, vitamin K, and fiber!";
    } else if (input.includes('mango')) {
      return "Mangoes are rich in vitamins A and C, perfect for smoothies!";
    } else if (input.includes('pineapple')) {
      return "Pineapple contains bromelain, which may help with digestion!";
    } else if (input.includes('blueberry')) {
      return "Blueberries are low in calories but high in nutrients and antioxidants!";
    } else if (input.includes('raspberry')) {
      return "Raspberries are high in fiber and can be added to cereals or desserts!";
    } else if (input.includes('peach')) {
      return "Peaches are a good source of vitamins A and C, great for snacking!";
    } else if (input.includes('watermelon')) {
      return "Watermelon is hydrating and low in calories, perfect for summer!";
    } else if (input.includes('cantaloupe')) {
      return "Cantaloupe is rich in vitamins A and C, great for hydration!";
    } else if (input.includes('papaya')) {
      return "Papaya contains enzymes that aid digestion and is high in vitamin C!";
    } else if (input.includes('cherry')) {
      return "Cherries are packed with antioxidants and can help reduce inflammation!";
    } else if (input.includes('apricot')) {
      return "Apricots are a good source of vitamins A and C, perfect for snacking!";
    } else if (input.includes('pomegranate')) {
      return "Pomegranates are rich in antioxidants and can boost heart health!";
    } else if (input.includes('fig')) {
      return "Figs are high in fiber and can help with digestion!";
    } else if (input.includes('date')) {
      return "Dates are a natural sweetener and a great source of energy!";
    } else if (input.includes('lemon')) {
      return "Lemons are high in vitamin C and can add flavor to many dishes!";
    } else if (input.includes('lime')) {
      return "Limes are great for adding zest to drinks and dishes!";
    } else if (input.includes('coconut')) {
      return "Coconuts provide healthy fats and can be used in various recipes!";
    } else if (input.includes('avocado')) {
      return "Avocados are high in healthy fats and great for heart health!";
    } else if (input.includes('carrot')) {
      return "Carrots are high in beta-carotene, which is good for your eyes!";
    } else if (input.includes('broccoli')) {
      return "Broccoli is a nutrient powerhouse, rich in vitamins and minerals!";
    } else if (input.includes('spinach')) {
      return "Spinach is high in iron and can be eaten raw or cooked!";
    } else if (input.includes('kale')) {
      return "Kale is a superfood packed with vitamins A, K, and C!";
    } else if (input.includes('sweet potato')) {
      return "Sweet potatoes are high in fiber and a great source of vitamin A!";
    } else if (input.includes('zucchini')) {
      return "Zucchini is low in calories and can be used in many dishes!";
    } else if (input.includes('bell pepper')) {
      return "Bell peppers are high in vitamin C and come in various colors!";
    } else if (input.includes('onion')) {
      return "Onions contain antioxidants and can add flavor to your meals!";
    } else if (input.includes('garlic')) {
      return "Garlic is known for its health benefits and can boost your immune system!";
    } else if (input.includes('cucumber')) {
      return "Cucumbers are hydrating and low in calories, perfect for salads!";
    } else if (input.includes('lettuce')) {
      return "Lettuce is low in calories and can be used in salads and sandwiches!";
    } else if (input.includes('celery')) {
      return "Celery is crunchy and low in calories, great for snacking!";
    } else if (input.includes('beet')) {
      return "Beets are high in fiber and can help lower blood pressure!";
    } else if (input.includes('potato')) {
      return "Potatoes are versatile and can be prepared in many ways!";
    } else if (input.includes('cabbage')) {
      return "Cabbage is low in calories and high in nutrients, great for salads!";
    } else if (input.includes('cauliflower')) {
      return "Cauliflower is a low-carb alternative to grains and legumes!";
    } else if (input.includes('eggplant')) {
      return "Eggplant is low in calories and can be used in various dishes!";
    } else if (input.includes('pumpkin')) {
      return "Pumpkin is high in fiber and great for soups and pies!";
    } else if (input.includes('squash')) {
      return "Squash is versatile and can be roasted, steamed, or pureed!";
    } else if (input.includes('nuts')) {
      return "Nuts are a great source of healthy fats and protein!";
    } else if (input.includes('seeds')) {
      return "Seeds like chia and flax are high in omega-3 fatty acids!";
    } else if (input.includes('yogurt')) {
      return "Yogurt is a good source of probiotics and can aid digestion!";
    } else if (input.includes('cheese')) {
      return "Cheese provides calcium and can be enjoyed in moderation!";
    } else if (input.includes('milk')) {
      return "Milk is a good source of calcium and vitamin D!";
    } else if (input.includes('oats')) {
      return "Oats are high in fiber and make a great breakfast option!";
    } else if (input.includes('rice')) {
      return "Rice is a staple food and can be prepared in various ways!";
    } else if (input.includes('quinoa')) {
      return "Quinoa is a complete protein and great for salads and bowls!";
    } else if (input.includes('pasta')) {
      return "Whole grain pasta is a good source of carbohydrates!";
    } else if (input.includes('bread')) {
      return "Whole grain bread provides fiber and essential nutrients!";
    } else if (input.includes('dessert')) {
      return "How about a fruit salad for a healthy dessert option?";
    } else if (input.includes('salad')) {
      return "A mixed green salad with fruits and nuts is refreshing!";
    } else if (input.includes('smoothie')) {
      return "Try a mixed berry smoothie! Blend strawberries, blueberries, and a banana for a tasty treat.";
    } else if (input.includes('soup')) {
      return "How about a vegetable soup? It's nutritious and comforting!";
    } else if (input.includes('snack')) {
      return "Try some carrot sticks with hummus for a healthy snack!";
    } else if (input.includes('breakfast')) {
      return "Oatmeal topped with fruits is a great way to start your day!";
    } else if (input.includes('lunch')) {
      return "How about a quinoa salad with mixed veggies for lunch?";
    } else if (input.includes('dinner')) {
      return "Grilled chicken with steamed broccoli makes a healthy dinner!";
    } else if (input.includes('health benefits')) {
      return "Fruits and vegetables are packed with vitamins, minerals, and antioxidants that support overall health!";
    } else if (input.includes('fiber')) {
      return "Fiber is essential for digestive health and can be found in fruits, vegetables, and whole grains!";
    } else if (input.includes('antioxidants')) {
      return "Antioxidants help combat oxidative stress and can be found in berries, nuts, and dark chocolate!";
    } else if (input.includes('vitamins')) {
      return "Vitamins are essential nutrients that support various bodily functions!";
    } else if (input.includes('minerals')) {
      return "Minerals like calcium and iron are important for bone health and oxygen transport!";
    } else if (input.includes('hydration')) {
      return "Fruits like watermelon and cucumber can help keep you hydrated!";
    } else if (input.includes('meal prep')) {
      return "Preparing meals in advance can help you eat healthier throughout the week!";
    } else if (input.includes('cooking tips')) {
      return "Using fresh herbs can elevate the flavor of your dishes!";
    } else if (input.includes('quick meals')) {
      return "Stir-fried vegetables with tofu can be made in under 30 minutes!";
    } else if (input.includes('vegetarian')) {
      return "Vegetarian meals can be delicious and nutritious, like a chickpea curry!";
    } else if (input.includes('vegan')) {
      return "Vegan dishes can be packed with flavor, like a lentil stew!";
    } else if (input.includes('gluten-free')) {
      return "Quinoa and rice are great gluten-free options for meals!";
    } else if (input.includes('low-carb')) {
      return "Zucchini noodles are a great low-carb alternative to pasta!";
    } else if (input.includes('meal ideas')) {
      return "How about grilled salmon with asparagus for a healthy meal?";
    } else if (input.includes('snack ideas')) {
      return "Greek yogurt with honey and walnuts makes a great snack!";
    } else if (input.includes('fruit salad')) {
      return "A fruit salad with a mix of berries, melons, and citrus is refreshing!";
    } else if (input.includes('healthy eating')) {
      return "Eating a variety of fruits and vegetables is key to a balanced diet!";
    } else if (input.includes('calories')) {
      return "Fruits and vegetables are generally low in calories and high in nutrients!";
    } else {
      return "I'm sorry, I didn't understand that. Can you ask about fruits, recipes, or their health benefits?";
    }
  };
  

  return (
    <div className="chatbot-container">
      <Navbar/>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about fruits..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
