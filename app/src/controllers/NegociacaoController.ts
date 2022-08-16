import { domInjector } from "../decorators/domInjector.js";
import { inspector } from "../decorators/inspector.js";
import { logarTempoDeExecucao } from "../decorators/logarTempoDeExecucao.js";
import { DiasDaSemana } from "../enums/diaDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

class NegociacaoController {
  @domInjector("#data")
  private inputData: HTMLInputElement;
  @domInjector("#quantidade")
  private inputQuantidade: HTMLInputElement;
  @domInjector("#valor")
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this.negociacoesView.update(this.negociacoes);
  }

  @inspector
  @logarTempoDeExecucao()
  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value,
    );
    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView.update("Apenas negociações em dias úteis são aceitas.");
      return;
    }
    this.negociacoes.adiciona(negociacao);
    this.limparFormulario();
    this.atualizaView();
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso.");
  }

  public importaDados(): void {
    fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((dados: any[]) => {
        return dados.map((dadoDeHoje) => {
          return new Negociacao(
            new Date(),
            dadoDeHoje.vezes,
            dadoDeHoje.montante,
          );
        });
      })
      .then((negociacoesDeHoje) => {
        for (let negociacao of negociacoesDeHoje) {
          this.negociacoes.adiciona(negociacao);
        }
        this.negociacoesView.update(this.negociacoes);
      });
  }

  private ehDiaUtil(data: Date) {
    return (
      data.getDay() > DiasDaSemana.DOMINGO &&
      data.getDay() < DiasDaSemana.SABADO
    );
  }
}

export { NegociacaoController };
