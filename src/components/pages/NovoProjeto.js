import {useNavigate} from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from'./NovoProjeto.module.css'
function NovoProjeto (){

    const history = useNavigate() 

    function createPost(project){
        project.cost = 0
        project.service= []
        fetch("http://localhost:5000/projects", {
        method:"POST", 
        headers: {
            'Content-type': "applicantion/json",
        },
        body:JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            history("/projects", {message: "Projeto criado com sucesso"})
            //redirect
        }
        ).catch(err => console.log(err))
    }

    return (
        <div className={styles.novoprojeto_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços </p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}
export default NovoProjeto