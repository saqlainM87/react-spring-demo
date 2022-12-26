# React Spring Demo

## _A spring-physics first animation library giving you flexible tools to confidently cast your ideas_

**React Spring** is a spring-physics based animation library that powers most UI related animation in React. It is a bridge on the two existing React animation libraries; React Motion and Animated. Given the performance considerations of animation libraries, React Spring is the best of both worlds. It inherits animated powerful interpolations and performance while maintaining react-motion’s ease of use.

### Features

-   It’s not just for web. It also support - native, three, konva, zdog
-   Run animations without re-rendering
-   Production ready with SSR support
-   Usable with any component library

### Common APIs

Here are some common APIs from `react-spring`:

🪝 `useSpring()` - This is the flagship hook. Applicable to most use-cases.

```ts
const heightSpringStyles = useSpring({
height: toggle ? '600px' : '0px',
config: {
        duration: 1000,
        },
        ref: heightSpringRef,
});

// Usage
<animated.div style={heightSpringStyles}>
    {...}
</animated.div>
```

🪝 `useSpringRef()` - This hook is used to attach reference to other API.

```ts
const overlaySpringRef = useSpringRef();
const overlaySpringStyles = useSpring({
    opacity: toggle ? 1 : 0,
    config: {
        duration: 2000,
    },
    ref: overlaySpringRef,
});
```

🪝 `useChain()` - It is used to orchestrate animation hooks in sequence with one another. This is best used when you specifically want to orchestrate different types of animation hook.

```ts
useChain(
    toggle
        ? [heightSpringRef, overlaySpringRef]
        : [overlaySpringRef, heightSpringRef],
    toggle ? [0, 1] : [0, 2] //in seconds
);
```

🪝 `useTransition()` - This hook is best suited for animating in & out datasets or items you don't particularly want to be left in the DOM, e.g. a dialog.

```ts
 const listTransitions = useTransition([...], {
        config: config.slow,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
        keys: list.map((item) => item),
    });

// Usage
listTransitions((styles, item) => {
    // return element
})

```

🪝 `useTrail()` - It has an identical API signature to useSprings the difference is the hook automatically orchestrates the springs to stagger one after the other.

```ts
const items = [1, 2, 3];

const trails = useTrail(items.length, {
    opacity: toggle ? 1 : 0,
    config: {
        duration: 2000,
    },
});

// Usage
trails.map((styles, index) => {
    // return element
});
```

🪝 `useSprings()` - If you want to orchestrate multiple springs with a unified API, this is probably the best hook for you.

```ts
const items = [{ opacity: 0.25 }, { opacity: 0.5 }, { opacity: 0.7 }];

const springs = useSprings(
    items.length,
    items.map((item) => ({
        opacity: toggle ? item.opacity : 0,
        config: {
            duration: 2000,
        },
    }))
);

// Usage
springs.map((styles, index) => {
    // return element
});
```

### Resources

1. https://blog.logrocket.com/animations-with-react-spring/
2. https://dev.to/vaibhavkhulbe/spring-it-on-a-complete-guide-to-react-spring-1om9
3. https://shakuro.com/blog/react-spring-tutorial-making-animated-react-apps
4. https://www.copycat.dev/blog/react-spring/
5. https://react-spring.dev/docs
