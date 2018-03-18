# Projeto Mobile - CRUD
Aplicação Mobile de um CRUD para cadastro de produtos
![CRUD Docs](/Docs/CRUD.png)

[![](https://img.shields.io/badge/ionic-3.20.0-green.svg)](https://github.com/mateusc42/Projeto-Mobile)
[![GitHub forks](https://img.shields.io/github/forks/mateusc42/Projeto-Mobile.svg)](https://github.com/mateusc42/Projeto-Mobile/network)
[![GitHub license](https://img.shields.io/github/license/mateusc42/Projeto-Mobile.svg)](https://github.com/mateusc42/Projeto-Mobile)
[![GitHub tag](https://img.shields.io/github/tag/mateusc42/projeto-mobile.svg)](https://github.com/mateusc42/Projeto-Mobile/tags)

Versão 1.0 do projeto mobile de um CRUD.

## Instalação

Clone o repositório e siga as etapas com base na plataforma do seu dispositivo.

### Server

1. `npm install`
2. `ionic serve`

### iOS

1. `npm install`
2. `cordova platform add ios`
3. `ionic cordova build ios`
4. Conecte seu dispositivo iOS e execute o aplicativo, seja por
  1. Abrindo `.xcodeproj` em `Xcode` e clicando no botão Run (certificando-se de que o seu dispositivo está selecionado)
  2. Execute `ionic cordova run ios --device` na sua CLI - isso exige o pacote npm `ios-deploy` é instalado geralmente com (`npm install -g ios-deploy`)

### Android

1. `npm install`
2. `cordova platform add android`
3. `ionic cordova build android`
4. Conecte seu dispositivo Android e execute o aplicativo com `ionic cordova run android` (Certifique-se de que a depuração USB esteja ativada no seu dispositivo)

> **Nota:** Esse projeto foi desenvolvido em ambiente linux, caso ocorra alguma incompatibilidade.
