import store from '../store';

export function handleItemChange(callback, item, event) {
  store.dispatch(callback.bind(null, item)(event.target.value)); 
}
