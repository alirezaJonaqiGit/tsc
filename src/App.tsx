import Wrapper from './components/wrapper';

// interface ame {
//   people: {
//     name: string,
//     age: number,
//     url?: string,
//     note?: string
//   }[]
// }
function App() {

  // const [people, setPeople] = useState <ame["people"]> ([
  //   {
  //     name: 'alireza jonaqi',
  //     age: 20,
  //     url: '',
  //     note: 'hello world my name is alierza!'
  //   },
  //   {
  //     name: 'mahsa kianfar',
  //     age: 20,
  //     url: '',
  //   }
  // ]);

  return ( 
    <>
      <div className="mt-5">
        <Wrapper />
      </div>
    </>
  );
}

export default App;
