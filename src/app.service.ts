import { Injectable } from '@nestjs/common';
import roboAtivo from './class/robo.class';

@Injectable()
export class AppService{

  

  executarTodasTarefas(): string[] {
    return roboAtivo.executarTodasTarefas()
  }
}
