module.exports = {
    name : 'Tone Analyzer',
    desc : 'Tone analyzer from text!',
    execute(msg, args)
    {
      const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
      const { IamAuthenticator } = require('ibm-watson/auth');

      const toneAnalyzer = new ToneAnalyzerV3({
        version: '2021-04-13',
        authenticator: new IamAuthenticator({
          apikey: process.env.APIKEY_TONE,
        }),
        serviceUrl: 'https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/269736be-6ebb-4100-827f-ef885df1f7b1',
      });

      const text = args;

      const toneParams = {
        toneInput: { 'text': text },
        contentType: 'application/json',
        sentences: false,
        acceptLanguage: 'en'
        };

       toneAnalyzer.tone(toneParams)
        .then( toneAnalysis => {
            const response = JSON.stringify(toneAnalysis, null, 2);
            //SEPARA LA RESPUESTA Y ENTREGA SOLO EL CAMPO DE 'TONES'
            const answer = JSON.parse(response);
            const result = Array.from(answer.result.document_tone.tones);
            if (!result.length) { return msg.reply(`No results found for **${args.join(' ')}**.`); }
            for (let mood of result) { msg.channel.send(mood.tone_name); }
        })
        .catch(err => {
            console.log('error:', err);
        });        
    }
}