import { Routes } from '@angular/router';
import { Home} from './pages/home/home';
import { About } from './pages/about/about';
import { Blog } from './pages/blog/blog';
import { ContactPage } from './pages/contact-page/contact-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'blog', component: Blog },
  { path: 'contatti', component: ContactPage },
  { path: '**', redirectTo: '' }
];
