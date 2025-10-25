import { Routes } from '@angular/router';
import { ListaTarefas } from './lista-tarefas/lista-tarefas'; 
import { CadastrarTarefa } from './cadastrar-tarefa/cadastrar-tarefa'; 

export const routes: Routes = [

    {path:'listaTarefas', component: ListaTarefas  },
    {path:'CadastrarTarefas', component: CadastrarTarefa  },

];
