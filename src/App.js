import './App.css';
import {Article, TextInput, Counter, Github} from './components';


function App() {
  return (
    <>
      <div>
        <Github></Github>
        <TextInput></TextInput>
        <Counter></Counter>
        <Article
          title={'タイトルだよー'}
          content={'コンテンツだよー'}
        />
      </div>
    </>
  );
}

export default App;
