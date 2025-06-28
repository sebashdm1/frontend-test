import type { AnchorClickHandler, CookingSectionProps } from '../../types';
import { useStaggeredPageLoad } from '../../hooks/usePageLoadAnimation';
import CookingImages from './CookingImages';
import CookingContent from './CookingContent';
import './CookingSection.scss';

const CookingSection = ({ content }: CookingSectionProps) => {
  const handleAnchorClick: AnchorClickHandler = (linkName, href) => {
    console.log('Anchor clicked:', linkName);
    console.log('Anchor href:', href);
    console.log('Timestamp:', new Date().toISOString());
  };

  const [containerLoaded, imagesLoaded, contentLoaded] = useStaggeredPageLoad(3, 100, 200);

  return (
    <section 
      className={`cooking-section ${containerLoaded ? 'animate-on-load is-visible' : 'animate-on-load'}`}
    >
      <div className="cooking-container">
        <CookingImages 
          className={`${imagesLoaded ? 'animate-slide-right is-visible' : 'animate-slide-right'}`}
        />
        
        <CookingContent 
          className={`${contentLoaded ? 'animate-slide-left is-visible' : 'animate-slide-left'}`}
          onAnchorClick={handleAnchorClick}
          content={content}
        />
      </div>
    </section>
  );
};

export default CookingSection; 