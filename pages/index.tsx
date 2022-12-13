import ComponentA from '../components/ComponentA/ComponentA';
import ComponentB from '../components/ComponentB/ComponentB';
import ComponentC from '../components/ComponentC/ComponentC';
import ComponentD from '../components/ComponentD/ComponentD';

export default function Home() {
    return (
        <div className="p-6 flex flex-col space-y-6 justify-start items-center">
            <ComponentA />
            <ComponentC />
            <ComponentD />
            <ComponentB />
        </div>
    );
}
