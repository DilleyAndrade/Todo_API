<h1>API de Tarefas (Todo API)</h1>

<p>
  Bem-vindo(a) ao repositório da API de Tarefas (Todo API), uma API simples e intuitiva projetada para ajudar você a gerenciar suas tarefas diárias com eficiência. Se você está procurando uma maneira de organizar suas tarefas, projetos ou qualquer tipo de atividade pendente, você veio ao lugar certo!
</p>


<h3>Sobre a API</h3>

<p>A API de Tarefas permite que usuários:</p>

<ul>
  <li>Criem tarefas;</li>
  <li>Listem todas as tarefas;</li>
  <li>Atualizem o status e detalhes de uma tarefa;</li>
  <li>Deletem tarefas.</li>
</ul>

<p>
  Cada tarefa inclui informações como título, descrição, validade e status e timestamps para a data de criação e última atualização.
</p>


<h3>Como começar</h3>

<p>
  Para começar a usar a API de Tarefas, siga os passos abaixo para configurar o ambiente e executar o projeto localmente.
</p>


<h4>Sobre a API</h4>

<ul>
  <li>Git</li>
  <li>Node.js (incluindo npm)</li>
</ul>


<h4>Instalação</h4>

<p>1.<bold>Clonar o repositório</bold></p>

<p>Primeiro, clone este repositório para sua máquina local usando o Git clone</p>


<p>2.<bold>Instalar dependências</bold></p>

<p>Em seguida, instale as dependências do projeto utilizando o npm: npm i</p>

<p>3.<bold>Instale o MongoDB localmente</bold></p>

<p>Inicie o mongoose no terminal com o comando: mongosh</p>

<p>4.<bold>Iniciar o servidor</bold></p>

<p>Por fim, inicie o servidor: npm run dev</p>

<p>
  Após iniciar o servidor, a API estará acessível através do endereço http://localhost:4080 (ou a porta que você especificou).
</p>

<h3>Uso</h3>

<p>
  Aqui estão alguns exemplos de como você pode interagir com a API utilizando o cURL ou qualquer cliente HTTP de sua preferência, como Postman.
</p>


<h3>Criar uma nova tarefa</h3>
<p>http://localhost:4080/api/v1/admin/tasks</p>
<p> Adicione dentro de um json com o body :
  '{
	"title":"Minha atividade",
	"description": "Descrição da atividade",
	"category": "Catetgoria da atividade",
	"validity": "Data limiete da atividade"
  }'
</p>


<h3>Listar todas as tarefas</h3>
<p>http://localhost:4080/api/v1/tasks</p>


<h3>Atualizar uma tarefa</h3>
<p>http://localhost:4080/api/v1/tasks/{id}</p>
<p> Adicione dentro de um json com o body :
  '{
	"title":"Atualização da minha atividade",
	"description": "Atualização da descrição da atividade",
	"category": "Atualização da catetgoria da atividade",
	"validity": "Atualização da data limiete da atividade"
  }'
</p>

<h3>Deletar uma tarefa</h3>
<p>http://localhost:4080/api/v1/tasks/{id}</p>


<h3>Licença</h3>
<p>Distribuído sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.</p>

<hr>

<p>Esperamos que a API de Tarefas ajude você a organizar melhor suas atividades diárias. Boa codificação!</p>