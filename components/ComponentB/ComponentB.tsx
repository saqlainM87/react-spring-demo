import { Button, Card } from 'flowbite-react';
import React, { useState } from 'react';
import { animated, useSprings } from 'react-spring';

const items = [{ opacity: 0.25 }, { opacity: 0.5 }, { opacity: 0.7 }];

const ComponentB = () => {
    const [toggle, setToggle] = useState(false);

    const springs = useSprings(
        items.length,
        items.map((item) => ({
            opacity: toggle ? item.opacity : 0,
            config: {
                duration: 2000,
            },
        }))
    );

    return (
        <>
            <Button
                gradientDuoTone="cyanToBlue"
                onClick={() => {
                    setToggle((prevState) => !prevState);
                }}
            >
                <h1 className="text-xl">useSprings()</h1>
            </Button>
            <div className="flex flex-col space-y-6 justify-start items-center overflow-auto">
                {springs.map((styles, index) => (
                    <animated.div key={index} className="w-1/2" style={styles}>
                        <Card href="#">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Div {index + 1}
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
                ))}
            </div>
        </>
    );
};

export default ComponentB;
