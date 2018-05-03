import { Itinerario } from './models/Itinerario'
import { User } from './models/User'
import { Local } from './models/Local'
import { Atividade } from './models/Atividade'
import { Dica } from './models/Dica';

export const MOCK: Itinerario[] = [
    {
        id: 1,
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
            local: 'Brasília, DF, Brasil'
        },
        usuario: {
            nome: "Victor",
            email: "victor@victor.com"
        },
        descricao: "Alecrim alecrim dourado",
        nome: "Alecrim1",

    },
    {
        id: 2,
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
            local: 'Brasília, DF, Brasil'
        },
        usuario: {
            nome: "Victor",
            email: "victor@victor.com"
        },
        descricao: "Alecrim alecrim dourado",
        nome: "Alecrim2",

    },
    {
        id: 3,
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
            local: 'Brasília, DF, Brasil'
        },
        usuario: {
            nome: "Victor",
            email: "victor@victor.com"
        },
        descricao: "Alecrim alecrim dourado",
        nome: "Alecrim3",

    }

]
