'use strict';
//Since wrappedJSObject in not in chrome I need a way to get access to a non sandboxed document to define properties on

// Page Visibility API
Object.defineProperties(document,
  { 'hidden': {value: false}, 'visibilityState': {value: 'visible'} });

window.addEventListener(
  'visibilitychange', evt => evt.stopImmediatePropagation(), true);

// Fullscreen API
window.addEventListener('fullscreenchange', evt => {
  Object.defineProperties(document,
    { 'fullscreenEnabled': {value: true},
      'fullscreen': {value: true},
      'fullscreenElement': {value: document.fullscreenElement}});
  window.addEventListener(
    'fullscreenchange', evt => evt.stopImmediatePropagation(), true);
}, { capture: true, once: true });
