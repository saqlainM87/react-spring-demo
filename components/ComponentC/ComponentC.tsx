import { Button, Card } from 'flowbite-react';
import React, { useState } from 'react';
import { animated, config, useTransition } from 'react-spring';

const ComponentC = () => {
    const [list, setList] = useState<string[]>([]);

    const listTransitions = useTransition(list, {
        config: config.slow,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
        keys: list.map((item) => item),
    });

    return (
        <>
            <Button
                gradientDuoTone="cyanToBlue"
                onClick={() => {
                    setList((prevState) =>
                        prevState.concat(Date.now().toString())
                    );
                }}
            >
                <h1 className="text-xl">useTransition()</h1>
            </Button>

            <div className="flex flex-col space-y-6 justify-start items-center overflow-auto">
                {listTransitions((styles, item) => {
                    return (
                        <animated.div
                            key={item}
                            className="w-1/2"
                            style={styles}
                        >
                            <Card
                                href="#"
                                onClick={() => {
                                    setList((prevList) =>
                                        prevList.filter((i) => i !== item)
                                    );
                                }}
                            >
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Div {item}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Ipsam recusandae
                                    exercitationem atque esse aspernatur illum
                                    repellat provident reiciendis? Suscipit,
                                    placeat.
                                </p>
                            </Card>
                        </animated.div>
                    );
                })}
            </div>
        </>
    );
};

export default ComponentC;
