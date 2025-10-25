import { Injectable } from '@angular/core';
export interface Tarefa{ 
  id: Number;
  titulo: String;
  prazo: Date;
  concluido: Boolean;
}
@Injectable({
  providedIn: 'root'
})
export class TarefaService {

   tarefas: Tarefa[] = [];
  
  adicionar(t: Tarefa): void{
    this.tarefas.push(t);
  }

  remover(id: Number): void{
    const i = this.tarefas.findIndex(t => t.id === id);
    if (i >= 0) this.tarefas.splice(i, 1);

  }

  listar(): Tarefa[] {
    return this.tarefas;
  }

  marcarConcluida(id: number): void {
    const i = this.tarefas.findIndex(t => t.id === id);
  }
}
