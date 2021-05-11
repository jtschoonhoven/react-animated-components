declare const config: {
    readonly durationMs: {
        readonly fast: 500;
        readonly medium: 1000;
        readonly slow: 2000;
    };
    readonly timingFunc: {
        readonly linear: "linear";
        readonly easeIn: "ease-in";
        readonly easeInOut: "ease-in-out";
    };
    readonly iterations: {
        readonly once: 1;
        readonly infinite: "infinite";
    };
    readonly components: {
        readonly default: import("styled-components").StyledComponent<"span", any, {}, never>;
    };
};
export default config;
