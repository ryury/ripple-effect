class Ripple {
    constructor(el = '[data-ripple]', options = {}) {
        this.ripples = (typeof el === 'string') ? document.querySelectorAll(el) : el;
        this.opts = Object.assign({}, this.constructor.defaults(), options);

        this.initialize();
    }

    static defaults() {
        return {
            eventType: 'mousedown',
            selector: 'data-ripple',
            rippleClassName: 'ripple',
            animationEndEvent: (() => {
                const el = document.createElement('fake');
                const animations = {
                    'animation': 'animationend',
                    'OAnimation': 'oanimationend',
                    'MozAnimation': 'animationend',
                    'WebkitAnimation': 'webkitAnimationEnd'
                };

                for (let i in animations){
                    if (typeof el.style[i] !== 'undefined'){
                        return animations[i];
                    }
                }
            })()
        };
    }

    initialize() {
        this.addHandler();
    }

    addHandler() {
        Array.from(this.ripples).forEach((wrap) => {
            wrap.addEventListener(this.opts.eventType, this.createRipple.bind(this), false);
        });
    }

    createRipple(e) {
        e.stopPropagation();

        const target = e.currentTarget.closest(`[${this.opts.selector}]`);
        const {width: w, height: h} = target.getBoundingClientRect();
        const x = e.clientX - target.offsetLeft;
        const y = e.clientY - target.offsetTop;
        const targetX = (x > w >> 1) ? 0 : w;
        const targetY = (y > h >> 1) ? 0 : h;
        const d = Math.sqrt(Math.pow(Math.abs(targetX - x), 2) + Math.pow(Math.abs(targetY - y), 2));
        const targetStyle = target.style;
        const targetPos = targetStyle.position;

        if (!targetPos || targetPos === 'static') {
            targetStyle.position = 'relative';
        }

        const rippleWrap = document.createElement('div');
        rippleWrap.classList.add(this.opts.rippleClassName);

        const ripple = document.createElement('span');
        ripple.style.cssText = `background:${target.getAttribute(this.opts.selector)};width:${d}px;height:${d}px;left:${x - (d / 2)}px;top:${y - (d / 2)}px;`
        ripple.addEventListener(this.opts.animationEndEvent, this.rippleEnd.bind(this), false);

        rippleWrap.appendChild(ripple);
        target.insertBefore(rippleWrap, target.firstChild);
    }

    rippleEnd(e) {
        const elem = e.target.closest(`.${this.opts.rippleClassName}`);
        elem.parentNode.removeChild(elem);
    }
}

export default Ripple;
