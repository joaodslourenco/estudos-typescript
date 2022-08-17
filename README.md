# Estudos Typescript

Typescript é um superset do JavaScript, ou seja, ele acrescenta uma série de funcionalidades ao Javascript com objetivo de tornar o desenvolvimento mais refinado. A existência do Typescript se justifica pelo fato de que o Javascript é uma linguagem dinamicamente tipada, o que possibilita que muitos erros relacionados à tipagem possam passar despercebidos no momento do desenvolvimento, sendo percebidos somente no ambiente de execução dos projetos.

Como benefícios da utilização da linguagem, podemos citar: o feedback de erros no momento do desenvolvimento, o que evita bugs em produção; autocomplete da linguagem, posto que o uso de interfaces e tipos possibilita que a IDE identifique as propriedades e métodos das variáveis utilizadas; tipagem e funcionalidades avançadas de classes, que possibilitam o uso de encapsulamento, herança, abstração e polimorfismo, com vistas a permitir o desenvolvimento orientado a objetos;

## Modificadores:

Dentro de classes, podemos definir se desejamos que determinada propriedade ou método seja acessível em qualquer instância ou somente dentro da própria classe. Essa definição se dá através dos modificadores Public, Private, Protected, entre outros. 

### Public
Quando adicionamos o modificador public, estamos informando ao typescript que essa propriedade ou método pode ser acessada em qualquer parte do nosso código, inclusive podendo ser alterada. Para acessar a propriedade ou método público, basta que a classe seja instanciada e então já é possível visualizar o valor e modificá-lo. OBS: quando criamos um atributo de uma classe sem especificar o modificador, o typescript pressupõe que é um atributo público.
 
### Private 
O modificador private restringe a utilização de uma propriedade ou método aos limites da própria classe, ou seja, não é possível acessá-lo em instâncias dessa classe, tampouco modificá-lo. Essa restrição acontece inclusive quando há herança, o que significa que mesmo que uma classe filha herde os atributos de uma classe, não é possível acessar os atributos private da classe mãe.

### Protected

O modificador protected é bastante parecido com o private, no sentido de não permitir que os atributos sejam acessíveis/modificáveis em qualquer parte do nosso código, com o diferencial que um atributo protected permite que esses atributos sejam acessados pelas classes filhas.

### Abstract
O modificador abstract tem a função de declarar uma espécie de modelo a ser implementado pelo desenvolvedor. Isso significa que, quando aplicamos o modificador abstract a uma classe, torna-se impossível instanciá-la, posto que sua função é servir de molde para uma classe que vai estendê-la. 
Quando usamos o abstract em um método, estamos determinando que o desenvolvedor, quando herdar aquela classe, deverá implementar a funcionalidade daquele método abstrato na classe filha.

### Readonly
Quando usamos o modificador readonly, estamos tornando um atributo como somente leitura, como o próprio nome sugere. É bastante útil quando temos, por exemplo, um atributo que é um array público, mas que não deve ser modificado.


### Static


### Get

### Set

