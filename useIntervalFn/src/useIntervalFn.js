import { ref ,unref,isRef} from 'vue';
import {tryOnScopeDispose} from './tryOnScopeDispose';

export function useIntervalFn(callback, interval = 1000, options = {}) {
    const { immediate = true, immediateCallback } = options;
    let timer = null;
    const isActive = ref(false);
    function clean() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }
    function pause() {
        isActive.value = false;
        clean();
    }
    function resume() {
        if (unref(interval) <= 0) {
            return;
        }
        isActive.value = true;
        if (immediateCallback) {
            console.log(1233333);
            callback();
        }
        clean();
        timer = setInterval(callback, typeof interval === 'function' ? interval() : unref(interval));
    }

    if (immediate) {
        resume();
    }
    if (isRef(interval)) {
        const stopWatch = watch(interval, () => {
            if (isActive.value) {
                resume();
            }
        })
        tryOnScopeDispose(stopWatch);
    }
    tryOnScopeDispose(pause);
    return {
        isActive
        , pause, resume
    }
}