// src/pages/Translator.js

import React, { useState } from 'react';
import './Translator.css'; // Optional: for styling

const translations = {
    "apple": "सेब", // Hindi
    "banana": "केला",
    "orange": "संतरा",
    "kiwi": "कीवी",
    "mango": "आम",
    "grape": "अंगूर",
    "strawberry": "स्ट्रॉबेरी",
    "blueberry": "नीलाम्बरी",
    "watermelon": "तरबूज",
    "pineapple": "अनानास",
    "peach": "आड़ू",
    "plum": "बेर",
    "cherry": "चेरी",
    "apricot": "खुबानी",
    "pomegranate": "अनार",
    "fig": "अंजीर",
    "date": "खजूर",
    "lemon": "नींबू",
    "lime": "नीबू",
    "coconut": "नारियल",
    "avocado": "एवोकाडो",
    "papaya": "पपीता",
    "guava": "अमरूद",
    "dragon fruit": "ड्रैगन फ्रूट",
    "carrot": "गाजर",
    "broccoli": "ब्रोकली",
    "spinach": "पालक",
    "kale": "गोभी",
    "cabbage": "पत्तागोभी",
    "cauliflower": "फूलगोभी",
    "zucchini": "जुचिनी",
    "bell pepper": "शिमला मिर्च",
    "onion": "प्याज",
    "garlic": "लहसुन",
    "cucumber": "खीरा",
    "lettuce": "सलाद पत्ता",
    "celery": "अजवाइन",
    "beet": "चुकंदर",
    "potato": "आलू",
    "sweet potato": "शकरकंद",
    "pumpkin": "कद्दू",
    "eggplant": "बैंगन",
    "squash": "कद्दू",
    "peas": "मटर",
    "corn": "मक्का",
    "bean": "बीन्स",
    "chickpea": "चने",
    "lentil": "दाल",
    "tofu": "टोफू",
    "nut": "नट",
    "seed": "बीज",
    "yogurt": "दही",
    "cheese": "पनीर",
    "milk": "दूध",
    "oat": "जई",
    "rice": "चावल",
    "quinoa": "क्विनोआ",
    "pasta": "पास्ता",
    "bread": "रोटी",
  };
  

const Translator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleTranslate = () => {
    const translatedText = translations[input.toLowerCase()] || "Translation not found.";
    setOutput(translatedText);
  };

  return (
    <div className="translator-container">
      <h1>Fruit Translator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter fruit name..."
      />
      <button onClick={handleTranslate}>Translate</button>
      <div className="translation-output">
        {output && <p>Translation: {output}</p>}
      </div>
    </div>
  );
};

export default Translator;
