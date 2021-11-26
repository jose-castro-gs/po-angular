import { EventEmitter, Input, Output, Directive } from '@angular/core';

import { PoColorPaletteEnum } from '../../../enums/po-color-palette.enum';
import { convertToBoolean, uuid } from '../../../utils/util';

const poTagColors = (<any>Object).values(PoColorPaletteEnum);
/**
 * @description
 *
 * O componente `po-tab` renderiza uma aba na qual envolve um conteúdo HTML.
 *
 * Com este componente é possível atribuir um rótulo para auxiliar na identificação do conteúdo, ativar para que o mesmo seja exibido,
 * desabilitar para impossibilitar o acesso, bem como ocultar para indisponibilizar a aba.
 *
 * > Para controlar a navegação entre diversas abas, utilizar o componente [`po-tabs`](/documentation/po-tabs).
 */
@Directive()
export abstract class PoTabBaseComponent {
  /** Rótulo da aba. */
  @Input('p-label') label: string;

  /** Método disparado ao clicar na aba. */
  @Output('p-click') click = new EventEmitter();

  // ID da aba
  id?: string = uuid();

  private _active?: boolean = false;
  private _disabled?: boolean = false;
  private _hide?: boolean = false;
  private _align: string = 'center';
  private _color?: string;
  private _colorLabel?: string;

  /**
   * @optional
   *
   * @description
   *
   * Ativa a aba exibindo seu conteúdo.
   *
   * > Sugere-se utilizar na aba de conteúdo inicial.
   *
   * @default `false`
   */
  @Input('p-active') set active(active: boolean) {
    this._active = convertToBoolean(active);
    this.setDisplayOnActive();
  }

  get active(): boolean {
    return this._active;
  }

  /**
   * @optional
   *
   * @description
   *
   * Desabilita a aba.
   *
   * @default `false`
   */
  @Input('p-disabled') set disabled(disabled: boolean) {
    this._disabled = convertToBoolean(disabled);
  }

  get disabled(): boolean {
    return this._disabled;
  }

  /**
   * @optional
   *
   * @description
   *
   * Oculta a aba.
   *
   * @default `false`
   */
  @Input('p-hide') set hide(hide: boolean) {
    this._hide = convertToBoolean(hide);
  }

  get hide(): boolean {
    return this._hide;
  }

  /**
   * @optional
   *
   * @description
   *
   * Alinhamento do botao [center] | left | right
   *
   * @default `center`
   */
  @Input('p-align') set align(value: string) {
    this._align = value;
  }

  get align(): string {
    return this._align;
  }

  /**
   * @optional
   *
   * @description
   *
   *   * Define uma cor para a aba ativa
   *
   * Valores válidos:
   *  - <span class="dot po-color-01"></span> `color-01`
   *  - <span class="dot po-color-02"></span> `color-02`
   *  - <span class="dot po-color-03"></span> `color-03`
   *  - <span class="dot po-color-04"></span> `color-04`
   *  - <span class="dot po-color-05"></span> `color-05`
   *  - <span class="dot po-color-06"></span> `color-06`
   *  - <span class="dot po-color-07"></span> `color-07`
   *  - <span class="dot po-color-08"></span> `color-08`
   *  - <span class="dot po-color-09"></span> `color-09`
   *  - <span class="dot po-color-10"></span> `color-10`
   *  - <span class="dot po-color-11"></span> `color-11`
   *  - <span class="dot po-color-12"></span> `color-12`
   *
   */
  @Input('p-color') set color(value: string) {
    this._color = poTagColors.includes(value) ? value : undefined;
  }

  get color(): string {
    return this._color;
  }

  /**
   * @optional
   *
   * @description
   *
   *   * Define uma cor para a label da aba ativa
   *
   * Valores válidos:
   *  - <span class="dot po-color-01"></span> `color-01`
   *  - <span class="dot po-color-02"></span> `color-02`
   *  - <span class="dot po-color-03"></span> `color-03`
   *  - <span class="dot po-color-04"></span> `color-04`
   *  - <span class="dot po-color-05"></span> `color-05`
   *  - <span class="dot po-color-06"></span> `color-06`
   *  - <span class="dot po-color-07"></span> `color-07`
   *  - <span class="dot po-color-08"></span> `color-08`
   *  - <span class="dot po-color-09"></span> `color-09`
   *  - <span class="dot po-color-10"></span> `color-10`
   *  - <span class="dot po-color-11"></span> `color-11`
   *  - <span class="dot po-color-12"></span> `color-12`
   *
   */
  @Input('p-colorLabel') set colorLabel(value: string) {
    this._colorLabel = poTagColors.includes(value) ? value : undefined;
  }

  get colorLabel(): string {
    return this._colorLabel;
  }

  protected abstract setDisplayOnActive();
}
