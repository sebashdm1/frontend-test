import { useState } from 'react';
import './ColorsSection.scss';

interface ColorCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ColorsSection = () => {
  const [selectedCard, setSelectedCard] = useState<ColorCard | null>(null);

  const colorCards: ColorCard[] = [
    {
      id: 'red',
      title: 'RED',
      description: 'Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.',
      image: '/images/red-color.png'
    },
    {
      id: 'green', 
      title: 'Green',
      description: 'Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours',
      image: '/images/green-color.png'
    },
    {
      id: 'white',
      title: 'White', 
      description: 'White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.',
      image: '/images/white-color.png'
    }
  ];

  const handleCardClick = (card: ColorCard) => {
    console.log(`Anchor clicked: ${card.title} color card`);
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <section className="colors-section">
      <div className="colors-container">
        <div className="headline">
          <h2>Taste the Colours</h2>
        </div>
        
        <div className="card-list">
          {colorCards.map((card) => (
            <div 
              key={card.id}
              className="color-card"
              onClick={() => handleCardClick(card)}
            >
              <div className="card-image">
                <img src={card.image} alt={`${card.title} color theme`} />
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-image">
              <img src={selectedCard.image} alt={`${selectedCard.title} expanded view`} />
            </div>
            <div className="modal-text">
              <h3>{selectedCard.title}</h3>
              <p>{selectedCard.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ColorsSection; 