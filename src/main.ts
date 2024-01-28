import AOS from 'aos';
import './components/slider';
import { Navigation } from './components/navigation';
import Header from './components/header';
import YTPlayer from './components/youtubePlayer';

AOS.init({ once: true });

Navigation.init();
Header.init();
new YTPlayer().init();
