# Crea un Chatbot Inteligente en Discord usando APIs de Watson AI

## Resumen
En este Code Pattern aprenderás lo sencillo que es integrar diferentes capacidades inteligentes provistas de AI/Machine Learning al construir un chatbot poderoso para usarlo en la plataforma de mensajería y llamadas de Discord, colocándolo en un servidor para clientes y colegas, todo esto mediante la programación sencilla en Node.js. Este chatbot es una muestra de como integrar diferentes recursos de Watson para obtener respuestas inteligentes a diferentes incógnitas.

## Tecnologias

- [Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)
- [Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Natural Language Understanding](https://cloud.ibm.com/docs/natural-language-understanding)
- [Language Translator](https://cloud.ibm.com/docs/language-translator)
- [Tone Analyzer](https://cloud.ibm.com/docs/tone-analyzer)

Tiempo estimado: 60 a 90 minutos.

### Prerequisitos
- Contar con una cuenta de [IBM Cloud](https://cloud.ibm.com/), el plan Lite sirve para este Code Pattern.
- Contar con una cuenta registrada en la plataforma de [Discord](https://discord.com/), se recomienda tener el programa o la aplicación instalada para más rapida ejecución y debug.
- Contar con [Node.js](https://nodejs.org/en/download/) instalado en tu máquina, ya sea Linux, Windows o Mac.
- Contar con [Docker](https://www.docker.com/get-started) instalado en tu maquina, puedes usar también el software de Docker Desktop si es que no tienes muchas experiencia con Docker, aunque para este tutorial no será necesario saber mucho sobre esta tecnología.
- Contar con recursos creados de Natural Language Understanding, Language Translator y Tone Analyzer (técnicamente puedes usar el servicio de Watson que quieras mientras puedas acceder a su API, aunque deberas cambiar el codigo fuente original si es que pruebas otra, los servicios elegidos son a forma de muestra) Si tienes alguna duda de como crear estos servicios visita los enlaces de las tecnologias que están arriba.

## Descripción

El usuario de Discord podrá invitar al bot a un servidor y mediante comandos podrá usar los diferentes recursos inteligentes, como se acostumbra a tratar con los bots de la plataforma. El bot es programado mediante un programa sencillo en Node.js el cual permite ingresar usando permisos mediante el token del bot de Discord, además, el programa realizará llamadas a las APIs de los servicios Watson que nosotros queramos, en este caso, este Code Pattern utilizará varias llamadas a los 3 servicios mencionados previamente: Language Translator, NLU y Tone Analyzer, permitiendo así poder usar el bot como traductor al inglés desde el español, portugués y chino, análisis de emociones extraídos de un texto y la extracción de conocimiento de websites.

## Flow

<p align="center">
  <img src="images/flow-diagram.jpg" width="70%"></img>
</p>

## Instrucciones y Pasos

### 1. Registra un nuevo Bot en Discord Developers.

Para crear nuestro bot primero debemos registrar un nuevo bot en el sitio de Discord developers, esto permitirá generar un bot con nombre, descripción e imagen que represente lo que queremos crear, además de darle una entidad dentro de los servidores de Discord, para esto:

Primero, debes dirigirte a [Discord Developer Portal](https://discord.com/developers/applications) e iniciar sesión en el sitio, dentro de este deberías ver una opción para "New Application", haz clic en él como se aprecia en la imagen de abajo recalcado en el círculo rojo.

<p align="center">
  <img src="images/crear-nueva-app.jpg" width="75%"></img>
</p>

Dale el nombre que quieras y haz clic en "Create".

<p align="center">
  <img src="images/dale-nombre-ycrea.jpg" width="75%"></img>
</p>

Ahora deberías estar dentro de los settings de tu aplicación, en nuestro caso, el uso de esta aplicación será el "capullo" de nuestro bot, por lo tanto, podemos dar una descripción de lo que hará nuestro bot dentro de la descripción de la aplicación, luego para continuar, haz clic dentro de la opción "Bot".

<p align="center">
  <img src="images/opcion-bot.jpg" width="75%"></img>
</p>

Haz click en "Add Bot".

<p align="center">
  <img src="images/anadir-bot.jpg" width="75%"></img>
</p>

Ahora ya cuentas con un bot registrado, dale el nombre que quieras (puede ser el mismo nombre que el de la aplicación, la verdad no hay mucha diferencia), coloca el icono que quieras y guarda los cambios. Para pasos posteriores, es **importante que guardes tu token personal del bot**, este token es el que va a permitir controlar y manejar tu bot, es confidencial solo para ti.

<p align="center">
  <img src="images/token-bot.jpg" width="75%"></img>
</p>

------------------------------------------------------------------------------------------------------------

### 2. Añade el Bot a un servidor.

Aún nuestro bot no hace nada, pero pronto lo hará, por ahora ya que tenemos registrado el bot podemos añadirlo a un servidor para comenzar a darle características, puedes agregarlo al servidor que tú quieras, pero recomiendo que al inicio lo agregues a un servidor de pruebas para que puedas ir probando sus comandos de forma más cómoda, para esto, debemos hacer lo siguiente:

Visita la [Calculadora de Permisos de Discord](https://discordapi.com/permissions.html), dentro de ellas seleccionaremos todos los permisos, no te preocupes por temas de seguridad y privacidad, nuestro bot solo realizará respuestas a consultas, no tendrá facultades para realizar más acciones que solo responder a textos (aunque él lo quiera).

<p align="center">
  <img src="images/permisos.jpg" width="75%"></img>
</p>

Luego, vuelve al sitio de los settings de tu aplicación en el Discord Developer Portal, dirígete a "General Information" y copia tu "APPLICATION ID"

<p align="center">
  <img src="images/cliente-id.jpg" width="75%"></img>
</p>

Ahora pega este ID dentro de la Calculadora de Permisos de Discord.

<p align="center">
  <img src="images/cliente.jpg" width="75%"></img>
</p>

Hecho esto, ya tienes listo tu enlace propio (y enlace para compartir) para permitir que tu bot entre a tu servidor y al que tú quieras, ingresa al enlace, selecciona el servidor que quieras, y dale a "Continuar"

<p align="center">
  <img src="images/ingresa-servidor.jpg" width="75%"></img>
</p>

A continuación, acepta los permisos otorgados al bot haciendo clic en "Autorizar" (Recuerda que el bot solo puede responder comandos que ya están programados, y esto solo contempla llamadas a APIs, por lo tanto, no puede comprometer la privacidad ni seguridad de ningún servidor)

<p align="center">
  <img src="images/autorizar-bot.jpg" width="75%"></img>
</p>

Si hiciste todo lo anterior, felicidades, ¡ya tienes tu bot (vacío aún) dentro de tu servidor!

<p align="center">
  <img src="images/autorizado.jpg" width="75%"></img>
</p>

Puedes revisar este video en inglés que recopila todo este proceso: [Code Your Own Discord Bot](https://www.youtube.com/watch?v=j_sD9udZnCk) créditos al canal de Codelyon en Youtube.

------------------------------------------------------------------------------------------------------------

### 3. Démosle vida al bot con Node.js

Finalmente, vamos a construir nuestro bot para que funcione como un chatbot inteligente, para esto debes hacer lo siguiente:

Clona este repositorio en una consola de comandos o bash:

```
git clone https://github.com/matpg/Discord-Watson-AI-Bot.git
```
Entra en la carpeta del proyecto:

```
cd Discord-Watson-AI-Bot 
```
Ya dentro de esta carpeta encontramos todo lo necesario para dar vida al bot, tenemos el archivo "main.js" desde el cual se orquesta las funciones del bot, todo escrito en Node.js, tenemos también la carpeta "commands" en los cuales encontramos los comandos base e iniciales como "ping.js" y los de Watson como "lang_translator.js", "nlu_analyzer_cat.js", "nlu_analyzer_con.js" y "tone_analyzer.js" además de contar con el archivo Dockerfile que permitirá construir una imagen con todo lo necesario para correr nuestro bot, ¡Sin tener que programar nada!

Las funciones inteligentes ya se encuentran programadas, solo debes darle acceso a ellas a traves de los servicios que ya tienes creados como se explican en los "Prerequisitos" de este code pattern, para conectar estos accesos, abre y modifica el archivo ".env_sample" el cual es un template de todos los accesos que necesita el bot, copia todas las API Keys y Service Url de tus recursos de Watson y pegalos, además de copiar y pegar el token de tu bot que se muestra en el paso 1. Registra un nuevo Bot en Discord Developers, si te queda alguna duda de como conseguir estos saccesos, accede a la documentación en "Tecnologías".

<p align="center">
  <img src="images/foto-env-sample.jpg" width="75%"></img>
</p>

A continuación, renombra el archivo anterior a solo ".env".

Teniendo todo lo anterior listo, podemos proceder a contruir la imagen completa de los recursos de nuestro bot con Docker, como ves, no hay nada de programación hasta ahora, y tampoco habrá, ya que los comandos ya están programados anteriormente, de los cuales te contaré más después de ejecutar el bot.

Para construir la imagen del bot, en la raiz del proyecto clonado corremos lo siguiente:

```
docker build -t <NOMBRE QUE ELIJAS PARA EL BOT> .
```

Esperamos su contrucción, luego corremos lo siguiente:

```
docker run <NOMBRE QUE ELIJAS PARA EL BOT>
```
Si todo salió bien, deberias ver esto en tu consola o bash:

Si ves algo distinto a esto, procura revisar si los accesos copiados al archivo ".env" son los correctos para tus servicios de Watson.

Ahora, con nuestro bot en linea, deberiamos ver al bot en estado de conectado en el servidor de Discord, como se ve en esta imagen.




## Contenido Relacionado

- [Natural Language Understanding](https://cloud.ibm.com/docs/natural-language-understanding) y [API](https://cloud.ibm.com/apidocs/natural-language-understanding)
- [Language Translator](https://cloud.ibm.com/docs/language-translator) y [API](https://cloud.ibm.com/apidocs/language-translator)
- [Tone Analyzer](https://cloud.ibm.com/docs/tone-analyzer) y [API](https://cloud.ibm.com/apidocs/tone-analyzer)
- [Documentación de Desarrolladores de Discord](https://discord.com/developers/docs/intro)
- [Como usar una REST API](https://discordjs.guide/additional-info/rest-api.html#making-http-requests-with-node)
- [Desplegar una app en Code Engine](https://developer.ibm.com/patterns/deploy-a-microservices-app-to-ibm-cloud-code-engine/)
- [Docs de APIs de servicios de Watson](https://cloud.ibm.com/docs?tab=api-docs)
- [Proyecto en inglés: Chatbot para WhatsApp](https://developer.ibm.com/events/update-your-chatbot-on-whatsapp-with-ibm-watson-assistant/)
- [Servicio de Watson Assistant](https://developer.ibm.com/learningpaths/get-started-watson-assistant/)

