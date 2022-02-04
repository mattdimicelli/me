import logo from './logo.svg';
import './App.css';
import ResponsiveSidebar from './components/ResponsiveSidebar';
import MobileMenu from './components/MobileMenu';
import Content from './components/Content';

const App = () => {
  return (
    <div className="relative min-h-screen">
      <MobileMenu />
      <ResponsiveSidebar />
      <Content />
    </div>
  );
}

export default App;
