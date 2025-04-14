import { useState } from 'react';
import './ChatAssistant.css';

const productSuggestions = {
  kitchen: [
    { id: 1, name: 'Cutting Board', img: 'https://woodchop.in/cdn/shop/files/IMG_1287.webp?v=1728480560&width=1445' },
    { id: 2, name: 'Non-Stick Pan', img: 'https://judge.ttkprestige.com/media/catalog/product/8/8/8887-38427-IMG1.jpg' },
  ],
  home: [
    { id: 3, name: 'LED Wall Light', img: 'https://sparclights.in/cdn/shop/files/51fgcRiacPL._SX425.jpg?v=1696854836&width=1100' },
    { id: 4, name: 'Decorative Vase', img: 'https://www.dekorcompany.com/cdn/shop/files/S80622-05P.png?v=1697544974' },
  ],
  electronics: [
    { id: 5, name: 'Wireless Earbuds', img: 'https://img.tatacliq.com/images/i11/437Wx649H/MP000000017613596_437Wx649H_202305191651484.jpeg' },
    { id: 6, name: 'Smartphone Stand', img: 'https://gizmore.in/cdn/shop/files/1_480ede98-1a4f-4f9a-a379-d6165d1d2a55.jpg?v=1721133433' },
  ],
  books: [
    { id: 7, name: 'Mystery Novel', img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1689022546-71wytopNhPL.jpg?crop=1xw:1xh;center,top&resize=980:*' },
    { id: 8, name: 'Sci-Fi Classic', img: 'https://m.media-amazon.com/images/M/MV5BMjY4NGVmMzctYjFmYS00MDk3LTlkNDktNDdjMjhlYmY1YmI3XkEyXkFqcGc@._V1_QL75_UX140_CR0,4,140,207_.jpg' },
  ],
  eco: [
    { id: 9, name: 'Eco Toothbrush', img: 'https://5.imimg.com/data5/SELLER/Default/2021/5/PN/LT/BS/27397442/eco-friendly-handmade-bamboo-toothbrush.jpg' },
    { id: 10, name: 'Biodegradable Plate', img: 'https://m.media-amazon.com/images/I/81ttKoTXEIL.jpg' },
  ],
};

export default function ChatAssistant() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const generateReply = (text) => {
    const lower = text.toLowerCase();
    const matchedCategory = Object.keys(productSuggestions).find((key) =>
      lower.includes(key)
    );

    if (matchedCategory) {
      const items = productSuggestions[matchedCategory];
      return {
        role: 'assistant',
        content: `Here are some ${matchedCategory} products you might like:`,
        images: items,
      };
    }

    return {
      role: 'assistant',
      content: `I'm sorry, I couldn't find product suggestions for "${text}".`,
      images: [],
    };
  };

  const handleSend = () => {
    if (!input) return;
    const userMsg = { role: 'user', content: input };
    const reply = generateReply(input);
    setMessages((prev) => [...prev, userMsg, reply]);
    setInput('');
  };

  const handleSuggestedClick = (text) => {
    const userMsg = { role: 'user', content: text };
    const reply = generateReply(text);
    setMessages((prev) => [...prev, userMsg, reply]);
  };

  return (
    <div className="chat-container">
      <div className="chat-box-wrapper">
        <h2 className="chat-title">💬 Chat Assistant</h2>

        <div className="chat-box">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-message ${msg.role}`}>
              <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}
              {msg.images && msg.images.length > 0 && (
                <div className="image-grid">
                  {msg.images.map((item) => (
                    <div key={item.id} className="image-card">
                      <img src={item.img} alt={item.name} />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="chat-input-row">
          <input
            type="text"
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Try asking about kitchen, home, electronics..."
          />
          <button onClick={handleSend} className="send-button">Send</button>
        </div>

        {/* Suggested Questions */}
        <div className="suggested-questions">
          <p className="suggested-title">Try asking:</p>
          <ul className="question-list">
            <li onClick={() => handleSuggestedClick('Show kitchen products')}>🍽️ Show kitchen products</li>
            <li onClick={() => handleSuggestedClick('Suggest electronics')}>📱 Suggest electronics</li>
            <li onClick={() => handleSuggestedClick('Eco-friendly products')}>🌱 Eco-friendly products</li>
            <li onClick={() => handleSuggestedClick('Top home decor items')}>🏡 Top home decor items</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
