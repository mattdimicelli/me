import logo from './logo.svg';
import './App.css';
import ResponsiveSidebar from './components/ResponsiveSidebar';
import MobileMenu from './components/MobileMenu';
import Content from './components/Content';
import { useState } from 'react';

const App = () => {
  let [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="relative min-h-screen">
      <MobileMenu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <ResponsiveSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Content />
    </div>
  );
}

export default App;
