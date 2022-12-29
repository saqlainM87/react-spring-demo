import { Button, Card } from 'flowbite-react';
import React, { useState } from 'react';
import { animated, useChain, useSpring, useSpringRef } from 'react-spring';

const ComponentA = () => {
    const [toggle, setToggle] = useState(false);

    const overlaySpringRef = useSpringRef();
    const overlaySpringStyles = useSpring({
        opacity: toggle ? 1 : 0,
        config: {
            duration: 2000,
        },
        ref: overlaySpringRef,
    });

    const heightSpringRef = useSpringRef();
    const heightSpringStyles = useSpring({
        height: toggle ? '600px' : '0px', // Needs to be in px unit
        config: {
            duration: 1000,
        },
        ref: heightSpringRef,
    });

    // Run the animation in this chain of order
    useChain(
        toggle
            ? [heightSpringRef, overlaySpringRef]
            : [overlaySpringRef, heightSpringRef],
        toggle ? [0, 1] : [0, 2] //in seconds
    );

    return (
        <>
            <Button
                gradientDuoTone="cyanToBlue"
                onClick={() => {
                    setToggle((prevState) => !prevState);
                }}
            >
                <h1 className="text-xl">useSpring() with useChain()</h1>
            </Button>
            <animated.div
                className="flex flex-col space-y-6 justify-start items-center overflow-auto"
                style={heightSpringStyles}
            >
                <animated.div className="w-1/2" style={overlaySpringStyles}>
                    <Card href="#">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Div 1
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ipsam recusandae exercitationem atque esse
                            aspernatur illum repellat provident reiciendis?
                            Suscipit, placeat.
                        </p>
                    </Card>
                </animated.div>

                <animated.div className="w-1/2" style={overlaySpringStyles}>
                    <Card href="#">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Div 2
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ipsam recusandae exercitationem atque esse
                            aspernatur illum repellat provident reiciendis?
                            Suscipit, placeat.
                        </p>
                    </Card>
                </animated.div>

                <animated.div className="w-1/2" style={overlaySpringStyles}>
                    <Card href="#">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Div 3
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Ipsam recusandae exercitationem atque esse
                            aspernatur illum repellat provident reiciendis?
                            Suscipit, placeat.
                        </p>
                    </Card>
                </animated.div>
            </animated.div>
        </>
    );
};

export default ComponentA;
