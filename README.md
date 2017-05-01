# Sierpinski triangle explorer

## Code Style

The code written for the project follows the [JavaScript Standard Style][code-style].

## Getting Started

Docker was used in this project to ensure a reproducible and reliable development environment.

### Prerequisites

- [Docker - Community Edition][docker-ce] >= 17.03

### Development

```shell
$ git clone git@github.com:synthecypher/sierpinski.git
$ cd sierpinski
$ docker-compose up -d dev
$ docker attach sierpinski_dev_1
# Press any key for shell prompt in development environment
$ yarn install
$ npm run dev
```

Go to http://localhost:8080.

### Production
```shell
$ git clone git@github.com:synthecypher/sierpinski.git
$ cd sierpinski
$ docker-compose up prod
```

Go to http://localhost:8080.

[code-style]: https://github.com/feross/standard
[docker-ce]:  https://www.docker.com/community-edition