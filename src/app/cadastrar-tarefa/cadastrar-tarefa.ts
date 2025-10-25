import { Component } from '@angular/core';
import { TarefaService } from '../Services/tarefa-service'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-tarefa',
  imports: [FormsModule],
  templateUrl: './cadastrar-tarefa.html',
  styleUrl: './cadastrar-tarefa.css',
})
export class CadastrarTarefa {

  titulo = '';
  prazo  =  new Date;
  concluido = false;

  constructor(private srv: TarefaService) {}

  salvar() {
    if (!this.titulo.trim() || !this.prazo || !this.concluido) return;
    this.srv.adicionar({ id: 0,
      titulo: this.titulo.trim(),
      prazo : this.prazo,
      concluido: this.concluido,
    });
    this.titulo = ''; this.concluido = false; 
  }
}
