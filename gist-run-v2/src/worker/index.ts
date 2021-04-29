const editorOrigin = location.origin === 'https://gist.host' ? 'https://gist.run' : 'http://localhost:9000';

navigator.serviceWorker.register('worker.js', { scope: './' })
  .then(() => parent.postMessage('worker page ready', editorOrigin));

function relayMessageToWorker(event: MessageEvent) {
  if (event.origin !== editorOrigin) {
    return;
  }
  navigator.serviceWorker.ready
    .then(registration => {
      const { ports } = event;
      const portsMessage = [...ports]
      registration.active.postMessage(event.data, portsMessage)
    });
}

addEventListener('message', relayMessageToWorker);
