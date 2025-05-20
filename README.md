# app-buttons

Um projeto simples em React Native (Expo) para ilustrar o conceito de **componentes** e **props** através de diversos botões.

---

## 🚀 Visão Geral

Este app demonstra como criar componentes reutilizáveis e passar propriedades (props) para customizá-los. Cada botão neste exemplo recebe diferentes propriedades para mostrar como compor e parametrizar a interface.

---

## 🛠 Tecnologias

* React Native 0.79.2
* Expo \~53.0.9
* Expo Router \~5.0.6
* TypeScript 5.8.3
* @expo/vector-icons ^14.1.0

---

## 📦 Scripts

* npm start  — inicia o Metro bundler e o painel do Expo
* npm run android  — abre no emulador/dispositivo Android
* npm run ios  — abre no emulador/dispositivo iOS
* npm run web  — inicia no navegador (Web)
* npm run reset-project  — executa o script de reset de projeto
* npm run lint  — executa ESLint para checar o padrão de código

---

## 📁 Estrutura de Pastas

app-buttons/
├── app/
│   ├── components/  # componentes reutilizáveis como CustomButton
│   └── screens/     # telas como HomeScreen com vários botões
├── assets/          # imagens, fontes, etc.
├── scripts/         # scripts de suporte (reset-project.js)
├── package.json
├── tsconfig.json
└── README.md

---

## 🔧 Instalação e Execução

1. Clone este repositório: [https://github.com/jefersonqueiroga/app-buttons.git](https://github.com/jefersonqueiroga/app-buttons.git)
2. Acesse a pasta do projeto: cd app-buttons
3. Instale as dependências: npm install
4. Inicie o projeto: npm start  (e escolha a plataforma: Android, iOS ou Web)

---

## 💡 Conceito de Componentes e Props

O objetivo principal é mostrar como criar um componente de botão que recebe propriedades para personalização, como o texto exibido e a ação ao ser pressionado. Em seguida, utilizamos esse mesmo componente em uma tela principal, passando props diferentes para cada instância.

---

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch de feature: git checkout -b feature/nova-ideia
3. Faça seus commits: git commit -m "Adiciona nova feature"
4. Envie para a branch original: git push origin feature/nova-ideia
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo LICENSE para mais detalhes.
