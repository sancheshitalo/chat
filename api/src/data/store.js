export const clients = [
  {
    id: 'c1',
    name: 'Giovanna Lima',
    documentId: '12345678900',
    documentType: 'CPF',
    playType: 'prepaid',
    balanceCents: 1000,
    active: true
  },
  {
    id: 'c2',
    name: 'ConstruHouse LTDA',
    documentId: '12345678000199',
    documentType: 'CNPJ',
    planType: 'postpaid',
    limitCents: 5000,
    usageCents: 4000,
    active: true
  },
  {
    id: 'c3',
    name: 'Restaurante Mais Sabor',
    documentId: '87654321000191',
    planType: 'prepaid',
    balanceCents: 500,
    active: false
  }
];

export const conversations = [
  {id: 'v1', clientId: 'c1', recipientId: 'u1', recipientName: 'Gabriele Vidigal'},
  {id: 'v2', clientId: 'c1', recipientId: 'u2', recipientName: 'Laís Costa'},
  {id: 'v3', clientId: 'c1', recipientId: 'u3', recipientName: 'Fernando Alvarenga'},
  {id: 'v4', clientId: 'c2', recipientId: 'u4', recipientName: 'Marcelo Marques'},
  {id: 'v5', clientId: 'c2', recipientId: 'u5', recipientName: 'Felipe Santos'},
];

export const messages = [
  msg('1', 'c1', { id: 'c1', type: 'client' }, 'Oi, seu pedido saiu para entrega.', '2026-10-07T09:00:00Z', 'read'),
  msg('2', 'c1', { id: 'u1', type: 'user' }, 'Ótimo, obrigado! Chega hoje?', '2026-10-07T09:05:00Z', 'delivered'),
  msg('3', 'c1', { id: 'u1', type: 'user' }, 'Vou estar em casa depois das 14h.', '2026-10-07T09:06:00Z', 'delivered'),
  msg('4', 'c2', { id: 'c1', type: 'client' }, 'Sua fatura está disponível.', '2026-10-06T15:00:00Z', 'read'),
  msg('5', 'c2', { id: 'u2', type: 'user' }, 'Recebi, vou pagar amanhã.', '2026-10-06T15:20:00Z', 'read'),
  msg('6', 'c4', { id: 'u4', type: 'user' }, 'Bom dia, vocês abrem no sábado?', '2026-10-07T08:30:00Z', 'delivered'),
];

function msg(id, conversationId, sentBy, content, timestamp, status){
  return { id, conversationId, sentBy, content, timestamp, priority: 'normal', status, costCents: 0 }
}