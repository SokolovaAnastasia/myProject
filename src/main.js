import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');


const disabled = document.querySelectorAll('.pagination__link--arrow')
for(let i = 0; i< disabled.length; i++)  {

  disabled[i].addEventListener('click', function() {
    if(disabled[1].classList.contains('pagination__link--disabled') === true) {
      disabled[1].style="opacity:0;"
      disabled[0].style="opacity:1;"
    }
    if(disabled[1].classList.contains('pagination__link--disabled') !== true) {
      disabled[1].style="opacity:1;"
    }
    if(disabled[0].classList.contains('pagination__link--disabled') === true) {
      disabled[0].style="opacity:0;"
      disabled[1].style="opacity:1;"
    }
    if(disabled[0].classList.contains('pagination__link--disabled') !== true) {
      disabled[0].style="opacity:1;"
    }
  })
  
}
