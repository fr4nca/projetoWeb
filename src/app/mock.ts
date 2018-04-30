import { Itinerario } from './models/Itinerario'
import { User } from './models/User'
import { Local } from './models/Local'
import { Atividade } from './models/Atividade'
import { Dica } from './models/Dica';

export const MOCK: Itinerario[] = [
    {
        atividades: [
            {
                conteudo: "Comer",
                hora: "18h30",
                dicas: [{
                    conteudo: "Comer direito",
                    usuario: this.usuario
                }]
            }
        ],
        local: {
            pais: "Brasil",
            estado: "DF",
            cidade: "Brasília",
        },
        usuario: {
            nome: "Victor",
            email: "victor@victor.com"
        },
        descricao: "Alecrim alecrim dourado",
        nome: "Alecrim",

    },
    {
        atividades: [
            {
                conteudo: "Acordar",
                hora: "8h00",
                dicas: [{
                    conteudo: "Acordar direito",
                    usuario: this.usuario
                },
                {
                    conteudo: "Acordar com o pé direito",
                    usuario: this.usuario
                }
                ]
            }
        ],
        local: {
            pais: "Brasil",
            estado: "DF",
            cidade: "Brasília",
        },
        usuario: {
            nome: "Victor",
            email: "victor@victor.com"
        },
        descricao: "Alecrim alecrim dourado",
        nome: "Alecrim",

    },
    {
        atividades: [
            {
                conteudo: "Comer",
                hora: "18h30",
                dicas: [{
                    conteudo: "Comer direito",
                    usuario: this.usuario
                },
                {
                    conteudo: "Comer esquerdo",
                    usuario: this.usuario
                }]
            },
            {
                conteudo: "Malhar",
                hora: "15h00",
                dicas: [{
                    conteudo: "Malhar direito",
                    usuario: this.usuario
                },
                {
                    conteudo: "Malhar esquerdo",
                    usuario: this.usuario
                }]
            }
        ],
        local: {
            pais: "Brasil",
            estado: "DF",
            cidade: "Brasília",
        },
        usuario: {
            nome: "Victor",
            email: "victor@victor.com"
        },
        descricao: "Alecrim alecrim dourado",
        nome: "Alecrim",

    }

]