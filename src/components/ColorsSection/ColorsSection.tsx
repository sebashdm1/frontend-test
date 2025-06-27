import { useState } from 'react';
import type { ColorType, ImageClickHandler, ModalCloseHandler } from '../../types';
import ImageModal from '../ImageModal/ImageModal';
import ColorCard from './ColorCard';
import { colorCardsData } from '../../data/colorCards';
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
    <section className="colors-section" itemScope itemType="http://schema.org/ItemList">
      <div className="colors-container">
        <div className="content">
          <header className="section-header">
            <h2 itemProp="name">TASTE THE COLOURS</h2>
          </header>
          
          <div className="card-list" role="list" itemProp="itemListElement">
            {colorCardsData.map((card, index) => (
              <ColorCard
                key={card.id}
                id={card.id}
                imagePath={card.imagePath}
                title={card.title}
                description={card.description}
                onImageClick={handleImageClick}
              />
            ))}
          </div>
        </div>
      </div>

      <ImageModal imageName={selectedImage} onClose={closeModal} />
    </section>
  );
};

export default ColorsSection; 