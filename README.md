
# Projeto de Automação Tiago Ferreira
> E-commerce Desktop Cypress


## Guia de instalação
- Todo o código do projeto se encontra no repositório

1. Dependências Globais

    * Instalar Nodejs > https://nodejs.org/en/download/
    - Recomendo utilizar a última versão

    * Ou Instalar o Ruby via [Homebrew](http://brew.sh/)
    ```
    $ brew install ruby
    ```
    * Instalar Bundler (Sudo pode ser necessário)
    - Bundler é o gerenciador de gemas do Ruby, oferece um ambiente consistente para o gerenciamento e instalação
    das dependencias do projeto.
    ```
    $ gem install bundler
    ```
2. Variáveis de Ambiente

	* Preparas as seguintes variavies de ambiente
	- Variáveis do Sistema
		.Nova variavel: NODE_HOME > C:\Program Files\nodejs
		.Add Path > C:\Program Files\nodejs
		.Add Path > C:\Program Files\nodejs\node_modules\npm\bin
	```

### Executar Testes
	NPX
	NPX é um executor de pacote NPM que torna realmente fácil instalar qualquer tipo de executável de nó que normalmente teria sido instalado usando NPM. Se o NPM é um gerenciador (manager) de pacotes, o NPX é um executor.
	O comando npx deve ser excutado cmd para que o Cypress seja iniciado.
	O Cypress será aberto e apresentará as automações que foram desenvolvidas
  ```
	$ npx cypress open
  
  ```
   Também podemos executar o comando npx no modo headless (sem interface gráfica)
   Este comando irá executar as automações que foram desenvolvidas, e gera evidências em video.
  ```
	$ npx cypress run


### Resources

##### [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress)

##### [Nodejs Documentation](https://nodejs.org/en/docs/)

##### [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

##### [Stack Overflow](http://stackoverflow.com/)
