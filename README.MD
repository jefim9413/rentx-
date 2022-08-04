# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado, por padrão, com disponibilidade.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponível pelo nome da categoria.
deve ser possível listar todos os carros disponível pelo nome da marca.
deve ser possível listar todos os carros disponível pelo nome do carro.

**RN**
O usuário não precisar estar logado no sistema.

# Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma Especificação para um carro.
Deve ser possível listar todas as especificação.
Dever ser possível listar todos os carros.

**RN**
Não deve ser possível cadastrar uma Especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma Especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.


# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagens do carro.
Deve ser possível listar todas os carros.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O aluguel deve ter duração mínima de uma 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
