import type { CookingImagesProps } from '../../types';
import { cookingImages } from '../../data/cooking';
import { COOKING_POSITIONS } from '../../constants/positions';

const CookingImages = ({ className = '' }: CookingImagesProps) => {
  const leftImage = cookingImages.find(img => img.position === COOKING_POSITIONS.LEFT);
  const rightTopImage = cookingImages.find(img => img.position === COOKING_POSITIONS.RIGHT_TOP); 
  const rightBottomImage = cookingImages.find(img => img.position === COOKING_POSITIONS.RIGHT_BOTTOM);

  return (
    <div className={`images-section ${className}`}>
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
  );
};

export default CookingImages; 