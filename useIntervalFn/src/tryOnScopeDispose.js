import { getCurrentScope,onScopeDispose } from "vue-demi";
export function tryOnScopeDispose(fn){
  if(getCurrentScope()){
    onScopeDispose(fn);
    return true;
  }
  return false;
}