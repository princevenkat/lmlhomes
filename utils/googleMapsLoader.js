import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: 'AIzaSyCPQm-Gl4aIgNuj5v8l_J34EEDfGJtZCbU',
  version: 'weekly',
  libraries: ['places'],
});

export default loader;