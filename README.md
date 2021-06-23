# Crea un Chatbot Inteligente en Discord usando APIs de Watson AI

## Resumen
En este Code Pattern aprenderás lo sencillo que es integrar diferentes capacidades inteligentes provistas de AI/Machine Learning al construir un chatbot poderoso para usarlo en la plataforma de mensajería y llamadas de Discord colocándolo en un servidor para clientes y colegas, todo esto mediante la programación sencilla en Node.js. Este chatbot es una muestra de como integrar diferentes recursos de Watson para obtener respuestas inteligentes a diferentes incógnitas.

## Tecnologias

- [Discord Developer Portal](https://discord.com/developers/applications)
- [Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/)
- Servicios de IBM Cloud Watson:
- [Natural Language Understanding](https://cloud.ibm.com/docs/natural-language-understanding) y [API](https://cloud.ibm.com/apidocs/natural-language-understanding)
- [Language Translator](https://cloud.ibm.com/docs/language-translator) y [API](https://cloud.ibm.com/apidocs/language-translator)
- [Tone Analyzer](https://cloud.ibm.com/docs/tone-analyzer) y [API](https://cloud.ibm.com/apidocs/tone-analyzer)

Tiempo estimado: 60 a 90 minutos.

### Prerequisitos
- Contar con una cuenta de [IBM Cloud](https://cloud.ibm.com/), el plan Lite sirve para este Code Pattern.
- Contar con una cuenta registrada en la plataforma de [Discord](https://discord.com/), se recomienda tener el programa o la aplicación instalada para más rapida ejecución y debug.
- Contar con [Node.js](https://nodejs.org/en/download/) instalado en tu máquina, ya sea Linux, Windows o Mac.
- Contar con recursos creados de Natural Language Understanding, Language Translator y Tone Analyzer (técnicamente puedes usar el servicio de Watson que quieras mientras puedas acceder a su API, los servicios elegidos son a forma de muestra)

## Descripción

El usuario de Discord podrá invitar al bot a un servidor y mediante comandos podrá usar los diferentes recursos inteligentes, como se acostumbra a tratar con los bots de la plataforma. El bot es programado mediante un programa sencillo en Node.js el cual permite ingresar usando permisos mediante el token de usuario de Discord, además, el programa realizará llamadas a las APIs de los servicios Watson que nosotros queramos, en este caso, este Code Pattern utilizará varias llamadas a los 3 servicios mencionados previamente: Language Translator, NLU y Tone Analyzer.

## Flow

<p align="center">
  <img src="images/flow-diagram.jpg" width="80%"></img>
</p>

## Instrucciones y Pasos

## Contenido Relacionado

- [Documentación de Desarrolladores de Discord](https://discord.com/developers/docs/intro)
- [Como usar una REST API](https://discordjs.guide/additional-info/rest-api.html#making-http-requests-with-node)
- [Documentación del módulo de Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)
- [Desplegar una app en Code Engine](https://developer.ibm.com/patterns/deploy-a-microservices-app-to-ibm-cloud-code-engine/)
- [Docs de APIs de servicios de Watson](https://cloud.ibm.com/docs?tab=api-docs)
- [Proyecto en inglés: Chatbot para Whatsapp](https://developer.ibm.com/events/update-your-chatbot-on-whatsapp-with-ibm-watson-assistant/)
- [Servicio de Watson Assistant](https://developer.ibm.com/learningpaths/get-started-watson-assistant/)

