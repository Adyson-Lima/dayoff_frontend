import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';

export default function NewUpdate(){

  const [day, setDay] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  // dayoff_id definido na rota NewUpdate
  const {dayoff_id} = useParams();

  // recebe e manipula eventos do form
  async function saveOrUpdate(e){

    e.preventDefault();

    const data = {day, description};

    if (dayoff_id === '0') {
      try {
        await api.post('api/v1/dayoffs', data, {});
        navigate('/');
      } catch (error) {
        alert('erro ao salvar');        
      }     
    } else {
      try {
        await api.patch(`api/v1/dayoffs/${dayoff_id}`, data, {});
        navigate('/');
      } catch (error) {
        alert('erro ao atualizar');        
      }      
    }
  }

  // busca um registro especifico na api e seta dados para atualização
  async function loadDayoff(){
    try {
      const response = await api.get(`api/v1/dayoffs/${dayoff_id}`,{});
      setDay(response.data.day);
      setDescription(response.data.description);
    } catch (error) {
      alert('erro ao buscar elemento na api');
      navigate('/');      
    }
  }

  // chama loadDayoff e preenche form
  useEffect(() => {
    if (dayoff_id === '0') {
      return;      
    } else {
      loadDayoff();      
    }
  }, [dayoff_id]);



  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Dayoffs Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-dark" 
        style={{marginBottom: '5px'}} to="/">Home</Link>

        <form data-testid="myform" onSubmit={saveOrUpdate}>

          <div className="form-group">
            <label htmlFor="day">Dia</label>
            <input data-testid="input1" id="day" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Dia" value={day}
            onChange={e => setDay(e.target.value)}></input>
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <input data-testid="input2" id="description" type="text" 
            style={{marginBottom: '20px'}} className="form-control" 
            placeholder="Descrição" value={description}
            onChange={e => setDescription(e.target.value)}></input>
          </div>

          <button data-testid="btnenviar" type="submit" className="btn btn-primary">Enviar</button>

        </form>

      </div>
    </div>

  );

}