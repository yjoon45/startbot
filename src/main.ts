import { Navigation } from './components/navigation';
import Player from './components/player';
import AOS from 'aos';
import Header from './components/header';
import './components/slider';

AOS.init({ once: true });

Navigation.init();
Player.init();
Header.init();
