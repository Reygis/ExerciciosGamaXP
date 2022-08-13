import { Cliente } from './Cliente';
import { Empregado } from './Empregado';
import {Pessoa} from './Pessoa';

let pessoa1 : Pessoa = new Pessoa('reygis',33,'Sergipe','Aracaju')
pessoa1.apresentar()
let pessoa2 : Pessoa = new Pessoa('Silvia',45,'São Paulo','São Paulo')
pessoa2.apresentar()

let cliente1 : Cliente = new Cliente ('Coisildo', 50, 'Brasilia', 'DF', true)
cliente1.apresentar()
cliente1.verificarAssinatura()

let empregado1 : Empregado = new Empregado('Coisildo', 34, 'São paulo','Uberlandia')
empregado1.apresentar()
empregado1.contrato()