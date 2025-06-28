import type { CookingContentProps } from '../../types';
import { cookingContent as defaultContent } from '../../data/cooking';

const CookingContent = ({ className = '', onAnchorClick, content }: CookingContentProps) => {
  const activeContent = content || defaultContent;
  
  return (
    <article className={`content-section ${className}`} itemScope itemType="http://schema.org/Article">
      <header className="article-header">
        <h2 itemProp="headline">{activeContent.headline}</h2>
      </header>
      
      <div className="article-body" itemProp="articleBody">
        <p>{activeContent.mainText}</p>
        
        <aside className="call-out" role="complementary">
          <a 
            href="#perfect-egg"
            onClick={(e) => {
              e.preventDefault();
              onAnchorClick(activeContent.callOut.title, '#perfect-egg');
            }}
            itemProp="relatedLink"
          >
            <h3>{activeContent.callOut.title}</h3>
          </a>
          <p>{activeContent.callOut.description}</p>
        </aside>
      </div>
    </article>
  );
};

export default CookingContent; 