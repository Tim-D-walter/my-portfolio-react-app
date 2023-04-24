import { createRoot } from 'react-dom/client'
import { Stats } from '@react-three/drei'
import { Leva } from 'leva'
import App from './App'

const CreateRoot = (rootElement, HTMLElement) => {
    return createRoot(rootElement).render(
        <>
            <App />
            {/*<Stats />*/}
            {/*<Leva collapsed />*/}
        </>
    );
};

export default CreateRoot;