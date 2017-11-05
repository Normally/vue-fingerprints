import FingerprintsComponent from './components/Fingerprints.vue';

export default {
  Fingerprints: FingerprintsComponent,
  install: function(Vue) {
     Vue.component(FingerprintsComponent.name, FingerprintsComponent)
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Fingerprints)
}