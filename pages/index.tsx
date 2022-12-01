import { Button, Card } from 'flowbite-react';
import { useState } from 'react';
import { animated, useSpring } from 'react-spring';

export default function Home() {
    const [toggle1, setToggle1] = useState(false);
    const styles1 = useSpring({
        opacity: toggle1 ? 1 : 0,
        config: {
            duration: 2000,
        },
    });

    return (
        <div className="flex flex-col space-y-6 h-screen justify-center items-center">
            {/* useSpring() */}
            <Button
                gradientDuoTone="cyanToBlue"
                onClick={() => {
                    setToggle1((prevState) => !prevState);
                }}
            >
                <h1 className="text-xl">useSpring()</h1>
            </Button>

            <animated.div className="w-1/2 h-min" style={styles1}>
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

            <animated.div className="w-1/2 h-min" style={styles1}>
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

            <animated.div className="w-1/2 h-min" style={styles1}>
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
        </div>
    );
}
