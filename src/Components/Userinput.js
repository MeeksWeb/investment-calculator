
const Userinput = ({onChangeInput, inputUser}) => {

  return (
    <div id='user-input'>
        <form className='input-group'>
          <p>
            <label>Initial Investment</label>
            <input type="number" required 
            value={inputUser.initialInvestment}
            // e will represent the newValue
            onChange={(e)=>onChangeInput('initialInvestment', e.target.value)} />
            {/* values inputed usually come out as a string and concatenation occurs instead of addition so to bypass this, add plus sign to newValue in app.js.This converts the string to numbers */}
          </p>
          <p>
            <label>Annual Investment</label>
            <input type="number" required
            value={inputUser.annualInvestment}

            onChange={(e)=>onChangeInput('annualInvestment', e.target.value)} />
            
          </p>
          </form>
          <form className='input-group'>
          <p>
            <label>Expected Return</label>
            <input type="number" required 
            value={inputUser.expectedReturn}
         
            onChange={(e)=>onChangeInput('expectedReturn', e.target.value)} />
          </p>
          <p>
            <label>Duration</label>
            <input type="number" required
            value={inputUser.duration}
     
            onChange={(e)=>onChangeInput('duration', e.target.value)}  />
          </p>
        </form>
    </div>
  )
}

export default Userinput

