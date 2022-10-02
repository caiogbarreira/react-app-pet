import React from 'react'
import { CardForm, Form, Botao, Card, BotaoCancelar } from '../style/styled'
import { IoPaw, IoClose } from 'react-icons/io5'
import { GrClose } from 'react-icons/gr'
import { AiOutlineClose } from 'react-icons/ai'
import noImage from '../imgs/no-image.png'

export default function PetCadastro() {

  const defaultArray = {
    nome: '',
    idade: '',
    raca: '',
    tamanho: '',
    nomeDono: '',
    telefone: '',
    imagem: noImage,
    observacoes: ''
  }
  
  const [pet, setPet] = React.useState(defaultArray)

  const [pets, setPets] = React.useState([])

  function handleChange({ target }) {
    const { name, value } = target
    setPet({ ...pet, [name]: value })
  }
  
  function handleImgChange({target}){
    const {name, files} = target
    const file = files[0]
    setPet({...pet, [name]: URL.createObjectURL(file)})
  }

  function handleSubmit(){
    setPets([...pets, pet])
    setPet(defaultArray)
  }

  return (
    <>
      <CardForm>
        <Form>
          <div>
            <label className="imagem" htmlFor="imagem">
              <div>
                <img src={pet.imagem} alt="Foto do Pet" />
                Clique para alterar a imagem
              </div>
            </label>
            <input type='file' id='imagem' name="imagem" accept="image/png, image/gif, image/jpeg, image/jpg" onChange={(e) => {handleImgChange(e)}}/>
          </div>

          <div>
            <label htmlFor="nome">Nome do Pet</label>
            <input type="text" id="nome" name="nome" placeholder='...' value={pet.nome} onChange={(e) => {handleChange(e)}}/>          
          </div>

          <div className="input-grid">
            <div>
              <label htmlFor="idade">Idade do Pet (em anos)</label>
              <input type="number" id="idade" name="idade" placeholder='...' value={pet.idade} onChange={(e) => {handleChange(e)}}/>          
            </div>

            <div>
              <label htmlFor="tamanho">Tamanho do Pet (em cm)</label>
              <input type="number" id="tamanho" name="tamanho" placeholder='...' value={pet.tamanho} onChange={(e) => {handleChange(e)}}/>          
            </div>

            <div>
              <label htmlFor="raca">Raça do Pet</label>
              <input type="text" id="raca" name="raca" placeholder='...' value={pet.raca} onChange={(e) => {handleChange(e)}}/>          
            </div>
          </div>

          <div>
            <label htmlFor="nomeDono">Nome do Dono</label>
            <input type="text" id="nomeDono" name="nomeDono" placeholder='...' value={pet.nomeDono} onChange={(e) => {handleChange(e)}}/>          
          </div>

          <div>
            <label htmlFor="telefone">Número de Telefone</label>
            <input type="text" id="telefone" name="telefone" placeholder='...' value={pet.telefone} onChange={(e) => {handleChange(e)}}/>          
          </div>
          

          <div>
            <label htmlFor="observacoes">Observações:</label>
            <textarea
              id="observacoes"
              name="observacoes"
              cols="30"
              rows="10"
              placeholder="..."
              value={pet.observacoes}
              onChange={(e) => {handleChange(e)}}
            ></textarea>
          </div>
          <Botao type='submit' onClick={handleSubmit}><IoPaw/> Cadastrar Pet</Botao>
        </Form>
      </CardForm>

      {pets.length === 0 ? <></> : <>
        <hr />
        <h1>Fichas de Pets</h1>
      </>}
      <div className="card-grid">
        {pets.map((pet, index) => {
          return <>
            <Card key={index}>
              <div>
                <img src={pet.imagem} alt="Foto do Pet" />
              </div>
              <div>
                <h2>{pet.nome}</h2>
                <p>
                  <strong>Idade: </strong>
                  {pet.idade} anos
                </p>
                <p>
                  <strong>Tamanho: </strong>
                  {pet.tamanho} cm
                </p>
                <p>
                  <strong>Raça: </strong>
                  {pet.raca}
                </p>
                <p>
                  <strong>Nome do Dono: </strong>
                  {pet.nomeDono}
                </p>
                <p>
                  <strong>Telefone: </strong>
                  {pet.telefone}
                </p>
                <p>
                  <strong>Observações: </strong>
                  {pet.observacoes}
                </p>
              </div>

              <BotaoCancelar onClick={(e) => {
                const newPets = pets.filter((pet, i) => i !== index)
                setPets(newPets)
              }}>Remover</BotaoCancelar>
            </Card>
          </>
        })}
      </div>
    </>
  )
}
