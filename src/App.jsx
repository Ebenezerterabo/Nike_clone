
import { createBrowserRouter, 
  RouterProvider, 
  Route,createRoutesFromElements
} from 'react-router';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Contact from './pages/Contact';
import RootLayout from './layout/RootLayout';
import ProductDetails from './pages/ProductDetails';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='products' element={<Products />}/>
        <Route path='products/:productId' element={<ProductDetails />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App;