import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passRef = useRef(null);

  const generatePassword = useCallback(()=> {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+";

    for(let i = 1; i < length; i++) {
      const ch = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(ch);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0, 5);
  }

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500 text-orange-500'>
      <h1 className='text-3xl font-bold mb-2 text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passRef}
        />
        <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className="flex items-center gap-x-1">
          <input 
            type="range"
            min={6}
            max={30}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            name=''
            id='length'
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        
        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            name=''
            id='Numbers'
          />
          <label htmlFor="Numbers">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            name=''
            id='charInput'
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
