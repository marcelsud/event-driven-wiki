---
sidebar_position: 2
title: Fundamentos
---

# Fundamentos

Arquitetura Orientada a Eventos (Event-Driven Architecture ou EDA) é um modelo de design onde a comunicação entre diferentes componentes de um sistema ocorre por meio de eventos. Este tipo de arquitetura é especialmente útil em cenários que requerem escalabilidade, resposta rápida a mudanças e integração de múltiplos serviços de forma desacoplada. Além disso, ela permite que sistemas sejam mais reativos, capazes de se adaptar a novas condições com máxima eficiência.

## O que é um Evento?

Um **evento** é uma representação de uma ação ou ocorrência relevante que é gerada por uma aplicação ou sistema. Ele pode ser o resultado de uma interação do usuário, uma alteração no estado de um sistema ou mesmo uma condição detectada automaticamente. Exemplos de eventos incluem:

- **Compra realizada**: Um cliente conclui a compra de um produto, disparando processos de pagamento, estoque e envio.
- **Pagamento recebido**: O sistema de pagamento confirma a quitação de uma dívida, atualizando o saldo e notificando outras áreas do negócio.
- **Usuário cadastrado**: Um novo usuário cria uma conta, iniciando fluxos de validação de dados e confirmação por e-mail.

Cada evento pode conter dados sobre o contexto em que foi gerado, como data, hora, usuário e informações adicionais. Essa flexibilidade permite a tomada de decisão contextualizada e em tempo real.

## Componentes Principais

Em uma arquitetura orientada a eventos, geralmente encontramos os seguintes componentes:

### Produtor de Eventos

É a entidade que gera eventos. Um exemplo pode ser um serviço de e-commerce que emite um evento sempre que uma compra é realizada. Esses eventos geralmente são transmitidos imediatamente para garantir consistência de dados em todos os sistemas conectados.

### Consumidor de Eventos

Este é o componente que recebe e processa eventos. Ele pode realizar uma ação com base nas informações recebidas, como atualizar um estoque ou enviar uma confirmação por e-mail. Alguns consumidores podem também reter o estado atualizado com base nos eventos que processam.

### Canal de Eventos

É o meio pelo qual os eventos são transmitidos. Exemplos incluem filas de mensagens ou streams de dados, como o Apache Kafka, RabbitMQ ou Amazon Kinesis. Esses canais garantem que os eventos sejam entregues de forma confiável e na ordem correta, mesmo em sistemas distribuídos.

Os canais também oferecem mecanismos para tolerância a falhas e gerenciamento de carga, essenciais para sistemas com alto volume de transações.

## Tipos de Eventos

Os eventos podem ser classificados em diferentes tipos, cada um com funções específicas dentro do sistema:

- **Eventos de Comando**: Instrui um sistema a realizar uma ação, como "Criar Pedido". Este tipo de evento é mais direto e tem uma consequência imediata.
- **Eventos de Notificação**: Informa que algo aconteceu, como "Pedido Concluído". Outros sistemas podem reagir a este evento, mas ele não requer uma ação obrigatória.
- **Eventos de Estado**: Indicam o estado atual de uma entidade, como "Saldo Atualizado". Eles são usados para garantir que outros serviços estejam sincronizados com o estado mais recente.

A classificação correta dos eventos ajuda a manter a arquitetura organizada e eficiente.

## Benefícios da Arquitetura Orientada a Eventos

- **Desacoplamento**: Os produtores e consumidores de eventos podem evoluir independentemente, reduzindo a dependência direta entre serviços. Isso torna o sistema mais modular e facilita a manutenção.
- **Escalabilidade**: A distribuição de eventos permite escalonamento horizontal dos consumidores, possibilitando que diferentes módulos possam processar grandes volumes de dados simultaneamente.
- **Flexibilidade**: Novos consumidores podem ser adicionados sem alterar os produtores. Essa característica facilita a introdução de novos recursos e integrações.
- **Reatividade**: Permite respostas em tempo real a eventos do sistema, melhorando a experiência do usuário e o desempenho operacional.
- **Tolerância a Falhas**: Arquiteturas bem projetadas podem se recuperar automaticamente de falhas, garantindo alta disponibilidade.

## Exemplos de Uso

- **E-commerce**: Processamento de pedidos, gerenciamento de estoque e notificações de clientes em tempo real. Isso inclui também recomendações personalizadas baseadas em atividades recentes dos usuários.
- **Finanças**: Monitoramento de transações em tempo real, detecção de fraudes e ajustes automáticos de limites de crédito.
- **IoT**: Coleta e processamento de dados de sensores distribuídos em grandes redes, como automação industrial e monitoramento ambiental.
- **Saúde**: Notificações de emergência e monitoramento de dispositivos médicos conectados.

Esses exemplos demonstram como a EDA pode ser aplicada em diversos contextos para aumentar a eficiência e a resiliência operacional.

---

A Event-Driven Wiki está em constante evolução e aberta a contribuições. Caso tenha sugestões, exemplos de aplicação ou queira compartilhar experiências, fique à vontade para colaborar!
