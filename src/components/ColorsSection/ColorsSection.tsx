import type { ImageClickHandler, ColorsSectionProps } from '../../types';
import { useImageModal } from '../../hooks/useImageModal';
import ImageModal from '../ImageModal/ImageModal';
import ColorCard from './ColorCard';
import { colorsSectionContent as defaultContent } from '../../data/colorCards';
import './ColorsSection.scss';

const ColorsSection = ({ content }: ColorsSectionProps) => {
  const { isModalOpen, selectedImage, openModal, closeModal } = useImageModal();
  const activeContent = content || defaultContent;

  const handleImageClick: ImageClickHandler = (imageName) => {
    openModal(imageName);
  };

  return (
    <section className="colors-section" itemScope itemType="http://schema.org/ItemList">
      <div className="colors-container">
        <div className="content">
          <header className="section-header">
            <h2 itemProp="name">{activeContent.title}</h2>
          </header>
          
          <div className="card-list" role="list" itemProp="itemListElement">
            {activeContent.cards.map((card) => (
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

      <ImageModal 
        isOpen={isModalOpen}
        imageName={selectedImage} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default ColorsSection; 