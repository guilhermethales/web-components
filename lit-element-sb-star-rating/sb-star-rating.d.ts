import { LitElement } from 'lit-element';
export declare class SbStarRating extends LitElement {
    static styles: import("lit-element").CSSResult;
    value: number;
    disabled: boolean;
    styles: {
        width: string;
    };
    connectedCallback(): void;
    render(): import("lit-element").TemplateResult;
    _handleClick(event: {
        target: HTMLElement;
    }): void;
    _render(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'sb-star-rating': SbStarRating;
    }
}
//# sourceMappingURL=sb-star-rating.d.ts.map