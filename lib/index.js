export default {

  test(callback) {
    const request = require('request');

    const options = {
      url: 'https://api.typeform.io/v0.4/forms',
      method: 'POST',
      headers: {'X-API-TOKEN': '61b315aead2aac9be58448727f21ccdc'},
      body: '{"title": "My first form! It just got born.", "fields": [{"type": "yes_no", "question": "No way. Did I really just make a typeform?"}]}'
    };

    request(options)
      .on('error', error => {
        console.error(`error: ${error}!`);
        callback(false);
      })
      .on('data', data => {
        const json = JSON.parse(data.toString());
        console.log(`data: ${JSON.stringify(json, null, 4)}!`);
        callback(true);
      });
  }
};
