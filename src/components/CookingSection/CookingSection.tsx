import type { AnchorClickHandler } from '../../types';
import { cookingImages, cookingContent } from './data';
import './CookingSection.scss';

const CookingSection = () => {
  const handleAnchorClick: AnchorClickHandler = (linkName, href) => {
    console.log('Anchor clicked:', linkName);
    console.log('Anchor href:', href);
    console.log('Timestamp:', new Date().toISOString());
  };

  const leftImage = cookingImages.find(img => img.position === 'left');
  const rightTopImage = cookingImages.find(img => img.position === 'right-top'); 
  const rightBottomImage = cookingImages.find(img => img.position === 'right-bottom');

  return (
    <section className="cooking-section">
      <div className="cooking-container">
        <div className="images-section">
          <div className="image-left">
            {leftImage && (
              <img src={leftImage.src} alt={leftImage.alt} />
            )}
          </div>
          <div className="images-right">
            <div className="image-top">
              {rightTopImage && (
                <img src={rightTopImage.src} alt={rightTopImage.alt} />
              )}
            </div>
            <div className="image-bottom">
              {rightBottomImage && (
                <img src={rightBottomImage.src} alt={rightBottomImage.alt} />
              )}
            </div>
          </div>
        </div>
        
        <div className="content-section">
          <div className="headline">
            <h2>{cookingContent.headline}</h2>
          </div>
          
          <div className="body">
            <p>{cookingContent.mainText}</p>
            
            <div className="call-out">
              <a 
                href="#perfect-egg"
                onClick={(e) => {
                  e.preventDefault();
                  handleAnchorClick('THE PERFECT EGG', '#perfect-egg');
                }}
              >
                <h3>{cookingContent.callOut.title}</h3>
              </a>
              <p>{cookingContent.callOut.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookingSection; 