# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>


## Personas

**Bruno** <br/>
23 anos, classe média, brasileiro, residente em Contagem - MG. Estudante de direito, faz estágio em uma empresa de Advocacia, com pretensão em ser contratado como Advogado Júnior. Gosta de atividade física e é amante da natureza. Nos finais de semana, costuma se encontrar com amigos para jogar futebol e à noite frequenta barzinhos próximos a sua residência. Por ser de classe média, não vai a lugares caros, mas gosta da boa culinária e ambientes musicais. Extrovertido, gosta das mais diversas tecnologias e em seu perfil nas redes sociais gosta de seguir páginas de carros modernos e de programas locais.

**Mariana** <br/>
28 anos, classe média, brasileira, residente em Taguatinga – Distrito Federal. É psicóloga do Ministério Público Federal, entra no trabalho as 8 horas da manhã e para evitar o trânsito prefere recorrer ao uso do metrô. Ela preza pela qualidade e otimização do tempo, sendo assim, tem uma vida corrida já que também estuda para o mestrado. Ama ler livros e desde criança pratica esportes. No seu tempo livre, prefere ver boas séries e ir a cafeterias com suas amigas. Gosta de animais, possui um gato e um cachorro que trata como se fosse da família e todos os dias faz caminhada com seu cachorro na praça próxima da sua casa. Se mantém em forma, gosta de uma vida leve e saudável. Prepara suas marmitas semanalmente e sempre que pode não deixa de faltar a academia. Isso para ela é manter o equilíbrio pois consegue adequar sua rotina com seu estilo de vida.

**João José** <br/>
34 anos, classe média, brasileiro, residente em São Paulo – SP. É bancário e possui um espírito aventureiro. É ativista das causas naturais e não possui carro próprio. Prefere utilizar o transporte público para se locomover e quando necessário usa aplicativos de caronas compartilhadas e aplicativos de táxi. Sua casa é simples e ele é adepto de fazer seus próprios móveis como também gosta de comprar móveis usados. Busca aposentar cedo, então tem uma vida regrada com planilhas de gastos e uma cartela de investimentos. Seu maior passatempo é fazer trilhas nos finais de semana e quando não sai não vê problema em ser caseiro. Sabe que hoje tem-se muitos recursos tecnológicos e quanto a isso é antenado. Como renda – extra tem estudado sobre marketing digital e pretende futuramente que essa seja sua renda principal.



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`     |
|--------------------|------------------------------------|----------------------------------------|
|ENTREGADORX DE SERVIÇO DE DELIVERY |Encontrar uma estação próxima e retirar uma bike. |Entregar o pedido de maneira rápida, acessível, baixo custo e sustentável. |
|EMPREGADX DE UM TRABALHO PRESENCIAL |Chegar mais rápido no trabalho. |Ganhar mais tempo para me dedicar aos estudos e qualidade de vida. |
|VISITANTE E/OU TURISTA | Conhecer o local através da experiência de pedalar | Ser saudável e aliar lazer com esporte. |
|PRATICANTE DE ATIVIDADE FÍSICA | Pedalar durante um período e/ou percurso como uma maneira de estar bem. | Para manter um bom condicionamento físico. |
|--------------------|------------------------------------|----------------------------------------|
|EU COMO... `ADMINISTRADOR`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`    |
|Editor do sistema | Criação de ID | Para controle dos usuários |
|Administrador | Estrutura de custos  | Cálculo das distâncias x tempo |
|Administrador | Controlar banco de dados | Determinar as necessidades dos dados da empresa e recuperação dos mesmos |
|Administrador | Alterar permissões | Podem modificar, interagir e avaliar as contas |



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário crie uma conta | ALTA | 
|RF-002| Menu com opções para o usuário | ALTA | 
|RF-003| Permitir que o usuário escolha o local (estado, cidade) que vai usar a bicicleta | ALTA | 
|RF-004| Permitir que o usuário escolha um plano de pagamento | ALTA |
|RF-005| Permitir que o usuário encontre uma estação de bicicletas mais próxima a ele | ALTA |
|RF-006| Permitir que o usuário adicione informações de pagamento | MÉDIA | 
|RF-007| Permitir que o usuário devolva a bicicleta para a estação em até um minuto, caso ela apresente danos | MÉDIA | 
|RF-008| Permitir que o usuário devolva a bicicleta em qualquer estação, não precisando ser a mesma de entrega | MÉDIA | 
|RF-009| Controle de tempo que cada usuário pode usar, dependendo de seu plano | BAIXA | 
|RF-010| Controle devolução de cada usuário | BAIXA | 
|RF-011| Bloqueio de conta de usuário que não devolveu a bicicleta | BAIXA | 
|RF-012| Sistema de segurança e travamento automático que permite a retirada e devolução das bikes nas estações | ALTA | 
|RF-013| Sistema de rastreio que localiza o usuário e onde a bicicleta se encontra | MÉDIA | 
|RF-014| Atualização em tempo real para controle das estações da quantidade de bicicletas disponíveis | ALTA | 
|RF-015| Permitir que o usuário reporte qualquer problema de forma rápida e fácil | BAIXA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Ultilizar algum requisito de segurança, como senha enviada ao celular do usuário | ALTA | 
|RNF-003| Enviar e-mail de confirmação de entrega de bicicleta ao usuário | BAIXA | 
|RNF-004| Enviar e-mail de confirmação de devolução de bicicleta ao usuário | BAIXA |
|RNF-005| Enviar e-mail com informações de tempo utilizado, valores cobrados e taxa extras, caso houver | BAIXA | 
|RNF-006| Permitir que o usuário tenha acesso a um mapa das estações com informação de há vaga na determinada estação ou não | BAIXA | 
|RNF-007| Notificações mostrando o tempo que o usuário ainda tem disponível | BAIXA | 



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|ÁREA DE RESTRIÇÃO| DESCRIÇÃO      |
|--|-------------------------------------------------------|
|CICLO DE VIDA| Devido ao baixo orçamento, utilizaremos um ciclo incremental e iterativo, para definir requisitos essenciais e opcionais. |
|PRAZO & TIMING|O projeto deverá ser entregue até o fim do semestre 2022.1.|
|POLÍTICA & ASPECTOS LEGAIS|O projeto deverá estar em conformidade com os parâmetros instituídos pela Lei Federal de trânsito vigente. O projeto deverá estar em conformidade com os parâmetros instituídos na LGPD (Lei Geral de Proteção de Dados).|
|ACESSO NAVEGADOR (cadastro/estações)|O acesso deve ser feito através do navegador web Chrome e/ou Firefox somente para cadastro, help center e visualização das estações/bike.|
|ACESSO APP (cadastro/estações/desbloqueio)|O acesso deve ser feito através do app, para todas as funcionalidades do navegador e o desbloqueio da bike.|
|LINGUAGEM E TECNOLOGIA|O sistema deve ser escrito e entregue na linguagem de programação Node.js / JavaScript.|
|HOSPEDAGEM|Os arquivos deverão estar hospedados em um servidor dedicado (VPS).|
|USABILIDADE|O sistema deverá ter uma interface amigável, fácil de navegação e com o foco na mobilidade urbana.|
|ASSINATURA|Os usuários finais deverão pagar com um valor mensal de assinatura ou por aluguel avulso de bike. As empresas poderão ter planos exclusivos.|
|SERVIDOR|O sistema operacional do servidor será CentOS 7.0 ou superior.|
|SEGURANÇA|O projeto deverá utilizar o padrão de Certificados SSL/TLS.|


