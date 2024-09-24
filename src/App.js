import React from 'react';
import FirsComp from './components/FirstComp';
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Forms from './pages/Forms';
import Counter from './pages/Counter';
import FormInput from './pages/FormInput';
import Textarea from './pages/Textarea';
import DivComponents1 from './components/DivComponents';
import NavBar from './components/NavBar';
import Components from './pages/Components';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />          
          <Route path="/forms" element={<Forms />} />          
          <Route path="/FormInput" element={<FormInput />} />
          <Route path="/textarea" element={<Textarea />} />
          <Route path="/counter" element={<Counter />} />          
          <Route path="/componentsStudy" element={<Components />} />          
          <Route path="/todo" element={<TodoList />} />          
        </Routes>
      </BrowserRouter>     
    </div>

  );
}

export default App;
