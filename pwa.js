if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
      navigator.serviceWorker.register('https://combinatronics.io/gamenewsmaniaweb/java/main/sw.js')
            .then(reg => {
                    console.log('Service worker registered! ðŸ˜Ž', reg);
                          })
                                .catch(err => {
                                        console.log('ðŸ˜¥ Service worker registration failed: ', err);
                                              });
                                                });
                                                }
