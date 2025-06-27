import type { CookingContentProps } from '../../types';
import { cookingContent } from '../../data/cooking';

const CookingContent = ({ className = '', onAnchorClick }: CookingContentProps) => {
  return (
    <article className={`content-section ${className}`} itemScope itemType="http://schema.org/Article">
      <header className="article-header">
        <h2 itemProp="headline">{cookingContent.headline}</h2>
      </header>
      
      <div className="article-body" itemProp="articleBody">
        <p>{cookingContent.mainText}</p>
        
        <aside className="call-out" role="complementary">
          <a 
            href="#perfect-egg"
            onClick={(e) => {
              e.preventDefault();
              onAnchorClick('THE PERFECT EGG', '#perfect-egg');
            }}
            itemProp="relatedLink"
          >
            <h3>{cookingContent.callOut.title}</h3>
          </a>
          <p>{cookingContent.callOut.description}</p>
        </aside>
      </div>
    </article>
  );
};

export default CookingContent; 