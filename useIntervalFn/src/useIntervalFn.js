import {ref} from 'vue';
export function useIntervalFn(fn, interval = 1000, options = {}) {
    const {immediate = true, immediateCallback} = options;
    let timer = null;
    const isActive = ref(false);
    function clean(){

    }
}