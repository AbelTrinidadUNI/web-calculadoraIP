import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import InputBinary from '../components/inputBinary';
import logoGH from "../public/gh-logo.png";

export default function Home() {
  const [radioSelect, setRadioSelect] = useState(true);

  const [octeto1, setOcteto1] = useState({ b0: 0, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0, b6: 0, b7: 0 });
  const [octeto2, setOcteto2] = useState({ b0: 0, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0, b6: 0, b7: 0 });
  const [octeto3, setOcteto3] = useState({ b0: 0, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0, b6: 0, b7: 0 });
  const [octeto4, setOcteto4] = useState({ b0: 0, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0, b6: 0, b7: 0 });

  const [octeto1Mask, setOcteto1Mask] = useState({ b0: 0, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0, b6: 0, b7: 0 });
  const [octeto2Mask, setOcteto2Mask] = useState({ b0: 0, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0, b6: 0, b7: 0 });
  const [octeto3Mask, setOcteto3Mask] = useState({ b0: 0, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0, b6: 0, b7: 0 });
  const [octeto4Mask, setOcteto4Mask] = useState({ b0: 0, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0, b6: 0, b7: 0 });

  const [octeto1MaskNOT, setOcteto1MaskNOT] = useState({ b0: 0, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0, b6: 0, b7: 0 });
  const [octeto2MaskNOT, setOcteto2MaskNOT] = useState({ b0: 0, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0, b6: 0, b7: 0 });
  const [octeto3MaskNOT, setOcteto3MaskNOT] = useState({ b0: 0, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0, b6: 0, b7: 0 });
  const [octeto4MaskNOT, setOcteto4MaskNOT] = useState({ b0: 0, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0, b6: 0, b7: 0 });



  const operarOctetosAND = (oct1, oct2) => {
    const octResult = { b0: 0, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0, b6: 0, b7: 0 };

    octResult.b0 = oct1.b0 & oct2.b0;
    octResult.b1 = oct1.b1 & oct2.b1;
    octResult.b2 = oct1.b2 & oct2.b2;
    octResult.b3 = oct1.b3 & oct2.b3;
    octResult.b4 = oct1.b4 & oct2.b4;
    octResult.b5 = oct1.b5 & oct2.b5;
    octResult.b6 = oct1.b6 & oct2.b6;
    octResult.b7 = oct1.b7 & oct2.b7;

    return octResult;
  }

  const operarOctetosOR = (oct1, broadcast) => {
    const octResult = { b0: 0, b1: 0, b2: 0, b3: 0, b4: 0, b5: 0, b6: 0, b7: 0 };

    octResult.b0 = oct1.b0 | broadcast.b0;
    octResult.b1 = oct1.b1 | broadcast.b1;
    octResult.b2 = oct1.b2 | broadcast.b2;
    octResult.b3 = oct1.b3 | broadcast.b3;
    octResult.b4 = oct1.b4 | broadcast.b4;
    octResult.b5 = oct1.b5 | broadcast.b5;
    octResult.b6 = oct1.b6 | broadcast.b6;
    octResult.b7 = oct1.b7 | broadcast.b7;

    return octResult;
  }


  const [octeto1RestAND, setOcteto1RestAND] = useState(operarOctetosAND(octeto1Mask, octeto1Mask));
  const [octeto2RestAND, setOcteto2RestAND] = useState(operarOctetosAND(octeto2Mask, octeto2Mask));
  const [octeto3RestAND, setOcteto3RestAND] = useState(operarOctetosAND(octeto3Mask, octeto3Mask));
  const [octeto4RestAND, setOcteto4RestAND] = useState(operarOctetosAND(octeto4Mask, octeto4Mask));

  /*   
  const [octeto1RestOR, setOcteto1RestOR] = useState(operarOctetosAND(octeto1Mask, octeto1Mask));
  const [octeto2RestOR, setOcteto2RestOR] = useState(operarOctetosAND(octeto2Mask, octeto2Mask));
  const [octeto3RestOR, setOcteto3RestOR] = useState(operarOctetosAND(octeto3Mask, octeto3Mask));
  const [octeto4RestOR, setOcteto4RestOR] = useState(operarOctetosAND(octeto4Mask, octeto4Mask)); 
  */

  useEffect(() => {
    setOcteto1MaskNOT({ b0: octeto1Mask.b0 === 1 ? 0 : 1, b1: octeto1Mask.b1 === 1 ? 0 : 1, b2: octeto1Mask.b2 === 1 ? 0 : 1, b3: octeto1Mask.b3 === 1 ? 0 : 1, b4: octeto1Mask.b4 === 1 ? 0 : 1, b5: octeto1Mask.b5 === 1 ? 0 : 1, b6: octeto1Mask.b6 === 1 ? 0 : 1, b7: octeto1Mask.b7 === 1 ? 0 : 1 });
    setOcteto2MaskNOT({ b0: octeto2Mask.b0 === 1 ? 0 : 1, b1: octeto2Mask.b1 === 1 ? 0 : 1, b2: octeto2Mask.b2 === 1 ? 0 : 1, b3: octeto2Mask.b3 === 1 ? 0 : 1, b4: octeto2Mask.b4 === 1 ? 0 : 1, b5: octeto2Mask.b5 === 1 ? 0 : 1, b6: octeto2Mask.b6 === 1 ? 0 : 1, b7: octeto2Mask.b7 === 1 ? 0 : 1 });
    setOcteto3MaskNOT({ b0: octeto3Mask.b0 === 1 ? 0 : 1, b1: octeto3Mask.b1 === 1 ? 0 : 1, b2: octeto3Mask.b2 === 1 ? 0 : 1, b3: octeto3Mask.b3 === 1 ? 0 : 1, b4: octeto3Mask.b4 === 1 ? 0 : 1, b5: octeto3Mask.b5 === 1 ? 0 : 1, b6: octeto3Mask.b6 === 1 ? 0 : 1, b7: octeto3Mask.b7 === 1 ? 0 : 1 });
    setOcteto4MaskNOT({ b0: octeto4Mask.b0 === 1 ? 0 : 1, b1: octeto4Mask.b1 === 1 ? 0 : 1, b2: octeto4Mask.b2 === 1 ? 0 : 1, b3: octeto4Mask.b3 === 1 ? 0 : 1, b4: octeto4Mask.b4 === 1 ? 0 : 1, b5: octeto4Mask.b5 === 1 ? 0 : 1, b6: octeto4Mask.b6 === 1 ? 0 : 1, b7: octeto4Mask.b7 === 1 ? 0 : 1 });
    console.log("Se actualizo")
  }, [octeto1Mask, octeto2Mask, octeto3Mask, octeto4Mask]);



  useEffect(() => {
    console.log(radioSelect);
  }, [radioSelect])


  const [octetoDec1, setOctetoDec1] = useState(0);
  const [octetoDec2, setOctetoDec2] = useState(0);
  const [octetoDec3, setOctetoDec3] = useState(0);
  const [octetoDec4, setOctetoDec4] = useState(0);
  const [maskDec, setMaskDec] = useState(0);

  const cargarOctMask = (setOctMask, arrValues) => {
    setOctMask({ b0: arrValues[0], b1: arrValues[1], b2: arrValues[2], b3: arrValues[3], b4: arrValues[4], b5: arrValues[5], b6: arrValues[6], b7: arrValues[7] });
  }



  const completarOcteto = (cadena) => {
    const arreglo = cadena.split("");
    if (arreglo.length < 8) {
      while (arreglo.length < 8) {
        arreglo.splice(0, 0, "0")
      }
      return arreglo.map(v => parseInt(v));
    }
    return arreglo.map(v => parseInt(v));
  }




  useEffect(() => {
    function convertToBinaryAux(number) {
      let num = number;
      let binary = (num % 2).toString();
      for (; num > 1;) {
        num = parseInt(num / 2);
        binary = (num % 2) + (binary);
      }
      console.log(binary);
      return binary;
    }

    const convertToBin = (cadena) => {
      try {
        const num = parseInt(cadena);
        const bins = convertToBinaryAux(num);
        return completarOcteto(bins);

      } catch (error) {
        console.log("Error")
      }
      return [];
    }

    const actualizarBinarios = (oct, numOct) => {
      const bin = convertToBin(oct);

      if (bin.length === 8) {
        switch (numOct) {
          case 1:
            setOcteto1({ b0: bin[0], b1: bin[1], b2: bin[2], b3: bin[3], b4: bin[4], b5: bin[5], b6: bin[6], b7: bin[7] });
            break;
          case 2:
            setOcteto2({ b0: bin[0], b1: bin[1], b2: bin[2], b3: bin[3], b4: bin[4], b5: bin[5], b6: bin[6], b7: bin[7] });
            break;
          case 3:
            setOcteto3({ b0: bin[0], b1: bin[1], b2: bin[2], b3: bin[3], b4: bin[4], b5: bin[5], b6: bin[6], b7: bin[7] });
            break;
          case 4:
            setOcteto4({ b0: bin[0], b1: bin[1], b2: bin[2], b3: bin[3], b4: bin[4], b5: bin[5], b6: bin[6], b7: bin[7] });
            break;
        }
      }
    }

    const crearMask = () => {
      try {
        const arr = [];
        for (let i = 0; i < 32; i++) {
          if (i < maskDec) {
            arr.push(1);
          } else {
            arr.push(0);
          }
        }

        cargarOctMask(setOcteto1Mask, arr.filter((v, i) => i >= 0 && i < 8));
        cargarOctMask(setOcteto2Mask, arr.filter((v, i) => i >= 8 && i < 16));
        cargarOctMask(setOcteto3Mask, arr.filter((v, i) => i >= 16 && i < 24));
        cargarOctMask(setOcteto4Mask, arr.filter((v, i) => i >= 24 && i < 32));
      } catch (error) {

      }

    }

    actualizarBinarios(octetoDec1, 1);
    actualizarBinarios(octetoDec2, 2);
    actualizarBinarios(octetoDec3, 3);
    actualizarBinarios(octetoDec4, 4);

    crearMask();
  }, [octetoDec1, octetoDec2, octetoDec3, octetoDec4, maskDec])


  return <>
    <h1>Calculadora IP</h1>

    <div className='logoghcontainer'>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <Image src={logoGH} alt="gh-logo" id='logogh' width={50} height={50} />
      </a>
    </div>
    <div id='containerComplet'>
      <from>
        <div className='contenedorForm'>
          <div className='secciones'>
            <div>
              <input type="radio" name='formaIps' defaultChecked onChange={() => setRadioSelect(true)} />
              <label htmlFor="">Numeros: </label>
            </div>


            <div className='contenedorinputs octetosContainer'>
              <div className="lbInputs">
                <label htmlFor="">Network: </label>
              </div>
              <br />
              <input type="number" min={0} max={255} value={octetoDec1} onChange={(e) => { setOctetoDec1(e.target.value) }} disabled={!radioSelect} />
              .<input type="number" min={0} max={255} value={octetoDec2} onChange={(e) => { setOctetoDec2(e.target.value) }} disabled={!radioSelect} />
              .<input type="number" min={0} max={255} value={octetoDec3} onChange={(e) => { setOctetoDec3(e.target.value) }} disabled={!radioSelect} />
              .<input type="number" min={0} max={255} value={octetoDec4} onChange={(e) => { setOctetoDec4(e.target.value) }} disabled={!radioSelect} />
              /<input type="number" min={0} max={30} value={maskDec} onChange={(e) => { setMaskDec(e.target.value) }} disabled={!radioSelect} />
            </div>

          </div>

          {/* <hr className='lineaInputsRadios'/>*/}
          <div className='secciones'>
            <input type="radio" name="formaIps" id="" onChange={() => setRadioSelect(false)} />
            <label htmlFor="">Binarios: </label>

            <br />

            <div className='contenedorinputs'>
              <div className="lbInputs">
                <label htmlFor="">Network: </label>
              </div>
              <div className='binaryOctetosContainer'>
                <InputBinary binarios={octeto1} setOcteto={setOcteto1} editable={!radioSelect} /> .
                <InputBinary binarios={octeto2} setOcteto={setOcteto2} editable={!radioSelect} /> .
                <InputBinary binarios={octeto3} setOcteto={setOcteto3} editable={!radioSelect} /> .
                <InputBinary binarios={octeto4} setOcteto={setOcteto4} editable={!radioSelect} />
              </div>
            </div>
            <div className='contenedorinputs'>
              <div className="lbInputs">
                <label htmlFor="">Mask: </label>
              </div>
              <div className='binaryOctetosContainer'>
                <InputBinary binarios={octeto1Mask} setOcteto={setOcteto1Mask} editable={!radioSelect} /> .
                <InputBinary binarios={octeto2Mask} setOcteto={setOcteto2Mask} editable={!radioSelect} /> .
                <InputBinary binarios={octeto3Mask} setOcteto={setOcteto3Mask} editable={!radioSelect} /> .
                <InputBinary binarios={octeto4Mask} setOcteto={setOcteto4Mask} editable={!radioSelect} />
              </div>
            </div>
          </div>

          {/* <div id='btCalcularContenedor'>
          <button>Calclular</button>
        </div> */}
        </div>
      </from>

      <div className='lineaFormResult'>

        <hr />
      </div>


      <div id='resultados'>
        <h3>Network</h3>
        <div className='contenedorinputs'>
          <label className="lbInputs" htmlFor="">IP: </label>
          <div className='binaryOctetosContainer'>
            <InputBinary binarios={octeto1} setOcteto={setOcteto1} editable={false} /> .
            <InputBinary binarios={octeto2} setOcteto={setOcteto2} editable={false} /> .
            <InputBinary binarios={octeto3} setOcteto={setOcteto3} editable={false} /> .
            <InputBinary binarios={octeto4} setOcteto={setOcteto4} editable={false} />
          </div>
        </div>
        <div className='signoOperacion'>
          &
        </div>
        <div className='contenedorinputs'>
          <label className="lbInputs" htmlFor="" >Mask: </label>
          <div className='binaryOctetosContainer'>
            <InputBinary binarios={octeto1Mask} setOcteto={setOcteto1Mask} editable={false} /> .
            <InputBinary binarios={octeto2Mask} setOcteto={setOcteto2Mask} editable={false} /> .
            <InputBinary binarios={octeto3Mask} setOcteto={setOcteto3Mask} editable={false} /> .
            <InputBinary binarios={octeto4Mask} setOcteto={setOcteto4Mask} editable={false} />
          </div>

        </div>

        <div className='lineaResultado'>
          <hr />
        </div>
        <div className='contenedorinputs'>

          <label className="lbInputs" htmlFor="" >Result: </label>
          <div className='binaryOctetosContainer'>
            <InputBinary binarios={operarOctetosAND(octeto1, octeto1Mask)} setOcteto={setOcteto1RestAND} editable={false} /> .
            <InputBinary binarios={operarOctetosAND(octeto2, octeto2Mask)} setOcteto={setOcteto2RestAND} editable={false} /> .
            <InputBinary binarios={operarOctetosAND(octeto3, octeto3Mask)} setOcteto={setOcteto3RestAND} editable={false} /> .
            <InputBinary binarios={operarOctetosAND(octeto4, octeto4Mask)} setOcteto={setOcteto4RestAND} editable={false} />
          </div>

        </div>


        <h3>Broadcast</h3>
        <div className='contenedorinputs'>
          <label className="lbInputs" htmlFor="">IP: </label>
          <div className='binaryOctetosContainer'>
            <InputBinary binarios={octeto1} setOcteto={setOcteto1} editable={false} /> .
            <InputBinary binarios={octeto2} setOcteto={setOcteto2} editable={false} /> .
            <InputBinary binarios={octeto3} setOcteto={setOcteto3} editable={false} /> .
            <InputBinary binarios={octeto4} setOcteto={setOcteto4} editable={false} />
          </div>
        </div>
        <div className='signoOperacion'>
          |
        </div>
        <div className='contenedorinputs'>
          <label className="lbInputs" htmlFor="" >Mask: </label>
          <div className='binaryOctetosContainer'>
            <InputBinary binarios={octeto1MaskNOT} setOcteto={setOcteto1MaskNOT} editable={false} /> .
            <InputBinary binarios={octeto2MaskNOT} setOcteto={setOcteto2MaskNOT} editable={false} /> .
            <InputBinary binarios={octeto3MaskNOT} setOcteto={setOcteto3MaskNOT} editable={false} /> .
            <InputBinary binarios={octeto4MaskNOT} setOcteto={setOcteto4MaskNOT} editable={false} />
          </div>

        </div>

        <div className='lineaResultado'>
          <hr />
        </div>
        <div className='contenedorinputs'>

          <label className="lbInputs" htmlFor="" >Result: </label>
          <div className='binaryOctetosContainer'>
            <InputBinary binarios={operarOctetosOR(octeto1, octeto1MaskNOT)} setOcteto={setOcteto1Mask} editable={false} /> .
            <InputBinary binarios={operarOctetosOR(octeto2, octeto2MaskNOT)} setOcteto={setOcteto2Mask} editable={false} /> .
            <InputBinary binarios={operarOctetosOR(octeto3, octeto3MaskNOT)} setOcteto={setOcteto3Mask} editable={false} /> .
            <InputBinary binarios={operarOctetosOR(octeto4, octeto4MaskNOT)} setOcteto={setOcteto4Mask} editable={false} />
          </div>

        </div>

      </div>
      <div>
      </div>

    </div>
  </>
}
