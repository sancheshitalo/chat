# Chat

API em Express (`api/`) + front em React com Vite (`web/`), rodando juntos com Docker Compose.

| Serviço | Endereço |
|---|---|
| Web | http://localhost:5173 |
| API | http://localhost:3000 (teste: http://localhost:3000/health) |

## Pré-requisitos

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) com Docker Compose (jeito recomendado)
- Opcional, para rodar sem Docker: [Node.js](https://nodejs.org/) 24 (mesma versão das imagens)

## Instalação em um computador novo

```bash
git clone https://github.com/sancheshitalo/chat.git
cd chat
```

### Opção 1: com Docker (recomendado)

```bash
docker compose up --build
```

Na primeira vez demora um pouco (baixa as imagens e instala as dependências).
Para parar: `Ctrl+C`, ou `docker compose down` se tiver subido com `-d`.

Dicas:
- `docker compose up -d --build` sobe em segundo plano.
- `docker compose logs -f` mostra os logs.
- Mexeu em `package.json`? Rode de novo com `--build`.

### Opção 2: sem Docker

Precisa de dois terminais.

Terminal 1, a API:

```bash
cd api
npm install
npm run dev
```

Terminal 2, o front:

```bash
cd web
npm install
npm run dev
```

## Dia a dia (trabalho ↔ casa)

Antes de começar, pegue o que foi feito no outro computador:

```bash
git pull
```

Antes de sair, leve o que você fez:

```bash
git add .
git commit -m "O que mudou"
git push
```

Esqueceu o `push`? O trabalho fica preso naquele computador.
Esqueceu o `pull`? Pode dar conflito.

## Scripts

| Pasta | Comando | O que faz |
|---|---|---|
| `api` | `npm run dev` | API com reinício automático ao salvar |
| `api` | `npm start` | API sem reinício (é o que o Docker usa) |
| `web` | `npm run dev` | Front com Vite |
| `web` | `npm run build` | Gera a versão de produção em `web/dist` |
| `web` | `npm run lint` | Verifica o código com oxlint |

## Problemas comuns

- **`npm ci` falha no build do Docker**: falta o `package-lock.json` na pasta. Rode `npm install` nela e faça o commit do lock.
- **Porta já em uso** (3000 ou 5173): outro projeto está rodando nela. Pare com `docker compose down` na pasta dele, ou veja quem está usando com `docker ps`.
