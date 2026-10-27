import { StoreProvider } from './context/StoreContext';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import CollectionShowcase from './components/CollectionShowcase';
import SignatureDesigns from './components/SignatureDesigns';
import FeaturedBanner from './components/FeaturedBanner';
import NewArrivals from './components/NewArrivals';
import OurStory from './components/OurStory';
import BridalJournal from './components/BridalJournal';
import BridalExperience from './components/BridalExperience';
import Lookbook from './components/Lookbook';
import Testimonials from './components/Testimonials';
import InstagramGallery from './components/InstagramGallery';
import AppointmentForm from './components/AppointmentForm';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import SearchOverlay from './components/SearchOverlay';
import BagDrawer from './components/BagDrawer';
import CheckoutModal from './components/CheckoutModal';

export default function App() {
  return (
    <StoreProvider>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <CollectionShowcase />
        <SignatureDesigns />
        <FeaturedBanner />
        <NewArrivals />
        <OurStory />
        <BridalJournal />
        <BridalExperience />
        <Lookbook />
        <Testimonials />
        <InstagramGallery />
        <AppointmentForm />
        <Newsletter />
      </main>
      <Footer />
      <ProductModal />
      <SearchOverlay />
      <BagDrawer />
      <CheckoutModal />
    </StoreProvider>
  );
}