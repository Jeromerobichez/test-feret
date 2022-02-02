import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import upImage from './images/popin-img-up.png'
import downImage from './images/down-img.png'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [wineName, setWineName] = useState('')
  const [appelation, setAppelation] = useState('')
  const [color, setColor] = useState('')
  const [sucrosite, setSucrosite] = useState('')
  const [premierVin, setPremierVin] = useState(false)
  const [secondVin, setSecondVin] = useState(false)
  const [other, setOther] = useState(true)


  const handleModalClick = () => {
    setShowModal(!showModal)
  }
  const handleChange = (e) => {
    setWineName(e.target.value)
  }
  const handleChangeAppelation = (e) => {
    setAppelation(e.target.value)
  }
const handleChangeColor = (e) => {
  setColor(e.target.value)
} 
const handleSucrositeChange = (e) => {
  setSucrosite(e.target.value)
}
  const handleCheckPremier = () => {
    setPremierVin(!premierVin)
    setSecondVin(false)
    setOther(false)

  }
  const handleCheckSecond = () => {
    setSecondVin(!secondVin)
    setPremierVin(false)
    setOther(false)

  }
  const handleCheckOther = () => {
    setOther(!other)
    setPremierVin(false)
    setSecondVin(false)
  }

  return (
    <div className="App">
      <h1
        onClick={handleModalClick}
      >
        Click here to see enter your wine's infos</h1>
      <Modal
        show={showModal}
        onHide={handleModalClick}
        className="modal-wine"
      >
        <div className="modal-wine-div">
          <div className="up-image">
            <img src={upImage}
              width={217}
              alt='illustration-ajout-vin' />
            <div className='up-title'>Ajouter un vin</div>
          </div>
          <div className='sub-title'>
            <div> Ajouter un vin vous permet de renseigner d'une manière très générale les informations immuables d'un millésime à l'autre. Vous pourrez ensuite ajouter ses millésimes avec un niveau de précision beaucoup plus élevé. </div>
          </div>
          <div className='wine-form-div'>
            <form className='wine-form'>
              <label>
                <legend className='form-legend'>Nom du vin :</legend>
                <input type="text"
                  name="name"
                  value={wineName}
                  onChange={handleChange}
                  maxLength={25} />
              </label>

              <label className='field-form'>
              <legend className='form-legend'>Appelation :</legend>
{color === 'rouge' ? 
  <select type="text"
                  name="appelations"
                  onChange={handleChangeAppelation} >
                  <option value="Bordeaux">Bordeaux</option>
                  <option selected value="Sainte-Foy Côtes de Bordeaux">Sainte-Foy Côtes de Bordeaux</option>
                  <option selected value="blank"> </option>
                </select> :
                <select type="text"
                name="appelations"
                onChange={handleChangeAppelation} >
                <option value="Bordeaux">Bordeaux</option>
                <option value="Sauternes">Sauternes</option>
                <option selected value="Sainte-Foy Côtes de Bordeaux">Sainte-Foy Côtes de Bordeaux</option>
                <option selected value="blank"> </option>
              </select>}
              </label>


              <label className='field-form'>
                <legend className='form-legend'>Couleur :</legend>
                {appelation === "Sauternes" ?
                  <select type="text"
                    name="couleur"
                    onChange={handleChangeColor}
                  >

                    <option value="rosé">Rosé</option>
                    <option value="blanc">blanc</option>
                    <option selected value="blank"> </option>
                  </select> :
                  <select type="text"
                    name="couleur"
                    onChange={handleChangeColor}
                  >
                    <option value="rouge">Rouge</option>
                    <option value="rosé">Rosé</option>
                    <option value="blanc">blanc</option>
                    <option selected value="blank"> </option>
                  </select>
                }
              </label>

              <label className='field-form'>
                <legend className='form-legend'>Type :</legend>
                <select type="text"
                  name="type"
                >
                  <option value="tranquille">Tranquille</option>
                  <option value="effervescent">Effervescent</option>
                  <option selected value="blank"> </option>


                </select>
              </label>

              <label className='field-form'>
                <legend className='form-legend'>Sucrosité :</legend>
                {appelation === "Bordeaux" ?
                  <select type="text"
                    name="sucrosite"
                    onChange={handleSucrositeChange}
                  >
                    <option value="sec">Sec</option>
                    <option value="moelleux">Moelleux</option>
                    <option selected value="blank"> </option>

                  </select> :
                  <select type="text"
                    name="sucrosite"
                    onChange={handleSucrositeChange}
                  >
                    <option value="sec">Sec</option>
                    <option value="moelleux">Moelleux</option>
                    <option value="liquoreux">Liquoreux</option>
                    <option selected value="blank"> </option>

                  </select>
                }

              </label>
              <div className='wine-ranking mt-2'>
                <div className='h3-div'>Rang du vin</div>
                <input type="radio" id="premier" name="premier" value="Premier vin"
                  checked={premierVin}
                  onClick={handleCheckPremier}
                />
                <label for="premier">Premier vin</label>
                <input type="radio" id="Second" name="Second" value="Second vin"
                  checked={secondVin}
                  onClick={handleCheckSecond} />
                <label for="Second">Second vin</label>
                <input type="radio"
                  id="Autre vin"
                  name="Autre vin"
                  value="Autre  vin"
                  checked={other}
                  onClick={handleCheckOther} />
                <label for="Autre vin">Autre vin</label>
              </div>
<div className='down-part d-flex flex-row justify-content-between'>
  <div className='down-img'>
    <img src={downImage}/>
  </div>
  <div>
    <div className='h3-div warning'>Après cette étape, vous ne pourrez plus modifier ces informations.</div>
    {
((appelation !== '') && (color  !== '') && (wineName !== '') && (sucrosite !== '')) ?
<input type="submit" value="Envoyer" id="submit-button" disabled={false} /> :
<input type="submit" value="Envoyer" id="submit-button" disabled={true} />
    }
  </div>
</div>

  
            </form>
          </div>

        </div>
      </Modal>
    </div>
  );
}

export default App;
