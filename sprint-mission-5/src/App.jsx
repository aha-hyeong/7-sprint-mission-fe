import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <ProductCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
