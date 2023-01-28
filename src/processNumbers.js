import navbar from './navbar.css'
import logo from './assets/logo.png'
import {FaList} from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'
import {FaBattleNet} from 'react-icons/fa'
import { useState,useEffect,flushSync,useRef} from 'react';
import {countryPhoneCodes} from './countryPhoneCodes';
import './processNumbers.css';




function ProcessAllNums(){
	
var textNums = `08039418765,07039418765,09039418765,01039414765,07047418765,09039395765,
08039418765,07039418765,09039418765,01039414765,07047418765,09039395765,08039418765,
07039418765,09039418765,01039414765,07047418765,09039395765,08039418765,07039418765,
09039418765,01039414765,07047418765,09039395765`

const phoneNumberInputField = useRef()

const phoneNumberResultField = useRef()

const covertingNumsInfo = useRef()
	
const [phonenumber,setPhoneNumbers] = useState([])

const [numberCode,setNumberCode] = useState('')

const [numberCodeCountry,setNumberCodeCountry] = useState('Nigeria')

const [convertedPhoneNumbers,setConvertedPhoneNumbers] = useState([])

const [convertingNums,setConvertingNums] = useState()

const [done,setDone] = useState(false)


const addPhoneNumbersToSys = (e)=>{

if(phoneNumberInputField.current.value.match(/[A-Z]/i)){
covertingNumsInfo.current.style.color = 'red'
setConvertingNums(`Warning! Phone Numbers Contain Alphabets`)
	
}
else{
setConvertingNums('')		
}

setPhoneNumbers(e.target.value.split(','))	

}

const clear = ()=>{
phoneNumberInputField.current.value = ''
	
}



const convertNumber = ()=>{

var countryCodeErrorMsg = ''

if(numberCode === '' ){
countryCodeErrorMsg = 'country code'
}

var andText = ''

if(phoneNumberInputField.current.value === ''  && numberCode === '' ){
andText = 'and'
}

var emptyPhoneNumberErrorMsg = ''

if(phoneNumberInputField.current.value  === '' ){
emptyPhoneNumberErrorMsg = 'phone numbers'
}
	
if(phoneNumberInputField.current.value !== ''  && numberCode !== ''){
covertingNumsInfo.current.style.color = 'black'
phoneNumberInputField.current.style.border = '1px solid black'
setConvertingNums(`Converting your numbers... Please wait`)


const doConvertNum = phonenumber.map((pn)=>{ 


var removeFirstChar = pn.trim().slice(1)
var composeNewPhoneNumber = numberCode +  removeFirstChar

return composeNewPhoneNumber
}
)
//console.log(doConvertNum)
setConvertedPhoneNumbers([...doConvertNum])	
setConvertingNums(`Coversion Of Phone Numbers Was Successful`)
}

else{
 
setConvertingNums(`Please add ${emptyPhoneNumberErrorMsg} ${andText} ${countryCodeErrorMsg}`)	

covertingNumsInfo.current.style.color = 'red'
phoneNumberInputField.current.style.border = '1px solid red'
}

setDone(true)
}


useEffect(()=>{
phoneNumberResultField.current.value = convertedPhoneNumbers	
	
},[convertedPhoneNumbers])


const download = (event)=>{
event.preventDefault()
	
const url = window.URL.createObjectURL(new Blob([phoneNumberResultField.current.value]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'converted-phone-numbers.txt'); //or any other extension
      document.body.appendChild(link);
      link.click();	
}

const setCountryPhoneCode = (e)=>{
setNumberCode(e.target.value.split(' ')[0])	
setNumberCodeCountry(e.target.value.slice(e.target.value.indexOf(' ')))	
done && setDone(false)	
}




return(
<>

<div className="AppCointainer" >
<div  ref = {covertingNumsInfo}  style={{height:'3.5rem',display:'flex',alignItems:'center',justifyContent:'center'}}  ><span>{convertingNums}</span></div>
<form>
<div>
<textarea onChange = {(e)=> addPhoneNumbersToSys(e)} placeholder = "Paste phone numbers here"   ref={phoneNumberInputField}  class="block p-2.5 w-full h-64 text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
</div>
<div  className="AppButtons">


<div className="SelectOptions" >
<select class="form-select appearance-none
      block
	  w-full
	  h-20
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
	  shadow
	
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"  onChange = {(e)=> setCountryPhoneCode(e)}>
        <option selected   value=''> Select Country Phone Code</option>
		{countryPhoneCodes.map((pc)=>
		<option  value={`+${pc.code} ${pc.country}`}>{`+${pc.code}`}{' '}{pc.country}</option>
		)
		}
     
        
    </select>

</div>
<div className="ProcessButtons" >
<div className="Convert">
<button type = 'button' onClick = {convertNumber} class="bg-white h-20 w-full hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Convert Numbers</button>
</div>
<div className="Clear">
<button type = 'button' onClick = {clear} class="bg-white h-20 hover:bg-gray-100 w-full text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Clear</button>
</div>
</div>
</div>

</form>


	

<div style = {{display:convertedPhoneNumbers.length < 1 ? 'none' : 'block'}} >
<div  class="flex justify-center m-3 h-auto"> <span style = {{display: done? 'block' : 'none',textAlign:'center'}}> {convertedPhoneNumbers.length} {' '} Phone {' '}   {convertedPhoneNumbers.length < 2 ? ' Number' :' Numbers'  } {''} {convertedPhoneNumbers.length < 2 ? ' Was' :' Were'} {' '}  Converted To{' '}{numberCode}{' - '}{numberCodeCountry} Format </span> </div>
<form>
<div>
<textarea   ref={phoneNumberResultField}  class="block p-2.5 w-full text-sm text-gray-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/></div>
<div>
<div class="flex justify-center">
<button type = 'button' class="bg-white hover:bg-gray-100 m-1.5  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex items-center" onClick = {download}>
 Download
</button>

<button type = 'button' onClick={() =>  navigator.clipboard.writeText(phoneNumberResultField.current.value)}  class = "bg-white hover:bg-gray-100 m-1.5  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >
Copy
</button>
</div>
</div>
</form>
</div>
</div>

</>
)}

export default ProcessAllNums;