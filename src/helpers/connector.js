export const getValue = fn => (ev, ...params) => fn(ev.target.value, ...params);
export const omitEvent = fn => (ev, ...params) => fn(...params);
export const getChecked = fn => (ev, ...params) => fn(ev.target.checked, ...params);
export const preventDefault = fn => (ev, ...params) => {
    ev.preventDefault();
    return fn(ev, ...params);
};