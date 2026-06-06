import App from '../App';
import './App.css'

function hello() {
    const isVisible = true;
    return (
        <div>
            <h1 className ={isVisible ? "visible" : "invisible"}>condition rendering</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, velit saepe officia quaerat blanditiis officiis perspiciatis rerum! Pariatur, nisi obcaecati.</p>
        </div>
    )
}
export default App