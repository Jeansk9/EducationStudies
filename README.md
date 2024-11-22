<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README</title>
</head>
<body>
    <h1>Studies education </h1>
    
    <h2>Pré-requisitos</h2>
    <ul>
        <li>Node.js (versão 14 ou superior)</li>
        <li>Gerenciador de pacotes <code>npm</code> ou <code>yarn</code></li>
        <li>Expo CLI instalado globalmente:
            <pre><code>npm install -g expo-cli</code></pre>
        </li>
        <li>Dispositivo físico ou emulador Android/iOS para testes</li>
    </ul>

    <h2>Instalação</h2>
    <ol>
        <li>Clone o repositório:
            <pre><code>git clone &lt;https://github.com/Jeansk9/EducationStudies.git;</code></pre>
        </li>
        
        <li>Instale as dependências:
            <pre><code>npm install</code></pre>
            <p>Ou, se estiver usando <code>yarn</code>:</p>
            <pre><code>yarn install</code></pre>
        </li>
    </ol>

    <h2>Executando o Projeto</h2>
    <ol>
        <li>Inicie o servidor de desenvolvimento do Expo:
            <pre><code>expo start</code></pre>
        </li>
        <li>No terminal, escaneie o QR code com o aplicativo Expo Go (disponível na Play Store/App Store) para abrir o app em seu dispositivo físico.
        </li>
        <li>Alternativamente, use um emulador Android/iOS configurado no seu ambiente de desenvolvimento.
        </li>
    </ol>

    <h2>Configuração Adicional</h2>
    <ul>
        <li>Certifique-se de que as variáveis de ambiente, como chaves de API, estão configuradas corretamente no arquivo <code>.env</code>.</li>
        <li>Para builds de produção, consulte a documentação do Expo:
            <a href="https://docs.expo.dev/build/introduction/" target="_blank">Expo Build</a>.
        </li>
    </ul>

    <h2>Build para Produção</h2>
    <ol>
        <li>Certifique-se de que as configurações no arquivo <code>app.json</code> estão corretas.</li>
        <li>Execute o comando para criar o build:
            <pre><code>expo build:[android|ios]</code></pre>
        </li>
        <li>Siga as instruções do Expo para baixar o arquivo APK ou IPA gerado.</li>
    </ol>
</body>
</html>

