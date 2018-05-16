import { Itinerario } from "./models/Itinerario";
import { User } from "./models/User";
import { Local } from "./models/Local";
import { Atividade } from "./models/Atividade";
import { Dica } from "./models/Dica";

export const MOCK: Itinerario[] = [
  {
    id: 1,
    atividades: [
      {
        conteudo: "Praia de Copacabana",
        hora: "7h00",
        done: false,
        dicas: [
          {
            conteudo: "Levar roupa de banho",
            usuario: this.usuario
          },
          {
            conteudo: "Levar dinheiro vivo",
            usuario: this.usuario
          },
          {
            conteudo: "Chegar cedo pois a praia tende a ficar lotada rápido",
            usuario: this.usuario
          },
          {
            conteudo: "Experimentar o biscoito Globo",
            usuario: this.usuario
          },
          {
            conteudo: "Experimentar o chá mate",
            usuario: this.usuario
          },
          {
            conteudo:
              "Não levar materiais de valor alto, pois há casos de assalto na praia.",
            usuario: this.usuario
          }
        ]
      },
      {
        conteudo: "Visitar o Corcovado",
        hora: "10h00",
        done: false,
        dicas: [
          {
            conteudo: "Levar água",
            usuario: this.usuario
          },
          {
            conteudo: "Aceita cartão de crédito",
            usuario: this.usuario
          },
          {
            conteudo: "Chegar cedo, a fila fica grande",
            usuario: this.usuario
          },
          {
            conteudo: "Não ter medo de altura",
            usuario: this.usuario
          }
        ]
      },
      {
        conteudo: "Visitar o Forte de Copacabana",
        hora: "14h00",
        done: false,
        dicas: [
          {
            conteudo: "Visitar o Museu Histórico do Exército",
            usuario: this.usuario
          },
          {
            conteudo: "Comer na Confeitaria Colombo",
            usuario: this.usuario
          },
          {
            conteudo:
              "Aos domingos, a Avenida Atlântica fecha para passeios de bicicleta, caminhadas, patins..",
            usuario: this.usuario
          }
        ]
      },
      {
        conteudo: "Subir no Bondinho do Pão de Açucar",
        hora: "15h00",
        done: false,
        dicas: [
          {
            conteudo: "Comprar os ingressos online antecipadamente",
            usuario: this.usuario
          },
          {
            conteudo:
              "Acontece eventualmente alguns eventos no local, acompanhe pelo site",
            usuario: this.usuario
          },
          {
            conteudo: "Fazer o tour completo, histórico e dos bastidores",
            usuario: this.usuario
          }
        ]
      },
      {
        conteudo: "Pôr do Sol na Pedra do Arpoador",
        hora: "17h20",
        done: false,
        dicas: [
          {
            conteudo: "Chegar cedo para pegar um lugar bom na pedra",
            usuario: this.usuario
          },
          {
            conteudo: "Ir de tênis",
            usuario: this.usuario
          }
        ]
      },
      {
        conteudo: "Visitar o Jardim Botânico do Rio de Janeiro",
        hora: "18h00",
        done: false,
        dicas: [
          {
            conteudo: "Um ótimo local para descansar",
            usuario: this.usuario
          },
          {
            conteudo:
              "Levar comida caso queira comer, a lanchonete do local é cara.",
            usuario: this.usuario
          }
        ]
      }
    ],
    local: {
      local: "Rio de Janeiro, RJ, Brasil",
      lat: -22.9068467,
      lon: -43.17289649999998
    },
    usuario: {
      nome: "Victor Almeida França",
      email: "fr4ncacc@gmail.com"
    },
    descricao:
      "Itinerário com conceito turístico para pessoas que desejam visitar o Rio de Janeiro e seus principais pontos turísticos, como praias, restaurantes etc.",
    nome: "Itinerario do Rio de Janeiro",
    avaliacao: 18,
    likect: 11,
    rate_it: 4
  },
  {
    id: 2,
    atividades: [
      {
        conteudo: "Visitar a praia de Tambaú",
        hora: "7h00",
        done: false,
        dicas: [
          {
            conteudo:
              "A praia de Tambaú é a praia central de João Pessoa, muito famosa e fica cheia rápido. Tente chegar cedo",
            usuario: this.usuario
          },
          {
            conteudo: "O mar é um pouco violento.",
            usuario: this.usuario
          },
          {
            conteudo:
              "Acontecem muitos eventos nesta praia, principalmente final de ano",
            usuario: this.usuario
          },
          {
            conteudo:
              "Calçadão possui muitos quiosques com grande variedade de comida",
            usuario: this.usuario
          },
          {
            conteudo:
              "Entre 5h e 8h, a avenida é fechada para caminhadas, bicicleta etc",
            usuario: this.usuario
          },
          {
            conteudo:
              "De onde saem os catamarãs para o passeio de Picãozinho (piscinas naturais)",
            usuario: this.usuario
          }
        ]
      },
      {
        conteudo: "Passeio de Picãozinho",
        hora: "9h00",
        done: false,
        dicas: [
          {
            conteudo: "Somente acontecem em época de maré baixa",
            usuario: this.usuario
          },
          {
            conteudo:
              "Passeio relativamente barato, apenas R$35,00 por pessoa.",
            usuario: this.usuario
          },
          {
            conteudo: "Há quiosques para comer no local",
            usuario: this.usuario
          }
        ]
      },
      {
        conteudo: "Pôr do Sol na Praia do Jacaré",
        hora: "17h00",
        done: false,
        dicas: [
          {
            conteudo:
              "Ótimo para quem gosta de música boa e um belo por do sol",
            usuario: this.usuario
          },
          {
            conteudo:
              "Os bares oferecem passeio entre 15h45 e 16h30 em volta da orla da praia do Jacaré",
            usuario: this.usuario
          }
        ]
      },
      {
        conteudo: "Comer a empada do Empadinha Barnabé",
        hora: "19h00",
        done: false,
        dicas: [
          {
            conteudo: "Melhores empadas da Paraíba",
            usuario: this.usuario
          },
          {
            conteudo: "Aceitam cartão de crédito",
            usuario: this.usuario
          },
          {
            conteudo: "Possuem brinquedoteca para crianças",
            usuario: this.usuario
          },
          {
            conteudo:
              "Não vendem somente empada, possuem cardápio de outros tipos de salgados e lanches",
            usuario: this.usuario
          }
        ]
      }
    ],
    local: {
      local: "João Pessoa, PB, Brasil",
      lat: -7.119495799999999,
      lon: -34.84501180000001
    },
    usuario: {
      nome: "Victor Almeida França",
      email: "fr4ncacc@gmail.com"
    },
    descricao:
      "Itinerário feito com intuito de mostrar as pessoas os melhores locais para visitar na cidade de João Pessoa",
    nome: "Itinerario de João Pessoa",
    avaliacao: 18,
    likect: 11,
    rate_it: 4
  },
  {
    id: 3,
    atividades: [
      {
        conteudo: "Prainhas do Pontal do Atalaia",
        hora: "7h00",
        done: false,
        dicas: [
          {
            conteudo: "Levar bolsa térmica",
            usuario: this.usuario
          },
          {
            conteudo: "Levar Toalha",
            usuario: this.usuario
          },
          {
            conteudo: "Levar óculos de mergulho",
            usuario: this.usuario
          },
          {
            conteudo: "Levar água",
            usuario: this.usuario
          },
          {
            conteudo: "Levar protetor solar",
            usuario: this.usuario
          },
          {
            conteudo: "Levar lanche",
            usuario: this.usuario
          },
          {
            conteudo:
              "Escadaria longo, exigindo um pouco de fôlego para voltar.",
            usuario: this.usuario
          },
          {
            conteudo:
              "Chegar cedo para conseguir lugar para estacionar perto.",
            usuario: this.usuario
          }
        ]
      },
      {
        conteudo: "Voltar à cidade para Almoçar",
        hora: "12h00",
        done: false,
        dicas: [
          {
            conteudo: "Levar dinheiro ou cartão de crédito.",
            usuario: this.usuario
          },
        ]
      },
      {
        conteudo: "Praia do Forno",
        hora: "14h00",
        done: false,
        dicas: [
          {
            conteudo: "Levar água para a trilha",
            usuario: this.usuario
          },
          {
            conteudo: "Tomar cuidado com pedras escorregadias",
            usuario: this.usuario
          },
          {
            conteudo:
              "Levar óculos de mergulho para observar os peixes",
            usuario: this.usuario
          },
          {
            conteudo:
              "Levar toalha",
            usuario: this.usuario
          }
        ]
      },
      {
        conteudo: "Ver o pôr do sol na Praia Grande",
        hora: "17h30",
        done: false,
        dicas: [
          {
            conteudo: "Dependendo da época do ano o pôr do sol pode acontecer mais cedo ou mais tarde deste horário.",
            usuario: this.usuario
          },
          {
            conteudo:
              "Local venta bastante",
            usuario: this.usuario
          },
        ]
      },
      {
        conteudo: "Jantar em Cabo Frio",
        hora: "20h00",
        done: false,
        dicas: [
          {
            conteudo: "Cabo frio fica a 15min de Arraial",
            usuario: this.usuario
          },
          {
            conteudo: "Bons locais para comer, possui shopping",
            usuario: this.usuario
          },
        ]
      },
    ],
    local: {
      local: "Arraial do Cabo, RJ, Brasil",
      lat: -22.965833,
      lon: -42.027778
    },
    usuario: {
      nome: "Ronan F. Gonçalves",
      email: "ronan.fg@sempreceub.com"
    },
    descricao:
      "Itineário para orientar um dia de visita à algumas da melhores praias do Arraial do Cabo e apreciar o pôr do Sol.",
    nome: "Itinerario do Arraial do Cabo",
    avaliacao: 25,
    likect: 20,
    rate_it: 4
  },
  {
    id: 4,
    atividades: [
      {
        conteudo: "Passeio de Escuna",
        hora: "8h00",
        done: false,
        dicas: [
          {
            conteudo: "Alguns passeios duram 4 horas",
            usuario: this.usuario
          },
          {
            conteudo: "Realizar reserva um dia antes",
            usuario: this.usuario
          },
          {
            conteudo: "Levar dinheiro",
            usuario: this.usuario
          },
          {
            conteudo: "Levar óculos de mergulho",
            usuario: this.usuario
          },
          {
            conteudo: "Levar toalha",
            usuario: this.usuario
          },
          {
            conteudo: "Levar remédio para enjoo",
            usuario: this.usuario
          }
        ]
      },
      {
        conteudo: "Voltar à cidade para Almoçar",
        hora: "12h30",
        done: false,
        dicas: [
          {
            conteudo: "Levar dinheiro ou cartão de crédito.",
            usuario: this.usuario
          },
        ]
      },
      {
        conteudo: "Praia de Geribá",
        hora: "14h00",
        done: false,
        dicas: [
          {
            conteudo: "Praia extensa boa para fazer caminhada",
            usuario: this.usuario
          },
          {
            conteudo: "Possui alguns quiosques para comer ou beber",
            usuario: this.usuario
          },
          {
            conteudo: "Levar protetor",
            usuario: this.usuario
          },
          {
            conteudo: "Levar toalha",
            usuario: this.usuario
          },
          {
            conteudo: "Levar dinheiro",
            usuario: this.usuario
          }

        ]
      },
      {
        conteudo: "Passear pela Praça Central de Búzios",
        hora: "19h30",
        done: false,
        dicas: [
          {
            conteudo: "Praça bem movimentada à noite, bom local para comprar artesanatos",
            usuario: this.usuario
          },
          {
            conteudo: "Possui ótimos restaurantes, mas com preço um pouco salgado",
            usuario: this.usuario
          },
        ]
      }
    ],
    local: {
      local: "Búzios, RJ, Brasil",
      lat: -22.746944,
      lon: -41.881944
    },
    usuario: {
      nome: "Ronan F. Gonçalves",
      email: "ronan.fg@sempreceub.com"
    },
    descricao:
      "Itineário para orientar um belo dia de lazer em Búzios, com passeio de escuna, praias, e ótimo passeio na praça. ",
    nome: "Itinerario de Passeio em Búzios",
    avaliacao: 25,
    likect: 20,
    rate_it: 4
  }
];
