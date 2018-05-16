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
  }
];
