import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';

export default function Dayoffs(){

  const [my_dayoffs, setDayoffs] = useState([]);
  const navigate = useNavigate();

  // read, busca todos os registros da api
  useEffect(() => {
    api.get('api/v1/dayoffs', {})
    .then(response => {setDayoffs(response.data)})
  }, []);

  // update, navega para NewUpdate
  async function updateDayoff(id){
    try {
      navigate(`/newupdate/${id}`);
    } catch (error) {
      alert('Erro ao acessar NewUpdate');      
    }
  }

  // delete, exclui um registro na api
  async function deleteDayoff(id){
    try {
      await api.delete(`api/v1/dayoffs/${id}`,{});
      setDayoffs(my_dayoffs.filter(dayoff => dayoff.id !== id));
    } catch (error) {
      alert('Erro ao excluir elemento');      
    }
  }

  return(

    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Dayoffs Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-success" 
        style={{marginBottom: '10px'}} to="/newupdate/0">Novo</Link>

        <table data-testid="mytable" className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Dia</th>
              <th scope="col">Descrição</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {my_dayoffs.map(dayoff => (
              <tr key={dayoff.id}>
                <th scope="row">{dayoff.id}</th>
                <td>{dayoff.day}</td>
                <td>{dayoff.description}</td>
                <td>

                  <button data-testid="mybtn1" type="button"
                  className="btn btn-outline-info" style={{margin: '2px'}}
                  onClick={() => updateDayoff(dayoff.id)}>Editar</button>

                  <button data-testid="mybtn2" type="button"
                  className="btn btn-outline-danger" style={{margin: '2px'}}
                  onClick={() => deleteDayoff(dayoff.id)}>Excluir</button>

                </td>
              </tr>
            ))}
            
          </tbody>
        </table>

      </div>
    </div>

  );

}

