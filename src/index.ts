import App from './app';

new App();

if ((module as any).hot && process.env.NODE_ENV !== 'production') {
  (module as any).hot.accept()
}