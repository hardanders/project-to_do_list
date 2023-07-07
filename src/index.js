import './styles.css';
import { Display } from './display';
import Homepage from './homepage';

Homepage.loadPage();
Display.displayTasks(Display.currentProject())
Display.displayProjects();