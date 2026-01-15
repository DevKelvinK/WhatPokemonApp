# What Pokémon App 🧩📱

Aplicativo mobile desenvolvido em **React Native (TypeScript)** que realiza a leitura de **QR Codes** para identificar o **ID de um Pokémon** e exibir suas informações utilizando a **PokéAPI**.

O projeto foi desenvolvido para rodar em **Android**, com foco em clareza de código, organização e boas práticas de desenvolvimento mobile.

---

## 🧠 Visão Geral

O aplicativo permite ao usuário escanear um QR Code contendo o identificador de um Pokémon, consumir dados da PokéAPI e apresentar essas informações de forma clara e objetiva.

O fluxo da aplicação é dividido em três etapas principais:
- Tela inicial
- Leitura do QR Code
- Exibição dos dados do Pokémon

---

## 📱 Funcionalidades

- Leitura de QR Code via câmera do dispositivo
- Extração do ID do Pokémon a partir do conteúdo do QR Code
- Consumo de API REST pública (PokéAPI)
- Exibição de:
  - ID do Pokémon
  - Nome
  - Tipo(s)
  - Imagem oficial
- Navegação entre telas
- Interface estilizada utilizando **Styled Components**

---

## 🌐 Integração com API

A aplicação consome a API pública:

```
https://pokeapi.co/api/v2/pokemon/{id}
```

Campos utilizados:
- `id`
- `name`
- `types[].type.name`
- `sprites.front_default`

Caso o Pokémon possua mais de um tipo, eles são exibidos de forma concatenada.

---

## ⚙️ Tecnologias Utilizadas

- React Native
- TypeScript
- Styled Components
- React Navigation
- Leitura de QR Code (VisionCamera)
- Consumo de API REST (HTTP GET)

---

## ▶️ Como Executar

### Pré-requisitos
- Node.js 20 LTS ou superior
- Ambiente Android configurado (SDK, NDK, emulador ou dispositivo físico)
- Configurar `gradle.properties` com a arquitetura desejada, por exemplo:
  ```bash
  reactNativeArchitectures=arm64-v8a,x86
  ```
  Caso não saiba a arquitetura do seu dispositivo/emulador, deixe ativo:
  ```bash
  reactNativeArchitectures=armeabi-v7a,arm64-v8a,x86,x86_64
  ```


### Execução

**1. Instalar dependências:**
  ```bash
  npm install
  ```
**2. Iniciar o Metro bundler:**
  ```bash
  npm start
  ```
**3. Executar o app no emulador ou dispositivo:**
  ```bash
  npx react-native run-android
  ```


---

## 👨‍💻 Autor

[**Kelvin Kesley**](https://www.linkedin.com/in/kelvin-kesley/)

Aplicativo desenvolvido como parte de um teste técnico em React Native.
