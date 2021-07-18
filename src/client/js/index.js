import '../styles/index.scss';
import { appInitialization } from './helpers';

appInitialization();

if (process.env.NODE_ENV === 'production') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registraion) => {
          console.log('service worker registraion is successful');
        });
    });
  } else {
    console.log('service worker are not supported');
  }
}
