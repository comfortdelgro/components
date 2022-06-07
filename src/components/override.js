/**
 * Safetly merge two object and return
 * 
 * @param {Object} obj 
 * @param {Object} priorObj 
 * @returns Object
 */
export function merge(obj, priorObj = {}) {
  return { ...obj, ...priorObj };
}

/**
 * Merge two object's property value and return.
 * - @prop existence in first/base object is mendatory.
 * - @prop existence in second/prior object is optional.
 * 
 * @param {Objecrt} obj 
 * @param {Object} priorObj 
 * @param {string} prop 
 * 
 * @returns Object
 */
export function mergeAt(obj, priorObj = {}, prop) {
  return merge(obj[prop], priorObj[prop] && priorObj[prop]);
}

/**
 * Resolve consumer given override values
 * 
 * @param {Object} obj 
 * @param {string} key
 * @param {Object} props 
 * 
 * @returns Object|undefined
 */
export function resolve(obj, key, props) {
  return (obj && obj[key]) && obj[key](props);
}

/**
 * Resolve consumer given subcomponent style override
 * 
 * @param {Object} obj 
 * @param {ObjectObject|null} props 
 * 
 * @returns Object|undefined
 */
export function resolveStyle(obj, props) {
  return resolve(obj, 'style', props);
}

/**
 * Resolve consumer given subcomponent override
 * 
 * @param {Object} obj
 * 
 * @returns Object|undefined
 */
export function resolveComponent(obj) {
  return (obj && obj['component']) && { component: obj['component']};
}

/**
 * Resolve consumer given subcomponent props
 * 
 * @param {Object} props
 * @param {Object} props 
 * 
 * @returns Object|undefined
 */
export function resolveProps(props, obj) {
  return (obj && obj['props'])
            ? merge(props, obj['props'])
            : props;
}

