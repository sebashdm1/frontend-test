import type { CookingContentProps } from '../../types';
import { cookingContent as defaultContent } from '../../data/cooking';

const CookingContent = ({ className = '', onAnchorClick, content }: CookingContentProps) => {
  const activeContent = content || defaultContent;
  const youtubeUrl = 'https://www.youtube.com/watch?v=X5oD_thIk3c';
  
  return (
    <article className={`content-section ${className}`} itemScope itemType="http://schema.org/Article">
      <header className="article-header">
        <h2 itemProp="headline">{activeContent.headline}</h2>
      </header>
      
      <div className="article-body" itemProp="articleBody">
        <p>{activeContent.mainText}</p>
        
        <aside className="call-out" role="complementary">
          <a 
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              onAnchorClick(activeContent.callOut.title, youtubeUrl);
            }}
            itemProp="relatedLink"
            className="external-link"
          >
            <h3>
              {activeContent.callOut.title}
              <span className="external-icon" aria-label="(opens in new tab)">↗</span>
            </h3>
          </a>
          <p>{activeContent.callOut.description}</p>
        </aside>
      </div>
    </article>
  );
};

export default CookingContent; 