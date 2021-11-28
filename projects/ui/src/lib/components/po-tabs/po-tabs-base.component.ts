import { Input, Directive } from '@angular/core';

import { convertToBoolean } from '../../utils/util';
import { PoColorPaletteEnum } from '../../enums/po-color-palette.enum';

const poTagColors = (<any>Object).values(PoColorPaletteEnum);

/**
 * @description
 *
 * O componente `po-tabs` é responsável por agrupar [abas](/documentation/po-tab) dispostas numa linha horizontal,
 * ideal para facilitar a organização de conteúdos.
 *
 * Em dispositivos móveis o componente exibirá tadas as abas de maneira linear gerando um *scroll* na horizontal. Já em telas telas com
 * resoluções maiores, o componente exibirá até cinco abas normalmente, porém, à partir de seis abas o componente automaticamente torna
 * visível apenas as quatro primeiras, agrupando as subsequentes na quinta aba rotulada de **Mais**.
 *
 * > As abas que estiverem agrupadas serão dispostas numa cascata suspensa que será exibida ao clicar no botão **Mais**.
 *
 * É possível realizar a navegação entre as abas através da tecla TAB do teclado.
 * Caso uma aba estiver desabilitada, não receberá foco de navegação.
 *
 * #### Boas práticas
 *
 * - Evite utilizar uma quantidade excessiva de abas, pois irá gerar um *scroll* muito longo no `dropdown`;
 * - Evite `labels` extensos para as `tabs` pois podem quebrar seu *layout*, use `labels` diretos, curtos e intuitivos.
 */
@Directive()
export class PoTabsBaseComponent {
  public marginLeft: string = '';
  public marginRight: string = 'auto';

  private _small?: boolean = false;
  private _width?: string = '100%';
  private _activeColor?: string;
  private _activeColorLabel?: string;

  /**
   * @optinal
   *
   * @description
   *
   * Diminui o tamanho das abas.
   *
   * @default `false`
   */
  @Input('p-small') set small(value: boolean) {
    this._small = convertToBoolean(value);
  }

  get small(): boolean {
    return this._small;
  }

  /**
   * @optinal
   *
   * @description
   *
   * Configura o tamanho da regiao das abas.
   *
   * @default `100%`
   */
  @Input('p-width') set width(value: string) {
    this._width = value;
  }

  get width(): string {
    return this._width;
  }

  /**
   * @optional
   *
   * @description
   *
   * Alinhamento das tabs center | [left] | right
   *
   * @default `left`
   */
  @Input('p-align') set align(value: string) {
    this.marginLeft = value === 'left' ? '' : 'auto';
    this.marginRight = value === 'right' ? '' : 'auto';
  }

  /**
   * @optional
   *
   * @description
   *
   * Define uma cor para a aba ativa
   * color-01..12, ou red,yellow, ou #8241a4
   *
   */
  @Input('p-active-color') set activeColor(value: string) {
    if (value) {
      if (value.includes('color-')) {
        this._activeColor = poTagColors.includes(value) ? value : undefined;
      } else {
        this._activeColor = value;
      }
    }
  }

  get activeColor(): string {
    return this._activeColor;
  }

  /**
   * @optional
   *
   * @description
   *
   * Define uma cor para a label da aba ativa
   * color-01..12, ou red,yellow, ou #8241a4
   *
   */
  @Input('p-active-color-label') set activeColorLabel(value: string) {
    if (value) {
      if (value.includes('color-')) {
        this._activeColorLabel = poTagColors.includes(value) ? value : undefined;
      } else {
        this._activeColorLabel = value;
      }
    }
  }

  get activeColorLabel(): string {
    return this._activeColorLabel;
  }
}
