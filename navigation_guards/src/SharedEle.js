// sharedState.js (Create a separate file)
import Vue from 'vue';

export  const SharedEle = Vue.observable({
    sharedValue: 'initial value',
});
