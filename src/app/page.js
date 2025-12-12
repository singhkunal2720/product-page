'use client'

import ProductsPage from './Pages/ProductsPage';
import '../Styles/Global.css'
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <ProductsPage />
      <Footer />
    </div>
  );
}
