# PWA Text Editor

## Description
The PWA Text Editor is a Progressive Web Application (PWA) that allows users to create and store text notes or code snippets. With or without an internet connection, users can reliably retrieve their saved content for later use. This single-page application provides a seamless user experience both online and offline.

## Table of Contents
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Mock up
![00-demo](https://github.com/Jay1194/Text-Editor/assets/105843570/87047778-2fb0-45b5-8c36-1909c4672afb)
![01-manifest](https://github.com/Jay1194/Text-Editor/assets/105843570/65cdf348-c339-4648-9543-93b6ae17e5ee)
![02-service-worker](https://github.com/Jay1194/Text-Editor/assets/105843570/2471800c-1621-4cc6-ba96-f7a2ae51c4cb)
![03-idb-storage](https://github.com/Jay1194/Text-Editor/assets/105843570/3f980546-720a-478f-b592-d11ee393f236)
![19-pwa-homework-demo-01](https://github.com/Jay1194/Text-Editor/assets/105843570/b54faac9-3e7b-4839-8af3-78228aa81146)

## Technologies
- IndexedDB
- idb
- Webpack
- HTMLWebpackPlugin
- Workbox
- Heroku Deployment
- Manifest.json

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/pwa-text-editor.git
    cd pwa-text-editor
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run start
    ```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Use the text editor to create, edit, and save notes or code snippets.
3. Content is automatically saved to IndexedDB, ensuring data persistence even when offline.

## Contributing
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
