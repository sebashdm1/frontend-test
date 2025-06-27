import { useState } from 'react';
import type { ColorType, ImageClickHandler, ModalCloseHandler } from '../../types';
import ImageModal from '../ImageModal';
import { colorCardsData } from './data';
import './ColorsSection.scss';

const ColorsSection = () => {
  const [selectedImage, setSelectedImage] = useState<ColorType | null>(null);

  const handleImageClick: ImageClickHandler = (imageName) => {
    setSelectedImage(imageName);
  };

  const closeModal: ModalCloseHandler = () => {
    setSelectedImage(null);
  };

  return (
    <section className="colors-section">
      <div className="colors-container">
        <div className="content">
          <div className="headline">
            <h2>TASTE THE COLOURS</h2>
          </div>
          
          <div className="card-list">
            {colorCardsData.map((card) => (
              <div key={card.id} className="card">
                <div className="card-image" onClick={() => handleImageClick(card.id)}>
                  <img src={card.imagePath} alt={`${card.title} food items`} />
                </div>
                <div className="copy">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ImageModal imageName={selectedImage} onClose={closeModal} />
    </section>
  );
};

export default ColorsSection; 