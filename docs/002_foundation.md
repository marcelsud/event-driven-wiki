---
sidebar_position: 2
title: Fundamentos
---

# Fundamentos

Arquitetura Orientada a Eventos (Event-Driven Architecture ou EDA) é um modelo de design onde a comunicação entre diferentes componentes de um sistema ocorre por meio de eventos. Este tipo de arquitetura é especialmente útil em cenários que requerem escalabilidade, resposta rápida a mudanças e integração de múltiplos serviços de forma desacoplada. Além disso, ela permite que sistemas sejam mais reativos, capazes de se adaptar a novas condições com máxima eficiência.

## O que é um Evento?

Um **evento** é uma representação de uma ação ou ocorrência relevante que é gerada por uma aplicação ou sistema. Ele pode ser o resultado de uma interação do usuário, uma alteração no estado de um sistema ou mesmo uma condição detectada automaticamente.

<img src="/img/image_001.png" width="650"/>

Exemplos de eventos incluem:

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

1. **Notification Event (Evento de Notificação)**

   - **Característica principal:** enviar um aviso de que algo aconteceu.
   - **Exemplo:**

   ```json
   { "orderId": "123" }
   ```

   - **Contrato com poucos detalhes:** costuma conter apenas dados mínimos para notificar outros serviços ou partes interessadas sobre um fato (e.g., “usuário foi criado”, “pedido foi atualizado” etc.).
   - **Geralmente utilizado para:** disparar processos que só precisam saber que o evento ocorreu (por exemplo, enviar um e-mail de boas-vindas para o usuário). O consumidor do evento pode usar o `userId` para buscar mais detalhes, se necessário.

2. **Event-Carried State Transfer (Transferência de Estado via Evento)**

   - **Característica principal:** o evento carrega o estado ou parte dele, permitindo que o consumidor atualize suas próprias estruturas de dados sem precisar de consultas extras.
   - **Exemplo:**
     ```json
     {
       "orderId": "123",
       "status": "PAID",
       "paymentType": "PIX",
       ...
     }
     ```
   - **Contrato com mais detalhes:** o evento fornece não apenas a notificação mas também dados suficientes para que os serviços interessados conheçam o contexto ou estado que foi alterado (por exemplo, para atualizar uma base local sem precisar chamar a origem).
   - **Geralmente utilizado para:** sincronizar serviços entre si. Quando um serviço dispara o evento, ele já inclui as informações de que outro precisa para tomar decisões ou manter seu próprio modelo de dados em cache.

3. **Domain Events (Eventos de Domínio)**

   - **Característica principal:** representam conceitos específicos de negócio, vinculados ao modelo de domínio.
   - **Exemplo:**

   ```json
   {"order": {...}, "customer": {...}}
   ```

   - **Contrato focado em linguagem de domínio:** costuma conter dados que exprimem ações, status ou mudanças significativas segundo a ótica do domínio (por exemplo, `OrderPlaced`, `PaymentReceived`, `UserRegistered`).
   - **Geralmente utilizado para:** comunicar mudanças relevantes do ponto de vista de negócio, agregando valor semântico para quem consome o evento. Em uma arquitetura de microserviços, esses eventos geram baixo acoplamento e preservam a autonomia dos contextos, ao mesmo tempo em que mantêm uma linguagem ubíqua (ubiquitous language).

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
