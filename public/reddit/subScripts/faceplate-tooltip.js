import {
  F as t,
  i as e,
  x as o,
  _ as i,
  n as a,
  q as r,
  r as l,
  h as s
} from './icon-f94fc1dd.js';
import { P as p } from './popper-controller-35e0828d.js';
import { m as n } from './makeEventDispatcher-ddce7d90.js';
let c = class extends t {
  constructor() {
    super(...arguments),
      (this.position = 'bottom'),
      (this.mouseEnterDelay = 750),
      (this.triggerEvent = 'hover'),
      (this.appearance = 'neutral'),
      (this.emitter = n(this)),
      (this._timeoutID = null),
      (this._popperController = new p(this, {
        position: this.position,
        variantFlipOrder: { start: 's', middle: 'm', end: 'e' },
        referenceElementKey: 'referenceElement',
        popperElementKey: '_tooltip'
      })),
      (this._eventUsedMap = new WeakMap()),
      (this.updated = (t) => {
        t.has('position') &&
          this._popperController.updateOptions({ position: this.position });
      }),
      (this.handleDocumentClick = (t) => {
        if (!(t.target instanceof HTMLElement) || this.hidden) return;
        if (t.target.closest(this.tagName.toLowerCase()) === this) return;
        this._eventUsedMap.has(t) || this.close();
      }),
      (this.handleEscape = (t) => {
        'Escape' === t.key && this.close();
      }),
      (this.addListenersWhileOpened = () => {
        document.addEventListener('click', this.handleDocumentClick),
          document.addEventListener('keydown', this.handleEscape);
      }),
      (this.cleanupListenersWhileOpened = () => {
        document.removeEventListener('click', this.handleDocumentClick),
          document.removeEventListener('keydown', this.handleEscape);
      });
  }
  get referenceElement() {
    var t;
    return null !== (t = this.triggers[0]) && void 0 !== t ? t : this;
  }
  static get styles() {
    return [
      e`:host{display:inline-block;position:relative;color:var(--tooltip-content)}:host([appearance=neutral]){--tooltip-background:var(--color-tooltip-bg-neutral);--tooltip-content:var(--color-tooltip-text-neutral)}:host([appearance=inverted]){--tooltip-background:var(--color-tooltip-bg-inverted);--tooltip-content:var(--color-tooltip-text-inverted)}:host([appearance=primary]){--tooltip-background:var(--color-tooltip-bg-primary);--tooltip-content:var(--color-tooltip-text-primary)}#faceplate-tooltip{font:var(--font-12-16-semibold);background-color:var(--tooltip-background);color:var(--tooltip-content);border-radius:.25rem;box-shadow:var(--boxshadow-tooltip);justify-content:center;align-items:center;padding:.5rem;display:inline-flex;width:max-content;isolation:isolate;z-index:var(--faceplate-tooltip-z-index,1)}article{display:flex;gap:.375rem}#faceplate-tooltip::after{display:block;content:'';width:8px;height:8px;position:absolute;background-color:var(--tooltip-background)}#faceplate-tooltip[position=bottom-end]::after,#faceplate-tooltip[position=bottom-start]::after,#faceplate-tooltip[position=top-end]::after,#faceplate-tooltip[position=top-start]::after{--max-arrow-x-travel-tooltip:calc(var(--tooltip-width, 2rem) - 1rem);--max-arrow-x-travel-target:calc(var(--target-width, 1rem) / 2);--max-arrow-x-distance:max(
            min(var(--max-arrow-x-travel-target), var(--max-arrow-x-travel-tooltip)),
            0.5rem
          )}#faceplate-tooltip[position=bottom-start]::after,#faceplate-tooltip[position=top-start]::after{left:var(--max-arrow-x-distance)}#faceplate-tooltip[position=bottom-end]::after,#faceplate-tooltip[position=top-end]::after{right:var(--max-arrow-x-distance)}#faceplate-tooltip[position=left-end]::after,#faceplate-tooltip[position=left-start]::after,#faceplate-tooltip[position=right-end]::after,#faceplate-tooltip[position=right-start]::after{--max-arrow-y-travel-tooltip:calc(var(--tooltip-height, 2rem) - 1rem);--max-arrow-y-travel-target:calc(var(--target-height, 2rem) / 2);--max-arrow-y-distance:max(
            min(var(--max-arrow-y-travel-target), var(--max-arrow-y-travel-tooltip)),
            0.5rem
          )}#faceplate-tooltip[position=left-start]::after,#faceplate-tooltip[position=right-start]::after{top:var(--max-arrow-y-distance)}#faceplate-tooltip[position=left-end]::after,#faceplate-tooltip[position=right-end]::after{bottom:var(--max-arrow-y-distance)}#faceplate-tooltip[position|=bottom]::after{top:0;transform:translateY(-50%) rotate(45deg);box-shadow:-1px -1px 2px rgba(0,0,0,.05)}#faceplate-tooltip[position|=top]::after{bottom:0;transform:translateY(50%) rotate(45deg);box-shadow:1px 1px 2px rgba(0,0,0,.05)}#faceplate-tooltip[position|=right]::after{left:0;transform:translateX(-38%) rotate(45deg);box-shadow:-2px 0 2px rgba(0,0,0,.05)}#faceplate-tooltip[position|=left]::after{right:0;transform:translateX(38%) rotate(45deg);box-shadow:0 -2px 2px rgba(0,0,0,.05)}#faceplate-tooltip[position^=auto]::after{display:none}`,
      p.defaultPopperContentStyles
    ];
  }
  get hidden() {
    return 'closed' === this._popperController.currentState.state;
  }
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.cleanupListenersWhileOpened();
  }
  updateCustomProperties() {
    if ('faceplate-tooltip' !== this.tagName.toLocaleLowerCase()) return;
    const { clientHeight: t = null, clientWidth: e = null } =
        this.referenceElement,
      { clientHeight: o = null, clientWidth: i = null } = this._tooltip;
    t &&
      e &&
      o &&
      i &&
      (this.style.setProperty('--target-width', `${Math.round(e)}px`),
      this.style.setProperty('--target-height', `${Math.round(t)}px`),
      this.style.setProperty('--tooltip-width', `${Math.round(i)}px`),
      this.style.setProperty('--tooltip-height', `${Math.round(o)}px`));
  }
  show() {
    this.emitter.dispatch('open'),
      this.updateCustomProperties(),
      this._popperController.open().then(() => {
        this.hidden ||
          (this.addListenersWhileOpened(), this.emitter.dispatch('opened'));
      });
  }
  close() {
    return (
      this.cleanupListenersWhileOpened(),
      this.emitter.dispatch('close'),
      this._popperController.close().then(() => {
        this.hidden && this.emitter.dispatch('closed');
      })
    );
  }
  handleClick(t) {
    this._eventUsedMap.set(t, !0),
      'click' === this.triggerEvent &&
        (this.hidden ? this.show() : this.close());
  }
  handleMouseenter() {
    'hover' === this.triggerEvent &&
      (this.cleanupTooltips(),
      (this._timeoutID = window.setTimeout(() => {
        this.querySelector(':focus, :hover') && this.show();
      }, this.mouseEnterDelay)));
  }
  handleMouseleave() {
    this.close(), this.cleanupTooltips();
  }
  cleanupTooltips() {
    this._timeoutID &&
      (window.clearTimeout(this._timeoutID), (this._timeoutID = null));
  }
  render() {
    const t = this._popperController.actualPosition || this.position;
    return o` <slot name="trigger" aria-describedby="faceplate-tooltip" faceplate-popper-trigger @click="${this.handleClick}" @mouseenter="${this.handleMouseenter}" @mouseleave="${this.handleMouseleave}" @focusin="${this.handleMouseenter}" @focusout="${this.handleMouseleave}"></slot> <article id="faceplate-tooltip" role="tooltip" position="${t}" faceplate-popper-content hidden> <slot class="icon" name="icon"></slot> <span> <slot></slot> </span> </article> `;
  }
};
i([a({ type: String })], c.prototype, 'position', void 0),
  i(
    [a({ type: Number, attribute: 'enter-delay' })],
    c.prototype,
    'mouseEnterDelay',
    void 0
  ),
  i(
    [a({ type: String, attribute: 'trigger-event' })],
    c.prototype,
    'triggerEvent',
    void 0
  ),
  i([a({ type: String, reflect: !0 })], c.prototype, 'appearance', void 0),
  i([r('trigger', !0)], c.prototype, 'triggers', void 0),
  i([r('icon', !0)], c.prototype, 'icons', void 0),
  i([l('#faceplate-tooltip')], c.prototype, '_tooltip', void 0),
  (c = i([s('faceplate-tooltip')], c));
export { c as FaceplateTooltip };
//# sourceMappingURL=faceplate-tooltip-017d3daf.js.map
