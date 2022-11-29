import React from 'react'
import './style.css'

const TeamHeader = () => {
  return (
    <div>
        <h1 style={{marginTop:200}}  className='header'>Despre Interact Transilvania</h1>
        <p className='description'>Suntem un club de voluntariat adresat tinerilor dornici de a găsi soluții la problemele comunității noastre, prin intermediul propriilor pasiuni ce se invart in jurul artei si culturii</p>

        <div style={{marginRight:8+"%", marginLeft:8+"%", marginBottom:150}}>
          <h2 className='field' >Misiunea noastra:</h2>
          <h3 className='field-desc'>~Dezvoltarea laturii creative și dezinvolte a tinerilor prin intermediul voluntariatului
          <br />~Popularizarea culturii ca formă de divertisment
          <br />~Prezentarea artei într-un mod cât mai accesibil
          <br />~Exprimarea artistică și sensibilizarea culturală
          <br />~Aprecierea diferențelor culturale</h3>
          <h2 className='field' >Viziunea noastra:</h2>
          <h3 className='field-desc'>Ne propunem îmbunătățirea relației actuale a comunității cu arta și totodată dorim să promovăm creativitatea, spiritul artistic, spiritul de echipă, sinceritatea, integritatea și leadership-ul.</h3>
        </div>

        <h1 className='header'>Echipa Interact Transilvania</h1>

    </div>
  )
}

export default TeamHeader