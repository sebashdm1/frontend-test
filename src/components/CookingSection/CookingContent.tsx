import type { AnchorClickHandler } from '../../types';
import { cookingContent } from '../../data/cooking';

interface CookingContentProps {
  className?: string;
  onAnchorClick: AnchorClickHandler;
}

const CookingContent = ({ className = '', onAnchorClick }: CookingContentProps) => {
  return (
    <div className={`content-section ${className}`}>
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
              onAnchorClick('THE PERFECT EGG', '#perfect-egg');
            }}
          >
            <h3>{cookingContent.callOut.title}</h3>
          </a>
          <p>{cookingContent.callOut.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CookingContent; 