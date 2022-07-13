export default function StrictObject(obj) {
  return new Proxy(obj, {
    get(obj, prop) {
      const value = obj[prop];
      if (value !== undefined) {
        return value;
      }
      throw new Error(`StrictObject: Accessing undefined property "${Symbol(prop).description}".`);
    }
  });
}