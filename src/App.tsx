import { useEffect } from 'react'
import CookingSection from './components/CookingSection'

function App() {
  useEffect(() => {
    const handleAnchorClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A') {
        console.log('Clicked anchor:', target);
        console.log('Anchor text:', target.textContent);
        console.log('Anchor href:', target.getAttribute('href'));
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="app">
      <CookingSection />
    </div>
  )
}

export default App
