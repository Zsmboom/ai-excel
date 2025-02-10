import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import AiExcelGenerator from '../pages/AiExcelGenerator';
import ExcelFunctions from '../pages/ExcelFunctions';
import PicToExcel from '../pages/PicToExcel';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import About from '../pages/About';
import AiExcelChart from '../pages/AiExcelChart';
import NotFound from '../pages/NotFound';
import Privacy from '../pages/Privacy';
import Contact from '../pages/Contact';
import Sitemap from '../pages/Sitemap';

const router = createBrowserRouter([
  {
    path: '/:lang?',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: ':lang/ai-excel-generator',
        element: <AiExcelGenerator />
      },
      {
        path: ':lang/excel-functions',
        element: <ExcelFunctions />
      },
      {
        path: ':lang/pic-to-excel',
        element: <PicToExcel />
      },
      {
        path: ':lang/blog',
        element: <Blog />
      },
      {
        path: ':lang/blog/:id',
        element: <BlogDetail />
      },
      {
        path: ':lang/about',
        element: <About />
      },
      {
        path: ':lang/ai-excel-chart',
        element: <AiExcelChart />
      },
      {
        path: ':lang/privacy',
        element: <Privacy />
      },
      {
        path: ':lang/contact',
        element: <Contact />
      },
      {
        path: ':lang/sitemap',
        element: <Sitemap />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);

export default router; 