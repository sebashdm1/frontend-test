# Frontend - Test for Filta/Orchard

🚀 **Live Demo:** [https://frontend-test-sebastian-hernandez.vercel.app/](https://frontend-test-sebastian-hernandez.vercel.app/)

Interactive frontend application showcasing cooking and color sections with responsive design, anchor tracking, and image modals.

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation & Setup**

1. **Clone the repository**
   ```bash
   https://github.com/sebashdm1/frontend-test.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Technical Architecture

### **Stack Decisions**

- **React 18** - Component-based architecture for maintainable UI
- **TypeScript** - Type safety and better developer experience  
- **Vite** - Fast development server and optimized builds
- **SCSS** - Enhanced CSS with variables and nesting
- **Vercel** - Deployment platform with automatic CI/CD

### **Why These Choices?**

**React + TypeScript:**
- Type safety prevents runtime errors
- Component reusability and composition
- Excellent debugging and IDE support
- Industry standard for frontend development

**Vite over Create React App:**
- ⚡ 10x faster development server
- Native ES modules support
- Optimized production builds
- Modern tooling out of the box

**SCSS over styled-components:**
- Better performance (no runtime CSS-in-JS)
- Easier responsive design with mixins
- Familiar CSS syntax with enhancements
- Better integration with design systems


### **Architectural Principles**

1. **Separation of Concerns** - Components, types, and constants separated
2. **Single Responsibility** - Each file has one clear purpose
3. **DRY (Don't Repeat Yourself)** - Constants centralized, no magic strings
4. **Type Safety** - Comprehensive TypeScript coverage
5. **CMS-Ready** - Flexible layouts for dynamic content

## 🎨 Design Implementation

### **Zeplin Integration**

- Used Zeplin MCP tools to extract exact specifications
- Pixel-perfect implementation matching design tokens:
  - Colors: `rgb(14, 20, 20)` dark background
  - Typography: OpenSans with specific weights (300, 700)
  - Spacing: Precise gaps and padding from design


## 🎯 Technical Features

### **Modern CSS Architecture**
- **CSS Grid** - Main layout system for complex 2D layouts
- **Flexbox** - Item alignment and 1D layouts  
- **CSS Custom Properties** - Dynamic theming and consistent spacing

### **Testing Infrastructure**
- **Vitest** - Fast, modern testing framework with ESM support
- **React Testing Library** - User-centric component testing
- **Jest-DOM** - Enhanced assertion library for DOM testing

### **Component Architecture**
- **Custom Hooks** - `useImageModal`, `usePageLoadAnimation` for reusable logic
- **Co-location Pattern** - Tests alongside components for maintainability
cus Management** - Visual focus indicators and logical tab order

### **Responsive Design Strategy**
- **Desktop-First Approach** - Optimized for 1440px+ screens
- **Progressive Enhancement** - Graceful degradation to mobile
- **Breakpoints**:
  - Desktop: 1440px+ (primary design)
  - Large Tablet: 768px - 1439px


## 🔧 Development Workflow

### **Code Quality**
- TypeScript strict mode enabled
- Consistent naming conventions
- Comprehensive type definitions
- SCSS organized with variables and mixins
- Zero magic strings - all hardcoded values replaced with constants


## 🚀 Deployment

**Platform:** Vercel
- Automatic deployments from main branch
- Edge network for global performance
- Instant rollbacks if needed
- Custom domain ready

## 🔮 Future Enhancements

### **CMS Integration Ready**
Architecture supports easy integration with:
- **Contentful** (recommended for ease)
- **Sanity** (for advanced content management)  
- **Strapi** (for full control)

### **Performance Monitoring**
- Vercel Analytics ready
- Web Vitals tracking possible
- Image optimization pipeline

### **Accessibility**
- ARIA labels implemented
- Keyboard navigation functional
- Screen reader compatibility

---

**Developer:** Sebastian Hernandez Caro  
**Live Demo:** [https://frontend-test-sebastian-hernandez.vercel.app/](https://frontend-test-sebastian-hernandez.vercel.app/)
