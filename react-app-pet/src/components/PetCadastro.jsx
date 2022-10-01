import React from 'react'
import { CardForm, Form, Botao } from '../style/styled'
import { IoPaw } from 'react-icons/io5'
import { GrFormUpload } from 'react-icons/gr'
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
            <label className="imagem" for="imagem">
              <div>
                <img src={pet.imagem} alt="Foto do Pet" />
                Clique para alterar a imagem
              </div>
            </label>
            <input type='file' id='imagem' name="imagem" accept="image/png, image/gif, image/jpeg, image/jpg" onChange={(e) => {handleImgChange(e)}}/>
          </div>

          <div>
            <label for="nomeDono">Nome do Dono</label>
            <input type="text" id="nomeDono" name="nomeDono" placeholder='Jubileu' value={pet.nomeDono} onChange={(e) => {handleChange(e)}}/>          
          </div>

          <div>
            <label for="telefone">Número de Telefone</label>
            <input type="text" id="telefone" name="telefone" placeholder='(11) 99123-4567' value={pet.telefone} onChange={(e) => {handleChange(e)}}/>          
          </div>

          <div>
            <label for="nome">Nome do Pet</label>
            <input type="text" id="nome" name="nome" placeholder='Catchorro' value={pet.nome} onChange={(e) => {handleChange(e)}}/>          
          </div>

          <div className="input-grid">
            <div>
              <label for="idade">Idade do Pet (em anos)</label>
              <input type="number" id="idade" name="idade" placeholder='0' value={pet.idade} onChange={(e) => {handleChange(e)}}/>          
            </div>

            <div>
              <label for="tamanho">Tamanho do Pet (em cm)</label>
              <input type="number" id="tamanho" name="tamanho" placeholder='2' value={pet.tamanho} onChange={(e) => {handleChange(e)}}/>          
            </div>

            <div>
              <label for="raca">Raça do Pet</label>
              <input type="text" id="raca" name="raca" placeholder='Qualquer um' value={pet.raca} onChange={(e) => {handleChange(e)}}/>          
            </div>
          </div>

          

          <div>
            <label for="observacoes">Descrição:</label>
            <textarea
              id="observacoes"
              name="observacoes"
              cols="30"
              rows="10"
              placeholder="Observação"
              value={pet.observacoes}
              onChange={(e) => {handleChange(e)}}
            ></textarea>
          </div>
          <Botao type='submit' onClick={handleSubmit}><IoPaw/> Cadastrar Pet</Botao>
        </Form>
      </CardForm>
    </>
  )
}
