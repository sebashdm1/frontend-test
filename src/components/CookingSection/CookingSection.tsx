import type { AnchorClickHandler } from '../../types';
import { cookingImages, cookingContent } from './data';
import { useStaggeredPageLoad } from '../../hooks/usePageLoadAnimation';
import './CookingSection.scss';

const CookingSection = () => {
  const handleAnchorClick: AnchorClickHandler = (linkName, href) => {
    console.log('Anchor clicked:', linkName);
    console.log('Anchor href:', href);
    console.log('Timestamp:', new Date().toISOString());
  };

  // Use staggered animation for 3 main elements
  const [containerLoaded, imagesLoaded, contentLoaded] = useStaggeredPageLoad(3, 100, 200);

  const leftImage = cookingImages.find(img => img.position === 'left');
  const rightTopImage = cookingImages.find(img => img.position === 'right-top'); 
  const rightBottomImage = cookingImages.find(img => img.position === 'right-bottom');

  return (
    <section 
      className={`cooking-section ${containerLoaded ? 'animate-on-load is-visible' : 'animate-on-load'}`}
    >
      <div className="cooking-container">
        <div 
          className={`images-section ${imagesLoaded ? 'animate-slide-right is-visible' : 'animate-slide-right'}`}
        >
          <div className="clear">
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
        
        <div 
          className={`content-section ${contentLoaded ? 'animate-slide-left is-visible' : 'animate-slide-left'}`}
        >
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