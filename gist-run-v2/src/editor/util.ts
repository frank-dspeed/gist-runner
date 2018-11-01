export function deparam(query: string): { [name: string]: string; } {
  let match: RegExpExecArray;
  const plus = /\+/g;
  const search = /([^&=]+)=?([^&]*)/g;
  const decode = (s: string) => decodeURIComponent(s.replace(plus, ' '));
  const params: { [name: string]: string; } = {};
  // tslint:disable-next-line:no-conditional-assignment
  while (match = search.exec(query)) {
    params[decode(match[1])] = decode(match[2]);
  }
  return params;
}

export function param(obj: { [name: string]: string; }) {
  const parts = [];
  for (const name in obj) {
    if (obj.hasOwnProperty(name)) {
      parts.push(`${encodeURIComponent(name)}=${encodeURIComponent(obj[name])}`);
    }
  }
  return parts.join('&');
}

// http://stackoverflow.com/a/30810322/725866
export function copyTextToClipboard(text: string) {
  const textArea = document.createElement('textarea');
  // tslint:disable-next-line:max-line-length
  textArea.style.cssText = `position:fixed;top:0;left:0;width:2em;height:2em;padding:0;border:none;outline:none;box-shadow:none;background:transparent`;
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    // tslint:disable-next-line:no-empty
  } catch (err) { }
  document.body.removeChild(textArea);
}

export function backslash(name: string) {
  return name.replace(/\//g, '\\');
}

export function forwardSlash(name: string) {
  return name.replace(/\\/g, '/');
}
