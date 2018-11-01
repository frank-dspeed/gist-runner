'use strict';

(() => {

function createResponse(file) {
  let responseInit = {
    status: 200,
    statusText: 'OK',
    headers: {
      'Content-Type': file.type
    }
  };
  return new Response(file.content, responseInit);
}

function createUrl(clientID, name) {
  return new URL(`/run/${clientID}/${name}`, location.href);
}

function createRequest(clientID, file) {
  let url = createUrl(clientID, file.name);
  return new Request(url, { mode: 'no-cors' });
}

function putFile(cache, clientID, file) {
  let response = createResponse(file);
  let request = createRequest(clientID, file);
  return cache.put(request, response);
}

function updateFile(clientID, file) {
  return caches.open(clientID)
    .then(cache => putFile(cache, clientID, file));
}

function deleteFile(clientID, file) {
  let request = createRequest(clientID, file);
  return caches.open(clientID)
    .then(cache => cache.delete(request));
}

function resetFiles(clientID, files) {
  return caches.delete(clientID)
    .then(() => caches.open(clientID))
    .then(cache => Promise.all(files.map(file => putFile(cache, clientID, file))));
}

function handleMessage(event) {
  if (!event.data.action || !event.ports.length === 1) {
    return;
  }
  let data = event.data;
  let responsePort = event.ports[0];
  let clientID = data.clientID;
  let action = data.action;
  let handler;
  switch (action) {
    case 'updateFile':
      handler = updateFile(clientID, data.file);
      break;
    case 'deleteFile':
      handler = deleteFile(clientID, data.file);
      break;
    case 'resetFiles':
      handler = resetFiles(clientID, data.files);
      break;
    default:
      throw new Error(`Unknown action: ${action}`);
      return;
  }
  handler.then(() => responsePort.postMessage('ok'));
}
self.addEventListener('message', handleMessage);

function handleFetch(event) {
  let request = event.request;
  if (!/\/run\//.test(request.url)) {
    return;
  }
  let options = {}; // chrome does not support these yet: { ignoreSearch: true, ignoreMethod: true, ignoreVary: true };
  event.respondWith(caches.match(request, options)
    .then(response => response ? response : fetch(request)));
}
self.addEventListener('fetch', handleFetch);

})();
