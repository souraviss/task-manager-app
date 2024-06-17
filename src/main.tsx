import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import Message from './pages/Message.tsx'
import Task from './pages/Task.tsx'

import { store } from './store';
import { Provider } from 'react-redux';

 

ReactDOM.createRoot(document.getElementById('root')!).render(
   
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<App />}>
                    <Route path='/message' element={<Message />} />
                    <Route path="/task" element={<Task />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
   
)
