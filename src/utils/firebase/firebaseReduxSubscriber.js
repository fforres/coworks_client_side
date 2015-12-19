import Firebase from 'firebase';
import defaultConfig from './config.js';
export const config = {};
export default function ({dispatch}) {
  if (!defaultConfig.appUrl) { console.error('No firebase default project URL is defined'); }
  config.ref = new Firebase(defaultConfig.appUrl);
  config.listeners = config.listeners || [];
  config.dispatch = dispatch;
}
